window.HIREFIRE = {
 "headline": "Getting a New York City public job takes months of screening. Firing someone past probation takes charges and a trial",
 "dek": "Flowcharts for five jobs, from the exam or license to permanent status, and from an allegation to a firing that sticks. Every box cites a statute, rule, exam notice, union contract or agency document; tap a number to see the exact language. <b>Fired for cause</b> means removal for misconduct or incompetence, not layoffs.",
 "compiled": "Compiled September 2026 from official sources",
 "aiCaution": "<p>Everything substantive, from the concept to which jobs and documents to use to the layout, was handled by the author, a human. The research and coding were done primarily by Anthropic's Claude and Claude Code under close direction.</p><p>The author insisted on quality control. Every verbatim quote was re-fetched from its source and machine-matched against the live text on Sept. 11, 2026. Links into the city's code library were opened and checked in a browser. City Charter quotes were cross-checked against a second copy of the Charter. Where documents conflicted, for example an exam notice and an older agency web page, the chart follows the controlling document and says so.</p><p>Nevertheless, the risks of using AI remain. Laws, rules and contracts change, and this is not legal advice. We would be especially grateful to hear about any red flags you notice.</p>",
 "order": [
  "teacher",
  "dc37",
  "police",
  "correction",
  "sanitation"
 ],
 "jobs": {
  "teacher": {
   "short": "Teacher",
   "btn": "Teacher",
   "long": "New York City public school teacher",
   "stats": [
    {
     "num": "4 yrs.",
     "lbl": "Probation under a new license",
     "src": [
      19,
      20
     ]
    },
    {
     "num": "10 days",
     "lbl": "To request a hearing after charges; silence waives it",
     "src": [
      37
     ]
    },
    {
     "num": "30 days",
     "lbl": "For the hearing officer's decision after the last hearing day",
     "src": [
      44
     ]
    },
    {
     "num": "$68,902",
     "lbl": "Starting pay with a bachelor's degree; $71,314 from Sept. 14, 2026",
     "src": [
      21
     ]
    }
   ],
   "hiring": {
    "title": "A teacher needs a state certificate, city clearance and a principal's offer, then serves four years of probation",
    "subtitle": "There is no civil service exam. The state licenses teachers; the city school system and its principals hire them.",
    "nodes": [
     {
      "type": "fork",
      "question": "Which route to a state certificate?",
      "lanes": [
       {
        "label": "Traditional route",
        "nodes": [
         {
          "type": "step",
          "title": "Finish a registered teacher preparation program",
          "body": "The candidate completes a state-registered college program that leads to the certificate. The standalone edTPA performance exam has not been required since April 27, 2022.",
          "time": "~4 years for a bachelor's degree",
          "time_basis": "typical",
          "who": "Candidate; college preparation program",
          "law": "8 NYCRR §80-3.3; 8 NYCRR §52.21 (program registration)",
          "src": [
           1,
           2
          ]
         },
         {
          "type": "step",
          "title": "Pass the state certification exams",
          "body": "The candidate must pass the Educating All Students test and the content exam for the subject.",
          "time": "Varies",
          "time_basis": "typical",
          "who": "Candidate; state testing program",
          "law": "8 NYCRR §80-3.3(b)(2)",
          "src": [
           1
          ]
         }
        ]
       },
       {
        "label": "Alternative route (New York City Teaching Fellows)",
        "nodes": [
         {
          "type": "step",
          "title": "Complete summer pre-service training",
          "body": "Career changers and recent graduates take a seven-week summer training program and begin teaching in September.",
          "time": "7 weeks, June to August",
          "time_basis": "official",
          "who": "Candidate; New York City Teaching Fellows; partner university",
          "law": "8 NYCRR §80-5.13",
          "src": [
           4
          ]
         },
         {
          "type": "step",
          "title": "Teach on a Transitional B certificate",
          "body": "The Fellow teaches full time while finishing a subsidized master's degree. The certificate is valid only while the candidate stays enrolled in good standing in the program.",
          "time": "Certificate valid 3 years; certification typically in 2 to 3 years",
          "time_basis": "rule",
          "who": "State Education Department; Fellow; university",
          "law": "8 NYCRR §80-5.13",
          "src": [
           3,
           4
          ]
         }
        ]
       }
      ]
     },
     {
      "type": "step",
      "title": "Complete three required workshops",
      "body": "Candidates complete workshops on child abuse identification and reporting (two hours), school violence prevention (two hours) and the Dignity for All Students Act (at least six hours).",
      "time": "About 10 clock hours in total",
      "time_basis": "statutory",
      "who": "Candidate; state-approved training providers",
      "law": "Education Law §3004(2), (3); Dignity for All Students Act training per NYSED",
      "src": [
       5,
       6,
       7,
       8
      ]
     },
     {
      "type": "step",
      "title": "Clear state fingerprinting",
      "body": "Fingerprints are taken by the state vendor IdentoGO and run against state and FBI records. Clearance is automatic when there is no criminal history.",
      "time": "Generally within 24 hours with no record",
      "time_basis": "official",
      "who": "Candidate; IdentoGO; state Office of School Personnel Review and Accountability",
      "law": "Education Law §§3004-b, 3035",
      "src": [
       9,
       11
      ]
     },
     {
      "type": "step",
      "title": "Apply through TeachNYC",
      "body": "Certified candidates, or those on track to be certified by September 1, file one application. Once it is accepted, principals can see it in the New Teacher Finder.",
      "time": "Initial review 2 to 4 weeks",
      "time_basis": "official",
      "who": "Candidate; New York City Public Schools recruitment office",
      "law": "Administrative process; Chancellor's authority under Education Law §2590-h",
      "src": [
       13
      ]
     },
     {
      "type": "step",
      "title": "Interview and accept an offer from a principal",
      "body": "Candidates contact principals directly and may be asked to interview and teach a demonstration lesson. The school then nominates the new hire for its vacancy.",
      "time": "Varies",
      "time_basis": "typical",
      "who": "Principal or assistant principal; candidate",
      "law": "Education Law §2590-j(4)(a) (appointment by the chancellor)",
      "src": [
       14,
       15,
       16
      ]
     },
     {
      "type": "step",
      "title": "Clear the city background check",
      "body": "After the nomination, the hire completes forms in the city's Applicant Gateway, is fingerprinted again and shows proof of certification. No one may work in the schools without clearance from the Office of Personnel Investigation.",
      "time": "No published clock",
      "time_basis": null,
      "who": "New hire; human resources; Office of Personnel Investigation",
      "law": "Education Law §2590-h(20); Chancellor's Regulation C-105",
      "src": [
       17,
       18
      ]
     },
     {
      "type": "step",
      "title": "Begin a four-year probationary appointment",
      "body": "Starting pay on the current schedule (effective September 14, 2025) is $68,902 with a bachelor's degree and $77,455 with a master's. Probation is shorter for teachers with regular substitute service or tenure earned in another district. The union describes the term as four years and a day.",
      "time": "4 years (3 years with prior tenure; as short as 2 with substitute service)",
      "time_basis": "statutory",
      "who": "Chancellor appoints; superintendent",
      "law": "Education Law §2573(1)(a)(ii); UFT–DOE salary schedule",
      "src": [
       19,
       20,
       21
      ]
     },
     {
      "type": "end",
      "title": "Tenure decision at the end of probation",
      "body": "The superintendent reports which probationers were found competent, efficient and satisfactory. A tenured teacher can then be removed only for cause.",
      "src": [
       22
      ],
      "tone": "good"
     }
    ],
    "end_to_end": {
     "text": "Timelines vary. For a certified candidate the stated clocks are about 24 hours for state fingerprint clearance and 2 to 4 weeks for application review, plus however long school hiring takes. Fellows go from a seven-week summer program to teaching in September. A traditional candidate first needs about four years for a degree. Probation then runs four years.",
     "src": [
      4,
      9,
      13,
      19
     ]
    }
   },
   "firing": {
    "title": "A tenured teacher can be fired only after a hearing, and the hearing officer, not the chancellor, decides",
    "subtitle": "A probationary teacher can be let go without one. The separate removal track for teachers rated ineffective was repealed in June 2024.",
    "nodes": [
     {
      "type": "fork",
      "question": "Has the teacher earned tenure?",
      "lanes": [
       {
        "label": "No: probationary teacher",
        "nodes": [
         {
          "type": "step",
          "title": "Superintendent discontinues probation",
          "body": "Service can be ended at any time during probation without a hearing. Courts will overturn it only if the teacher shows bad faith, an unconstitutional purpose or a violation of a statute (Matter of Frasier v Board of Education, Court of Appeals, 1988).",
          "time": "Any time; written notice at least 60 days before probation ends if tenure will be denied",
          "time_basis": "statutory",
          "who": "Superintendent",
          "law": "Education Law §2573(1)(a)(ii); Frasier v Board of Educ., 71 NY2d 763 (1988)",
          "src": [
           23,
           24,
           25,
           26
          ]
         },
         {
          "type": "step",
          "title": "Teacher may request reasons in writing",
          "body": "A teacher facing a recommendation to deny tenure or discontinue service may ask for a written statement of reasons. The district must provide it within seven days.",
          "time": "Notice 30 days before the decision; request up to 21 days before; reasons within 7 days",
          "time_basis": "statutory",
          "who": "Teacher; school district",
          "law": "Education Law §3031",
          "src": [
           27,
           25
          ]
         },
         {
          "type": "step",
          "title": "Advisory review by a committee",
          "body": "The teacher can have the discontinuance reviewed by a committee set up under the union contract or chancellor's rules, with at least one week's written notice. The committee only recommends; the decision stays with the superintendent or chancellor.",
          "time": "Notice at least 1 week before the review",
          "time_basis": "rule",
          "who": "Review committee; UFT advocate; superintendent or chancellor",
          "law": "Panel for Educational Policy bylaws §§13.4.2, 13.4.3 (approved March 12, 2025)",
          "src": [
           28,
           29
          ]
         },
         {
          "type": "end",
          "title": "Service ends",
          "body": "The city can separately terminate the person's New York City license under Chancellor's Regulation C-31. The teacher has 15 school days to appeal and is suspended without pay while the review is pending.",
          "src": [
           30,
           31
          ],
          "tone": "bad"
         }
        ]
       },
       {
        "label": "Yes: tenured teacher",
        "nodes": [
         {
          "type": "step",
          "title": "Investigation and reassignment",
          "body": "While misconduct is investigated, the teacher can be moved to an administrative office or an administrative job in the school. In rare sexual or financial misconduct cases the teacher can be suspended. Under the contract, charges must follow within 60 days, or 15 days after an investigator's report in sexual or financial cases.",
          "time": "Charges within 60 days of reassignment; 15 days after an investigator's report in excepted cases",
          "time_basis": "contract",
          "who": "Department of Education; Office of Special Investigations or Special Commissioner of Investigation",
          "law": "UFT–DOE contract Article 21(G)(4); Education Law §3020-a(2)(b), (c)",
          "src": [
           32,
           33,
           50
          ]
         },
         {
          "type": "step",
          "title": "Charges filed and probable cause found",
          "body": "Charges of misconduct or incompetence must be in writing and generally brought within three years of the conduct. In New York City the chancellor, not a school board, acts as the employing board and finds probable cause.",
          "time": "Probable cause within 5 days of receiving charges",
          "time_basis": "statutory",
          "who": "Chancellor (or delegated community superintendents)",
          "law": "Education Law §§3020-a(1), 3020-a(2)(a), 2590-h(38), (38-a)",
          "src": [
           34,
           35,
           36
          ]
         },
         {
          "type": "step",
          "title": "Teacher requests a hearing",
          "body": "Not responding counts as waiving the hearing. If the teacher waives, the Panel for Educational Policy or the community superintendent decides the case and the penalty.",
          "time": "Within 10 days of receiving charges",
          "time_basis": "statutory",
          "who": "Teacher; UFT borough office and New York State United Teachers counsel",
          "law": "Education Law §3020-a(2)(f); Panel for Educational Policy bylaws §13.2",
          "src": [
           37,
           38,
           39
          ]
         },
         {
          "type": "step",
          "title": "Hearing before one hearing officer",
          "body": "The city and union jointly assign a single hearing officer from standing panels. The contract requires a pre-hearing conference within 15 days of the hearing request and the hearing finished within 60 days after that. All evidence must be in within 125 days of the charges.",
          "time": "Pre-hearing within 15 days; hearing done within 60 days of the pre-hearing conference",
          "time_basis": "contract",
          "who": "Hearing officer; Department of Education attorneys; teacher's counsel",
          "law": "Education Law §3020-a(3); §3020(4); 2023 UFT–DOE memorandum of agreement amending Article 21",
          "src": [
           40,
           41,
           42,
           43
          ]
         },
         {
          "type": "step",
          "title": "Decision and penalty",
          "body": "The hearing officer rules on each charge and sets any penalty: a written reprimand, a fine, unpaid suspension or dismissal. Ineffective evaluation ratings no longer create a presumption of incompetence under state law; incompetence is charged under §3020-a like other cause.",
          "time": "Within 30 days of the last hearing day",
          "time_basis": "statutory",
          "who": "Hearing officer",
          "law": "Education Law §3020-a(4)(a); §3020-b repealed by L. 2024, ch. 143 (June 2024)",
          "src": [
           44,
           42,
           45
          ]
         },
         {
          "type": "end",
          "title": "Appeal to State Supreme Court",
          "body": "Either side may ask State Supreme Court to vacate or modify the decision within 10 days. An appeal does not delay the penalty.",
          "src": [
           46,
           47
          ],
          "tone": "neutral"
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": null,
    "aside": {
     "label": "Not for cause",
     "text": "When a teaching position is abolished, the least senior teacher in that tenure area is let go first. This is not a disciplinary firing, and neither is excessing, which moves a teacher out of a school without ending employment.",
     "src": [
      48,
      49
     ]
    }
   },
   "sources": [
    {
     "id": 1,
     "title": "8 NYCRR §80-3.3, Initial certificate requirements (examination)",
     "publisher": "New York State Education Department regulation, via Legal Information Institute (Cornell)",
     "url": "https://www.law.cornell.edu/regulations/new-york/8-NYCRR-80-3.3",
     "quote": "the New York State Teacher Certification Examination educating all students test and the content knowledge certification examination(s) in the area of the certificate",
     "note": null
    },
    {
     "id": 2,
     "title": "edTPA certification exam (former requirement)",
     "publisher": "New York State Education Department, Office of Teaching Initiatives",
     "url": "https://www.highered.nysed.gov/tcert/certificate/certexamsedtpa.html",
     "quote": "The edTPA is no longer a certification requirement as of April 27, 2022.",
     "note": null
    },
    {
     "id": 3,
     "title": "8 NYCRR §80-5.13, Transitional B certificate",
     "publisher": "New York State Education Department regulation, via Legal Information Institute (Cornell)",
     "url": "https://www.law.cornell.edu/regulations/new-york/8-NYCRR-80-5.13",
     "quote": "The transitional B certificate shall be valid for three years from its effective date",
     "note": null
    },
    {
     "id": 4,
     "title": "NYC Teaching Fellows (TeachNYC)",
     "publisher": "New York City Public Schools",
     "url": "https://teachnyc.net/pathways-to-teaching/nyc-teaching-fellows",
     "quote": "Fellows complete a seven-week summer training intensive from June-August and begin teaching in September. You complete a subsidized master's program and earn your certification while teaching, typically within two to three years.",
     "note": null
    },
    {
     "id": 5,
     "title": "Workshops required for educator certification",
     "publisher": "New York State Education Department, Office of Teaching Initiatives",
     "url": "https://www.highered.nysed.gov/tcert/certificate/workshops-required-for-educator-certification.html",
     "quote": "Individuals must complete the following three workshops for educator certification in New York State.",
     "note": null
    },
    {
     "id": 6,
     "title": "Education Law §3004(2), child abuse identification workshop",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3004",
     "quote": "have completed two hours of coursework or training regarding the identification and reporting of child abuse and maltreatment.",
     "note": null
    },
    {
     "id": 7,
     "title": "Education Law §3004(3), school violence prevention workshop",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3004",
     "quote": "have completed two hours of course work or training in school violence prevention and intervention.",
     "note": null
    },
    {
     "id": 8,
     "title": "Dignity for All Students Act (DASA) certification requirement",
     "publisher": "New York State Education Department, Office of Teaching Initiatives",
     "url": "https://www.highered.nysed.gov/tcert/certificate/dasa.html",
     "quote": "The length of the training is at least six clock hours.",
     "note": null
    },
    {
     "id": 9,
     "title": "Fingerprint frequently asked questions: clearance time",
     "publisher": "New York State Education Department, Office of School Personnel Review and Accountability",
     "url": "https://www.nysed.gov/educator-integrity/fingerprint-frequently-asked-questions-faqs",
     "quote": "Generally, with no criminal history there will be an automatic clearance within 24 hours from the time OSPRA receives your fingerprint response",
     "note": null
    },
    {
     "id": 10,
     "title": "Fingerprint frequently asked questions: fee",
     "publisher": "New York State Education Department, Office of School Personnel Review and Accountability",
     "url": "https://www.nysed.gov/educator-integrity/fingerprint-frequently-asked-questions-faqs",
     "quote": "The total fingerprinting fee, subject to change, is $104.50.",
     "note": null
    },
    {
     "id": 11,
     "title": "Education Law §3035, fingerprint clearance",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3035",
     "quote": "After receipt of a criminal history record from the division of criminal justice services and the federal bureau of investigation the commissioner shall promptly notify the appropriate school district",
     "note": null
    },
    {
     "id": 12,
     "title": "NYC Teaching Fellows program size (TeachNYC)",
     "publisher": "New York City Public Schools",
     "url": "https://teachnyc.net/pathways-to-teaching/nyc-teaching-fellows",
     "quote": "Today, more than 9,000 Fellows work in the city's schools.",
     "note": null
    },
    {
     "id": 13,
     "title": "Application and hiring process for certified teachers: review time",
     "publisher": "New York City Public Schools (TeachNYC)",
     "url": "https://teachnyc.net/certified-teacher/application-and-hiring-process",
     "quote": "The initial review can take two to four weeks. Once your application is accepted, it will be shared with principals via the New Teacher Finder",
     "note": null
    },
    {
     "id": 14,
     "title": "Application and hiring process for certified teachers: school-level hiring",
     "publisher": "New York City Public Schools (TeachNYC)",
     "url": "https://teachnyc.net/certified-teacher/application-and-hiring-process",
     "quote": "With a single application, certified teachers can search for jobs at more than 1,600 unique schools.",
     "note": null
    },
    {
     "id": 15,
     "title": "Navigating the Applicant Gateway (hiring guide)",
     "publisher": "New York City Public Schools (TeachNYC)",
     "url": "https://teachnyc.net/assets/files/Job-Search/Navigating_The_Applicant_Gateway.pdf",
     "quote": "Until you are finalized on payroll, school hiring representatives will nominate you for their vacancy using your social security number (SSN).",
     "note": null
    },
    {
     "id": 16,
     "title": "Education Law §2590-j(4)(a), appointment of teachers",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2590-j",
     "quote": "The chancellor shall appoint and assign teachers for all schools and programs under the jurisdiction of the city board",
     "note": null
    },
    {
     "id": 17,
     "title": "New employees: before you begin work",
     "publisher": "New York City Public Schools InfoHub",
     "url": "https://infohub.nyced.org/in-our-schools/working-with-nycps/new-employees-before-you-begin-work",
     "quote": "Please be aware that fingerprinting should only be scheduled after receiving your DOE nomination.",
     "note": null
    },
    {
     "id": 18,
     "title": "Chancellor's Regulation C-105, background investigations (issued Feb. 11, 2003)",
     "publisher": "New York City Public Schools",
     "url": "https://www.schools.nyc.gov/docs/default-source/default-document-library/c-105-2-11-2003-final-remediated-wcag2-0.pdf",
     "quote": "No one may be licensed, certified, employed by or work in the New York City Public School System without background investigation and clearance from either the OPI, or the Chief Executive of DHR.",
     "note": null
    },
    {
     "id": 19,
     "title": "Education Law §2573(1)(a)(ii), probationary period",
     "publisher": "New York State Legislature (text as published at nysenate.gov, updated Jul. 5, 2024, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2573",
     "quote": "shall be appointed by the board of education, upon the recommendation of the superintendent of schools, for a probationary period of four years",
     "note": null
    },
    {
     "id": 20,
     "title": "Probationary period",
     "publisher": "United Federation of Teachers",
     "url": "https://www.uft.org/your-rights/know-your-rights/probationary-period",
     "quote": "you serve a probationary period of four years and a day",
     "note": null
    },
    {
     "id": 21,
     "title": "Teacher salary schedule (2022–27)",
     "publisher": "United Federation of Teachers",
     "url": "https://www.uft.org/your-rights/salary/doe-and-city-salary-schedules/teacher-salary-schedule",
     "quote": "Teacher salary schedule (2022–27) ... Sept. 14, 2025 ... 3.25% pay increase ... Sept. 14, 2026 ... 3.5% pay increase",
     "note": null
    },
    {
     "id": 22,
     "title": "Education Law §2573(5)(b), tenure",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2573",
     "quote": "shall not be removable except for cause after a hearing as provided by section three thousand twenty and section three thousand twenty-a of this chapter.",
     "note": null
    },
    {
     "id": 23,
     "title": "Education Law §2573(1)(a)(ii), discontinuance during probation",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2573",
     "quote": "The service of a person appointed to any of such positions may be discontinued at any time during such probationary period, on the recommendation of the superintendent of schools, by a majority vote of the board of education.",
     "note": null
    },
    {
     "id": 24,
     "title": "Education Law §2573(1)(a)(ii), 60-day notice",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2573",
     "quote": "shall be so notified by the superintendent of schools in writing not later than sixty days immediately preceding the expiration of such person's probationary period.",
     "note": null
    },
    {
     "id": 25,
     "title": "Appeal of Courtney Babcock, Decision No. 18,212 (Nov. 22, 2022), quoting Matter of Frasier v Board of Educ., 71 NY2d 763 (1988)",
     "publisher": "New York State Commissioner of Education, Office of Counsel",
     "url": "https://www.counsel.nysed.gov/Decisions/volume62/d18212",
     "quote": "at any time and for any reason, unless the teacher establishes that the termination was for a constitutionally impermissible purpose, violative of a statute, or done in bad faith",
     "note": null
    },
    {
     "id": 26,
     "title": "Appeal of Courtney Babcock, Decision No. 18,212: facts of a New York City discontinuance",
     "publisher": "New York State Commissioner of Education, Office of Counsel",
     "url": "https://www.counsel.nysed.gov/Decisions/volume62/d18212",
     "quote": "the superintendent informed petitioner that she was discontinuing petitioner's probationary appointment",
     "note": null
    },
    {
     "id": 27,
     "title": "Education Law §3031, statement of reasons",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3031",
     "quote": "request in writing that he be furnished with a written statement giving the reasons for such recommendation and within seven days thereafter such written statement shall be furnished.",
     "note": null
    },
    {
     "id": 28,
     "title": "Panel for Educational Policy bylaws §13.4.2, appeals of discontinuance of probationary service (approved March 12, 2025)",
     "publisher": "New York City Panel for Educational Policy",
     "url": "https://www.schools.nyc.gov/get-involved/families/panel-for-education-policy/bylaws",
     "quote": "After the review, the committee shall forward its advisory recommendation to the community superintendent or to the Chancellor in accordance with contractual agreements.",
     "note": null
    },
    {
     "id": 29,
     "title": "Panel for Educational Policy bylaws §13.4.3, committee reviews",
     "publisher": "New York City Panel for Educational Policy",
     "url": "https://www.schools.nyc.gov/docs/default-source/data/pep-bylaws-pdf-march-2025.pdf",
     "quote": "shall receive written notice of the time and place of the review ... at least one week before the date specified for said review.",
     "note": null
    },
    {
     "id": 30,
     "title": "Chancellor's Regulation C-31, termination of licenses of non-tenured staff (issued Oct. 16, 2002): appeal window",
     "publisher": "New York City Public Schools",
     "url": "https://www.schools.nyc.gov/docs/default-source/default-document-library/c-31-10-16-2002-final-remediated-wcag2-0.pdf",
     "quote": "The employee shall have 15 school days from the date of service or mailing, exclusive of the summer vacation, to appeal the termination decision.",
     "note": null
    },
    {
     "id": 31,
     "title": "Chancellor's Regulation C-31: status during review",
     "publisher": "New York City Public Schools",
     "url": "https://www.schools.nyc.gov/docs/default-source/default-document-library/c-31-10-16-2002-final-remediated-wcag2-0.pdf",
     "quote": "During the pendency of a review, if the employee is still employed by the Department of Education, they will be suspended without pay.",
     "note": null
    },
    {
     "id": 32,
     "title": "UFT–DOE teachers' contract, Article 21(G)(4), investigations and reassignments (2009–2018 printable edition)",
     "publisher": "United Federation of Teachers / New York City Department of Education",
     "url": "https://www.uft.org/files/attachments/teachers-contract-2009-2018%5F0.pdf",
     "quote": "The DOE shall prefer charges pursuant to Education Law § 3020-a within sixty (60) days of an employee being reassigned or suspended",
     "note": null
    },
    {
     "id": 33,
     "title": "Disciplinary actions",
     "publisher": "United Federation of Teachers",
     "url": "https://www.uft.org/your-rights/know-your-rights/disciplinary-actions",
     "quote": "If you are being investigated by SCI for either financial or sexual misconduct, you must be formally charged within 15 days of the report being issued.",
     "note": null
    },
    {
     "id": 34,
     "title": "Education Law §3020-a(1), filing of charges and limitation period",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "no charges under this section shall be brought more than three years after the occurrence of the alleged incompetency or misconduct, except when the charge is of misconduct constituting a crime when committed.",
     "note": null
    },
    {
     "id": 35,
     "title": "Education Law §3020-a(2)(a), probable cause",
     "publisher": "New York State Senate (Open Legislation)",
     "url": "https://www.nysenate.gov/legislation/laws/EDN/3020-A",
     "quote": "Within five days after receipt of charges, the employing board, in executive session, shall determine, by a vote of a majority of all the members of such board, whether probable cause exists",
     "note": null
    },
    {
     "id": 36,
     "title": "Education Law §2590-h(38), chancellor as employing board",
     "publisher": "New York State Legislature (text as published at nysenate.gov, updated Jun. 5, 2026, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2590-h",
     "quote": "To exercise all of the duties and responsibilities of the employing board as set forth in section three thousand twenty-a of this chapter",
     "note": null
    },
    {
     "id": 37,
     "title": "Education Law §3020-a(2)(f), waiver of hearing",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "The unexcused failure of the employee to notify the clerk or secretary of his or her desire for a hearing within ten days of the receipt of charges shall be deemed a waiver of the right to a hearing.",
     "note": null
    },
    {
     "id": 38,
     "title": "Panel for Educational Policy bylaws §13.2, default or waiver",
     "publisher": "New York City Panel for Educational Policy",
     "url": "https://www.schools.nyc.gov/get-involved/families/panel-for-education-policy/bylaws",
     "quote": "If a pedagogical employee waives the right to a hearing pursuant to New York Education Law Section 3020-a, the PEP or the community superintendent, as applicable, shall proceed to determine the case",
     "note": null
    },
    {
     "id": 39,
     "title": "Disciplinary actions: union representation",
     "publisher": "United Federation of Teachers",
     "url": "https://www.uft.org/your-rights/know-your-rights/disciplinary-actions",
     "quote": "you should immediately go to your UFT borough office. You will be assisted in filing the necessary forms and arrange, if you choose, for you to be assigned legal counsel from NYSUT.",
     "note": null
    },
    {
     "id": 40,
     "title": "UFT–DOE memorandum of agreement (June 13, 2023), section 27, 3020-a and probation: hearing officers",
     "publisher": "New York City Public Schools InfoHub (Board of Education and UFT)",
     "url": "https://infohub.nyced.org/docs/default-source/default-document-library/uft-moa-9-14-22-thru-11-28-27-final-searchable-(1).pdf",
     "quote": "the Board or designee and UFT or designee shall by mutual agreement assign hearing officers from the ATU and TPU panels to conduct 3020-a hearings.",
     "note": null
    },
    {
     "id": 41,
     "title": "UFT–DOE memorandum of agreement (June 13, 2023), section 27: pre-hearing conferences",
     "publisher": "New York City Public Schools InfoHub (Board of Education and UFT)",
     "url": "https://infohub.nyced.org/docs/default-source/default-document-library/uft-moa-9-14-22-thru-11-28-27-final-searchable-(1).pdf",
     "quote": "hearings, including closing statements, to be completed within sixty (60) days of the pre-hearing conference and a decision to be rendered within thirty (30) days of the final hearing date.",
     "note": null
    },
    {
     "id": 42,
     "title": "Teacher tenure hearing changes (memo, Aug. 6, 2015)",
     "publisher": "New York State Education Department",
     "url": "https://www.nysed.gov/memo/educator-integrity/teacher-tenure-hearing-changes-august-6-2015",
     "quote": "Cases brought against tenured educators must now be held in front of a single hearing officer",
     "note": null
    },
    {
     "id": 43,
     "title": "Education Law §3020-a(3)(c)(vii), evidence deadline",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "All evidence shall be submitted by all parties within one hundred twenty-five days of the filing of charges and no additional evidence shall be accepted after such time",
     "note": null
    },
    {
     "id": 44,
     "title": "Education Law §3020-a(4)(a), decision and penalties",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "In those cases where a penalty is imposed, such penalty may be a written reprimand, a fine, suspension for a fixed time without pay, or dismissal.",
     "note": null
    },
    {
     "id": 45,
     "title": "Senate Bill S9054 of 2023-24 (same as Assembly Bill A9849), signed by the governor as Chapter 143 of the Laws of 2024",
     "publisher": "New York State Senate (Open Legislation)",
     "url": "https://www.nysenate.gov/legislation/bills/2023/S9054",
     "quote": "establishes an optional system of annual professional performance review plans; repeals provisions relating to streamlined removal procedures for teachers rated ineffective.",
     "note": null
    },
    {
     "id": 46,
     "title": "Education Law §3020-a(5)(a), appeal",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "Not later than ten days after receipt of the hearing officer's decision, the employee or the employing board may make an application to the New York state supreme court to vacate or modify the decision",
     "note": null
    },
    {
     "id": 47,
     "title": "Education Law §3020-a(5)(b), no stay on appeal",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "In no case shall the filing or the pendency of an appeal delay the implementation of the decision of the hearing officer.",
     "note": null
    },
    {
     "id": 48,
     "title": "Education Law §2588(3)(a), layoffs in New York City",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_2588",
     "quote": "the services of the person holding a position within the tenure area of the position which is to be abolished who has the least seniority in the city school district ... shall be discontinued",
     "note": null
    },
    {
     "id": 49,
     "title": "Excessing",
     "publisher": "United Federation of Teachers",
     "url": "https://www.uft.org/your-rights/know-your-rights/excessing",
     "quote": "As of the summer of 2021, in most cases, the DOE no longer places newly excessed staff in the Absent Teacher Reserve (ATR) pool.",
     "note": null
    },
    {
     "id": 50,
     "title": "Education Law §3020-a(2)(c), unpaid suspension in student abuse cases",
     "publisher": "New York State Legislature (text as published at nysenate.gov, retrieved via newyork.public.law)",
     "url": "https://newyork.public.law/laws/n.y._education_law_section_3020-a",
     "quote": "Where charges of misconduct constituting physical or sexual abuse of a student are brought on or after July first, two thousand fifteen, the board of education may suspend the employee without pay pending an expedited hearing",
     "note": null
    },
    {
     "id": 51,
     "title": "Teacher discipline: moral character actions (8 NYCRR Part 83)",
     "publisher": "New York State Education Department",
     "url": "https://www.nysed.gov/educator-integrity/teacher-discipline",
     "quote": "Allegations concerning the moral character of New York State teaching certificate holders and applicants are addressed pursuant to Part 83 of the Regulations of the Commissioner of Education.",
     "note": null
    }
   ],
   "caveats": [
    "Education Law §3020-b (removal after two or three consecutive ineffective ratings) was repealed by Chapter 143 of the Laws of 2024, signed in June 2024. The firing chart therefore has no separate ratings lane. Districts may keep using §3012-d evaluation plans until a new plan is required by June 30, 2032 (per the S9054 bill page), and the UFT–DOE contract may still carry evaluation-related terms. Ask counsel how any case charged before the repeal is treated.",
    "In New York City, §3020 lets the city and the UFT change §3020-a procedures by contract. The hearing-officer assignment, the 15-day pre-hearing conference and the 60-day reassignment rule come from the contract, not the statute. The statutory 15-day hearing-officer selection in §3020-a(3)(b)(iii) expressly does not apply in New York City.",
    "The Article 21(G)(4) text is quoted from the 2009–2018 printable edition on uft.org, the most recent full text that could be opened. The 2023 memorandum of agreement amends Article 21 (pre-hearing conferences) but does not restate G(4). The UFT's current disciplinary-actions page describes the same 60-day and 15-day rules.",
    "Pay during reassignment and suspension varies: the default is with pay, but unpaid suspension is allowed for certain drug felonies, for physical or sexual abuse of a student after a probable-cause finding (§3020-a(2)(b), (c); source 50) and for serious misconduct under contract Article 21(G)(5)-(6).",
    "Two ways out sit outside this chart: resignation or retirement, and state revocation of a certificate for moral character under 8 NYCRR Part 83 (source 51), which bars teaching statewide.",
    "Excessing is not a layoff. Since summer 2021 the city generally no longer places newly excessed teachers in the Absent Teacher Reserve (source 49).",
    "Salary figures: the schedule in force on the compile date (September 11, 2026) is the one effective September 14, 2025. A 3.5 percent raise takes effect September 14, 2026, three days later. uft.org blocks direct downloads, so the salary table was read through a fetch tool; figures should be checked against the page before publication.",
    "nysenate.gov blocked direct downloads for most sections (403). Statute text was read from newyork.public.law, which reproduces the nysenate.gov text and gives its last-updated date. §3020-a(2)(a) and the S9054 bill page were read directly on nysenate.gov. Typographic apostrophes in quotes were normalized to straight quotes.",
    "Chancellor's Regulations C-31 (2002) and C-105 (2003) are the versions currently posted. C-31 still cites 'section 5.3.4' of the bylaws, which is now §13.4 of the Panel for Educational Policy bylaws approved March 12, 2025.",
    "The bad-faith standard for probationary discontinuance is taken from the Court of Appeals decision in Matter of Frasier v Board of Educ., 71 NY2d 763 (1988), as quoted in a 2022 Commissioner's decision involving the city. The Frasier opinion itself was not opened. The same decision cites Kahn v New York City Dept. of Educ., 18 NY3d 457 (2012).",
    "Not confirmed: Official counts of §3020-a cases filed against New York City teachers, and how long they take: no current NYSED or city publication was found. The NYSED Teacher Tenure Hearing Unit page has no statistics. No stats line is included.",
    "Not confirmed: The rule that a hiring nomination expires after 60 days without fingerprinting: it appears only in a search snippet from the NYC Teaching Fellows help center, which returned 403. The TeachNYC Applicant Gateway guide and InfoHub page do not state it. It was removed from the chart.",
    "Not confirmed: Time for the city (Office of Personnel Investigation) background clearance: C-105 and InfoHub give no clock.",
    "Not confirmed: Time to evaluate prior-experience salary step credit (the prior page said about 20 weeks): the uft.org salary-steps page returned 403 to every fetch method. Removed.",
    "Not confirmed: Exam score turnaround (the prior page said 2 to 6 weeks): no official source was fetched. Removed.",
    "Not confirmed: The full text of Education Law §3020-b before repeal (day counts for the former ratings track): nysenate.gov no longer lists the section, and Justia and FindLaw returned 403. Its former terms are known only from the 2015 NYSED memo, and are no longer operative.",
    "Not confirmed: The current consolidated UFT–DOE contract text of Article 21 (2023–2027): the uft.org article page returned navigation only. See the caveat on the 2009–2018 edition.",
    "Not confirmed: How the community superintendent's discontinuance maps onto the §2573 'majority vote of the board of education' in New York City: the 2022 Commissioner's decision shows the superintendent issuing it, but no statute or regulation stating the delegation was opened."
   ]
  },
  "dc37": {
   "short": "DC 37 clerical",
   "btn": "DC 37 clerical",
   "long": "District Council 37 clerical associate",
   "stats": [
    {
     "num": "163 days",
     "lbl": "Median from exam to results, all city exams, July-Oct. 2024",
     "src": [
      79
     ]
    },
    {
     "num": "4 yrs.",
     "lbl": "Longest a hiring list can last",
     "src": [
      2
     ]
    },
    {
     "num": "12 mo.",
     "lbl": "Default probation, extendable by six months",
     "src": [
      41,
      42
     ]
    },
    {
     "num": "4",
     "lbl": "Steps in the union contract's discipline route, A through D",
     "src": [
      53,
      62
     ]
    }
   ],
   "hiring": {
    "title": "A clerical associate is ranked on an exam list that can last four years, then serves a year of probation",
    "subtitle": "Clerical associate is the District Council 37 title used here, per exam notice No. 5977 and city personnel rules. Agencies can also hire provisionally, without an exam.",
    "nodes": [
     {
      "type": "step",
      "title": "Exam is announced and the candidate applies online",
      "body": "The Department of Citywide Administrative Services (DCAS) posts a notice of examination; the candidate files on the Online Application System (OASys) and pays a $47 fee, which is waived for veterans, unemployed people and people receiving public assistance or Supplemental Security Income. clerical associate requires a high school diploma or equivalent and one year of full-time clerical experience.",
      "time": "Filing window of at least 2 weeks; 20 days for the 2025 exam (June 4 to June 24)",
      "time_basis": "rule",
      "who": "Candidate; DCAS",
      "law": "Civil Service Law § 50(5); Personnel Rule 4.2.2; Notice of Examination No. 5977",
      "src": [
       1,
       21,
       22,
       23,
       24,
       35
      ]
     },
     {
      "type": "step",
      "title": "Candidate takes the test",
      "body": "In 2025 clerical associate was part of the New York City Bridge Exam: a computer-based multiple-choice test that sets list rank (70% needed to pass), a pass/fail education and experience review and a typing test of 20 words per minute. The 2021 clerical associate exam was scored only on education and experience.",
      "time": "Testing began Sept. 15, 2025, about 12 weeks after filing closed",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "Notice of Examination No. 5977; Notice of Examination No. 1190 (2021)",
      "src": [
       22,
       25,
       26,
       34,
       85
      ]
     },
     {
      "type": "step",
      "title": "Scores are finalized and an eligible list is established",
      "body": "Passing candidates are ranked by final score. Veterans who claim credit get 5 extra points (10 if disabled), added only when the list is established. The list becomes official by order of the DCAS commissioner.",
      "time": "Median 163 days from exam to results for all DCAS exams (July to October 2024)",
      "time_basis": "official",
      "who": "DCAS",
      "law": "Civil Service Law § 85(2)(a); Personnel Rule 4.6.1(c)",
      "src": [
       19,
       20,
       31,
       36,
       79
      ]
     },
     {
      "type": "step",
      "title": "The list stays alive for up to four years",
      "body": "State law sets a list's life at one to four years; DCAS says City lists typically last four. The most recent open-competitive clerical associate list with a posted date (Exam No. 3120) was established April 30, 2025 and runs to April 30, 2029.",
      "time": "1 to 4 years; typically 4",
      "time_basis": "statutory",
      "who": "DCAS",
      "law": "Civil Service Law § 56",
      "src": [
       2,
       27,
       82
      ]
     },
     {
      "type": "fork",
      "question": "When an agency fills a funded vacancy, is an appropriate eligible list available?",
      "lanes": [
       {
        "label": "Yes: hire from the list",
        "nodes": [
         {
          "type": "step",
          "title": "DCAS certifies the top names to the agency",
          "body": "The agency must pick one of the three highest-ranked candidates who are willing to accept the job.",
          "time": "When the agency requests a certification",
          "time_basis": "statutory",
          "who": "DCAS; hiring agency",
          "law": "Civil Service Law § 61(1); Personnel Rule 4.7.1(c)",
          "src": [
           3,
           37
          ]
         },
         {
          "type": "step",
          "title": "Agency interviews and makes an offer",
          "body": "At the appointment interview the agency verifies qualifications and, where required, New York City residency within 90 days of appointment. A candidate who declines or does not answer an offer in the time the agency sets can be withheld from further certification.",
          "time": "At least 4 days to respond to an offer",
          "time_basis": "rule",
          "who": "Hiring agency; candidate",
          "law": "Personnel Rule 4.8.2; Administrative Code § 12-120 (as described in the exam notice)",
          "src": [
           28,
           29,
           38
          ]
         },
         {
          "type": "step",
          "title": "Character and background review",
          "body": "Satisfactory character and reputation is a minimum qualification. DCAS can investigate after appointment and revoke the appointment for disqualifying facts or fraud.",
          "time": "Revocation possible up to 3 years after appointment",
          "time_basis": "rule",
          "who": "DCAS; hiring agency",
          "law": "Personnel Rules 4.3.1(b), 4.3.2(b)",
          "src": [
           39,
           40
          ]
         },
         {
          "type": "step",
          "title": "Appointment and probation",
          "body": "The new clerical associate serves a probationary term. The default for competitive-class appointments is one year. It can be extended by up to six months with the employee's written consent and is extended by days spent on leave or limited duty.",
          "time": "12 months; extendable up to 6 more",
          "time_basis": "rule",
          "who": "Hiring agency; DCAS; employee",
          "law": "Civil Service Law § 63(1); Personnel Rules 5.2.1(a), 5.2.8",
          "src": [
           4,
           41,
           42,
           43
          ]
         },
         {
          "type": "end",
          "title": "Permanent status",
          "body": "After probation the employee holds a permanent competitive-class appointment and can be disciplined only for cause after charges and a hearing under Civil Service Law § 75, or through the District Council 37 contract procedure.",
          "src": [
           7,
           8,
           51
          ],
          "tone": "good"
         }
        ]
       },
       {
        "label": "No: provisional appointment",
        "nodes": [
         {
          "type": "step",
          "title": "Agency nominates a provisional hire",
          "body": "With no usable list, the agency can nominate someone. DCAS reviews the nominee's training and experience, without a written test, and the person is appointed provisionally. Provisional employees in the title can file late for the next exam in some cases.",
          "time": "Legal limit of 9 months",
          "time_basis": "statutory",
          "who": "Hiring agency; DCAS",
          "law": "Civil Service Law § 65(1)-(2); Personnel Rules 5.5.1, 5.5.2",
          "src": [
           5,
           48,
           49,
           32
          ]
         },
         {
          "type": "end",
          "title": "Provisional job ends when a list arrives",
          "body": "A provisional appointment must end within two months after an appropriate list is established. To stay, the person has to be reached on the list and appointed permanently.",
          "src": [
           6,
           84
          ],
          "tone": "bad"
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": {
     "text": "No official source gives a start-to-finish figure. Adding the official clocks for the 2025 exam: about 12 weeks from the close of filing to the test, a median of 163 days for DCAS to produce results (all DCAS exams, July to October 2024), an open-ended wait to be reached on a list that can last four years, then a 12-month probation. Even a candidate hired the day results come out would reach permanent status about 20 months after filing closed.",
     "src": [
      22,
      79,
      27,
      2,
      41
     ]
    }
   },
   "firing": {
    "title": "A permanent clerical associate can be fired through a state hearing or a union arbitration, chosen after a first conference",
    "subtitle": "Probationers can be let go by notice. Provisional employees have far less protection.",
    "nodes": [
     {
      "type": "fork",
      "question": "What is the employee's civil service status?",
      "lanes": [
       {
        "label": "Probationary (first year after appointment)",
        "nodes": [
         {
          "type": "step",
          "title": "Agency can end employment without a hearing",
          "body": "After a minimum of two months of service, the agency head can terminate a probationer whose conduct and performance are not satisfactory, by notice to the employee and to DCAS. At the end of probation, an unsatisfactory probationer can be let go the same way. The contract's disciplinary procedure covers permanent employees, not probationers.",
          "time": "Any time from month 2 to the end of probation",
          "time_basis": "rule",
          "who": "Agency head; DCAS",
          "law": "Personnel Rules 5.2.7(a), 5.2.7(c); Clerical Agreement Article VI § 1(e)",
          "src": [
           44,
           45,
           46,
           51
          ]
         },
         {
          "type": "end",
          "title": "Terminated probationer may go back on the list",
          "body": "DCAS has discretion to restore the person's name to the eligible list if it still exists.",
          "src": [
           47
          ],
          "tone": "bad"
         }
        ]
       },
       {
        "label": "Permanent (probation completed)",
        "nodes": [
         {
          "type": "step",
          "title": "Investigatory interview",
          "body": "An employee questioned as a potential subject of discipline has a right to union representation and must be told of it in writing beforehand. Under the DC 37 contract, when the interviewer is outside the normal chain of command, the employee may bring a union representative or lawyer.",
          "time": "Written notice at least 2 work days ahead, when feasible",
          "time_basis": "contract",
          "who": "Agency investigators; employee; union",
          "law": "Civil Service Law § 75(2); 2017-2021 DC 37 Memorandum of Agreement, Article IX § 19",
          "src": [
           10,
           70,
           71
          ]
         },
         {
          "type": "step",
          "title": "Agency serves written charges",
          "body": "Charges must allege incompetency or misconduct and be filed within 18 months of the conduct, unless it would be a crime. The employee gets at least eight days to answer in writing and can be suspended without pay for up to 30 days while charges are pending.",
          "time": "Within 18 months of the conduct; 8 days to answer; suspension capped at 30 days",
          "time_basis": "statutory",
          "who": "Agency head; employee",
          "law": "Civil Service Law § 75(2), (3), (4)",
          "src": [
           11,
           14,
           16
          ]
         },
         {
          "type": "step",
          "title": "Step A conference",
          "body": "An agency designee meets with the employee, who may bring a union representative, and issues a written determination. The employee can accept it, signing away Section 75 and 76 rights, or reject it.",
          "time": "Decision by the end of the 5th day after the conference",
          "time_basis": "contract",
          "who": "Agency designee; employee; union",
          "law": "Clerical Agreement Article VI § 5, Step A",
          "src": [
           53,
           54
          ]
         },
         {
          "type": "fork",
          "question": "If the employee rejects Step A, which track?",
          "lanes": [
           {
            "label": "Statutory track: Section 75 hearing",
            "nodes": [
             {
              "type": "step",
              "title": "Hearing at the Office of Administrative Trials and Hearings",
              "body": "By default the agency proceeds under Section 75. The Office of Administrative Trials and Hearings (OATH) hears City cases; an administrative law judge first holds a settlement conference, and unsettled cases go to trial before a different judge. The agency must prove its case by a preponderance of the evidence, and the employee may have counsel or a union representative.",
              "time": "OATH averaged 26.5 days from close of record to decision (July to October 2024)",
              "time_basis": "official",
              "who": "Agency lawyers; employee; union or counsel; OATH judge",
              "law": "Civil Service Law § 75(2); NYC Charter § 1048; Clerical Agreement Article VI § 5, Step B(i)",
              "src": [
               12,
               13,
               55,
               74,
               75,
               77,
               81
              ]
             },
             {
              "type": "step",
              "title": "Agency head decides",
              "body": "The judge's report and recommendation go to the agency head, who makes the final decision. Penalties range from a reprimand or a fine of up to $100 to suspension of up to two months, demotion or dismissal.",
              "time": "No statutory deadline found",
              "time_basis": null,
              "who": "Agency head",
              "law": "Civil Service Law § 75(2), (3)",
              "src": [
               12,
               15,
               76
              ]
             },
             {
              "type": "step",
              "title": "Appeal",
              "body": "The employee can appeal to the New York City Civil Service Commission or go to state court under Article 78 of the Civil Practice Law and Rules.",
              "time": "Commission appeal within 20 days of notice (23 if notice is mailed by registered mail)",
              "time_basis": "statutory",
              "who": "Employee; Civil Service Commission or state Supreme Court",
              "law": "Civil Service Law § 76(1)",
              "src": [
               17,
               18
              ]
             }
            ]
           },
           {
            "label": "Contract track: grievance and arbitration",
            "nodes": [
             {
              "type": "step",
              "title": "Step B: appeal to the agency head",
              "body": "The union, with the employee's consent, elects the contract route, and both file a written waiver of Section 75 and 76 rights. Unpaid suspension still cannot exceed 30 days. The agency head or a designee meets with them and can impose discipline up to termination.",
              "time": "File within 5 work days; decision by the 10th work day",
              "time_basis": "contract",
              "who": "Union; employee; agency head",
              "law": "Clerical Agreement Article VI § 5, Steps B(i)-(ii)",
              "src": [
               56,
               57,
               58,
               59
              ]
             },
             {
              "type": "step",
              "title": "Step C: appeal to the Commissioner of Labor Relations",
              "body": "Either the employee or the union can appeal to the City's labor relations commissioner. If the penalty is termination or more than 30 days of unpaid suspension, the union can skip this step. If the City misses a deadline, the next step can be invoked.",
              "time": "File within 10 days; reply within 15 work days",
              "time_basis": "contract",
              "who": "Union; employee; Office of Labor Relations",
              "law": "Clerical Agreement Article VI §§ 5 (Step C), 10",
              "src": [
               60,
               61,
               67
              ]
             },
             {
              "type": "step",
              "title": "Step D: arbitration",
              "body": "Only the union, with the employee's consent, can take the case to a neutral arbitrator under the Office of Collective Bargaining. The award is final and binding, and the two sides split the cost. Small penalties (a fine of one week's pay or less, or a written reprimand) can go to expedited arbitration.",
              "time": "Union files within 15 work days of the prior determination",
              "time_basis": "contract",
              "who": "Union; City; arbitrator",
              "law": "Clerical Agreement Article VI §§ 2-3 (Step IV), 5 (Step D), 16; 61 RCNY",
              "src": [
               62,
               63,
               64,
               65,
               66
              ]
             }
            ]
           }
          ]
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": null,
    "aside": {
     "label": "Provisional employees",
     "text": "Section 75 covers permanent competitive-class employees, not provisionals. Under the contract, a provisional employee of a mayoral agency can grieve discipline only after two years of unbroken service in the same or similar title, under a separate 2011 and 2018 procedure.",
     "src": [
      8,
      52,
      68
     ]
    }
   },
   "sources": [
    {
     "id": 1,
     "title": "Civil Service Law § 50(5), application fees",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_50",
     "quote": "Every applicant for examination for a position in the competitive or non-competitive class, or in the labor class when examination for appointment is required, shall pay a fee",
     "note": null
    },
    {
     "id": 2,
     "title": "Civil Service Law § 56, duration of eligible lists",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_56",
     "quote": "not less than one nor more than four years",
     "note": null
    },
    {
     "id": 3,
     "title": "Civil Service Law § 61(1), appointment from eligible lists",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_61",
     "quote": "shall be made by the selection of one of the three persons certified by the appropriate civil service commission as standing highest on such eligible list who are willing to accept such appointment or promotion",
     "note": null
    },
    {
     "id": 4,
     "title": "Civil Service Law § 63(1), probationary term",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_63",
     "quote": "Every original appointment to a position in the competitive class and every interdepartmental promotion from a position in one department or agency to a position in another department or agency shall be for a probationary term",
     "note": null
    },
    {
     "id": 5,
     "title": "Civil Service Law § 65(1), provisional appointments authorized",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_65",
     "quote": "Whenever there is no appropriate eligible list available for filling a vacancy in the competitive class, the appointing officer may nominate a person to the state civil service department or municipal commission for non-competitive examination",
     "note": null
    },
    {
     "id": 6,
     "title": "Civil Service Law § 65(3), termination of provisional appointments",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_65",
     "quote": "A provisional appointment to any position shall be terminated within two months following the establishment of an appropriate eligible list for filling vacancies in such positions",
     "note": null
    },
    {
     "id": 7,
     "title": "Civil Service Law § 75(1), removal only for cause after hearing",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "shall not be removed or otherwise subjected to any disciplinary penalty provided in this section except for incompetency or misconduct shown after a hearing upon stated charges pursuant to this section",
     "note": null
    },
    {
     "id": 8,
     "title": "Civil Service Law § 75(1)(a), permanent competitive-class employees covered",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "(a) A person holding a position by permanent appointment in the competitive class of the classified civil service",
     "note": null
    },
    {
     "id": 9,
     "title": "Civil Service Law § 75(1)(c), non-competitive employees after five years",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "who since his or her last entry into service has completed at least five years of continuous service in the non-competitive or labor class",
     "note": null
    },
    {
     "id": 10,
     "title": "Civil Service Law § 75(2), representation at questioning",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "An employee who at the time of questioning appears to be a potential subject of disciplinary action shall have a right to representation by his or her certified or recognized employee organization",
     "note": null
    },
    {
     "id": 11,
     "title": "Civil Service Law § 75(2), written charges and time to answer",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "shall be furnished a copy of the charges preferred against him and shall be allowed at least eight days for answering the same in writing",
     "note": null
    },
    {
     "id": 12,
     "title": "Civil Service Law § 75(2), hearing officer's record and recommendations",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "shall make a record of such hearing which shall, with his recommendations, be referred to such officer or body for review and decision",
     "note": null
    },
    {
     "id": 13,
     "title": "Civil Service Law § 75(2), burden of proof",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "The burden of proving incompetency or misconduct shall be upon the person alleging the same.",
     "note": null
    },
    {
     "id": 14,
     "title": "Civil Service Law § 75(3), suspension pending charges",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "may be suspended without pay for a period not exceeding thirty days",
     "note": null
    },
    {
     "id": 15,
     "title": "Civil Service Law § 75(3), penalties",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "suspension without pay for a period not exceeding two months, demotion in grade and title, or dismissal from the service",
     "note": null
    },
    {
     "id": 16,
     "title": "Civil Service Law § 75(4), 18-month limitation",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "no removal or disciplinary proceeding shall be commenced more than eighteen months after the occurrence of the alleged incompetency or misconduct complained of",
     "note": null
    },
    {
     "id": 17,
     "title": "Civil Service Law § 76(1), appeal routes",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_76",
     "quote": "may appeal from such determination either by an application to the state or municipal commission having jurisdiction, or by an application to the court in accordance with the provisions of article seventy-eight of the civil practice law and rules",
     "note": null
    },
    {
     "id": 18,
     "title": "Civil Service Law § 76(1), 20-day deadline for commission appeal",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_76",
     "quote": "he shall file such appeal in writing within twenty days after service of written notice of the determination to be reviewed",
     "note": null
    },
    {
     "id": 19,
     "title": "Civil Service Law § 85(2)(a)(1), disabled veterans' credit",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_85",
     "quote": "Disabled veterans shall be entitled to receive ten points additional in a competitive examination for original appointment",
     "note": null
    },
    {
     "id": 20,
     "title": "Civil Service Law § 85(2)(a)(2), non-disabled veterans' credit",
     "publisher": "New York State Legislature (text via NewYork.Public.Law mirror of nysenate.gov)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_85",
     "quote": "Non-disabled veterans shall be entitled to receive five points additional credit in a competitive examination for original appointment",
     "note": null
    },
    {
     "id": 21,
     "title": "Notice of Examination, New York City Bridge Exam No. 5977 (amended Aug. 20, 2025): fee and waiver",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "APPLICATION FEE: $47.00 ... CANDIDATES WHO DEMONSTRATE THAT THEY ARE A VETERAN, UNEMPLOYED, RECEIVING PUBLIC ASSISTANCE, OR SUPPLEMENTARY SECURITY INCOME, ARE ENTITLED TO A WAIVER OF THE APPLICATION FEE.",
     "note": null
    },
    {
     "id": 22,
     "title": "Notice of Examination No. 5977: application period and test date",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "From: June 4, 2025 To: June 24, 2025 ... Multiple-choice and Qualifying Education and Experience testing is expected to begin on Monday, September 15, 2025.",
     "note": null
    },
    {
     "id": 23,
     "title": "Notice of Examination No. 5977: how to apply",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "submit an application on the Online Application System (OASys) at www.nyc.gov/examsforjobs.",
     "note": null
    },
    {
     "id": 24,
     "title": "Notice of Examination No. 5977: Clerical Associate education and experience requirements",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "A four-year high school diploma or its educational equivalent approved by a State's Department of Education or a recognized accrediting organization and one year of full-time satisfactory clerical experience.",
     "note": null
    },
    {
     "id": 25,
     "title": "Notice of Examination No. 5977: multiple-choice test",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "Your score on this test will be used to determine your place on each eligible list. You must achieve a score of at least 70% to pass the test.",
     "note": null
    },
    {
     "id": 26,
     "title": "Notice of Examination No. 5977: Clerical Associate typing requirement",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "a minimum speed of 100 key strokes (20 words) per minute after errors are deducted. You must meet this requirement in order to be appointed.",
     "note": null
    },
    {
     "id": 27,
     "title": "Notice of Examination No. 5977: list duration",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "Once a list for a City title has been established, it will typically remain active for four years.",
     "note": null
    },
    {
     "id": 28,
     "title": "Notice of Examination No. 5977: appointment interview",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "Your experience, skills, license, and/or certification will be verified at the time of the appointment interview by the appointing agency.",
     "note": null
    },
    {
     "id": 29,
     "title": "Notice of Examination No. 5977: residency",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "you might need to be a resident of the City of New York within 90 days of the date you are appointed to this position.",
     "note": null
    },
    {
     "id": 30,
     "title": "Notice of Examination No. 5977: Clerical Associate salary",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "The current minimum salary is $34,974 per annum. This rate is subject to change.",
     "note": null
    },
    {
     "id": 31,
     "title": "Notice of Examination No. 5977: special circumstances (veterans' credit)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "This guide gives important information about requesting an alternate test date because of religious observance or a special test accommodation for disability, claiming Veterans' or Legacy credit",
     "note": null
    },
    {
     "id": 32,
     "title": "Notice of Examination No. 5977: late filing for provisionals",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "If you are currently provisionally employed by the City of New York, consult your agency's Personnel Office/Human Resources to determine the procedure for filing a late application",
     "note": null
    },
    {
     "id": 33,
     "title": "Notice of Examination No. 5977: probation stated for Child Protective Specialist (not Clerical Associate)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20255977000.pdf",
     "quote": "The probationary period for this title is 18 months. Among other requirements, you will be required to pass the Training Academy test",
     "note": null
    },
    {
     "id": 34,
     "title": "Notice of Examination, Clerical Associate Exam No. 1190 (2021)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20211190000.pdf",
     "quote": "Your score will be determined by an Education and Experience Exam. You will receive a score of 70 points for meeting the education and experience requirements listed above.",
     "note": null
    },
    {
     "id": 35,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 4.2.2 (filing period)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "to be not less than two weeks, during which applications shall be received.",
     "note": null
    },
    {
     "id": 36,
     "title": "Personnel Rules, Rule 4.6.1(c) (establishment of lists)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "The list thus reported shall be officially established only by order of the commissioner of citywide administrative services.",
     "note": null
    },
    {
     "id": 37,
     "title": "Personnel Rules, Rule 4.7.1(c) (certification; one of three)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "shall be made by the selection of one of the three persons certified by the commissioner of citywide administrative services or the head of the certifying agency, as the case may be, as standing highest on such established list",
     "note": null
    },
    {
     "id": 38,
     "title": "Personnel Rules, Rule 4.8.2(b) (failure to respond to offer)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "failure of the eligible to respond to an offer of appointment within the period fixed by the agency head, provided that such period is not less than four days after the date of such offer",
     "note": null
    },
    {
     "id": 39,
     "title": "Personnel Rules, Rule 4.3.2(b) (character and reputation)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "Satisfactory character and reputation shall be deemed a part of the established minimum requirements and qualifications for admission to an examination or for appointment to a position.",
     "note": null
    },
    {
     "id": 40,
     "title": "Personnel Rules, Rule 4.3.1(b) (investigation after appointment)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page",
     "quote": "Investigation of the qualifications and background of an eligible may be made after appointment ... no such certification shall be revoked or appointment terminated more than three years after it is made",
     "note": null
    },
    {
     "id": 41,
     "title": "Personnel Rules, Rule 5.2.1(a) (probationary term)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "Every appointment and promotion to a position in the competitive or labor class shall be for a probationary period of one year unless otherwise set forth in the terms and conditions of the certification",
     "note": null
    },
    {
     "id": 42,
     "title": "Personnel Rules, Rule 5.2.8(a) (extension of probation by consent)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "with the written consent of the probationer, the commissioner of citywide administrative services may authorize the extension of the probationary term for one or more additional periods not exceeding in the aggregate six months",
     "note": null
    },
    {
     "id": 43,
     "title": "Personnel Rules, Rule 5.2.8(b) (probation extended by days away)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the probationary term is extended by the number of days when the probationer does not perform the duties of the position",
     "note": null
    },
    {
     "id": 44,
     "title": "Personnel Rules, Rule 5.2.7(a) (termination at end of probation)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "At the end of the probationary term, the agency head may terminate the employment of any unsatisfactory probationer by notice to such probationer and to the commissioner of citywide administrative services.",
     "note": null
    },
    {
     "id": 45,
     "title": "Personnel Rules, Rule 5.2.7(c) (termination during probation)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the agency head may terminate the employment of any probationer whose conduct and performance is not satisfactory after the completion of a minimum period of probationary service",
     "note": null
    },
    {
     "id": 46,
     "title": "Personnel Rules, Rule 5.2.7(c) (minimum period)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "(1) two months for every appointment to a position in the competitive or labor class and (2) four months for every promotion to a position in the competitive or labor class.",
     "note": null
    },
    {
     "id": 47,
     "title": "Personnel Rules, Rule 5.2.9 (restoration to list)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the commissioner of citywide administrative services has the discretion to and may restore the name of such probationer to the eligible list, if it be in existence.",
     "note": null
    },
    {
     "id": 48,
     "title": "Personnel Rules, Rule 5.5.1 (provisional appointment requirements)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "such non-competitive examination may consist of a review and evaluation of the training, experience and other qualifications of the nominee without written, oral or other performance tests.",
     "note": null
    },
    {
     "id": 49,
     "title": "Personnel Rules, Rule 5.5.2 (provisional duration)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "A provisional appointment shall not continue for a period in excess of nine months.",
     "note": null
    },
    {
     "id": 50,
     "title": "2010-2017 Clerical Agreement (City of New York and District Council 37), Article I",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "The Employer recognizes the Union as the sole and exclusive collective bargaining representative for the bargaining unit set forth below ... [title list includes] Clerical Associate",
     "note": null
    },
    {
     "id": 51,
     "title": "Clerical Agreement, Article VI § 1(e)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "A claimed wrongful disciplinary action taken against a permanent employee covered by Section 75(1) of the Civil Service Law",
     "note": null
    },
    {
     "id": 52,
     "title": "Clerical Agreement, Article VI § 1(g)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "A claimed wrongful disciplinary action taken against an eligible provisional employee of a Mayoral agency who has served without a break in service for two years in the same or similar title",
     "note": null
    },
    {
     "id": 53,
     "title": "Clerical Agreement, Article VI § 5, Step A",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "Following the service of written charges, a conference with such employee shall be held ... shall issue a determination in writing by the end of the fifth day following the date of the conference.",
     "note": null
    },
    {
     "id": 54,
     "title": "Clerical Agreement, Article VI § 5, Step A waiver",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "As a condition of accepting such determination, the employee shall sign a waiver of the employee's right to the procedures available to him or her under Sections 75 and 76 of the Civil Service Law",
     "note": null
    },
    {
     "id": 55,
     "title": "Clerical Agreement, Article VI § 5, Step B(i) default",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "If the employee is not satisfied with the determination at STEP A above then the Employer shall proceed in accordance with the disciplinary procedures set forth in Section 75 of the Civil Service Law",
     "note": null
    },
    {
     "id": 56,
     "title": "Clerical Agreement, Article VI § 5, Step B(i) contractual alternative",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "As an alternative, the Union with the consent of the employee may choose to proceed in accordance with the Grievance Procedure set forth in this Agreement, including the right to proceed to binding arbitration",
     "note": null
    },
    {
     "id": 57,
     "title": "Clerical Agreement, Article VI § 5, Step B(i) suspension cap",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "Notwithstanding such waiver, the period of an employee's suspension without pay pending hearing and determination of charges shall not exceed thirty (30) days.",
     "note": null
    },
    {
     "id": 58,
     "title": "Clerical Agreement, Article VI § 5, Step B(ii) filing deadline",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "The appeal must be made in writing within five (5) work days of the receipt of the determination.",
     "note": null
    },
    {
     "id": 59,
     "title": "Clerical Agreement, Article VI § 5, Step B(ii) decision",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "shall issue a determination to the employee and the Union by the end of the tenth work day following the day on which the appeal was filed.",
     "note": null
    },
    {
     "id": 60,
     "title": "Clerical Agreement, Article VI § 5, skipping Step C",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "In the event of such termination or suspension without pay totaling more than thirty (30) days, the Union with the consent of the grievant may elect to skip STEP C of this Section and proceed directly to STEP D.",
     "note": null
    },
    {
     "id": 61,
     "title": "Clerical Agreement, Article VI § 5, Step C",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "may appeal to the Commissioner of Labor Relations in writing within ten (10) days of the determination ... shall issue a written reply to the grievant and the Union within fifteen (15) work days.",
     "note": null
    },
    {
     "id": 62,
     "title": "Clerical Agreement, Article VI § 5, Step D",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "the Union with the consent of the grievant may proceed to arbitration pursuant to the procedures set forth in STEP IV of the Grievance Procedure",
     "note": null
    },
    {
     "id": 63,
     "title": "Clerical Agreement, Article VI § 2, Step IV",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "may be brought solely by the Union to the Office of Collective Bargaining for impartial arbitration within fifteen (15) work days of receipt of the STEP III determination.",
     "note": null
    },
    {
     "id": 64,
     "title": "Clerical Agreement, Article VI § 3, arbitration award",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "The arbitrator's award shall be final and binding and enforceable in any appropriate tribunal in accordance with Article 75 of the Civil Practice Law and Rules.",
     "note": null
    },
    {
     "id": 65,
     "title": "Clerical Agreement, Article VI § 2, arbitration costs",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "The costs and fees of such arbitration shall be borne equally by the Union and the Employer.",
     "note": null
    },
    {
     "id": 66,
     "title": "Clerical Agreement, Article VI § 16, expedited arbitration",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "disciplinary cases wherein the proposed penalty is a monetary fine of one week or less or written reprimand",
     "note": null
    },
    {
     "id": 67,
     "title": "Clerical Agreement, Article VI § 10, missed employer deadlines",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "If the Employer exceeds any time limit prescribed at any step in the Grievance Procedure, the grievant and/or the Union may invoke the next step of the procedure",
     "note": null
    },
    {
     "id": 68,
     "title": "Clerical Agreement, Article VI § 6, provisional disciplinary procedure",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "all terms of the \"Disciplinary Procedure for Provisional Employees\", as set forth in the agreements between DC 37 and the City of New York dated August 30, 2011 and April 27, 2018, appended to this agreement, shall govern.",
     "note": null
    },
    {
     "id": 69,
     "title": "2017-2021 Memorandum of Agreement, District Council 37 and the City of New York, § 11",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/dc-37mou-2018.pdf",
     "quote": "The terms of the predecessor separate unit agreements shall be continued except as modified pursuant to this 2017-2021 DC 37 MOA.",
     "note": null
    },
    {
     "id": 70,
     "title": "2017-2021 DC 37 MOA, Citywide Modifications, Article IX § 19(a)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/dc-37mou-2018.pdf",
     "quote": "shall be notified, whenever feasible, in writing at least two (2) work days in advance of the day on which the interview or hearing is to be held",
     "note": null
    },
    {
     "id": 71,
     "title": "2017-2021 DC 37 MOA, Citywide Modifications, Article IX § 19(b)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/dc-37mou-2018.pdf",
     "quote": "the employee shall be entitled to be accompanied by a Union representative, or a lawyer: and the employee shall be informed of this right",
     "note": null
    },
    {
     "id": 72,
     "title": "2021-2026 Memorandum of Agreement, District Council 37 and the City of New York, § 1 (term)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/2021-2026/dc-37-2021-2026-moa.pdf",
     "quote": "Term: 5 years, 5 months, and 12 days (65 months and 12 days) 5/26/21 - 11/6/26",
     "note": null
    },
    {
     "id": 73,
     "title": "2021-2026 DC 37 MOA, § 16 (continuation of terms)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/2021-2026/dc-37-2021-2026-moa.pdf",
     "quote": "The terms of the predecessor separate unit agreements shall be continued except as modified pursuant to this 2021-2026 DC 37 MOA.",
     "note": null
    },
    {
     "id": 74,
     "title": "New York City Charter § 1048(1)",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH) (Charter chapter 45-a PDF)",
     "url": "https://www.nyc.gov/assets/oath/downloads/pdf/Charter-Chapter-45-a.pdf",
     "quote": "There shall be an office of administrative trials and hearings which shall conduct adjudicatory hearings for all agencies of the city unless otherwise provided for by executive order, rule, law or pursuant to collective bargaining agreements.",
     "note": null
    },
    {
     "id": 75,
     "title": "OATH Trials Division overview: conferences",
     "publisher": "NYC OATH",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "Most of the cases are initially conferenced by an Administrative Law Judge and cases that are not settled continue to trial before a different Judge.",
     "note": null
    },
    {
     "id": 76,
     "title": "OATH Trials Division overview: recommended decisions",
     "publisher": "NYC OATH",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "OATH's Trials Division prepares recommended fact-findings, legal conclusions, and relief for review by the deciding authority, usually the head of the agency that referred the case.",
     "note": null
    },
    {
     "id": 77,
     "title": "OATH Trials Division overview: standard of proof",
     "publisher": "NYC OATH",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "Petitioners must prove their case by a preponderance of the evidence - the same standard usually applied in civil lawsuits.",
     "note": null
    },
    {
     "id": 78,
     "title": "OATH Trials Division overview: adoption rate",
     "publisher": "NYC OATH",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "In 2016, agency heads adopted 99 percent of OATH's findings.",
     "note": null
    },
    {
     "id": 79,
     "title": "PMMR Fiscal 2025, DCAS chapter: exam results time",
     "publisher": "NYC Mayor's Office of Operations, Preliminary Mayor's Management Report, Fiscal 2025",
     "url": "https://www.nyc.gov/assets/operations/downloads/pdf/pmmr2025/dcas.pdf",
     "quote": "the median time from exam administration to exam results completion for DCAS- administered exams increased 42 percent to 163 days",
     "note": null
    },
    {
     "id": 80,
     "title": "PMMR Fiscal 2025, DCAS chapter: provisional reduction",
     "publisher": "NYC Mayor's Office of Operations, Preliminary Mayor's Management Report, Fiscal 2025",
     "url": "https://www.nyc.gov/assets/operations/downloads/pdf/pmmr2025/dcas.pdf",
     "quote": "This was the last round of Qualified Incumbent Exams (QIEs). DCAS and the City are now in compliance with New York State Civil Service Law § 65(a)",
     "note": null
    },
    {
     "id": 81,
     "title": "PMMR Fiscal 2025, OATH chapter: Trials Division caseload and decision time",
     "publisher": "NYC Mayor's Office of Operations, Preliminary Mayor's Management Report, Fiscal 2025",
     "url": "https://www.nyc.gov/assets/operations/downloads/pdf/pmmr2025/oath.pdf",
     "quote": "cases filed at OATH's Trials Division decreased by 31 percent from the same period last fiscal year (from 1298 to 897) ... (from 37.8 to 26.5 days)",
     "note": null
    },
    {
     "id": 82,
     "title": "Civil Service List (Active): Clerical Associate Exam No. 3120",
     "publisher": "NYC Open Data, Civil Service List (Active), dataset vx8i-nprf (DCAS; rows updated 2026-09-11)",
     "url": "https://data.cityofnewyork.us/resource/vx8i-nprf.json?exam_no=3120",
     "quote": "\"exam_no\":\"3120\" ... \"list_title_desc\":\"CLERICAL ASSOCIATE\" ... \"established_date\":\"2025-04-30T00:00:00.000\",\"anniversary_date\":\"2029-04-30T00:00:00.000\"",
     "note": null
    },
    {
     "id": 83,
     "title": "Civil Service List (Active): Clerical Associate Exam No. 4129",
     "publisher": "NYC Open Data, Civil Service List (Active), dataset vx8i-nprf (DCAS; rows updated 2026-09-11)",
     "url": "https://data.cityofnewyork.us/resource/vx8i-nprf.json?exam_no=4129",
     "quote": "\"exam_no\":\"4129\" ... \"list_title_desc\":\"CLERICAL ASSOCIATE\" ... \"published_date\":\"2025-11-26T00:00:00.000\"",
     "note": null
    },
    {
     "id": 84,
     "title": "Civil Service System",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/employment/civil-service-system.page",
     "quote": "Appointments to competitive class titles can be permanent (if appointed from a civil service list) or provisional.",
     "note": null
    },
    {
     "id": 85,
     "title": "Annual Examination Schedule through June 30, 2025",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/exam-schedules/dcas-annual-examination-schedule-fy2025-application-period-order.pdf",
     "quote": "THE NEW YORK CITY BRIDGE EXAM - CHILD PROTECTIVE SPECIALIST - CLERICAL ASSOCIATE - CLERICAL ASSOCIATE (NYC H+H) ... 5977 Open Competitive",
     "note": null
    },
    {
     "id": 86,
     "title": "Annual Examination Schedule through June 30, 2026",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/exam-schedules/dcas-annual-examination-schedule-fy2026-application-period-order.pdf",
     "quote": "The New York City Bridge Exam - Maintenance Worker - Maintenance Worker (CUNY) - Maintenance Worker (NYC H+H) - Radio Repair Mechanic - Secretary - Secretary (NYC H+H) - Secretary (Prom) 6977",
     "note": null
    },
    {
     "id": 87,
     "title": "DCAS five-year provisional reduction plan",
     "publisher": "New York State Department of Civil Service",
     "url": "https://www.cs.ny.gov/commission/DCAS/index.cfm",
     "quote": "The State Civil Service Commission is to determine whether the plan provides a timely and practicable implementation schedule in order to reduce the number of New York City provisional employees within the five years of the plan.",
     "note": null
    },
    {
     "id": 88,
     "title": "Local 1549 home page (union self-description; not a government source)",
     "publisher": "AFSCME Local 1549, NYC Clerical-Administrative Employees",
     "url": "https://afscmeatwork.org/local-1549-nyc-clerical-administrative-employees",
     "quote": "We are 311 call center operators, Clerical Associates, Eligibility Specialists, Police Administrative Aides and more.",
     "note": null
    },
    {
     "id": 89,
     "title": "Civil Service Law § 75 (official nysenate.gov text)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "",
     "note": "Not retrieved: nysenate.gov returned a Cloudflare challenge page to every request; statute text was taken from the NewYork.Public.Law mirror, which cites nysenate.gov as its source."
    },
    {
     "id": 90,
     "title": "Clerical Agreement, cover memo (contract term)",
     "publisher": "NYC Office of Labor Relations (OLR)",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/clerical-executed-contract-2010-2017.pdf",
     "quote": "SUBJECT: EXECUTED CONTRACT: CLERICAL TERM: MARCH 3, 2010 TO SEPTEMBER 25, 2017",
     "note": null
    }
   ],
   "caveats": [
    "Title choice: Clerical Associate (title code 10251) was chosen because it is a competitive-class, open-competitive title listed in Article I of the District Council 37 Clerical Agreement and was tested as recently as the 2025 Bridge Exam. The 'largest DC 37 local' framing for Local 1549 is not confirmed by an official source.",
    "Contract currency: the most recent full Clerical unit agreement posted by the Office of Labor Relations runs March 3, 2010 to Sept. 25, 2017. Its terms are carried forward by § 11 of the 2017-2021 DC 37 memorandum and § 16 of the 2021-2026 DC 37 memorandum, which only changes economic terms. That memorandum's term ends Nov. 6, 2026, so the procedure could change in the next round. No successor unit agreement was found on the OLR site.",
    "Contract quotes come from the PDF's scanned text layer; obvious OCR errors were corrected in the quotes (for example 'hy' to 'by', 'live' to 'five', '75( I)' to '75(1)').",
    "The Clerical Agreement's disciplinary procedure (Article VI § 5) has Steps A, B, C and D. It has no separate 'OATH conference' step; in this summary, the OATH settlement conference falls inside the statutory Section 75 track, per OATH's own description of its practice.",
    "Probation length: the 2025 notice states an 18-month probation only for Child Protective Specialist (source 33) and gives none for Clerical Associate, so the one-year default in Personnel Rule 5.2.1 is shown. That is an inference from the rule, not a title-specific statement.",
    "The minimum service before a probationer can be terminated mid-probation is two months for an original appointment (Personnel Rule 5.2.7(c)), not two weeks.",
    "The 163-day median covers all DCAS-administered exams and measures time to 'exam results completion', which may not equal the date a list is formally established. The 20-month figure in end_to_end adds official clocks together; it is not a measured figure.",
    "Exam format changes over time: the 2021 Clerical Associate exam (No. 1190) was scored on education and experience alone with a $40 fee, and the 2025 Bridge Exam added a multiple-choice test and a $47 fee. The fiscal 2026 Bridge Exam (No. 6977) schedule does not list Clerical Associate.",
    "OATH statistics cover all Trials Division case types, not only employee discipline, and none are specific to DC 37 or Clerical Associates.",
    "The New York City residency requirement is described from the exam notice's summary of Administrative Code § 12-120; the Code itself was not fetched.",
    "Civil Service Law text comes from the NewYork.Public.Law mirror (which cites nysenate.gov, verified Sept. 5, 2026) because nysenate.gov served a bot-check page to every request.",
    "Not confirmed: Application and test dates for Clerical Associate Exam No. 3120 and Exam No. 4129: the notices were not found at nyc.gov (404) or in the Wayback Machine, so exam-to-list time for Clerical Associate specifically could not be calculated.",
    "Not confirmed: Whether a Clerical Associate list from Exam No. 5977 has been established: the Open Data API returned 'service unavailable' or no rows for that exam number.",
    "Not confirmed: Current provisional headcount: counts of 23,052 (February 2016) and about 16,821 (December 2018) appeared only in search snippets of DCAS progress reports and were not confirmed from a fetched document.",
    "Not confirmed: Text of the 'Disciplinary Procedure for Provisional Employees' (DC 37 agreements of Aug. 30, 2011 and April 27, 2018): Article VI § 6 of the contract refers to it, but the text was not in the posted PDF and was not found separately.",
    "Not confirmed: NYC Civil Service Commission disciplinary-appeal page (nyc.gov/site/csc/appeals/disciplinary-appeals.page) returned 404; the appeal procedure is sourced to Civil Service Law § 76 only.",
    "Not confirmed: OATH rules of practice (48 RCNY) and Office of Collective Bargaining arbitration rules (61 RCNY) were not fetched, so no rule-level clocks for OATH conferences or arbitration scheduling are given.",
    "Not confirmed: Local 1549 as the 'largest' DC 37 local: not confirmed from an official or union source that was fetched.",
    "Not confirmed: Legacy credit (named in the exam notice) was not researched."
   ]
  },
  "police": {
   "short": "Police officer",
   "btn": "Police",
   "long": "New York City police officer",
   "stats": [
    {
     "num": "24 mo.",
     "lbl": "Probation, extendable by six months",
     "src": [
      15
     ]
    },
    {
     "num": "18 mo.",
     "lbl": "Deadline to bring charges, unless the act is a crime",
     "src": [
      7
     ]
    },
    {
     "num": "420 days",
     "lbl": "Average Department Advocate case, 2022-24",
     "src": [
      24
     ]
    },
    {
     "num": "56",
     "lbl": "Members forced out of the department in 2024",
     "src": [
      24
     ]
    }
   ],
   "hiring": {
    "title": "A police officer is tested, ranked, screened and trained for about three years before earning tenure",
    "subtitle": "From the civil service exam to the end of the 24-month probation, per the current exam notice and NYPD hiring materials.",
    "nodes": [
     {
      "type": "step",
      "title": "Apply for the Police Officer exam",
      "body": "The Department of Citywide Administrative Services (DCAS) opens a new Police Officer exam about once a month, applied for online through its Online Application System. The current notice (exams 7311-7322) charges no application fee; a $75 fingerprint fee is due at the investigation stage.",
      "time": "About 2-week application window, monthly from July 2026 to June 2027",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "Civil Service Law § 50",
      "src": [
       1,
       5
      ]
     },
     {
      "type": "step",
      "title": "Meet the entry requirements",
      "body": "By appointment a candidate needs a high school diploma plus 24 college credits (2.0 average) or two years of honorable full-time military service, U.S. citizenship and a valid New York State driver license. The candidate must be at least 17 to test, at least 20 years and 6 months to be appointed, and must not have turned 35 by the first day of the application period; military time can reduce the counted age by up to seven years. State law sets a floor of 20 and a ceiling of 43 and lets cities set stricter limits.",
      "time": "Residency and license can be met within 30 days of appointment",
      "time_basis": "official",
      "who": "Candidate",
      "law": "Civil Service Law § 58; Public Officers Law residency rule cited in the exam notice",
      "src": [
       1,
       2,
       13
      ]
     },
     {
      "type": "step",
      "title": "Take the computer-based test",
      "body": "The multiple-choice test is taken at a DCAS computer-based testing center. A score of at least 70% is needed to pass.",
      "time": "Testing runs about 2 to 3 weeks after the application window closes",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "Exam notice",
      "src": [
       1
      ]
     },
     {
      "type": "step",
      "title": "Get ranked on the eligible list",
      "body": "Passing candidates are placed on an eligible list in final score order. Veterans' preference and legacy credits (for a parent or sibling who died in the line of duty) can be added, as can 10 points for New York City residency; all must be claimed before the list is established.",
      "time": "DCAS says a list is usually active for four years; state law allows one to four years",
      "time_basis": "statutory",
      "who": "DCAS",
      "law": "Civil Service Law § 56",
      "src": [
       1,
       3,
       13
      ]
     },
     {
      "type": "step",
      "title": "Be certified and selected",
      "body": "DCAS certifies names from the list in rank order to the Police Department, which must choose from among the three highest-standing candidates willing to accept.",
      "time": "",
      "time_basis": "statutory",
      "who": "DCAS; NYPD",
      "law": "Civil Service Law § 61",
      "src": [
       4
      ]
     },
     {
      "type": "step",
      "title": "Complete candidate assessment",
      "body": "At the NYPD Candidate Assessment Center the candidate goes through character pre-screening and fingerprinting, a medical exam, written and oral psychological exams, a background investigation, a drug and alcohol screening and the Job Standards Test, a six-station physical test that must be finished in 4 minutes 28 seconds.",
      "time": "NYPD says hiring takes 6 months to 1 year on average, and anywhere from 2 months to 4 years",
      "time_basis": "official",
      "who": "Candidate; NYPD Candidate Assessment Division",
      "law": "Civil Service Law § 58(1)(c)-(d)",
      "src": [
       11,
       12,
       13,
       1
      ]
     },
     {
      "type": "fork",
      "question": "Does the candidate pass every phase?",
      "lanes": [
       {
        "label": "No: disqualified",
        "nodes": [
         {
          "type": "end",
          "title": "Removed from consideration",
          "body": "Felony and domestic violence misdemeanor convictions are statutory bars. Before disqualification, state law requires a written statement of reasons and a chance to respond; the NYPD can ask DCAS to remove a candidate who fails the psychological or moral character standards, and DCAS must comply.",
          "src": [
           1,
           5,
           2
          ],
          "tone": "bad"
         }
        ]
       },
       {
        "label": "Yes: cleared",
        "nodes": [
         {
          "type": "step",
          "title": "Appointed and sent to the Police Academy",
          "body": "The candidate is appointed a probationary police officer and trains at the Police Academy.",
          "time": "About 6 months",
          "time_basis": "official",
          "who": "NYPD",
          "law": "",
          "src": [
           11
          ]
         }
        ]
       }
      ]
     },
     {
      "type": "step",
      "title": "Serve probation",
      "body": "Every original appointment is probationary. For police officers, entry-level probation is two years of full-duty status, and the officer is drug tested at the end of it. It can be extended by six months for an investigation, a disciplinary matter or poor performance, and it is also lengthened day for day by time off full duty.",
      "time": "24 months of full duty, plus up to 6-month extension",
      "time_basis": "official",
      "who": "Probationary officer; NYPD",
      "law": "Civil Service Law § 63; Personnel Rules 5.2.1 and 5.2.8",
      "src": [
       15,
       11,
       6,
       14,
       1
      ]
     },
     {
      "type": "end",
      "title": "Tenured police officer",
      "body": "After completing probation the officer can be disciplined or fired only on written charges after a hearing, with the police commissioner deciding the penalty.",
      "src": [
       16,
       15
      ],
      "tone": "good"
     }
    ],
    "end_to_end": {
     "text": "Application and testing take about a month and a half. Per the NYPD, the hiring process that follows averages 6 months to 1 year (as short as 2 months, as long as 4 years). Then come about 6 months of academy training within a 24-month probation, so tenure usually comes at least three years after the test.",
     "src": [
      1,
      11,
      15
     ]
    }
   },
   "firing": {
    "title": "Only the police commissioner can fire a tenured officer, and only after charges and a department trial",
    "subtitle": "A probationer can be dismissed without a hearing. After probation, the case runs through the Department Advocate or the Civilian Complaint Review Board.",
    "nodes": [
     {
      "type": "step",
      "title": "An allegation is investigated",
      "body": "Complaints of excessive force, abuse of authority, discourtesy or offensive language (known as FADO) go to the independent Civilian Complaint Review Board (CCRB). Corruption and other misconduct are investigated by the NYPD, led by the Internal Affairs Bureau. Criminal cases can run in parallel with district attorneys.",
      "time": "No statutory deadline for the investigation itself, but see the 18-month charging limit",
      "time_basis": null,
      "who": "CCRB; NYPD Internal Affairs Bureau",
      "law": "NYC Charter § 440",
      "src": [
       20,
       15
      ]
     },
     {
      "type": "fork",
      "question": "Is the officer still on entry-level probation?",
      "lanes": [
       {
        "label": "Yes: probationary officer",
        "nodes": [
         {
          "type": "step",
          "title": "Dismissed without a hearing",
          "body": "The Police Department can summarily dismiss a probationary officer without a formal hearing, including for conduct that would not get a tenured officer fired. The Risk Management Bureau makes the recommendation to the police commissioner, and DCAS rules let an agency head end an unsatisfactory probationer's employment by written notice.",
          "time": "Any time during the 2-year probation or its extension",
          "time_basis": "rule",
          "who": "Police commissioner; Risk Management Bureau",
          "law": "Personnel Rules 5.2.7 and 5.2.8; Matter of Swinton v Safir (1999)",
          "src": [
           15,
           14
          ]
         },
         {
          "type": "end",
          "title": "Limited court review",
          "body": "The Court of Appeals has held that a probationary officer can be let go for almost any reason, or none, unless the firing was in bad faith or for an improper reason. The only way to challenge it is a CPLR Article 78 petition filed within four months.",
          "src": [
           23,
           9
          ],
          "tone": "neutral"
         }
        ]
       },
       {
        "label": "No: tenured officer",
        "nodes": [
         {
          "type": "fork",
          "question": "Who prosecutes the case?",
          "lanes": [
           {
            "label": "CCRB-substantiated FADO case",
            "nodes": [
             {
              "type": "step",
              "title": "CCRB's Administrative Prosecution Unit prosecutes",
              "body": "The CCRB drafts charges, which the Department Advocate serves on its behalf, and its Administrative Prosecution Unit tries the case. The police commissioner can keep a case away from the CCRB only where there is a related criminal probe or, for an officer with a clean record, where prosecution would not serve the interests of justice. The CCRB can object within five business days and the commissioner can override within five more.",
              "time": "5 business days to object; 5 to override",
              "time_basis": "rule",
              "who": "CCRB; police commissioner",
              "law": "38-A RCNY § 1-42",
              "src": [
               21
              ]
             }
            ]
           },
           {
            "label": "All other misconduct",
            "nodes": [
             {
              "type": "step",
              "title": "Department Advocate's Office prosecutes",
              "body": "The NYPD Department Advocate's Office reviews substantiated allegations, files charges and specifications and prosecutes the case.",
              "time": "",
              "time_basis": "official",
              "who": "Department Advocate's Office",
              "law": "Admin Code § 14-115(b)",
              "src": [
               15,
               16
              ]
             }
            ]
           }
          ]
         },
         {
          "type": "step",
          "title": "Charges served within 18 months",
          "body": "Written charges must be brought within 18 months of the misconduct. That limit does not apply if the conduct would be a crime.",
          "time": "18 months from the incident",
          "time_basis": "statutory",
          "who": "Prosecutor (Department Advocate's Office or CCRB)",
          "law": "Civil Service Law § 75(4); Admin Code § 14-115(b)",
          "src": [
           7,
           15
          ]
         },
         {
          "type": "step",
          "title": "Possible suspension without pay",
          "body": "While charges are pending the commissioner can suspend the officer without pay for up to 30 days. An officer who is not found guilty gets back pay.",
          "time": "Up to 30 days unpaid",
          "time_basis": "statutory",
          "who": "Police commissioner",
          "law": "Civil Service Law § 75(3-a); Admin Code § 14-123",
          "src": [
           7,
           17
          ]
         },
         {
          "type": "step",
          "title": "Settle or go to a department trial",
          "body": "The officer can settle or take the case to a public trial before the Deputy Commissioner of Trials or an Assistant Deputy Commissioner of Trials. The prosecutor must prove the charges by a preponderance of the evidence, and the trial judge then sends findings and a recommended penalty to the commissioner.",
          "time": "In 2024 the average case was on the trials docket 92 days, and reports followed trials by 29 days on average",
          "time_basis": "official",
          "who": "Trial commissioner; officer and counsel; prosecutor",
          "law": "Civil Service Law § 75(1)-(2); Admin Code § 14-115(b)",
          "src": [
           15,
           24,
           25
          ]
         },
         {
          "type": "step",
          "title": "Police commissioner decides the penalty",
          "body": "The commissioner has final authority over discipline. Guilty findings can end in termination; forced separation (resignation or retirement, including vested-interest retirement, in lieu of termination); or dismissal probation, where the firing is deferred for a year and any new misconduct in that year can mean summary dismissal. The penalty matrix is advisory, and deviations must be explained in writing and reported each year. Under a 2006 Court of Appeals ruling, discipline cannot be bargained into arbitration.",
          "time": "",
          "time_basis": "statutory",
          "who": "Police commissioner",
          "law": "NYC Charter § 434; Admin Code §§ 14-115, 14-186; PBA v PERB (2006)",
          "src": [
           19,
           16,
           15,
           18,
           22
          ]
         },
         {
          "type": "end",
          "title": "Court review under Article 78",
          "body": "A fired officer can challenge the commissioner's final decision in state court under CPLR Article 78 within four months after it becomes final. A felony conviction, or conviction of a crime that violates the oath of office, vacates the job by operation of law, without a separate disciplinary case.",
          "src": [
           9,
           8,
           10,
           15
          ],
          "tone": "neutral"
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": null,
    "aside": null
   },
   "sources": [
    {
     "id": 1,
     "title": "Notice of Examination: Police Officer, Exam Nos. 7311-7322",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20277312000.pdf",
     "quote": "If you pass the multiple-choice test, your name will be placed on an eligible list in final score order. ... This eligible list determines the order of candidates considered for appointment, usually active for four years.",
     "note": null
    },
    {
     "id": 2,
     "title": "N.Y. Civil Service Law § 58, Requirements for appointment of certain police officers",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_58",
     "quote": "they are not less than twenty years of age as of the date of appointment nor more than forty-three years of age as of the date when the applicant takes the written examination",
     "note": null
    },
    {
     "id": 3,
     "title": "N.Y. Civil Service Law § 56, Establishment and duration of eligible lists",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_56",
     "quote": "The duration of an eligible list shall be fixed at not less than one nor more than four years",
     "note": null
    },
    {
     "id": 4,
     "title": "N.Y. Civil Service Law § 61, Appointment and promotion",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_61",
     "quote": "shall be made by the selection of one of the three persons certified by the appropriate civil service commission as standing highest on such eligible list who are willing to accept such appointment",
     "note": null
    },
    {
     "id": 5,
     "title": "N.Y. Civil Service Law § 50, Examinations generally",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_50",
     "quote": "written statement of the reasons therefor and afforded an opportunity to make an explanation and to submit facts in opposition to such disqualification.",
     "note": null
    },
    {
     "id": 6,
     "title": "N.Y. Civil Service Law § 63, Probationary term",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_63",
     "quote": "Every original appointment to a position in the competitive class ... shall be for a probationary term",
     "note": null
    },
    {
     "id": 7,
     "title": "N.Y. Civil Service Law § 75, Removal and other disciplinary action",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "a police officer employed by the police department of the city of New York may be suspended without pay for a period not exceeding thirty days.",
     "note": null
    },
    {
     "id": 8,
     "title": "N.Y. Civil Service Law § 76, Appeals from determinations in disciplinary proceedings",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_76",
     "quote": "or by an application to the court in accordance with the provisions of article seventy-eight of the civil practice law and rules.",
     "note": null
    },
    {
     "id": 9,
     "title": "N.Y. Civil Practice Law and Rules § 217",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._civil_practice_law_and_rules_section_217",
     "quote": "a proceeding against a body or officer must be commenced within four months after the determination to be reviewed becomes final and binding upon the petitioner",
     "note": null
    },
    {
     "id": 10,
     "title": "N.Y. Public Officers Law § 30, Creation of vacancies",
     "publisher": "New York State Legislature (via NewYork.Public.Law mirror)",
     "url": "https://newyork.public.law/laws/n.y._public_officers_law_section_30",
     "quote": "His or her conviction of a felony, conviction of a crime involving a violation of his or her oath of office",
     "note": null
    },
    {
     "id": 11,
     "title": "Police Officer Hiring FAQs",
     "publisher": "New York City Police Department",
     "url": "https://www.nyc.gov/site/nypd/careers/police-officers/OLD-faqs-hiring-pos.page",
     "quote": "The average length of time it takes a candidate to be hired is 6 months to 1 year. However, the process can take as little as 2 months or last as long as 4 years.",
     "note": null
    },
    {
     "id": 12,
     "title": "Police Officer Hiring",
     "publisher": "New York City Police Department",
     "url": "https://www.nyc.gov/site/nypd/careers/police-officers/OLD-po-hiring.page",
     "quote": "Candidates must finish this continuous physical test in 4 minutes and 28 seconds to pass",
     "note": null
    },
    {
     "id": 13,
     "title": "Police Officer Candidate Resource Booklet (v3)",
     "publisher": "New York City Police Department, Candidate Assessment Division",
     "url": "https://www.nyc.gov/assets/nypd/downloads/pdf/careers/po-candidate-resource-booklet-v3.pdf",
     "quote": "The process of becoming a police officer consists of five separate phases. They are: the written exam, a medical exam, a background investigation, a psychological examination (written and oral), and a job standards test.",
     "note": null
    },
    {
     "id": 14,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "At the end of the probationary term, the agency head may terminate the employment of any unsatisfactory probationer by notice to such probationer and to the commissioner of citywide administrative services.",
     "note": null
    },
    {
     "id": 15,
     "title": "NYPD Disciplinary System Penalty Guidelines (effective Sept. 9, 2024)",
     "publisher": "New York City Police Department",
     "url": "https://www.nyc.gov/assets/nypd/downloads/pdf/public_information/nypd_disciplinary_system_penalty_guidelines_effective_09-09-2024.pdf",
     "quote": "Members on entry-level probation who are the subject of a disciplinary matter can be terminated and the Department may summarily dismiss the member of the service without a formal hearing.",
     "note": null
    },
    {
     "id": 16,
     "title": "NYC Administrative Code § 14-115, Discipline of members",
     "publisher": "NYC (American Legal Publishing text, read via BetaNYC nyc-charter mirror)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-216127",
     "quote": "to punish the offending party by reprimand, forfeiting and withholding pay for a specified time, suspension, without pay during such suspension, or by dismissal from the force",
     "note": null
    },
    {
     "id": 17,
     "title": "NYC Administrative Code § 14-123, Suspension of members of force",
     "publisher": "NYC (American Legal Publishing text, read via BetaNYC nyc-charter mirror)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-24981",
     "quote": "The commissioner shall have power to suspend, without pay, pending the trial of charges, any member of the force.",
     "note": null
    },
    {
     "id": 18,
     "title": "NYC Administrative Code § 14-186, Internal disciplinary matrix",
     "publisher": "NYC (American Legal Publishing text, read via BetaNYC nyc-charter mirror)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-124304",
     "quote": "Nothing in this section shall be construed to limit the discretion of the commissioner to impose discipline, and the commissioner may modify the disciplinary matrix at any time.",
     "note": null
    },
    {
     "id": 19,
     "title": "New York City Charter § 434, Commissioner; powers and duties",
     "publisher": "NYC (American Legal Publishing text, read via BetaNYC nyc-charter mirror)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1616#JD_434",
     "quote": "The commissioner shall have cognizance and control of the government, administration, disposition and discipline of the department, and of the police force of the department.",
     "note": null
    },
    {
     "id": 20,
     "title": "New York City Charter § 440, Public complaints against members of the police department",
     "publisher": "NYC (American Legal Publishing text, read via BetaNYC nyc-charter mirror)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1616#JD_440",
     "quote": "complaints ... that allege misconduct involving excessive use of force, abuse of authority including bias-based policing and racial profiling, discourtesy, or use of offensive language",
     "note": null
    },
    {
     "id": 21,
     "title": "Rules of the City of New York, Title 38-A (Civilian Complaint Review Board)",
     "publisher": "NYC Civilian Complaint Review Board",
     "url": "https://www.nyc.gov/assets/ccrb/downloads/pdf/Rules_Title%2038-A_%20Civilian%20Complaint%20Review%20Board.pdf",
     "quote": "The Civilian Complaint Review Board may reject such request to refrain from Prosecution within five business days of receipt of such request.",
     "note": null
    },
    {
     "id": 22,
     "title": "Matter of Patrolmen's Benevolent Assn. of City of N.Y. v New York State Pub. Empl. Relations Bd., 6 NY3d 563 (2006)",
     "publisher": "New York Court of Appeals (via Cornell LII)",
     "url": "https://www.law.cornell.edu/nyctap/I06_0032.htm",
     "quote": "Police discipline may not be a subject of collective bargaining under the Taylor Law when the Legislature has expressly committed disciplinary authority over a police department to local officials.",
     "note": null
    },
    {
     "id": 23,
     "title": "Matter of Swinton v Safir, 93 NY2d 758 (1999)",
     "publisher": "New York Court of Appeals (via Cornell LII)",
     "url": "https://www.law.cornell.edu/nyctap/I99_0133.htm",
     "quote": "may be dismissed for almost any reason, or for no reason at all ... bad faith or for an improper or impermissible reason",
     "note": null
    },
    {
     "id": 24,
     "title": "Discipline in the NYPD 2024",
     "publisher": "New York City Police Department",
     "url": "https://www.nyc.gov/assets/nypd/downloads/pdf/analysis_and_planning/discipline/2024%20Discipline%20Report_V9.pdf",
     "quote": "The Department forcefully separated 56 MOS in 2024, a decrease of 29.5% compared to the 78 separated in 2023.",
     "note": null
    },
    {
     "id": 25,
     "title": "Administrative Prosecution Unit Report, 2025 Q4",
     "publisher": "NYC Civilian Complaint Review Board",
     "url": "https://www.nyc.gov/assets/ccrb/downloads/pdf/prosecution_pdf/apu_quarterly_reports/APUReport2025Q4.pdf",
     "quote": "The APU prosecutes cases before the NYPD Deputy Commissioner of Trials (DCT) or an Assistant Deputy Commissioner of Trials (ADCT).",
     "note": null
    }
   ],
   "caveats": [
    "The NYPD's own pages disagree with the current DCAS exam notice. The FAQ and the older candidate booklet list 60 college credits and a minimum appointment age of 21; the notice for exams 7311-7322 says 24 credits and 20 years 6 months. The flowchart uses the notice, since it governs the exam.",
    "The NYPD hiring and FAQ pages carry 'OLD-' in their URLs. They were live on 2026-09-11, but some figures (the 6-month academy, the 6-month-to-1-year hiring average) may predate the current exam series.",
    "How far military service can lower a candidate's counted age varies by source: up to 7 years (DCAS notice), up to 6 (Civil Service Law § 58) and 4 to 6 (NYPD booklet).",
    "Quotes from the two Court of Appeals cases (sources 22 and 23) and from the two NYPD web pages (11 and 12) came back through a web-fetch tool that extracts text rather than showing the raw page. Check them against the full opinions before publication. The Swinton quote joins two phrases the court was quoting from earlier precedent.",
    "The Administrative Code and Charter text came from the BetaNYC nyc-charter mirror of the American Legal Publishing code, not from amlegal.com directly; the source URLs point to the amlegal index pages.",
    "Nysenate.gov blocked automated fetches, so state statutes were read on the NewYork.Public.Law mirror.",
    "The penalty guidelines effective Sept. 9, 2024 were the latest version found; no 2025 or 2026 revision turned up in searches.",
    "Stats on case durations and separations include civilian members of the service where noted; they are NYPD-reported figures.",
    "Not confirmed: PBA collective bargaining agreement provisions on discipline: the contract was not fetched from the Office of Labor Relations. The flowchart relies on the 2006 Court of Appeals decision for the bar on bargaining over discipline.",
    "Not confirmed: Whether an NYPD officer can appeal to the NYC Civil Service Commission under Civil Service Law § 76 instead of going to court. NYPD officers are disciplined under Admin Code § 14-115 through § 75(3-a), and whether § 76's commission route applies to them was not confirmed, so only Article 78 is shown.",
    "Not confirmed: The CCRB-NYPD memorandum of understanding on the Administrative Prosecution Unit: the rules (38-A RCNY §§ 1-41 to 1-46) were read, but the MOU itself was not.",
    "Not confirmed: Hiring-time statistics from the Mayor's Management Report were not gathered.",
    "Not confirmed: The Public Officers Law provision behind the residency requirement (the exam notice cites 'the New York State Public Officers Law') was not fetched; residency is sourced to the exam notice only.",
    "Not confirmed: An NYPD Patrol Guide or Administrative Guide section on the disciplinary process was not fetched; process steps rely on the penalty guidelines and statutes."
   ]
  },
  "correction": {
   "short": "Correction officer",
   "btn": "Correction",
   "long": "New York City correction officer",
   "stats": [
    {
     "num": "24 mo.",
     "lbl": "Probation",
     "src": [
      28
     ]
    },
    {
     "num": "18 mo.",
     "lbl": "Deadline to bring charges, unless the act is a crime",
     "src": [
      8
     ]
    },
    {
     "num": "73%",
     "lbl": "Discipline cases resolved by plea deal, latest monitor period",
     "src": [
      41
     ]
    },
    {
     "num": "180 days",
     "lbl": "Fastest full case even when the process works, per the federal monitor",
     "src": [
      43
     ]
    }
   ],
   "hiring": {
    "title": "A correction officer passes an exam and five screening gates, then serves a 24-month probation",
    "subtitle": "From the civil service exam to permanent status, per exam notice No. 6303 and Department of Correction hiring materials.",
    "nodes": [
     {
      "type": "step",
      "title": "Apply during the exam filing window",
      "body": "Candidates apply online through DCAS during a set filing period and pay a $68 fee, which can be waived for veterans, unemployed people and people receiving public assistance. Candidates must be at least 17 on the test date.",
      "time": "Filing window about 2 months (Exam 6303: April 1 to May 29, 2026)",
      "time_basis": "official",
      "who": "Candidate; Department of Citywide Administrative Services",
      "law": "Civil Service Law §50(5) (exam fees); DCAS Notice of Examination No. 6303",
      "src": [
       15,
       16,
       1
      ]
     },
     {
      "type": "step",
      "title": "Take the computer-based test",
      "body": "The multiple-choice test is given at a computer terminal. A score of 70% passes, and the score sets the candidate's rank.",
      "time": "Exam 6303 testing expected to begin Aug. 13, 2026, about 2.5 months after filing closed",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "DCAS Notice of Examination No. 6303",
      "src": [
       15,
       25
      ]
     },
     {
      "type": "step",
      "title": "Get ranked on the eligible list",
      "body": "Passing candidates are placed on an eligible list in score order and get a list number. State law says lists last one to four years; DCAS says this list is usually active for four years.",
      "time": "List lasts 1 to 4 years (usually 4); list reaches DOC about 4 to 6 months after the test, per an older DOC handout",
      "time_basis": "statutory",
      "who": "DCAS; Department of Correction",
      "law": "Civil Service Law §56",
      "src": [
       2,
       26,
       31
      ]
     },
     {
      "type": "step",
      "title": "Get called in list order",
      "body": "The city certifies names from the top of the list, and the department must choose among the three highest-ranked candidates willing to accept. DOC's Applicant Investigation Unit calls candidates to start screening.",
      "time": "No fixed clock",
      "time_basis": null,
      "who": "DCAS; DOC Applicant Investigation Unit",
      "law": "Civil Service Law §61(1) (rule of three)",
      "src": [
       3,
       30,
       31
      ]
     },
     {
      "type": "step",
      "title": "Pass the background investigation",
      "body": "Investigators check documents and character, and candidates pay $75 for fingerprinting. People convicted of a felony or a domestic violence misdemeanor can't be appointed; a candidate disqualified on other grounds must get written reasons and a chance to explain.",
      "time": "6 weeks to 6 months for screening, per an older DOC handout",
      "time_basis": "official",
      "who": "DOC Applicant Investigation Unit; candidate",
      "law": "Civil Service Law §50(4); DCAS Notice of Examination No. 6303",
      "src": [
       27,
       21,
       1,
       31
      ]
     },
     {
      "type": "step",
      "title": "Pass the medical, psychological, agility and drug tests",
      "body": "Candidates take a medical exam, a written and oral psychological exam, a qualifying physical (agility) test and a drug screen. Each is a pass-fail gate before appointment.",
      "time": "Part of the screening period",
      "time_basis": "official",
      "who": "DOC; candidate",
      "law": "DCAS Notice of Examination No. 6303",
      "src": [
       22,
       23,
       24,
       30
      ]
     },
     {
      "type": "step",
      "title": "Meet the requirements by appointment day",
      "body": "By the time of appointment a candidate must be 21, a U.S. citizen and a resident of New York City or Nassau, Westchester, Suffolk, Orange, Rockland or Putnam counties. The candidate also needs 39 college credits, or a high school diploma plus six months of qualifying experience such as military or law enforcement service, and at least a New York State learner's permit.",
      "time": "On the date of appointment",
      "time_basis": "official",
      "who": "Candidate",
      "law": "DCAS Notice of Examination No. 6303; Public Officers Law residency requirement (as stated in the notice)",
      "src": [
       16,
       17,
       18,
       19,
       20
      ]
     },
     {
      "type": "step",
      "title": "Get appointed and train at the Correction Academy",
      "body": "Appointment is the first day of pay, and recruits go to the Correction Academy for training. Officers must be certified in state peace officer training within 12 months of appointment, and must get a New York State driver license before graduating.",
      "time": "About 4 months of academy, per DOC's 2024 handout (an older version said 5); peace officer certification within 12 months",
      "time_basis": "official",
      "who": "DOC Correction Academy; recruit",
      "law": "Criminal Procedure Law §2.10(25), §2.30(2)",
      "src": [
       30,
       31,
       12,
       13,
       29,
       20
      ]
     },
     {
      "type": "step",
      "title": "Serve 24 months on probation",
      "body": "Probation lasts 24 months, and a recruit who fails the required training course is terminated. City rules add days on leave or limited duty to the probation period and allow up to six more months with the officer's written consent.",
      "time": "24 months, plus extensions",
      "time_basis": "rule",
      "who": "DOC Commissioner; DCAS Commissioner (for extensions)",
      "law": "Civil Service Law §63; Personnel Rules and Regulations of the City of New York 5.2.1, 5.2.8",
      "src": [
       28,
       4,
       32,
       34
      ]
     },
     {
      "type": "end",
      "title": "Permanent correction officer",
      "body": "An officer who completes probation holds a permanent competitive-class appointment and can be removed only for cause after written charges and a hearing.",
      "src": [
       5
      ],
      "tone": "good"
     }
    ],
    "end_to_end": {
     "text": "DOC's 2024 Candidate Journey handout says a candidate can go from exam to correction officer in about 6 months, and adds that the process can vary by individual. An earlier, undated version of the handout said 12 to 17 months. Probation then runs another 24 months from appointment.",
     "src": [
      30,
      31,
      28
     ]
    }
   },
   "firing": {
    "title": "A permanent correction officer can be fired only after written charges, a trial before a city judge and the commissioner's decision",
    "subtitle": "Most cases settle before trial. Timelines for use-of-force cases are set by the federal Nunez consent judgment.",
    "nodes": [
     {
      "type": "step",
      "title": "Misconduct is reported and investigated",
      "body": "DOC's Investigation Division looks into the allegation. For use-of-force cases, the Nunez consent judgment requires full investigations to finish within 120 days of referral, absent extenuating circumstances.",
      "time": "Up to 120 days (full use-of-force investigations)",
      "time_basis": "official",
      "who": "DOC Investigation Division",
      "law": "Nunez v. City of New York consent judgment §VII ¶9",
      "src": [
       39
      ]
     },
     {
      "type": "fork",
      "question": "Is the officer still on probation?",
      "lanes": [
       {
        "label": "Yes, probationary",
        "nodes": [
         {
          "type": "step",
          "title": "Commissioner ends employment by notice",
          "body": "After at least two months of probationary service, the agency head can terminate a probationer whose conduct or performance is unsatisfactory by notice to the officer and to DCAS. A probationer who fails the required training course can also be terminated. City rules require no hearing.",
          "time": "Any time after 2 months and before probation ends",
          "time_basis": "rule",
          "who": "DOC Commissioner",
          "law": "Personnel Rules and Regulations of the City of New York 5.2.7",
          "src": [
           33,
           28
          ]
         },
         {
          "type": "end",
          "title": "Terminated without a hearing",
          "body": "Under settled New York case law, a probationer has no right to a hearing and can challenge the firing in court only by showing bad faith or an improper or illegal reason.",
          "src": [
           35
          ],
          "tone": "bad"
         }
        ]
       },
       {
        "label": "No, permanent",
        "nodes": [
         {
          "type": "step",
          "title": "Trials Division serves written charges",
          "body": "The officer gets written charges and at least eight days to answer in writing. Charges must be brought within 18 months of the misconduct unless it would be a crime. In use-of-force cases, the Trials Division must make best efforts to serve charges within 30 days of the investigators' recommendation.",
          "time": "Within 18 months of the incident (unless a crime); at least 8 days to answer",
          "time_basis": "statutory",
          "who": "DOC Trials Division; officer",
          "law": "Civil Service Law §75(2), §75(4); Nunez consent judgment §VIII ¶3(c)",
          "src": [
           6,
           8,
           40
          ]
         },
         {
          "type": "step",
          "title": "Possible suspension pending the hearing",
          "body": "The officer can be suspended without pay while charges are pending, but for no more than 30 days. If acquitted, the officer gets back pay for the suspension, less any unemployment benefits.",
          "time": "Up to 30 days without pay",
          "time_basis": "statutory",
          "who": "DOC Commissioner",
          "law": "Civil Service Law §75(3)",
          "src": [
           7
          ]
         },
         {
          "type": "step",
          "title": "Pre-trial conference at OATH",
          "body": "The case is filed with OATH and a judge holds a pre-trial conference aimed at settlement. Most formal discipline cases end in a negotiated plea agreement: 73% in the period covered by the monitor's January 2026 report.",
          "time": "No statutory clock; Nunez expedited cases: conference scheduled within 20 business days of the investigation closing",
          "time_basis": null,
          "who": "DOC Trials Division; officer and union counsel; OATH judge",
          "law": "NYC Charter §1048; Nunez Action Plan §F ¶2",
          "src": [
           36,
           38,
           41
          ]
         },
         {
          "type": "step",
          "title": "Trial before an OATH judge",
          "body": "If the case doesn't settle, an OATH administrative law judge holds a trial, where DOC has the burden of proof. The judge then sends a report and recommendation on facts and penalty to the commissioner.",
          "time": "Use-of-force trials now scheduled within 50 days of the pre-trial conference; reports due within 45 days of the last trial day (OATH practice described by the monitor)",
          "time_basis": "official",
          "who": "OATH administrative law judge; DOC Trials Division; officer",
          "law": "Civil Service Law §75(2); NYC Charter §1048",
          "src": [
           5,
           37,
           42
          ]
         },
         {
          "type": "step",
          "title": "Commissioner decides guilt and penalty",
          "body": "The correction commissioner makes the final decision. Penalties range from a reprimand, a fine of up to $100 or unpaid suspension of up to two months to demotion or dismissal.",
          "time": "No general clock found; Nunez expedited cases: within 15 business days of the report",
          "time_basis": null,
          "who": "DOC Commissioner",
          "law": "Civil Service Law §75(3)",
          "src": [
           9,
           37,
           38
          ]
         },
         {
          "type": "step",
          "title": "Officer chooses one appeal route",
          "body": "The officer can appeal to the New York City Civil Service Commission within 20 days, and that decision is final. Or the officer can sue in state Supreme Court under Civil Practice Law and Rules Article 78, which allows four months.",
          "time": "20 days (Civil Service Commission, plus 3 if served by registered mail) or 4 months (Article 78)",
          "time_basis": "statutory",
          "who": "Officer; New York City Civil Service Commission or state Supreme Court",
          "law": "Civil Service Law §76(1), §76(3); Civil Practice Law and Rules §217(1)",
          "src": [
           10,
           11,
           49,
           50
          ]
         },
         {
          "type": "end",
          "title": "Dismissal stands or is changed",
          "body": "The union contract's grievance and arbitration process excludes disciplinary matters, so discipline goes through this statutory path rather than arbitration. Separately, a felony conviction automatically vacates a public office under state law.",
          "src": [
           46,
           14
          ],
          "tone": "neutral"
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": null,
    "aside": null
   },
   "sources": [
    {
     "id": 1,
     "title": "New York Civil Service Law §50 (examinations; fees; disqualification)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/50",
     "quote": "No person shall be disqualified ... unless he has been given a written statement of the reasons therefor and afforded an opportunity to make an explanation",
     "note": null
    },
    {
     "id": 2,
     "title": "New York Civil Service Law §56 (duration of eligible lists)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/56",
     "quote": "not less than one nor more than four years",
     "note": null
    },
    {
     "id": 3,
     "title": "New York Civil Service Law §61 (appointment from eligible lists)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/61",
     "quote": "shall be made by the selection of one of the three persons certified by the appropriate civil service commission as standing highest on such eligible list who are willing to accept",
     "note": null
    },
    {
     "id": 4,
     "title": "New York Civil Service Law §63 (probationary term)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/63",
     "quote": "municipal civil service commissions shall, subject to the provisions of this section, provide by rule for the conditions and extent of probationary service.",
     "note": null
    },
    {
     "id": 5,
     "title": "New York Civil Service Law §75(1)-(2) (who is protected; hearing officer; burden of proof)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "The hearing upon such charges shall be held by the officer or body having the power to remove ... The burden of proving incompetency or misconduct shall be upon the person alleging the same.",
     "note": null
    },
    {
     "id": 6,
     "title": "New York Civil Service Law §75(2) (written notice; time to answer)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "shall have written notice thereof and of the reasons therefor ... and shall be allowed at least eight days for answering the same in writing",
     "note": null
    },
    {
     "id": 7,
     "title": "New York Civil Service Law §75(3) (suspension pending hearing; restoration if acquitted)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "may be suspended without pay for a period not exceeding thirty days",
     "note": null
    },
    {
     "id": 8,
     "title": "New York Civil Service Law §75(4) (time for commencement of proceedings)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "No removal or disciplinary proceeding shall be commenced more than eighteen months after the occurrence of the alleged incompetency or misconduct",
     "note": null
    },
    {
     "id": 9,
     "title": "New York Civil Service Law §75(3) (penalties)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "a reprimand, a fine not to exceed one hundred dollars ... suspension without pay for a period not exceeding two months, demotion in grade and title, or dismissal from the service",
     "note": null
    },
    {
     "id": 10,
     "title": "New York Civil Service Law §76(1) and (3) (appeals)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/76",
     "quote": "within twenty days after service of written notice of the determination to be reviewed",
     "note": null
    },
    {
     "id": 11,
     "title": "New York Civil Practice Law and Rules §217 (Article 78 time limit)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVP/217",
     "quote": "a proceeding against a body or officer must be commenced within four months after the determination to be reviewed becomes final and binding upon the petitioner",
     "note": null
    },
    {
     "id": 12,
     "title": "New York Criminal Procedure Law §2.10(25) (peace officers)",
     "publisher": "New York State Senate; text confirmed via FindLaw mirror",
     "url": "https://codes.findlaw.com/ny/criminal-procedure-law/cpl-sect-2-10/",
     "quote": "correction officers of any state correctional facility or of any penal correctional institution",
     "note": null
    },
    {
     "id": 13,
     "title": "New York Criminal Procedure Law §2.30(2) (peace officer training)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CPL/2.30",
     "quote": "no person appointed as a peace officer shall exercise the powers of a peace officer, unless he or she has received such certification within twelve months of appointment.",
     "note": null
    },
    {
     "id": 14,
     "title": "New York Public Officers Law §30(1)(e) (vacancy on conviction)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/PBO/30",
     "quote": "His or her conviction of a felony, conviction of a crime involving a violation of his or her oath of office",
     "note": null
    },
    {
     "id": 15,
     "title": "Notice of Examination: Correction Officer, Exam No. 6303 (amended April 29, 2026) - filing and fee",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "From: April 1, 2026 To: May 29, 2026 APPLICATION FEE: $68.00 ... Multiple-choice testing is expected to begin on Thursday, August 13, 2026.",
     "note": null
    },
    {
     "id": 16,
     "title": "Notice of Examination No. 6303 - age requirement",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "You must be at least 17 years of age by the date you take the multiple-choice test. Additionally, you must have attained age 21 to be appointed as a Correction Officer.",
     "note": null
    },
    {
     "id": 17,
     "title": "Notice of Examination No. 6303 - education and experience",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "At least 39 semester credits at an accredited college or university. Satisfactory completion of Academy training will provide an additional 21 semester credits",
     "note": null
    },
    {
     "id": 18,
     "title": "Notice of Examination No. 6303 - citizenship",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "United States citizenship is required at the time of appointment.",
     "note": null
    },
    {
     "id": 19,
     "title": "Notice of Examination No. 6303 - residency",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "The New York State Public Officers Law requires that at the date of appointment, you must be a resident of the City of New York or of Nassau, Westchester, Suffolk, Orange, Rockland or Putnam counties.",
     "note": null
    },
    {
     "id": 20,
     "title": "Notice of Examination No. 6303 - driver license",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "You must possess a New York State learner's permit at the time of appointment and must obtain a valid driver license from the State of New York prior to graduating from the Department of Correction Academy.",
     "note": null
    },
    {
     "id": 21,
     "title": "Notice of Examination No. 6303 - character and background",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "persons convicted of a felony or domestic violence misdemeanor are not eligible for appointment to the title of Correction Officer.",
     "note": null
    },
    {
     "id": 22,
     "title": "Notice of Examination No. 6303 - medical and psychological assessment",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "Medical and psychological guidelines have been established",
     "note": null
    },
    {
     "id": 23,
     "title": "Notice of Examination No. 6303 - physical testing",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "You must pass a qualifying physical test, and may be required to undergo periodic physical testing throughout your career.",
     "note": null
    },
    {
     "id": 24,
     "title": "Notice of Examination No. 6303 - drug testing",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "You must pass a drug screening prior to appointment as a part of a pre-employment screening process.",
     "note": null
    },
    {
     "id": 25,
     "title": "Notice of Examination No. 6303 - the test",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "will be conducted at a computer terminal, and your score will determine your ranking on the eligible list. To pass, you must achieve a minimum score of 70%.",
     "note": null
    },
    {
     "id": 26,
     "title": "Notice of Examination No. 6303 - test results and eligible list",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "your name will be placed on an eligible list in final score order ... usually active for four years.",
     "note": null
    },
    {
     "id": 27,
     "title": "Notice of Examination No. 6303 - investigation",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "The position is subject to investigation before appointment. At the time of investigation, you will be required to pay a $75.00 fee for fingerprint screening.",
     "note": null
    },
    {
     "id": 28,
     "title": "Notice of Examination No. 6303 - probationary period",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "The probationary period is 24 months. As part of the probationary period, you will be required to successfully complete a prescribed training course.",
     "note": null
    },
    {
     "id": 29,
     "title": "Notice of Examination No. 6303 - peace officer status",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20266303000.pdf",
     "quote": "You must satisfy the requirements established by the State of New York for Peace Officers.",
     "note": null
    },
    {
     "id": 30,
     "title": "Candidate Journey (2024 version)",
     "publisher": "NYC Department of Correction (Join the Boldest)",
     "url": "https://www.nyc.gov/assets/jointheboldest/downloads/pdf/Candidate_Journey_2024.pdf",
     "quote": "CANDIDATE TO CORRECTION OFFICER IN 6 MONTHS * ... Candidates who've passed all of these steps go to the Academy for four months",
     "note": null
    },
    {
     "id": 31,
     "title": "Candidate Journey (earlier, undated version)",
     "publisher": "NYC Department of Correction (Join the Boldest)",
     "url": "https://www.nyc.gov/assets/jointheboldest/downloads/pdf/Candidate_Journey.pdf",
     "quote": "CANDIDATE TO CORRECTION OFFICER IN 12-17 months. ... AIU calls candidates to start screening process (6 weeks - 6 months)",
     "note": null
    },
    {
     "id": 32,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5.2.1 (probationary period)",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "shall be for a probationary period of one year unless otherwise set forth in the terms and conditions of the certification for appointment",
     "note": null
    },
    {
     "id": 33,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5.2.7 (termination of probationers)",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "by notice to such probationer and to the commissioner of citywide administrative services",
     "note": null
    },
    {
     "id": 34,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5.2.8 (extension of probation)",
     "publisher": "NYC Department of Citywide Administrative Services",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "may authorize the extension of the probationary term for one or more additional periods not exceeding in the aggregate six months.",
     "note": null
    },
    {
     "id": 35,
     "title": "Matter of Swinton v. Safir, 93 N.Y.2d 758 (1999)",
     "publisher": "New York Court of Appeals (text via vLex mirror; Justia and CourtListener did not return text)",
     "url": "https://case-law.vlex.com/vid/matter-of-swinton-v-887525928",
     "quote": "had no right to challenge the termination by way of a hearing or otherwise, absent a showing that he was dismissed in bad faith or for an improper or impermissible reason.",
     "note": null
    },
    {
     "id": 36,
     "title": "New York City Charter §1048 (Office of Administrative Trials and Hearings)",
     "publisher": "American Legal Publishing (via BetaNYC charter tool)",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-2801#JD_1048",
     "quote": "There shall be an office of administrative trials and hearings which shall conduct adjudicatory hearings for all agencies of the city",
     "note": null
    },
    {
     "id": 37,
     "title": "OATH Trials Division overview",
     "publisher": "NYC Office of Administrative Trials and Hearings",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "OATH's Trials Division prepares recommended fact-findings, legal conclusions, and relief for review by the deciding authority, usually the head of the agency that referred the case.",
     "note": null
    },
    {
     "id": 38,
     "title": "Nunez v. City of New York, Action Plan, §F ¶2 (Document 454, filed 05/17/22)",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/DOC_Action_Plan.pdf",
     "quote": "a pre-trial conference must be scheduled within 20 business days of the closure of the investigation ... The Commissioner must impose the final disciplinary action within 15 business days",
     "note": null
    },
    {
     "id": 39,
     "title": "Nunez Independent Monitor, Status Report, Jan. 13, 2026 (Document 947) - quoting Consent Judgment §VII ¶9",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "ID shall complete all Full ID Investigations by no later than 120 days from the Referral Date, absent extenuating circumstances outside the Department's control",
     "note": null
    },
    {
     "id": 40,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - quoting Consent Judgment §VIII ¶3(c)",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "shall make best efforts to prepare and serve such charges within 30 days of receiving such recommendation.",
     "note": null
    },
    {
     "id": 41,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - dispositions of formal discipline",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "269 cases were resolved. As is typical, most formal discipline cases were resolved via Negotiated Plea Agreements (\"NPA\"; 73%), and very few cases (only two) were resolved via OATH trials.",
     "note": null
    },
    {
     "id": 42,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - OATH trial scheduling",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "OATH began scheduling trials for UOF-related matters within 50 days of the initial pre-trial conference ... all R&Rs must be issued within 45 days of the final trial date.",
     "note": null
    },
    {
     "id": 43,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - timeliness of formal discipline",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "Even when the formal disciplinary process is operating as intended, which is not yet occurring, the timeline to fully resolve a case is at least 180 days.",
     "note": null
    },
    {
     "id": 44,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - pending caseload and case age",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "only 272 cases were pending at the end of the current Monitoring Period ... 67% of the cases that were closed during the current Monitoring Period ... occurred over one year ago.",
     "note": null
    },
    {
     "id": 45,
     "title": "Nunez Monitor Report, Jan. 13, 2026 - table of OATH trials by year",
     "publisher": "U.S. District Court S.D.N.Y. filing, hosted by NYC Department of Correction",
     "url": "https://www.nyc.gov/assets/doc/downloads/pdf/2026-01-13-20th-Monitors-Report.pdf",
     "quote": "Average Days between Pre-Trial Conference and R&R Issued ... 2021 26 147 43 131 320 ... 2024 6 50 2 62 117",
     "note": null
    },
    {
     "id": 46,
     "title": "Executed contract: Correction Officers, Nov. 1, 2011 to Feb. 28, 2019, Article XXI (grievance and arbitration)",
     "publisher": "NYC Office of Labor Relations (via City Record)",
     "url": "https://a856-cityrecord.nyc.gov/Search/GetFile?sectionId=5&requestId=20170127107&requestStatus=Archived&documentId=2344",
     "quote": "provided that, except as otherwise provided in this Section 1a, the term \"grievance\" shall not include disciplinary matters",
     "note": null
    },
    {
     "id": 47,
     "title": "Executed contract: Correction Officers, 2011-2019, Article on health benefits during suspension",
     "publisher": "NYC Office of Labor Relations (via City Record)",
     "url": "https://a856-cityrecord.nyc.gov/Search/GetFile?sectionId=5&requestId=20170127107&requestStatus=Archived&documentId=2344",
     "quote": "Where an employee is suspended without pay prior to disciplinary trial for disciplinary reasons for more than thirty (30) days, the employee shall receive full health and hospitalization benefit coverage",
     "note": null
    },
    {
     "id": 48,
     "title": "COBA Unit Agreement, 2022-2027",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/2021-2026/coba-2022-2027-unit-agreement.pdf",
     "quote": "This agreement fully resolves all unit bargaining matters as set forth in Section 4 of the UOCEA MOA.",
     "note": null
    },
    {
     "id": 49,
     "title": "Filing a disciplinary appeal with the CSC",
     "publisher": "NYC Civil Service Commission",
     "url": "https://www.nyc.gov/site/csc/disciplinary-appeals/filing-a-disciplinary-appeal-with-the-csc.page",
     "quote": "Appeals to the CSC must be filed within twenty (20) days after the agency head's final disciplinary decision.",
     "note": null
    },
    {
     "id": 50,
     "title": "Disciplinary appeals FAQ",
     "publisher": "NYC Civil Service Commission",
     "url": "https://www.nyc.gov/site/csc/appeals/disciplinary-appeals/faq.page",
     "quote": "If you choose to file an appeal with the CSC, the CSC's determination is final and cannot be appealed to the Supreme Court, except in rare circumstances.",
     "note": null
    },
    {
     "id": 51,
     "title": "NYC Correction Officer eligibility FAQs",
     "publisher": "NYC Department of Correction (Join the Boldest)",
     "url": "https://www.nyc.gov/site/jointheboldest/officer/faqs.page",
     "quote": "You must be at least 17 ½ years old to take the test, and must be 21 to enter the Correction Academy.",
     "note": null
    },
    {
     "id": 52,
     "title": "NYC Correction Officer: How to qualify (undated handout)",
     "publisher": "NYC Department of Correction",
     "url": "https://www.nyc.gov/html/doc/downloads/pdf/nyc-co-qualifications.pdf",
     "quote": "You must possess a motor vehicle driver license valid in the State of New York at the time of appointment.",
     "note": null
    }
   ],
   "caveats": [
    "The exam notice for Exam No. 6303 (amended April 29, 2026) is treated as the controlling statement of candidate requirements. Two older DOC documents differ: the Join the Boldest FAQ says the minimum age to test is 17 1/2 (the notice says 17), and an undated DOC handout requires a full driver license and 60 college credits at appointment (the notice requires a learner's permit and 39 credits, with the academy adding 21). Sources 51 and 52 are kept only to document the discrepancy.",
    "Hiring durations come from two DOC 'Candidate Journey' handouts: the 2024 version says about 6 months with a four-month academy, and an older undated version says 12 to 17 months with a five-month academy. Both say timing varies by individual. No statute sets these clocks.",
    "The 24-month probation comes from the exam notice. Personnel Rule 5.2.1 sets a one-year default 'unless otherwise set forth in the terms and conditions of the certification.' I did not find the specific DCAS determination that sets 24 months for this title.",
    "The Nunez Action Plan's expedited timelines (investigation within 30 business days, referral and pre-trial conference within 20, OATH adjudication within 35, commissioner's decision within 15) apply only to cases identified for expedited handling: conduct that would merit termination and egregious conduct risking serious harm. They are not general deadlines. The 120-day investigation and 30-day charge-service standards come from the consent judgment's use-of-force provisions and apply to use-of-force cases.",
    "The 50-day trial scheduling and 45-day report deadlines are OATH practices for use-of-force cases as described by the Nunez monitor, not published rules I verified. The monitor says the 50-day standard took effect after COBA's Article 78 challenge was dismissed.",
    "The union contract language comes from the 2011-2019 executed contract, the most recent full contract text I found. The 2022-2027 COBA unit agreement on the Office of Labor Relations site is a three-page PDF; only its last page has extractable text, the rest appears to be scanned images, and no OCR tool was available. I can't confirm whether the 2022-2027 agreement changed Article XXI, but its readable page says it resolves unit bargaining matters under the uniformed coalition memorandum of agreement.",
    "Article XXI of the 2011-2019 contract excludes 'disciplinary matters' from the grievance definition in its subsection on agency rules, 'except as otherwise provided in this Section 1a.' I found no provision offering arbitration of Civil Service Law §75 discipline as an alternative.",
    "The 2011-2019 contract provides health coverage when a suspension without pay before trial runs past 30 days, which suggests longer suspensions occur in practice even though Civil Service Law §75(3) caps unpaid suspension at 30 days. I did not verify the legal basis for suspensions longer than 30 days (for example, delays requested by the employee).",
    "Criminal Procedure Law §2.10(25) covers correction officers 'of any penal correctional institution' and does not name the city Department of Correction explicitly. The exam notice separately requires officers to meet state peace-officer requirements.",
    "The Swinton v. Safir quote is from a vLex copy of the Court of Appeals decision because Justia and CourtListener did not return text. It is cited only for the settled rule that probationers can be dismissed without a hearing absent bad faith.",
    "The stats come from the Nunez monitor's report filed Jan. 13, 2026, whose discipline tables cover through June 2025. They are the monitor's figures and I did not independently check them.",
    "Not confirmed: Title code for Correction Officer: not confirmed from an official page.",
    "Not confirmed: Verbatim text of the OATH Rules of Practice (48 RCNY Chapter 1) on pre-trial conferences and the report and recommendation: I found only OATH annotation pages (1-31, 1-50) and the Trials Division overview, not the rule text.",
    "Not confirmed: DOC's own directive on employee discipline and official descriptions of its Trials and Litigation Division and Investigation Division: the DOC units and divisions page did not describe them. Their roles are sourced from the Nunez filings.",
    "Not confirmed: Role of the city Department of Investigation in correction officer discipline: not researched.",
    "Not confirmed: Deadline for the commissioner's final decision outside Nunez expedited cases: no statute or rule found.",
    "Not confirmed: The specific DCAS authority setting the 24-month probation, and whether DOC can extend it beyond Rule 5.2.8's six-month limit.",
    "Not confirmed: Mayor's Management Report hiring figures and academy class sizes: not collected.",
    "Not confirmed: Whether the 2022-2027 COBA unit agreement changed any discipline-related terms: scanned PDF, not readable here.",
    "Not confirmed: Correction Law and 40 RCNY (Board of Correction) provisions: not checked for hiring or firing gates.",
    "Not confirmed: Whether a Civil Service Commission decision is ever reviewable in court: the commission's FAQ says only 'except in rare circumstances,' and §76(3) says its decision is final and not subject to court review. I did not research the exception."
   ]
  },
  "sanitation": {
   "short": "Sanitation worker",
   "btn": "Sanitation",
   "long": "New York City sanitation worker",
   "stats": [
    {
     "num": "31,309",
     "lbl": "Names on the current sanitation worker list",
     "src": [
      18
     ]
    },
    {
     "num": "20 mo.",
     "lbl": "From the close of exam filing to the list, exam No. 2060",
     "src": [
      4,
      18
     ]
    },
    {
     "num": "18 mo.",
     "lbl": "Probation",
     "src": [
      16
     ]
    },
    {
     "num": "156 days",
     "lbl": "Median from filing to judge's report, 33 trials office cases, 2017-25",
     "src": [
      46
     ]
    }
   ],
   "hiring": {
    "title": "The last sanitation worker list took about 20 months to arrive, and appointment requires a commercial driver license",
    "subtitle": "From exam No. 2060 in 2022 through the 18-month probation, per the exam notice and Department of Sanitation hiring pages.",
    "nodes": [
     {
      "type": "step",
      "title": "Apply when the city opens the exam",
      "body": "The Department of Citywide Administrative Services (DCAS) posts a notice of examination and takes online applications. For Exam 2060 the fee was $61 and applicants had to be at least 17½ by the end of the filing period.",
      "time": "Filing window of about three weeks (June 8-30, 2022)",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "Civil Service Law § 54 (age, as cited in the notice)",
      "src": [
       4,
       5,
       1
      ]
     },
     {
      "type": "step",
      "title": "Take the multiple-choice test",
      "body": "The test is given at a computer and a score of at least 70% passes. Ten points are added for candidates who qualify for New York City residency credit.",
      "time": "Testing began Sept. 7, 2022",
      "time_basis": "official",
      "who": "Candidate; DCAS",
      "law": "Notice of Examination No. 2060",
      "src": [
       4,
       6,
       7
      ]
     },
     {
      "type": "step",
      "title": "Get ranked on the eligible list",
      "body": "Passing candidates are placed on the list in final score order and given a list number. The Exam 2060 list holds 31,309 names; it was published July 12, 2023, established Feb. 28, 2024 and runs to Feb. 28, 2028.",
      "time": "About 20 months from the close of filing to list establishment for Exam 2060; lists stay active one to four years",
      "time_basis": "official",
      "who": "DCAS",
      "law": "Notice of Examination No. 2060; NYC Open Data Civil Service List",
      "src": [
       9,
       17,
       18,
       19
      ]
     },
     {
      "type": "step",
      "title": "Wait to be called for the physical test",
      "body": "Candidates are called in list order, and only when the Department of Sanitation (DSNY) is authorized to hire. The notice warns that not every passing candidate may be called; those called pay a $20 fee.",
      "time": "Varies; DSNY publishes no average wait",
      "time_basis": "official",
      "who": "DCAS; DSNY",
      "law": "Notice of Examination No. 2060",
      "src": [
       2,
       3,
       8
      ]
     },
     {
      "type": "step",
      "title": "Pass document review and background investigation",
      "body": "DSNY's Division of Human Resources interviews candidates, checks proof of age, residency and military service and runs a background investigation. By law the city picks from among the three highest-ranked candidates willing to accept.",
      "time": "Before appointment",
      "time_basis": "official",
      "who": "DSNY Division of Human Resources",
      "law": "Civil Service Law § 61(1)",
      "src": [
       15,
       20,
       3
      ]
     },
     {
      "type": "step",
      "title": "Hold a commercial driver license and be 21",
      "body": "By appointment a candidate needs a New York State commercial driver license, Class A or B, with the \"N\" tank endorsement and no \"K\" intrastate-only restriction. DSNY offers a one-week course for $1,200, repaid at $30 a paycheck.",
      "time": "By the date of appointment",
      "time_basis": "official",
      "who": "Candidate; New York State Department of Motor Vehicles; DSNY",
      "law": "Notice of Examination No. 2060",
      "src": [
       10,
       11,
       5,
       1
      ]
     },
     {
      "type": "step",
      "title": "Pass the medical exam and drug tests",
      "body": "DSNY's Medical Division checks that the candidate can perform the job's essential functions. Candidates must pass a drug and alcohol screen plus a federal Department of Transportation drug test, and consent to a federal Clearinghouse query.",
      "time": "Department of Transportation drug test within 30 days before appointment",
      "time_basis": "official",
      "who": "DSNY Medical Division",
      "law": "Federal commercial driver rules, as cited in the notice",
      "src": [
       13,
       12
      ]
     },
     {
      "type": "step",
      "title": "Get appointed; meet the residency rule",
      "body": "The candidate is given a date to start training. For the first two years a sanitation worker must live in New York City or in Nassau or Westchester County.",
      "time": "Residency rule applies for the first two years",
      "time_basis": "official",
      "who": "DSNY",
      "law": "New York State Public Officers Law, as cited in the notice (section not verified)",
      "src": [
       3,
       14
      ]
     },
     {
      "type": "step",
      "title": "Serve an 18-month probation",
      "body": "Probationers must complete a prescribed training course. With the worker's written consent the probation can be extended by up to six months, and it is extended by days spent off the job.",
      "time": "18 months, extendable",
      "time_basis": "official",
      "who": "DSNY; DCAS commissioner (for extensions)",
      "law": "Civil Service Law § 63; Personnel Rules 5.2.1 and 5.2.8",
      "src": [
       16,
       21,
       25
      ]
     },
     {
      "type": "end",
      "title": "Permanent sanitation worker",
      "body": "After probation the worker holds a permanent competitive-class appointment and can be disciplined only after a hearing under Civil Service Law § 75.",
      "src": [
       27,
       16
      ],
      "tone": "good"
     }
    ],
    "end_to_end": {
     "text": "For Exam 2060, filing closed June 30, 2022 and the list was established Feb. 28, 2024, about 20 months later. Calls for the physical test then depend on hiring authorization, and DSNY publishes no average wait. Appointment is followed by an 18-month probation, so a candidate who filed in June 2022 could not be a permanent worker before roughly late 2025 at the earliest.",
     "src": [
      4,
      18,
      2,
      16
     ]
    }
   },
   "firing": {
    "title": "A permanent sanitation worker can be fired only after charges, a trial before a city judge and the commissioner's decision",
    "subtitle": "Probationers can be let go by notice. The union contract adds a borough-level meeting before any summary suspension.",
    "nodes": [
     {
      "type": "step",
      "title": "An incident or complaint",
      "body": "A supervisor or other source reports alleged misconduct. The Administrative Code lets the sanitation commissioner punish uniformed members for offenses including neglect of duty, rule violations, absence without leave and breach of discipline.",
      "time": "Charges must be brought within 18 months unless the conduct would be a crime",
      "time_basis": "statutory",
      "who": "DSNY supervisors; DSNY",
      "law": "Administrative Code § 16-106(a); Civil Service Law § 75(4)",
      "src": [
       36,
       31
      ]
     },
     {
      "type": "fork",
      "question": "Is the worker still on probation?",
      "lanes": [
       {
        "label": "Yes, probationary",
        "nodes": [
         {
          "type": "step",
          "title": "Termination by notice, without a hearing",
          "body": "The agency head can end a probationer's employment by notice at the end of probation, after at least two months of service or on failure of the required training course. Section 75 hearing rights cover permanent employees.",
          "time": "Any time after two months of service through the end of probation",
          "time_basis": "rule",
          "who": "sanitation commissioner; DCAS commissioner (notified)",
          "law": "Personnel Rules 5.2.7(a)-(c); Civil Service Law § 75(1)",
          "src": [
           22,
           23,
           24,
           27
          ]
         },
         {
          "type": "end",
          "title": "Probationer terminated",
          "body": "The DCAS commissioner may, at his or her discretion, restore the person's name to the eligible list if the list still exists.",
          "src": [
           26
          ],
          "tone": "bad"
         }
        ]
       },
       {
        "label": "No, permanent",
        "nodes": [
         {
          "type": "step",
          "title": "Possible suspension pending charges",
          "body": "Under the union contract, a local officer cannot summarily suspend a worker alone; the borough officer-in-charge must first try to resolve it with the worker and a union representative. By statute, suspension without pay pending charges is capped at 30 days.",
          "time": "Up to 30 days without pay",
          "time_basis": "statutory",
          "who": "Borough officer-in-charge; union representative",
          "law": "Civil Service Law § 75(3); Local 831 agreement, Art. X",
          "src": [
           50,
           29
          ]
         },
         {
          "type": "step",
          "title": "DSNY serves written charges",
          "body": "The worker receives written notice of the charges and has at least eight days to answer in writing. DSNY files the case at the Office of Administrative Trials and Hearings (OATH), and the department bears the burden of proof.",
          "time": "At least 8 days to answer; 8 days (personal service) or 13 days (mail) at OATH",
          "time_basis": "statutory",
          "who": "DSNY; worker; union or counsel",
          "law": "Civil Service Law § 75(2); 48 RCNY § 1-24; Charter § 1048",
          "src": [
           28,
           42,
           38,
           46
          ]
         },
         {
          "type": "step",
          "title": "Settlement conference at OATH",
          "body": "An administrative law judge who will not hear the trial conducts a settlement conference. Citywide, 61% of Trials Division cases settled in fiscal 2025.",
          "time": "No fixed rule clock found",
          "time_basis": null,
          "who": "OATH administrative law judge; DSNY; worker",
          "law": "48 RCNY § 1-31(b)",
          "src": [
           39,
           43,
           45
          ]
         },
         {
          "type": "step",
          "title": "Trial and report and recommendation",
          "body": "A different judge hears the case and decides it by a preponderance of the evidence. The judge's findings and recommended penalty go to the agency head.",
          "time": "Fiscal 2025 average: 40.73 business days from record closing to decision (all Trials Division cases)",
          "time_basis": "official",
          "who": "OATH administrative law judge",
          "law": "Civil Service Law § 75(2); Charter § 1048",
          "src": [
           39,
           40,
           41,
           44
          ]
         },
         {
          "type": "step",
          "title": "sanitation commissioner decides",
          "body": "The commissioner makes the final decision and may impose a reprimand, a fine up to $100, suspension without pay up to two months, demotion or dismissal. The cause of any fine, suspension or dismissal is recorded in writing.",
          "time": "No statutory deadline found",
          "time_basis": null,
          "who": "sanitation commissioner",
          "law": "Civil Service Law § 75(3); Administrative Code § 16-106",
          "src": [
           41,
           30,
           36,
           37
          ]
         },
         {
          "type": "fork",
          "question": "How does the worker appeal?",
          "lanes": [
           {
            "label": "Civil Service Commission",
            "nodes": [
             {
              "type": "end",
              "title": "Appeal to the New York City Civil Service Commission",
              "body": "The appeal must be filed within 20 days of the final decision, with extra time if notice came by mail. The commission's decision is final and cannot be reviewed in court.",
              "src": [
               32,
               33,
               52
              ],
              "tone": "neutral"
             }
            ]
           },
           {
            "label": "Court",
            "nodes": [
             {
              "type": "end",
              "title": "Article 78 petition in State Supreme Court",
              "body": "The worker can instead go to court under Article 78 of the Civil Practice Law and Rules. The petition must be filed within four months after the decision becomes final.",
              "src": [
               32,
               35
              ],
              "tone": "neutral"
             }
            ]
           }
          ]
         }
        ]
       }
      ]
     }
    ],
    "end_to_end": null,
    "aside": null
   },
   "sources": [
    {
     "id": 1,
     "title": "Become a Sanitation Worker",
     "publisher": "NYC Department of Sanitation (DSNY)",
     "url": "https://www.nyc.gov/site/dsny/careers/sanitation-workers/become-a-sanitation-worker.page",
     "quote": "By the date of your appointment you MUST: Be at least 21 years old (required to drive interstate)",
     "note": null
    },
    {
     "id": 2,
     "title": "Hiring Process",
     "publisher": "NYC Department of Sanitation (DSNY)",
     "url": "https://www.nyc.gov/site/dsny/careers/sanitation-workers/hiring-process.page",
     "quote": "Candidates will not be called for the physical test until DSNY is authorized to hire new Sanitation Workers. The period of time between the written exam and getting called for the physical exam can vary greatly.",
     "note": null
    },
    {
     "id": 3,
     "title": "Hiring Process",
     "publisher": "NYC Department of Sanitation (DSNY)",
     "url": "https://www.nyc.gov/site/dsny/careers/sanitation-workers/hiring-process.page",
     "quote": "Candidates are called in list-number order off the certified list.",
     "note": null
    },
    {
     "id": 4,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "WHEN TO APPLY: From: June 8, 2022 To: June 30, 2022 APPLICATION FEE: $61.00",
     "note": null
    },
    {
     "id": 5,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "you must be at least 17 ½ years of age by the end of the application period to take this examination. Additionally, you must have attained age 21 to be appointed as a Sanitation Worker.",
     "note": null
    },
    {
     "id": 6,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "The multiple-choice test will be given at a computer terminal. Your score on this test will be used to determine your place on an eligible list. You must achieve a score of at least 70% to pass the test.",
     "note": null
    },
    {
     "id": 7,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "Ten points will be added to the final exam score of those candidates who qualify for New York City Residency Credit.",
     "note": null
    },
    {
     "id": 8,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "If you pass the multiple-choice test, you will be scheduled to take the physical test in score order as vacancies occur. ... Candidates called to the physical test will be required to pay an additional $20.00 fee.",
     "note": null
    },
    {
     "id": 9,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "The eligible list determines the order by which candidates will be considered for appointment. ... Once a list has been established, it will typically remain active for four years.",
     "note": null
    },
    {
     "id": 10,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "By the date of appointment, you must have a valid New York State CDL Class A or B License with an \"N\" Tank Vehicles endorsement; no \"K\" (not valid outside N.Y.S.) Intrastate only restriction",
     "note": null
    },
    {
     "id": 11,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "The one-week CDL training conducted by the DSNY will cost $1200. ... Payroll deductions will commence after appointment at the rate of $30 per pay period",
     "note": null
    },
    {
     "id": 12,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "all potential hires must pass a DOT Drug Test within 30 days before appointment to operate a commercial motor vehicle that requires a CDL license.",
     "note": null
    },
    {
     "id": 13,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "You will be examined by DSNY's Medical Division to determine whether you can perform the essential functions of the position of Sanitation Worker.",
     "note": null
    },
    {
     "id": 14,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "any person employed as a Sanitation Worker in the DSNY to be a resident of the City of New York or of Nassau or Westchester Counties during the first two years of employment.",
     "note": null
    },
    {
     "id": 15,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "candidates will be called for an interview by the DSNY Division of Human Resources for a background investigation and to review all required documents.",
     "note": null
    },
    {
     "id": 16,
     "title": "Notice of Examination: Sanitation Worker, Exam No. 2060 (amended July 19, 2023)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/noes/20222060000.pdf",
     "quote": "Probationary Period: The probationary period is eighteen months. ... As part of the probationary period, probationers must successfully complete a prescribed training course.",
     "note": null
    },
    {
     "id": 17,
     "title": "Civil Service List (Active), dataset vx8i-nprf, description",
     "publisher": "NYC Open Data / DCAS",
     "url": "https://data.cityofnewyork.us/api/views/vx8i-nprf.json",
     "quote": "An established list is considered active for no less than one year and no more than four years from the date of establishment.",
     "note": null
    },
    {
     "id": 18,
     "title": "Civil Service List (Active), query: exam_no=2060 (title code 70112)",
     "publisher": "NYC Open Data / DCAS",
     "url": "https://data.cityofnewyork.us/resource/vx8i-nprf.json?$select=exam_no,established_date,anniversary_date,extension_date,count(*)&list_title_code=70112&$group=exam_no,established_date,anniversary_date,extension_date",
     "quote": "\"exam_no\":\"2060\",\"established_date\":\"2024-02-28T00:00:00.000\",\"anniversary_date\":\"2028-02-28T00:00:00.000\",\"count\":\"31309\"",
     "note": null
    },
    {
     "id": 19,
     "title": "Civil Service List (Active), query: exam_no=2060 published date",
     "publisher": "NYC Open Data / DCAS",
     "url": "https://data.cityofnewyork.us/resource/vx8i-nprf.json?$select=count(*),min(published_date),max(published_date),min(list_no),max(list_no)&exam_no=2060",
     "quote": "\"min_published_date\":\"2023-07-12T00:00:00.000\",\"max_published_date\":\"2023-07-12T00:00:00.000\"",
     "note": null
    },
    {
     "id": 20,
     "title": "New York Civil Service Law § 61",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/61",
     "quote": "Appointment or promotion from an eligible list ... shall be made by the selection of one of the three persons certified by the appropriate civil service commission as standing highest on such eligible list",
     "note": null
    },
    {
     "id": 21,
     "title": "New York Civil Service Law § 63",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/63",
     "quote": "Every original appointment to a position in the competitive class...shall be for a probationary term",
     "note": null
    },
    {
     "id": 22,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5 (5.2.7(a))",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "At the end of the probationary term, the agency head may terminate the employment of any unsatisfactory probationer by notice to such probationer and to the commissioner of citywide administrative services.",
     "note": null
    },
    {
     "id": 23,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5 (5.2.7(b))",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the agency head may, at the close of such course of study or training, terminate the employment of any probationer who fails to complete successfully such course of study or training",
     "note": null
    },
    {
     "id": 24,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5 (5.2.7(c))",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the agency head may terminate the employment of any probationer whose conduct and performance is not satisfactory after the completion of a minimum period of probationary service ... (1) two months for every appointment",
     "note": null
    },
    {
     "id": 25,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5 (5.2.8(a))",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the commissioner of citywide administrative services may authorize the extension of the probationary term for one or more additional periods not exceeding in the aggregate six months",
     "note": null
    },
    {
     "id": 26,
     "title": "Personnel Rules and Regulations of the City of New York, Rule 5 (5.2.9)",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-5.page",
     "quote": "the commissioner of citywide administrative services has the discretion to and may restore the name of such probationer to the eligible list, if it be in existence.",
     "note": null
    },
    {
     "id": 27,
     "title": "New York Civil Service Law § 75(1)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "shall not be removed or otherwise subjected to any disciplinary penalty...except for incompetency or misconduct shown after a hearing",
     "note": null
    },
    {
     "id": 28,
     "title": "New York Civil Service Law § 75(2)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "at least eight days for answering the same in writing ... the burden of proving incompetency or misconduct shall be upon the person alleging the same",
     "note": null
    },
    {
     "id": 29,
     "title": "New York Civil Service Law § 75(3)",
     "publisher": "Public.Law mirror of NY Civil Service Law",
     "url": "https://newyork.public.law/laws/n.y._civil_service_law_section_75",
     "quote": "Pending the hearing and determination of charges of incompetency or misconduct, the officer or employee against whom such charges have been preferred may be suspended without pay for a period not exceeding thirty days.",
     "note": null
    },
    {
     "id": 30,
     "title": "New York Civil Service Law § 75(3), penalties",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "a reprimand, a fine not to exceed one hundred dollars ... suspension without pay for a period not exceeding two months, demotion in grade and title, or dismissal",
     "note": null
    },
    {
     "id": 31,
     "title": "New York Civil Service Law § 75(4)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/75",
     "quote": "eighteen months after the occurrence of the alleged incompetency or misconduct ... would...constitute a crime",
     "note": null
    },
    {
     "id": 32,
     "title": "New York Civil Service Law § 76(1)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/76",
     "quote": "may appeal from such determination either by an application to the state or municipal commission having jurisdiction, or by an application to the court in accordance with the provisions of article seventy-eight",
     "note": null
    },
    {
     "id": 33,
     "title": "New York Civil Service Law § 76(3)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/76",
     "quote": "The decision of such civil service commission shall be final and conclusive, and not subject to further review in any court.",
     "note": null
    },
    {
     "id": 34,
     "title": "New York Civil Service Law § 76(4)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVS/76",
     "quote": "Such sections may be supplemented, modified or replaced by agreements negotiated between the state and an employee organization pursuant to article fourteen of this chapter.",
     "note": null
    },
    {
     "id": 35,
     "title": "New York Civil Practice Law and Rules § 217(1)",
     "publisher": "New York State Senate",
     "url": "https://www.nysenate.gov/legislation/laws/CVP/217",
     "quote": "a proceeding against a body or officer must be commenced within four months after the determination to be reviewed becomes final",
     "note": null
    },
    {
     "id": 36,
     "title": "NYC Administrative Code § 16-106(a), Removal and suspension of employees",
     "publisher": "American Legal Publishing text via BetaNYC nyc-charter tool; mirrored at nycadmincode.readthedocs.io",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-25988",
     "quote": "by forfeiting or withholding pay for a specified time, not exceeding thirty days; by suspension, without pay during such suspension, for a period not exceeding thirty days; or by dismissal from the force.",
     "note": null
    },
    {
     "id": 37,
     "title": "NYC Administrative Code § 16-106(c)-(d)",
     "publisher": "American Legal Publishing text via BetaNYC nyc-charter tool; mirrored at nycadmincode.readthedocs.io",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-25988",
     "quote": "A member of the department shall be dismissed only after he or she has been informed of the cause of the proposed dismissal and has been allowed an opportunity of making an explanation.",
     "note": null
    },
    {
     "id": 38,
     "title": "New York City Charter § 1048",
     "publisher": "American Legal Publishing text via BetaNYC nyc-charter tool",
     "url": "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-2801#JD_1048",
     "quote": "There shall be an office of administrative trials and hearings which shall conduct adjudicatory hearings for all agencies of the city unless otherwise provided for by executive order, rule, law or pursuant to collective bargaining agreements.",
     "note": null
    },
    {
     "id": 39,
     "title": "Trials Division Overview",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH)",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "Most of the cases are initially conferenced by an Administrative Law Judge and cases that are not settled continue to trial before a different Judge.",
     "note": null
    },
    {
     "id": 40,
     "title": "Trials Division Overview",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH)",
     "url": "https://www.nyc.gov/site/oath/trials/overview.page",
     "quote": "Petitioners must prove their case by a preponderance of the evidence - the same standard usually applied in civil lawsuits.",
     "note": null
    },
    {
     "id": 41,
     "title": "Trials Division Case Types and Guides",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH)",
     "url": "https://www.nyc.gov/site/oath/trials/case-types-guides.page",
     "quote": "The determinations in disciplinary proceedings are recommendations that are provided to the agency head for final action.",
     "note": null
    },
    {
     "id": 42,
     "title": "48 RCNY § 1-24, Answer (OATH Trials Division rules)",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH)",
     "url": "https://www.nyc.gov/site/oath/trials/chapter-i-subchapter-c.page",
     "quote": "The respondent may serve and file an answer to the petition within eight days of service of the petition if service was personal, or within thirteen days of service of the petition if service was by mail",
     "note": null
    },
    {
     "id": 43,
     "title": "48 RCNY § 1-31(b), Settlement conferences (OATH Trials Division rules)",
     "publisher": "NYC Office of Administrative Trials and Hearings (OATH)",
     "url": "https://www.nyc.gov/site/oath/trials/chapter-i-subchapter-c.page",
     "quote": "A settlement conference will be conducted by an administrative law judge or other individual designated by the Chief Administrative Law Judge, other than the administrative law judge assigned to hear the case.",
     "note": null
    },
    {
     "id": 44,
     "title": "Mayor's Management Report, Fiscal 2025: Office of Administrative Trials and Hearings",
     "publisher": "NYC Mayor's Office of Operations",
     "url": "https://www.nyc.gov/assets/operations/downloads/pdf/mmr2025/oath.pdf",
     "quote": "the average time for the Trials Division to issue a decision increased nearly five days, from 35.96 days in Fiscal 2024 to 40.73 days in Fiscal 2025.",
     "note": null
    },
    {
     "id": 45,
     "title": "Mayor's Management Report, Fiscal 2025: OATH performance indicators",
     "publisher": "NYC Mayor's Office of Operations",
     "url": "https://www.nyc.gov/assets/operations/downloads/pdf/mmr2025/oath.pdf",
     "quote": "OATH Trials Division cases with decisions issued within 45 business days (%) 85% 78% 89% 83% 79%",
     "note": null
    },
    {
     "id": 46,
     "title": "OATH Trials Division Case Status, dataset y3hw-z6bm, query: category 'Section 75' and case name containing 'Sanitation'",
     "publisher": "NYC Open Data / OATH",
     "url": "https://data.cityofnewyork.us/resource/y3hw-z6bm.json?$select=count(*),min(opened),max(opened)&$where=category%3D'Section+75'+AND+upper(name)+like+'%25SANITATION%25'",
     "quote": "[{\"count\":\"33\",\"min_opened\":\"2017-01-20T00:00:00.000\",\"max_opened\":\"2025-11-19T00:00:00.000\"}]",
     "note": null
    },
    {
     "id": 47,
     "title": "Uniformed contracts list",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/site/olr/labor/labor-uniformed-contracts.page",
     "quote": "Sanitation Workers, CBU 49, Executed Contract, 03-02-07 to 09-20-11",
     "note": null
    },
    {
     "id": 48,
     "title": "Sanitation Workers unit agreement, Uniformed Sanitationmen's Association Local 831, 2007-2011, Article X (scanned; text by OCR)",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/cbu49-sanitation-workers-030207-to-092011.pdf",
     "quote": "The term 'grievance\" shall mean a dispute concerning the application or interpretation of the terms and provisions of this Agreement or of the terms of a personnel order of the Mayor.",
     "note": null
    },
    {
     "id": 49,
     "title": "Sanitation Workers unit agreement, Uniformed Sanitationmen's Association Local 831, 2007-2011, Article X (scanned; text by OCR)",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/cbu49-sanitation-workers-030207-to-092011.pdf",
     "quote": "the Union shall have the sole right to invoke arbitration. ... The decision or award of the arbitration shall be final and binding in accord with applicable law.",
     "note": null
    },
    {
     "id": 50,
     "title": "Sanitation Workers unit agreement, Uniformed Sanitationmen's Association Local 831, 2007-2011, Article X (scanned; text by OCR)",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/cbu49-sanitation-workers-030207-to-092011.pdf",
     "quote": "In the event an officer in a job location seeks to suspend a Sanitation Worker summarily, the officer cannot do so of his own accord. He must refer the recommendation to the Officer-in-charge of the Borough Office.",
     "note": null
    },
    {
     "id": 51,
     "title": "2022-2028 Sanitation Workers Memorandum of Economic Agreement (scanned; text by OCR)",
     "publisher": "NYC Office of Labor Relations",
     "url": "https://www.nyc.gov/assets/olr/downloads/pdf/collectivebargaining/2021-2026/usa-executed-2022-2028-sanitation-worker-moa.pdf",
     "quote": "The term shall be from December 28, 2022 to February 27, 2028. ... All terms of the Predecessor Separate Unit Agreement shall be continued except as modified pursuant to this agreement.",
     "note": null
    },
    {
     "id": 52,
     "title": "Disciplinary: Filing an Appeal",
     "publisher": "NYC Civil Service Commission",
     "url": "https://www.nyc.gov/site/csc/disciplinary-appeals/filing-a-disciplinary-appeal-with-the-csc.page",
     "quote": "Appeals to the CSC must be filed within twenty (20) days after the agency head's final disciplinary decision.",
     "note": null
    },
    {
     "id": 53,
     "title": "DCAS Annual Examination Schedule through June 30, 2027",
     "publisher": "NYC Department of Citywide Administrative Services (DCAS)",
     "url": "https://www.nyc.gov/assets/dcas/downloads/pdf/exam-schedules/dcas-annual-exam-schedule-app-period-order.pdf",
     "quote": "ANNUAL EXAMINATION SCHEDULE THROUGH JUNE 30, 2027",
     "note": null
    }
   ],
   "caveats": [
    "Exam 2060 (2022) is the most recent Sanitation Worker exam found; the fee, dates and conditions described are from its amended notice and may change for the next exam.",
    "The residency rule on DSNY's careers page (New York City, Nassau or Westchester) matches only the first two years in the exam notice; after two years the notice also allows Suffolk, Orange, Rockland and Putnam counties.",
    "The Local 831 unit agreement on the Office of Labor Relations site is the 2007-2011 contract; the 2022-2028 economic agreement says earlier unit terms continue unless modified. Both are scanned PDFs, so quotes come from OCR text and could contain small transcription errors.",
    "Administrative Code § 16-106 caps Sanitation Department suspensions and pay forfeitures at 30 days, while Civil Service Law § 75(3) allows suspension without pay of up to two months after a hearing. Civil Service Law § 76(4) keeps local laws in force; how the two interact in DSNY penalties was not verified.",
    "OATH's 45-business-day figure is a Mayor's Management Report performance measure, not a rule deadline. No rule requiring the Sanitation Commissioner to decide within a set number of days was found.",
    "Curly quotation marks in source PDFs were changed to straight quotes; ellipses mark omitted text within quotes.",
    "Civil Service Law § 75 and § 76 quotes were taken through a web-fetch tool that returned excerpts, not the raw statute page; the § 75(3) suspension sentence comes from the public.law mirror.",
    "The Administrative Code and Charter text came from American Legal Publishing's database through the BetaNYC nyc-charter tool and the readthedocs mirror, because codelibrary.amlegal.com returned HTTP 403 to direct fetches.",
    "Not confirmed: Physical test content: the exam notice says a description would be released later. No official DCAS description was found, only test-prep sites, so the events and weights are left out.",
    "Not confirmed: Length and content of DSNY's training academy for new hires: the notice requires a prescribed training course but gives no duration, and no official DSNY page stating one was found.",
    "Not confirmed: Role of the DSNY Department Advocate / Office of Employment and Disciplinary Matters in drafting charges and negotiating with the union: this appears only in a search snippet of a cityjobs.nyc.gov posting, and the site refused connections.",
    "Not confirmed: DSNY Code of Conduct and internal disciplinary procedures: not located on nyc.gov.",
    "Not confirmed: Department of Investigation involvement in DSNY discipline: no official document fetched describes it.",
    "Not confirmed: Average time from list establishment to appointment, and the number appointed from the Exam 2060 list: no official figure found. The DCAS list-announcement document on the Government Publications Portal returned 403.",
    "Not confirmed: Whether the one-in-three selection rule under Civil Service Law § 61 is used in practice for Sanitation Worker: DSNY says it calls candidates in list-number order.",
    "Not confirmed: Exact wording of the crime exception in Civil Service Law § 75(4): only a fragment was retrieved.",
    "Not confirmed: Which section of the Public Officers Law sets the Sanitation Worker residency rule: the exam notice cites the law without naming a section.",
    "Not confirmed: Court doctrine that probationers can be dismissed without a hearing absent bad faith: no decision was fetched, so the chart relies on Personnel Rule 5.2.7 and the text of Civil Service Law § 75(1).",
    "Not confirmed: Whether a full successor unit agreement after 2011 changed Article X (grievances): none is posted on the Office of Labor Relations uniformed contracts page."
   ]
  }
 },
 "compare": {
  "title": "Five jobs, five different routes in and out",
  "subtitle": "How each job is filled, how long probation lasts and who decides a firing. Tap a job to open its flowcharts.",
  "cols": [
   {
    "key": "entry",
    "label": "Way in"
   },
   {
    "key": "probation",
    "label": "Probation"
   },
   {
    "key": "probfire",
    "label": "Firing a probationer"
   },
   {
    "key": "hearing",
    "label": "Firing after probation: who hears it"
   },
   {
    "key": "decides",
    "label": "Final decision"
   },
   {
    "key": "appeal",
    "label": "Appeal"
   }
  ],
  "rows": {
   "teacher": {
    "entry": {
     "text": "State teaching certificate, one TeachNYC application and a principal's offer; no civil service exam",
     "src": [
      1,
      13,
      14
     ]
    },
    "probation": {
     "text": "4 years (the union says four years and a day)",
     "src": [
      19,
      20
     ]
    },
    "probfire": {
     "text": "Discontinued without a hearing; written reasons on request; advisory review only",
     "src": [
      23,
      27,
      28
     ]
    },
    "hearing": {
     "text": "One hearing officer under Education Law §3020-a, assigned jointly by the city and the union",
     "src": [
      40,
      34
     ]
    },
    "decides": {
     "text": "The hearing officer",
     "src": [
      44
     ]
    },
    "appeal": {
     "text": "State Supreme Court within 10 days",
     "src": [
      46
     ]
    }
   },
   "dc37": {
    "entry": {
     "text": "$47 civil service exam, ranked list, agency picks from the top three; or a provisional hire with no exam",
     "src": [
      21,
      3,
      5
     ]
    },
    "probation": {
     "text": "12 months by default, extendable by 6 with consent",
     "src": [
      41,
      42
     ]
    },
    "probfire": {
     "text": "By notice after two months, no hearing",
     "src": [
      45,
      46
     ]
    },
    "hearing": {
     "text": "Office of Administrative Trials and Hearings judge, or an arbitrator if the union takes the contract route",
     "src": [
      55,
      74,
      62
     ]
    },
    "decides": {
     "text": "Agency head; on the contract route, the arbitrator",
     "src": [
      12,
      64
     ]
    },
    "appeal": {
     "text": "Civil Service Commission within 20 days, or state court; arbitration awards are final",
     "src": [
      17,
      18,
      64
     ]
    }
   },
   "police": {
    "entry": {
     "text": "Free computer-based civil service exam, ranked list, then NYPD screening",
     "src": [
      1,
      13
     ]
    },
    "probation": {
     "text": "24 months of full duty, extendable by 6",
     "src": [
      15
     ]
    },
    "probfire": {
     "text": "Summary dismissal, no hearing; court review only for bad faith",
     "src": [
      15,
      23
     ]
    },
    "hearing": {
     "text": "NYPD trial commissioner; prosecuted by the Department Advocate or the Civilian Complaint Review Board",
     "src": [
      15,
      21
     ]
    },
    "decides": {
     "text": "Police commissioner",
     "src": [
      19,
      16
     ]
    },
    "appeal": {
     "text": "State court (Article 78), within 4 months",
     "src": [
      9
     ]
    }
   },
   "correction": {
    "entry": {
     "text": "$68 computer-based civil service exam, ranked list, then Department of Correction screening",
     "src": [
      15,
      25
     ]
    },
    "probation": {
     "text": "24 months",
     "src": [
      28
     ]
    },
    "probfire": {
     "text": "By notice, no hearing; court review only for bad faith",
     "src": [
      33,
      35
     ]
    },
    "hearing": {
     "text": "Administrative law judge at the Office of Administrative Trials and Hearings",
     "src": [
      37,
      5
     ]
    },
    "decides": {
     "text": "Correction commissioner",
     "src": [
      5,
      37
     ]
    },
    "appeal": {
     "text": "Civil Service Commission within 20 days, or state court within 4 months",
     "src": [
      10,
      11,
      49
     ]
    }
   },
   "sanitation": {
    "entry": {
     "text": "$61 civil service exam, ranked list, physical test when the department is hiring, commercial driver license by appointment",
     "src": [
      4,
      2,
      10
     ]
    },
    "probation": {
     "text": "18 months",
     "src": [
      16
     ]
    },
    "probfire": {
     "text": "By notice after two months, no hearing",
     "src": [
      22,
      23
     ]
    },
    "hearing": {
     "text": "Administrative law judge at the Office of Administrative Trials and Hearings",
     "src": [
      39,
      28
     ]
    },
    "decides": {
     "text": "Sanitation commissioner",
     "src": [
      41
     ]
    },
    "appeal": {
     "text": "Civil Service Commission within 20 days, or state court within 4 months",
     "src": [
      32,
      35,
      52
     ]
    }
   }
  }
 }
};
