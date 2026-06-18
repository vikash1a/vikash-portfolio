#set document(title: "Vikash Sinha — Resume")
#set page(paper: "a4", margin: (x: 1.5cm, y: 1.2cm))
#set text(font: "Helvetica", size: 10pt, lang: "en")
#set par(leading: 0.55em)
#set list(indent: 1em, body-indent: 0.5em)

#let d = json("../../data.json")

// ── Helpers ──────────────────────────────────────────────────────────────────

#let section(title) = {
  v(0.6em)
  text(weight: "bold", size: 11pt, title)
  v(0.15em)
  line(length: 100%, stroke: 0.4pt)
  v(0.25em)
}

#let entry(company, location, title, dates) = {
  grid(
    columns: (1fr, auto),
    text(weight: "bold")[#company],
    text(style: "italic")[#location],
  )
  grid(
    columns: (1fr, auto),
    text[#title],
    text[#dates],
  )
}

// ── Header ───────────────────────────────────────────────────────────────────

#align(center)[
  #text(size: 22pt, weight: "bold")[#d.personal.name]
  #v(0.25em)
  #d.personal.location · #d.personal.phone · #d.personal.email ·
  #link("https://" + d.personal.linkedin)[#d.personal.linkedin]
]

// ── Work Experience ───────────────────────────────────────────────────────────

#section("Work Experience")

#for job in d.experience [
  #entry(job.company, job.location, job.title, job.period)
  #for bullet in job.bullets [
    - #bullet
  ]
  #v(0.4em)
]

// ── Education ─────────────────────────────────────────────────────────────────

#section("Education")

#for school in d.education [
  #let degree-text = school.degree + if school.detail != none { ", " + school.detail } else { "" }
  #let school-loc = if "location" in school { ", " + school.location } else { "" }
  #grid(
    columns: (1fr, auto),
    [*#school.institution* | #degree-text #school-loc],
    [#school.period],
  )
  #v(0.25em)
]

// ── Technical Skills ──────────────────────────────────────────────────────────

#section("Technical Skills")

#grid(
  columns: (1fr, 1fr),
  gutter: 1em,
  [
    #for group in d.skills.slice(0, 4) [
      - *#group.label:* #group.items.join(", ")
    ]
  ],
  [
    #for group in d.skills.slice(4) [
      - *#group.label:* #group.items.join(", ")
    ]
  ],
)

// ── PORs & Extra-curricular ───────────────────────────────────────────────────

#section("PORs & Extra-curricular")

#grid(
  columns: (1fr, 1fr),
  gutter: 1em,
  [
    #for item in d.extracurricular.slice(0, 2) [
      - #item.title, #item.org
    ]
  ],
  [
    #for item in d.extracurricular.slice(2) [
      - #item.title in #item.org
    ]
  ],
)
