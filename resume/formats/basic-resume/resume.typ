#import "@preview/basic-resume:0.2.2": *

#show: resume.with(
  author: "Vikash Sinha",
  location: "Bengaluru, Karnataka",
  email: "vikash1a2b3c@gmail.com",
  phone: link("tel:+918789246572")[+91 8789246572],
  linkedin: "linkedin.com/in/vikash-sinha-583124151",
  accent-color: "#26428b",
  font: "Helvetica",
  paper: "a4",
)

== Work Experience

#work(
  title: "Senior Software Engineer",
  company: "Blink Health",
  location: "Bengaluru, Karnataka",
  dates: dates-helper(start-date: "July 2025", end-date: "Present"),
)
- Migrated IVR service authentication from Google OAuth 2.0 to Okta OAuth 2.0, enabling seamless SSO across BlinkRx and VCO with zero production bugs post-release.
- Led OTP service migration to AWS-native infrastructure (Pinpoint/EUS/SES), achieving 5% improvement in OTP conversion rate and establishing first AWS EUS/SES implementation at Blink.
- Designed EventBridge and CloudWatch monitoring infrastructure for OTP service; documentation adopted as org-wide reference by other teams.
- Implemented Row-Level Security (RLS) proof-of-concept and reusable multi-tenancy SDK for RxOS flows — first RLS implementation at Blink — preventing unauthorized data access across tenant boundaries.
- Contributed to Ecomm Monolith deprecation initiative, migrating database tables and services to modern backend and unblocking sign-in feature development.
- Built custom New Relic MCP server enabling natural language observability queries, adopted org-wide; combined with on-call report automation, saves ~78 hours annually.

#work(
  title: "Software Engineer - 2",
  company: "Toast",
  location: "Bengaluru, Karnataka",
  dates: dates-helper(start-date: "Nov 2022", end-date: "July 2025"),
)
- Led KYC/KYB migration to Alloy by coordinating directly with external vendors on API specifications and workflows, improving auto pass rate from 40% to 80%.
- Automated bank account verification for merchants by integrating with Plaid via open banking integration, increasing verification success rate by 30%.
- Designed and implemented a data ingestion pipeline from DynamoDB to an internal data platform using Apache Pulsar. Defined topic structures, schemas, and Protobuf contracts.
- Migrated Worldpay APIs from v1 to v3 using a plug-and-play architecture with feature flag support, allowing seamless client integration without changes.
- Automated on-call workflows using Google Apps Script, reducing manual effort by 20%. Integrated Splunk, Opsgenie, and Jira to ensure SOX compliance.
- Led an initiative to enhance the local development experience by stabilizing flaky tests and optimizing CI pipelines, resulting in a 25% reduction in build time.

#work(
  title: "Sr. Software Engineer",
  company: "Bajaj Finance",
  location: "Pune, Maharashtra",
  dates: dates-helper(start-date: "July 2020", end-date: "Oct 2022"),
)
- Built EMI Card sourcing service from the ground up as part of a monolith-to-microservice migration, handling 500 req/sec.
- Integrated Azure Application Insights and created automated alerting workflows using Power Automate, eliminating manual monitoring.
- Established CI/CD pipeline setup using Azure DevOps, enabling faster deployments and setting a blueprint for other teams.
- Developed internal NuGet library encapsulating observability metrics, standardizing logging and tracing across services.
- Created Angular-based dashboard to monitor and trace customer EMI card journey details for internal teams.

#work(
  title: "Intern",
  company: "Flow Edge",
  location: "Bengaluru, Karnataka",
  dates: dates-helper(start-date: "May 2019", end-date: "July 2019"),
)
- Developed a live reporting tool for company announcements by web scraping BSE using Selenium in Python.
- Built a GUI application using Tkinter to reconcile daily trade orders with user inputs.

== Skills

- *Languages:* Kotlin, Java, TypeScript, C++, C\#
- *Databases:* DynamoDB, PostgreSQL
- *Observability:* New Relic, Datadog, Splunk, Sentry, CloudWatch
- *Cloud & Distributed Systems:* AWS (Pinpoint, EUS, SES, EventBridge), Pulsar, Camel
- *Auth & Security:* Okta, OAuth 2.0, SSO, Row-Level Security (RLS)
- *Project Management:* Jira, Confluence, Opsgenie
- *Design & Algorithm:* System Design, Design Patterns, Data Structures

== Education

#edu(
  institution: "Indian Institute of Technology, Roorkee",
  dates: "2020",
  degree: "Bachelor of Technology, Chemical Engineering — CGPA: 7.28/10",
  location: "Roorkee, Uttarakhand",
)

#edu(
  institution: "Sadar Alam Memorial Secondary School, Nalanda",
  dates: "2015",
  degree: "Twelfth — Percentage: 90.6/100",
)

#edu(
  institution: "Jean Paul's High School, Ara",
  dates: "2013",
  degree: "Tenth — CGPA: 10/10",
)

== Extra-curricular

- *NSS IIT Roorkee* — Executive Member
- *Cognizance, IIT Roorkee* — Joint Secretary, Chemical Engineering Departmental Event
- *CHESS Department Cricket Tournament* — Runner up
