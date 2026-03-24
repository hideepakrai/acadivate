# 06. Data Flow

## High-Level Flow

```mermaid
flowchart TD
  UI["Client Components"] --> Redux["Redux Toolkit Store"]
  Redux --> Thunks["Async Thunks"]
  Thunks --> API["Next API Routes"]
  API --> DB["MongoDB"]
  DB --> API
  API --> Redux
  Redux --> UI

  UI --> Zustand["Zustand Annotation Store"]
  Redux --> Zustand
  Zustand --> MarkerUI["Annotation Marker UI"]
```

## Flow Categories

### Authentication

```text
LoginForm -> loginThunk -> /api/auth -> MongoDB -> authSlice -> Header/UI
```

### Pages Content

```text
GetAllHomepage -> fetchPagesThunk -> /api/pages -> pagesSlice -> Home/About/etc.
```

### Comments / Annotation

```text
GetAllCommments -> fetchCommentsThunk -> commentSlice
AnnotatorPlugin -> filter by slug -> setAnnotations in Zustand
Marker -> local interaction + comment thunks
```

## Important Architecture Detail

Comments currently live in two places:

- Redux: canonical async data
- Zustand: interaction/rendering state for plugin

This improves UI responsiveness but introduces sync complexity.

## Best Practices Followed

- Clear separation between async store and interaction store

## Missing / Risks

- Dual-state ownership can introduce bugs if sync is missed

