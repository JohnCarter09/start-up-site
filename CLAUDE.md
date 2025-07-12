# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev          # Start development server at http://localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Note: This project uses pnpm (see pnpm-lock.yaml)
```

## Architecture Overview

This is a **Next.js 15 SaaS template** using **Tailwind CSS v4** and **TypeScript**. The project demonstrates a complete landing page for an AI automation service with authentication, blog functionality, and advanced animations.

### Key Technologies
- **Next.js 15.3.5** with App Router and React 19
- **Tailwind CSS v4** with CSS-first configuration in `globals.css`
- **TypeScript** with strict mode enabled
- **Radix UI** primitives for accessible components
- **Framer Motion** for complex animations
- **MDX** for blog content with syntax highlighting

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Route group: login, signup with centered layout
│   ├── (marketing)/       # Route group: blog pages with header/footer
│   ├── page.tsx           # Homepage (main landing page)
│   └── layout.tsx         # Root layout with theme provider
├── components/
│   ├── magicui/          # Custom animation components (blur-fade, ripple, etc.)
│   ├── sections/         # Landing page sections (hero, pricing, testimonials)
│   ├── ui/               # Shadcn/ui components (New York style)
│   └── [utility].tsx     # Theme toggle, charts, etc.
├── lib/
│   ├── config.tsx        # Central site configuration and all content
│   ├── blog.ts           # MDX processing with unified.js
│   └── utils.ts          # Utility functions (cn, etc.)
└── content/              # MDX blog files
```

## Configuration-Driven Architecture

**Critical**: All site content is managed through `/src/lib/config.tsx`:
- Site metadata and SEO settings
- Navigation structure with dropdown menus
- Pricing plans and features
- FAQ content (supports JSX)
- Footer organization
- Social links

When adding content, always update `config.tsx` rather than hardcoding in components.

## Styling System

**Tailwind CSS v4 Specifics**:
- Configuration is **CSS-first** in `src/app/globals.css`
- Uses **OKLCH color system** for better color management
- Custom theme variables defined as CSS custom properties
- Container utilities with responsive breakpoints
- Dark mode support via CSS variables (not classes)

**Component Styling**:
- Uses `class-variance-authority` (CVA) for component variants
- Shadcn/ui components with New York style variant
- `cn()` utility function combines `clsx` and `tailwind-merge`

## Animation System

**MagicUI Components** (in `/src/components/magicui/`):
- `blur-fade.tsx`: Entrance animations with configurable delay
- `border-beam.tsx`: Animated border effects
- `marquee.tsx`: Infinite scrolling marquee
- `ripple.tsx`: Interactive click effects
- `hero-video.tsx`: Video dialog overlays

**Animation Patterns**:
- Uses `BLUR_FADE_DELAY` constant for staggered animations
- Framer Motion with `useInView` for scroll-triggered effects
- Responsive animation timing based on screen size

## Content Management

**Blog System**:
- MDX files in `/content/` directory
- Frontmatter for metadata (title, date, author, etc.)
- Dynamic routing via `app/(marketing)/blog/[slug]/page.tsx`
- Syntax highlighting with `rehype-pretty-code`
- Dynamic OG image generation

**Adding Blog Posts**:
1. Create `.mdx` file in `/content/`
2. Include required frontmatter
3. Images go in `/public/` directory

## Development Patterns

**Component Creation**:
- Follow existing patterns in `/src/components/sections/`
- Use CVA for component variants
- Export from main component file, import in pages
- Follow TypeScript strict mode conventions

**Route Organization**:
- Use route groups `(auth)` and `(marketing)` for layout variations
- Auth pages use centered layout without header/footer
- Marketing pages include full site layout

**Type Safety**:
- All components are fully typed
- Config file exports typed interfaces
- Use TypeScript strict mode settings

## Path Aliases
- `@/*` maps to `./src/*`
- Import components: `import { Button } from "@/components/ui/button"`
- Import utilities: `import { cn } from "@/lib/utils"`

## Theme System
- `next-themes` for theme switching
- Theme toggle component in header
- CSS variables handle light/dark variants
- System preference detection disabled (defaults to light)