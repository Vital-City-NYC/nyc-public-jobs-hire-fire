# Hired and fired: five New York City public jobs

Sourced flowcharts of how five New York City public employees are hired and how they are fired for cause:

- a public school teacher (United Federation of Teachers)
- a District Council 37 clerical associate
- a police officer (Police Benevolent Association)
- a correction officer (Correction Officers' Benevolent Association)
- a sanitation worker (Uniformed Sanitationmen's Association Local 831)

Every box cites a statute, rule, exam notice, union contract or agency document, and every citation opens the exact quoted language. See `methodology.html` for sourcing order, clock labels, verification steps and the caveats and open items for each job.

## Files

- `index.html`: the page. Renders the flowcharts from `data.js`; no libraries.
- `data.js`: generated. Do not edit by hand.
- `research/<job>.json`: nodes, sources (URL plus verbatim quote), caveats and unconfirmed items for each job.
- `research/url_fixes.json`: section-specific links into the city code library, checked by hand in a browser.
- `editorial.json`: page copy, chart headlines, stats strip and the comparison table.
- `methodology.tmpl.html`: template for `methodology.html`.
- `build.py`: merges the above into `data.js` and `methodology.html`, and fails if any box cites a missing source.

## Rebuild

```bash
python3 build.py
```

## Embedding

`?embed=1` strips the outer border and posts the content height to the parent page (`vc-embed-height`, id `nyc-public-jobs-hire-fire`) for an iframe in a Ghost article.

Compiled September 2026. Not legal advice.
