#import "@preview/modernpro-cv:1.0.0": *

#show: cv-double(
  font-type: "PT Sans",
  continue-header: "false",
  name: [Vikash Sinha],
  address: [Bengaluru, Karnataka],
  lastupdated: "false",
  pagecount: "false",
  date: "2026-05-31",
  contacts: (
    (text: "+91 8789246572",              link: "tel:+918789246572"),
    (text: "vikash1a2b3c@gmail.com",      link: "mailto:vikash1a2b3c@gmail.com"),
    (text: "linkedin/vikash-sinha-583124151", link: "https://linkedin.com/in/vikash-sinha-583124151"),
  ),

  // ── Left sidebar (1/3) ───────────────────────────────────────────────────
  left: [
    #section("Skills")
    #oneline-title-item(title: "Languages",  content: [Kotlin, Java, TypeScript, C++, C\#])
    #oneline-title-item(title: "Databases",  content: [DynamoDB, PostgreSQL])
    #oneline-title-item(title: "Cloud",      content: [AWS (Pinpoint, EUS, SES, EventBridge), Pulsar, Camel])
    #oneline-title-item(title: "Auth",       content: [Okta, OAuth 2.0, SSO, RLS])
    #oneline-title-item(title: "Observability", content: [New Relic, Datadog, Splunk, Sentry, CloudWatch])
    #oneline-title-item(title: "Design",     content: [System Design, Design Patterns, Data Structures])
    #oneline-title-item(title: "Tooling",    content: [Jira, Confluence, Opsgenie])

    #v(10pt)
    #section("About")
    #descript[
      Identity and payments engineer with 6+ years building high-scale backend systems across healthtech and fintech. Focused on auth, data migration, and platform reliability.
    ]

    #v(10pt)
    #section("Education")
    #education(
      institution: [IIT Roorkee],
      major: [B.Tech, Chemical Engineering],
      date: "2016 – 2020",
      location: "Roorkee",
      description: [CGPA: 7.28/10],
    )
    #v(5pt)
    #education(
      institution: [Sadar Alam Memorial School],
      major: [Twelfth],
      date: "2015",
      location: "Nalanda",
      description: [90.6/100],
    )
    #v(5pt)
    #education(
      institution: [Jean Paul's High School],
      major: [Tenth],
      date: "2013",
      location: "Ara",
      description: [CGPA: 10/10],
    )

    #v(10pt)
    #section("Extra-curricular")
    #award(award: "Executive Member",   institution: "NSS IIT Roorkee",            date: "2017–20")
    #v(3pt)
    #award(award: "Joint Secretary",    institution: "Cognizance, IIT Roorkee",    date: "2018–19")
    #v(3pt)
    #award(award: "Runner up",          institution: "CHESS Dept. Cricket",        date: "2018")
  ],

  // ── Right main column (2/3) ──────────────────────────────────────────────
  right: [
    #section("Experience")

    #job(
      position: "Senior Software Engineer",
      institution: [Blink Health],
      location: "Bengaluru, Karnataka",
      date: "July 2025 – Present",
      description: [
        - Migrated IVR service authentication from Google OAuth 2.0 to Okta OAuth 2.0, enabling seamless SSO across BlinkRx and VCO with zero production bugs post-release.
        - Led OTP service migration to AWS-native infrastructure (Pinpoint/EUS/SES), achieving 5% improvement in OTP conversion rate and establishing first AWS EUS/SES implementation at Blink.
        - Designed EventBridge and CloudWatch monitoring infrastructure for OTP service; documentation adopted as org-wide reference by other teams.
        - Implemented Row-Level Security (RLS) proof-of-concept and reusable multi-tenancy SDK for RxOS flows — first RLS implementation at Blink — preventing unauthorized data access across tenant boundaries.
        - Contributed to Ecomm Monolith deprecation, migrating database tables and services to modern backend and unblocking sign-in feature development.
        - Built custom New Relic MCP server enabling natural language observability queries, adopted org-wide; combined with on-call automation, saves ~78 hours annually.
      ],
    )

    #v(8pt)

    #job(
      position: "Software Engineer - 2",
      institution: [Toast],
      location: "Bengaluru, Karnataka",
      date: "Nov 2022 – July 2025",
      description: [
        - Led KYC/KYB migration to Alloy by coordinating directly with external vendors on API specifications and workflows, improving auto pass rate from 40% to 80%.
        - Automated bank account verification for merchants by integrating with Plaid via open banking integration, increasing verification success rate by 30%.
        - Designed and implemented a data ingestion pipeline from DynamoDB to an internal data platform using Apache Pulsar. Defined topic structures, schemas, and Protobuf contracts.
        - Migrated Worldpay APIs from v1 to v3 using a plug-and-play architecture with feature flag support, allowing seamless client integration without changes.
        - Automated on-call workflows using Google Apps Script, reducing manual effort by 20%. Integrated Splunk, Opsgenie, and Jira to ensure SOX compliance.
        - Led an initiative to stabilize flaky tests and optimize CI pipelines, resulting in a 25% reduction in build time.
      ],
    )

    #v(8pt)

    #job(
      position: "Sr. Software Engineer",
      institution: [Bajaj Finance],
      location: "Pune, Maharashtra",
      date: "July 2020 – Oct 2022",
      description: [
        - Built EMI Card sourcing service from the ground up as part of a monolith-to-microservice migration, handling 500 req/sec.
        - Integrated Azure Application Insights and created automated alerting workflows using Power Automate, eliminating manual monitoring.
        - Established CI/CD pipeline setup using Azure DevOps, enabling faster deployments and setting a blueprint for other teams.
        - Developed internal NuGet library encapsulating observability metrics, standardizing logging and tracing across services.
        - Created Angular-based dashboard to monitor and trace customer EMI card journey details for internal teams.
      ],
    )

    #v(8pt)

    #job(
      position: "Intern",
      institution: [Flow Edge],
      location: "Bengaluru, Karnataka",
      date: "May 2019 – July 2019",
      description: [
        - Developed a live reporting tool for company announcements by web scraping BSE using Selenium in Python.
        - Built a GUI application using Tkinter to reconcile daily trade orders with user inputs.
      ],
    )
  ],
)
