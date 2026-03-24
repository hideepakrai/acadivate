# 08. Business Logic

## Auth Logic

Files:

- [authSlice.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/auth/authSlice.ts)
- [authThunks.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/auth/authThunks.ts)

Responsibilities:

- login request
- local auth persistence
- logout
- auth UI branching

## Page Logic

Files:

- [pagesSlice.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/pages/pagesSlice.ts)
- [pageThunk.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/pages/pageThunk.ts)
- [GetAllHomepage.tsx](/Users/manishgupta/Desktop/Project/acadivate/src/components/homePage/GetAllHomepage.tsx)

Responsibilities:

- fetch page records
- maintain `allPages`
- set `currentPages`

## Comment Logic

Files:

- [commentSlice.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/comments/commentSlice.ts)
- [commentThunk.ts](/Users/manishgupta/Desktop/Project/acadivate/src/hook/comments/commentThunk.ts)

Responsibilities:

- fetch comments
- create/update/delete comments
- maintain `allComments` and `pageComments`

## Annotation Plugin Logic

Files:

- [AnnotatorPlugin.tsx](/Users/manishgupta/Desktop/Project/acadivate/src/components/annotationPlugin/AnnotatorPlugin.tsx)
- [Marker.tsx](/Users/manishgupta/Desktop/Project/acadivate/src/components/annotationPlugin/Marker.tsx)
- [store.ts](/Users/manishgupta/Desktop/Project/acadivate/src/components/annotationPlugin/store.ts)
- [utils.ts](/Users/manishgupta/Desktop/Project/acadivate/src/components/annotationPlugin/utils.ts)

Responsibilities:

- DOM element targeting
- annotation placement
- drag/reposition behavior
- local interaction state
- syncing comments by route slug

## Utility Logic

- [mongodb.ts](/Users/manishgupta/Desktop/Project/acadivate/src/lib/mongodb.ts): DB client reuse
- [utils.ts](/Users/manishgupta/Desktop/Project/acadivate/src/lib/utils.ts): class merging

## Best Practices Followed

- Business logic mostly extracted out of visual sections
- Store concerns grouped into dedicated feature folders

## Missing / Risks

- No schema validation
- No service layer between thunks and APIs
- Repeated debug logging remains in some code paths

