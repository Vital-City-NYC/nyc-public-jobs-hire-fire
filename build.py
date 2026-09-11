#!/usr/bin/env python3
"""Build data.js and methodology.html for the hire/fire flowcharts.

Inputs
  research/<job>.json   one per job, produced by source research (nodes, sources, caveats)
  research/url_fixes.json  section-specific URLs verified by hand, keyed by job and source id
  editorial.json        page copy, per-job labels, chart headlines, stats strip, compare rows

Outputs
  data.js               window.HIREFIRE = {...}, read by index.html
  methodology.html      sourcing and verification notes, generated from the same data
"""
import json, os, html

HERE = os.path.dirname(os.path.abspath(__file__))
ORDER = ['teacher', 'dc37', 'police', 'correction', 'sanitation']


def load(p):
    with open(os.path.join(HERE, p)) as f:
        return json.load(f)


def main():
    ed = load('editorial.json')
    fixes = load('research/url_fixes.json')
    jobs, order = {}, []
    for k in ORDER:
        path = os.path.join(HERE, 'research', k + '.json')
        if not os.path.exists(path) or k not in ed['jobs']:
            continue
        r = load(path)
        e = ed['jobs'][k]
        for s in r['sources']:
            fx = fixes.get(k, {}).get(str(s['id']))
            if fx:
                s['url'] = fx
        ids = {s['id'] for s in r['sources']}

        def check(nodes, where):
            for n in nodes:
                for i in n.get('src', []):
                    if i not in ids:
                        raise SystemExit(f'{k} {where}: cites missing source {i}')
                for ln in n.get('lanes', []):
                    check(ln['nodes'], where)
        check(r['hiring']['nodes'], 'hiring')
        check(r['firing']['nodes'], 'firing')

        # End-box tone: hiring ends are "hired" unless they rule someone out; firing ends
        # are "job ends" unless they describe an appeal or review. A clock that says there is
        # no clock carries no clock tag.
        import re as _re

        def tone(nodes, proc):
            for n in nodes:
                if n.get('type') == 'end' and 'tone' not in n:
                    t = n.get('title', '')
                    if proc == 'hiring':
                        n['tone'] = 'good' if _re.search(r'permanent|tenure|tenured|hired|appoint', t, _re.I) else 'bad'
                    else:
                        n['tone'] = 'neutral' if _re.search(r'court|appeal|review|protection|stands', t, _re.I) else 'bad'
                if _re.match(r'\s*no (statutory|fixed|general|published)', n.get('time', '') or '', _re.I):
                    n['time_basis'] = None
                for ln in n.get('lanes', []):
                    tone(ln['nodes'], proc)
        tone(r['hiring']['nodes'], 'hiring')
        tone(r['firing']['nodes'], 'firing')
        for s in r['sources']:
            if s.get('fetched_ok') is False and s.get('quote') and not s.get('note'):
                s['note'], s['quote'] = s['quote'], ''

        jobs[k] = {
            'short': e['short'],
            'btn': e.get('btn', e['short']),
            'long': e['long'],
            'stats': e['stats'],
            'hiring': {**e['hiring'], 'nodes': r['hiring']['nodes'],
                       'end_to_end': r['hiring'].get('end_to_end')},
            'firing': {**e['firing'], 'nodes': r['firing']['nodes'],
                       'end_to_end': r['firing'].get('end_to_end'),
                       'aside': r['firing'].get('aside')},
            'sources': [{x: s.get(x) for x in ('id', 'title', 'publisher', 'url', 'quote', 'note')}
                        for s in r['sources']],
            'caveats': r.get('caveats', []) + ['Not confirmed: ' + u for u in r.get('unverified', [])],
        }
        order.append(k)

    data = {
        'headline': ed['headline'], 'dek': ed['dek'], 'compiled': ed['compiled'],
        'aiCaution': ed['aiCaution'], 'order': order, 'jobs': jobs,
        'compare': {**ed['compare'], 'rows': {k: ed['compare']['rows'][k] for k in order}},
    }
    with open(os.path.join(HERE, 'data.js'), 'w') as f:
        f.write('window.HIREFIRE = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')

    # methodology.html
    esc = html.escape
    parts = []
    for k in order:
        j = jobs[k]
        srcs = ''.join(
            f'<li><b>{esc(s["title"])}</b>{" &middot; " + esc(s["publisher"]) if s.get("publisher") else ""}'
            f'<br><a href="{esc(s["url"] or "")}">{esc(s["url"] or "")}</a></li>' for s in j['sources'])
        cav = ''.join(f'<li>{esc(c)}</li>' for c in j['caveats'])
        parts.append(f'<h2>{esc(j["long"])}</h2><h3>Caveats and open items</h3><ul>{cav}</ul>'
                     f'<h3>Sources ({len(j["sources"])})</h3><ol>{srcs}</ol>')
    tmpl = open(os.path.join(HERE, 'methodology.tmpl.html')).read()
    with open(os.path.join(HERE, 'methodology.html'), 'w') as f:
        f.write(tmpl.replace('<!--JOBS-->', '\n'.join(parts)).replace('<!--COMPILED-->', esc(ed['compiled'])))
    print('built', order, sum(len(jobs[k]['sources']) for k in order), 'sources')


if __name__ == '__main__':
    main()
