# 05. Component Hierarchy

## Main UI Hierarchy

```text
App Layout
└── AppShell
    ├── TopBar
    ├── Header
    ├── main
    │   ├── Home
    │   │   ├── GetAllHomepage
    │   │   ├── AnnotatorPlugin (authenticated only)
    │   │   ├── Hero
    │   │   ├── Features
    │   │   ├── Stats
    │   │   ├── About
    │   │   ├── Events
    │   │   ├── Rankings
    │   │   ├── Testimonials
    │   │   ├── CTA
    │   │   └── Newsletter
    │   ├── About
    │   ├── Awards
    │   ├── Contact
    │   ├── EventDetails
    │   ├── DashboardPage
    │   └── LoginForm
    └── Footer
```

## Dashboard Hierarchy

```text
DashboardPage
├── DashboardSidebar
├── DashboardTopbar
├── DashboardOverview
└── DashboardMetrics
```

## Annotation Plugin Hierarchy

```text
AnnotatorPlugin
├── GetAllCommments / GetAllComments
├── Floating action controls
├── Draft editor
└── Marker[]
    ├── Pin
    └── Popover
```

## Event Routing Hierarchy

```text
app/events/[slug]/page.tsx
└── EventRouteResolver
    ├── EventDetails
    ├── Awards
    ├── WorkshopsFDP
    ├── ResearchForums
    ├── InternationalConferences
    └── UpcomingEvents
```

## Props Flow Notes

- Most sections are prop-light and mostly self-contained
- Global state is preferred over deep prop drilling

## Best Practices Followed

- Clear section modularization
- Dashboard kept separate from marketing UI

## Missing / Risks

- Some components rely heavily on global state, reducing portability

