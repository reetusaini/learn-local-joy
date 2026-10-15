<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep five public content surfaces (home, course catalog, course detail, about, contact); account and certificate dialogs remain in the shared shell to preserve the requested page count.
- Use the shared learning provider for device-only demo accounts, enrollments, completion records, and session-scoped login; this project intentionally has no hosted authentication or backend.
- Store only password digests for demo accounts and explicitly prohibit real credentials; browser-only authentication is not a security boundary.
- Define course content in the browser-safe course module and use global semantic design tokens for all visual styling, so catalog and detail views remain consistent.
