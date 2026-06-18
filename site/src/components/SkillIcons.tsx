import React from 'react';

export function getSkillIcon(name: string): React.ReactNode {
  const norm = name.toLowerCase().trim();

  // 1. Languages
  if (norm === 'kotlin') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ borderRadius: '2px', marginRight: '6px', flexShrink: 0 }}>
        <path d="M24 24H0V0h24L12 12z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E5FF" />
            <stop offset="0.3" stopColor="#7F52FF" />
            <stop offset="1" stopColor="#E10098" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (norm === 'java') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f89820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <path d="M6 2v3" />
        <path d="M10 2v3" />
        <path d="M14 2v3" />
      </svg>
    );
  }
  if (norm === 'typescript') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#3178c6" style={{ borderRadius: '2px', marginRight: '6px', flexShrink: 0 }}>
        <rect width="24" height="24" rx="3" />
        <text x="18" y="19" fill="white" fontSize="12" fontWeight="bold" textAnchor="end" fontFamily="-apple-system, sans-serif">TS</text>
      </svg>
    );
  }
  if (norm === 'python') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3776ab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M12 2C6.5 2 6 3.5 6 6v2h6v2h-8C3.5 10 2 10.5 2 16c0 5.5 1.5 6 7 6h3v-2.5c0-1.5 1-2.5 2.5-2.5h2.5c2 0 4.5-.5 5-6 0-5.5-1.5-6-7-6h-3V2z" />
      </svg>
    );
  }
  if (norm === 'c++') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#00599c" style={{ borderRadius: '2px', marginRight: '6px', flexShrink: 0 }}>
        <rect width="24" height="24" rx="3" />
        <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="-apple-system, sans-serif">C++</text>
      </svg>
    );
  }
  if (norm === 'c#') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#178600" style={{ borderRadius: '2px', marginRight: '6px', flexShrink: 0 }}>
        <rect width="24" height="24" rx="3" />
        <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="-apple-system, sans-serif">C#</text>
      </svg>
    );
  }

  // 2. Databases
  if (norm === 'dynamodb' || norm === 'postgresql') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // 3. Cloud & Infra
  if (norm === 'aws') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M17.5 19A6 6 0 0 0 13 9h-1.9A6.5 6.5 0 1 0 5 19.3" />
      </svg>
    );
  }
  if (norm === 'pinpoint' || norm === 'ses' || norm === 'eus' || norm === 'eventbridge') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  }
  if (norm === 'terraform') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B42BC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }
  if (norm === 'apache pulsar' || norm === 'apache camel') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D22128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="m12 3-1.912 5.886H3.877l4.98 3.633L6.945 18.4 12 14.767 17.055 18.4l-1.912-5.88 4.98-3.634h-6.21L12 3z" />
      </svg>
    );
  }

  // 4. Identity & Auth
  if (norm === 'okta') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007dc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (norm.includes('auth') || norm.includes('sso') || norm.includes('mfa') || norm.includes('fga') || norm.includes('rls')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  // 5. Observability
  if (norm === 'new relic' || norm === 'datadog' || norm === 'splunk' || norm === 'sentry' || norm === 'cloudwatch') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d2b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M3 3v18h18" />
        <path d="m18 8-4.5 4.5-3-3L7 14" />
      </svg>
    );
  }

  // 6. Engineering
  if (norm.includes('design') || norm.includes('system') || norm.includes('pattern')) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    );
  }

  // 7. Tooling
  if (norm === 'jira' || norm === 'confluence' || norm === 'opsgenie') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  // Fallback (generic code icon)
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', opacity: 0.7, flexShrink: 0 }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
