#import "@preview/modernpro-cv:1.0.0": *
#let d = json("../../data.json")

#let clean-inst(inst) = {
  if inst == "Indian Institute of Technology, Roorkee" {
    "IIT Roorkee"
  } else {
    inst
  }
}

#let clean-loc(inst, loc) = {
  if inst == "Indian Institute of Technology, Roorkee" {
    ""
  } else if loc != none {
    loc.split(",").at(0).trim()
  } else {
    ""
  }
}

#let clean-period(period) = {
  period.replace(" – ", "–")
}

#set page(footer: align(right)[
  #text(size: 8pt, fill: rgb("#7f8c8d"))[v#d.version]
])

#show: cv-double(
  font-type: "PT Sans",
  continue-header: "false",
  name: [#d.personal.name],
  address: [],
  lastupdated: "false",
  pagecount: "false",
  date: "2026-05-31",
  contacts: (
    (text: d.personal.location, link: "https://maps.google.com/?q=" + d.personal.location),
    (text: d.personal.phone,    link: "tel:" + d.personal.phone.replace(" ", "")),
    (text: d.personal.email,    link: "mailto:" + d.personal.email),
    (text: d.personal.linkedin, link: "https://" + d.personal.linkedin),
  ),

  // ── Left sidebar (1/3) ───────────────────────────────────────────────────
  left: [
    #section("About")
    #descript[#d.personal.bio]

    #v(10pt)
    #section("Skills")
    #for group in d.skills {
      oneline-title-item(
        title: group.label,
        content: [#group.items.join(", ")]
      )
    }

    #v(10pt)
    #section("Education")
    #for (i, edu) in d.education.enumerate() {
      education(
        institution: [#clean-inst(edu.institution)],
        major: [#edu.degree],
        date: clean-period(edu.period),
        location: clean-loc(edu.institution, edu.location),
        description: [#edu.detail],
      )
      if i < d.education.len() - 1 { v(5pt) }
    }

    #v(10pt)
    #section("Extra-curricular")
    #for (i, item) in d.extracurricular.enumerate() {
      award(award: item.title, institution: item.org, date: item.period)
      if i < d.extracurricular.len() - 1 { v(3pt) }
    }
  ],

  // ── Right main column (2/3) ──────────────────────────────────────────────
  right: [
    #section("Experience")
    #for (i, entry) in d.experience.enumerate() {
      if i > 0 { v(8pt) }
      job(
        position: entry.title,
        institution: [#entry.company],
        location: entry.location,
        date: entry.period,
        description: [
          #for b in entry.bullets [
            - #b
          ]
        ],
      )
    }
  ],
)
