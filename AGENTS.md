# AGENTS.md - AI Coding Agent Guidelines

Guidelines for AI coding agents working on the ISEL LEIC Notes project.

## Project Overview

Static website built with **Astro 5.x** deployed on **Cloudflare Workers**. Renders markdown notes from a BSc Computer Science curriculum with dark/light themes, TOC, and prev/next navigation.

## Build & Development Commands

```bash
npm run dev      # Development server (hot reload)
npm run build    # Production build (runs git-dates script first)
npm run preview  # Preview with Wrangler (localhost:8788)
npm run deploy   # Build and deploy to Cloudflare Workers
```

**Build Process:** `scripts/generate-git-dates.js` extracts git dates -> `src/data/git-dates.json` (auto-generated) -> Astro builds to `dist/`

**No Tests/Linting:** TypeScript strict mode (via Astro) provides type checking during build.

## Project Structure

```
src/
├── components/          # Astro components
├── data/                # Generated data (git-dates.json)
├── layouts/             # Page layouts
├── lib/                 # TypeScript utilities
├── pages/               # Astro pages/routes
├── styles/              # Global CSS
├── content.config.ts    # Content collection config
└── middleware.ts        # Request middleware

Content: 1st-semester/ ... 6th-semester/   # Markdown notes at repo root
```

## Path Aliases (use these, not relative imports)

```typescript
import { something } from '@lib/navigation';         // src/lib/*
import Layout from '@layouts/Layout.astro';          // src/layouts/*
import Component from '@components/Component.astro'; // src/components/*
import '@styles/global.css';                         // src/styles/*
import data from '@data/git-dates.json';             // src/data/*
```

## Code Style Guidelines

### TypeScript (.ts)

**Naming:**
- Interfaces/Types: `PascalCase` (e.g., `NavItem`, `Semester`)
- Functions: `camelCase` (e.g., `extractTitle`, `getPathInfo`)
- Constants: `SCREAMING_SNAKE_CASE` for URLs/config
- Variables/arrays: `camelCase`, plural for arrays

**Patterns:**
```typescript
// Always define interfaces
interface Subject { code: string; name: string; path: string; }

// Union types for enums
type ContentType = 'markdown' | 'pdf';

// Return null for missing cases (don't throw)
function getSubject(path: string): Subject | null {
  return subjects.find(s => s.path === path) ?? null;
}
```

### Astro Files (.astro)

**Component Structure:**
```astro
---
// 1. Imports (path aliases)
import Layout from '@layouts/Layout.astro';
import type { TocItem } from '@components/TableOfContents.astro';

// 2. Props interface
interface Props { title: string; items?: string[]; }

// 3. Destructure with defaults
const { title, items = [] } = Astro.props;
---

<!-- 4. Template -->
<div class="component-name">
  {items.length > 0 && (
    <ul>{items.map(item => <li>{item}</li>)}</ul>
  )}
  <slot />
</div>

<style>
  .component-name { padding: 1rem; }
</style>

<script>
  document.addEventListener('astro:page-load', () => { /* init */ });
</script>
```

**Template Patterns:**
```astro
{condition && <Element />}                          <!-- Conditional -->
{isActive ? <Active /> : <Inactive />}              <!-- Ternary -->
{items.map(item => <Item {...item} />)}             <!-- Map -->
<div class:list={['base', { 'active': isActive }]}> <!-- Dynamic class -->
```

### CSS Conventions

```css
/* Use CSS variables from global.css */
.component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* Dark mode */
:global([data-theme="dark"]) .component { /* overrides */ }

/* BEM-like naming */
.nav-container { }
.nav-link { }
.nav-link--active { }

/* Mobile-first responsive */
.component { padding: 1rem; }
@media (min-width: 768px) { .component { padding: 2rem; } }
```

## Content Guidelines

- Place notes in `{n}th-semester/{subject-code}/`
- Use `README.md` for subject overview
- Name files with numeric prefixes: `1.0-topic.md`, `1.1-subtopic.md`
- Start with H1 heading (used as page title)

**Adding subjects:** Create folder -> Add README.md -> Update `src/lib/navigation.ts`

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config, Cloudflare adapter |
| `wrangler.jsonc` | Cloudflare Workers config |
| `src/lib/navigation.ts` | Navigation data, semester/subject definitions |
| `src/layouts/Layout.astro` | Base HTML layout |
| `src/layouts/NoteLayout.astro` | Note page layout with sidebar |
| `src/styles/global.css` | CSS variables, theme definitions |

## Important Rules

1. **Do not edit** `src/data/git-dates.json` - auto-generated
2. **Use path aliases** - never relative imports like `../../`
3. **Prefer editing** existing files over creating new ones
4. **No emoji** in code unless explicitly requested
5. **Run `npm run build`** to verify changes compile
