#import "@preview/basic-resume:0.2.2": *

#let d = json("../../data.json")

#let get-dates(period) = {
  let parts = period.split("–")
  if parts.len() == 2 {
    (parts.at(0).trim(), parts.at(1).trim())
  } else {
    (period, "")
  }
}

#let get-year(period) = {
  if period.contains("–") {
    period.split("–").last().trim()
  } else {
    period
  }
}

#set page(footer: align(right)[
  #text(size: 8pt, fill: rgb("#7f8c8d"))[v#d.version]
])

#show: resume.with(
  author: d.personal.name,
  location: d.personal.location,
  email: d.personal.email,
  phone: link("tel:" + d.personal.phone.replace(" ", ""))[#d.personal.phone],
  linkedin: d.personal.linkedin,
  accent-color: "#26428b",
  font: "Helvetica",
  paper: "a4",
)

== Work Experience

#for job in d.experience [
  #let (start, end) = get-dates(job.period)
  #work(
    title: job.title,
    company: job.company,
    location: job.location,
    dates: dates-helper(start-date: start, end-date: end),
  )
  #for bullet in job.bullets [
    - #bullet
  ]
  #v(0.6em)
]

== Skills

#for group in d.skills [
  - *#group.label:* #group.items.join(", ")
]

== Education

#for school in d.education [
  #let degree-text = school.degree + if school.detail != none { " — " + school.detail } else { "" }
  #edu(
    institution: school.institution,
    dates: get-year(school.period),
    degree: degree-text,
    location: if "location" in school { school.location } else { none },
  )
  #v(0.6em)
]

== Extra-curricular

#for item in d.extracurricular [
  - *#item.org* — #item.title
]
