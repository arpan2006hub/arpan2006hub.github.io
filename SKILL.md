---
name: add-portfolio-entry
description: Use when adding or editing a project, hackathon, or skill entry on the portfolio.
---

# Adding a project or hackathon entry

1. Open src/content/profile.ts.
2. Add the entry to the relevant array (`projects` or `hackathons`) — never edit
   ProjectCard.astro or Hackathons.astro directly for content changes.
3. Required fields for a project: name, oneLiner, stack[], githubUrl, liveUrl? (optional).
4. Keep oneLiner under ~20 words — the card layout is not built for paragraphs.
5. Run `npm run dev` and visually confirm the new card doesn't break the grid at
   360px, 768px, and 1440px before committing.
6. Do not add an icon, badge, or logo asset for the entry unless one is supplied —
   text-only cards are the intended look.