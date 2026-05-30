#set document(title: "Vikash Sinha — Resume")
#set page(paper: "a4", margin: (x: 1.5cm, y: 1.2cm))
#set text(font: "Helvetica", size: 10pt, lang: "en")
#set par(leading: 0.55em)
#set list(indent: 1em, body-indent: 0.5em)

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
  #text(size: 22pt, weight: "bold")[Vikash Sinha]
  #v(0.25em)
  Bengaluru, Karnataka · 8789246572 · vikash1a2b3c\@gmail.com ·
  #link("https://linkedin.com/in/vikash-sinha-583124151/")[linkedin.com/in/vikash-sinha-583124151]
]

// ── Work Experience ───────────────────────────────────────────────────────────

#section("Work Experience")

#entry("Blink Health", "Remote", "Senior Software Engineer", "July 2025 – Present")
- Migrated IVR service authentication from Google OAuth 2.0 to Okta OAuth 2.0, enabling seamless SSO across BlinkRx and VCO with zero production bugs post-release.
- Led OTP service migration to AWS-native infrastructure (Pinpoint/EUS/SES), achieving 5% improvement in OTP conversion rate and establishing first AWS EUS/SES implementation at Blink.
- Designed EventBridge and CloudWatch monitoring infrastructure for OTP service; documentation adopted as org-wide reference by other teams.
- Implemented Row-Level Security (RLS) proof-of-concept and reusable multi-tenancy SDK for RxOS flows — first RLS implementation at Blink — preventing unauthorized data access across tenant boundaries.
- Contributed to Ecomm Monolith deprecation initiative, migrating database tables and services to modern backend and unblocking sign-in feature development.
- Built custom New Relic MCP server enabling natural language observability queries, adopted org-wide; combined with on-call report automation, saves \~78 hours annually across the engineering org.

#v(0.4em)

#entry("Toast", "Bengaluru, Karnataka", "Software Engineer - 2", "Nov 2022 – July 2025")
- Led KYC/KYB migration to Alloy by coordinating directly with external vendors on API specifications and workflows, improving auto pass rate from 40% to 80%.
- Automated bank account verification for merchants by integrating with Plaid via open banking integration, increasing verification success rate by 30%.
- Designed and implemented a data ingestion pipeline from DynamoDB to an internal data platform using Apache Pulsar. Defined topic structures, schemas, and Protobuf contracts.
- Migrated Worldpay APIs from v1 to v3 using a plug-and-play architecture with feature flag support, allowing seamless client integration without changes.
- Automated on-call workflows using Google Apps Script, reducing manual effort by 20%. Integrated Splunk, Opsgenie, and Jira to ensure SOX compliance.
- Led an initiative to enhance the local development experience by stabilizing flaky tests and optimizing CI pipelines, resulting in a 25% reduction in build time and significantly improving environment readiness.

#v(0.4em)

#entry("Bajaj Finance", "Pune, Maharashtra", "Sr. Software Engineer", "July 2020 – Oct 2022")
- Built EMI Card sourcing service from the ground up as part of a monolith-to-microservice migration, handling 500 req/sec.
- Integrated Azure Application Insights and created automated alerting workflows using Power Automate, eliminating manual monitoring.
- Established CI/CD pipeline setup using Azure DevOps, enabling faster deployments and setting a blueprint for other teams.
- Developed internal NuGet library encapsulating observability metrics, standardizing logging and tracing across services.
- Created Angular-based dashboard to monitor and trace customer EMI card journey details for internal teams.

#v(0.4em)

#entry("Flow Edge", "Bengaluru, Karnataka", "Internship", "May 2019 – July 2019")
- Developed a live reporting tool for company announcements by web scraping BSE using Selenium in Python.
- Built a GUI application using Tkinter to reconcile daily trade orders with user inputs.

// ── Education ─────────────────────────────────────────────────────────────────

#section("Education")

#grid(
  columns: (1fr, auto),
  [*Indian Institute of Technology, Roorkee* | Bachelor of Technology, Chemical Eng., CGPA: 7.28/10],
  [2020],
)
#v(0.2em)
#grid(
  columns: (1fr, auto),
  [*Sadar Alam Memorial Secondary School, Nalanda* | Twelfth, Percentage: 90.6/100],
  [2015],
)
#v(0.2em)
#grid(
  columns: (1fr, auto),
  [*Jean Paul's High School, Ara* | Tenth, CGPA: 10/10],
  [2013],
)

// ── Technical Skills ──────────────────────────────────────────────────────────

#section("Technical Skills")

#grid(
  columns: (1fr, 1fr),
  gutter: 1em,
  [
    - *Languages:* Kotlin, Java, TypeScript, C++, C\#
    - *Databases:* DynamoDB, PostgreSQL
    - *Observability:* New Relic, Datadog, Splunk, Sentry, CloudWatch
    - *Project Management:* Jira, Confluence, Opsgenie
  ],
  [
    - *Cloud & Distributed Systems:* AWS (Pinpoint, EUS, SES, EventBridge), Pulsar, Camel
    - *Auth & Security:* Okta, OAuth 2.0, SSO, Row-Level Security (RLS)
    - *Design & Algorithm:* System Design, Design Patterns, Data Structures
  ],
)

// ── PORs & Extra-curricular ───────────────────────────────────────────────────

#section("PORs & Extra-curricular")

#grid(
  columns: (1fr, 1fr),
  gutter: 1em,
  [
    - Executive Member, NSS IIT Roorkee
    - Joint Secretary, Chemical Engineering Departmental event, Cognizance
  ],
  [
    - Runner up in CHESS Department Cricket Tournament
  ],
)
