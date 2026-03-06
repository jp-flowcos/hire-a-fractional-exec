# HireAFractionalExec.com — Brand & Design Brief

**Version:** 1.0 | **Date:** March 5, 2026

---

## 1. Brand Positioning

### Who You Are

HireAFractionalExec is the job board where high-growth companies find fractional C-suite leaders. Not a talent marketplace that takes a cut. Not a recruiter. A clean, fast, SEO-driven job board that connects founders with fractional executives directly.

### Brand Personality

| Trait | What it means | What it doesn't mean |
|---|---|---|
| **Bold** | Confident headlines, strong colors, clear opinions | Aggressive, shouty, or startup-bro |
| **Direct** | Says what it is, no marketing fluff | Cold or transactional |
| **Credible** | Built by a fractional exec who lives this world | Corporate, stuffy, or overly formal |
| **Modern** | Clean UI, fast, feels like a product not a template | Trendy for trend's sake, gimmicky |

### Tone of Voice

Think Basecamp meets Wellfound. Direct, opinionated, no-nonsense, but human. You're talking to senior operators and founders — people who value clarity and hate buzzwords.

**Do:**
- "Find your next fractional COO. Skip the recruiter."
- "Fractional leaders, real roles, no middleman."
- "Post a role. $299. Live in 24 hours."

**Don't:**
- "Unlock your company's potential with our innovative talent solutions"
- "Discover a seamless, end-to-end hiring experience"
- "Leverage our cutting-edge platform to optimize your executive search"

### Tagline Options

Pick one to ship with:
- **"Fractional leaders. Real roles. No middleman."**
- **"The job board for fractional C-suite."**
- **"Hire fractional. Skip the recruiter."**

---

## 2. Visual Identity

### Color Palette

Modern & bold means a dark-dominant palette with a sharp accent color. This signals premium (executive audience) while feeling modern (startup energy). Avoids the sea of white/blue that every other job board uses.

#### Primary Palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Background (dark)** | Near-black navy | `#0F172A` | Page background, hero sections, nav |
| **Surface** | Slate | `#1E293B` | Cards, elevated surfaces, job listings |
| **Surface light** | Light slate | `#334155` | Borders, dividers, hover states |
| **Text primary** | Off-white | `#F1F5F9` | Headlines, body text on dark |
| **Text secondary** | Cool gray | `#94A3B8` | Captions, metadata, secondary info |

#### Accent Colors

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Primary accent** | Electric teal | `#06B6D4` | CTAs, links, active states, badges |
| **Primary hover** | Bright cyan | `#22D3EE` | Button hovers, link hovers |
| **Secondary accent** | Warm amber | `#F59E0B` | Featured badges, alerts, premium indicators |
| **Success** | Green | `#10B981` | Success states, "new" badges |
| **Error** | Red | `#EF4444` | Error states, required fields |

#### Light Mode (Optional, Phase 2)

| Role | Color | Hex |
|---|---|---|
| Background | White | `#FFFFFF` |
| Surface | Light gray | `#F8FAFC` |
| Text primary | Dark slate | `#0F172A` |
| Primary accent | Deep teal | `#0891B2` |

### Why This Palette Works

- **Dark-dominant** stands out from WeWorkRemotely (yellow), Wellfound (white/green), Go Fractional (white/blue), FractionalJobs.io (white/purple). Nobody in this space is running dark mode.
- **Electric teal** is distinctive without being trendy. It reads as "modern tech" without the overused purple/gradient trap.
- **Warm amber** for featured/premium creates a natural "gold standard" association for paid listings.
- **Navy-black** signals executive credibility without the stuffiness of traditional corporate blue.

### DaisyUI Custom Theme

Add this to your DaisyUI config to implement the palette:

```javascript
// tailwind.config.js
daisyui: {
  themes: [
    {
      hafexec: {
        "primary": "#06B6D4",          // Electric teal
        "primary-content": "#0F172A",   // Dark text on teal buttons
        "secondary": "#F59E0B",         // Warm amber
        "secondary-content": "#0F172A", // Dark text on amber
        "accent": "#22D3EE",            // Bright cyan
        "accent-content": "#0F172A",
        "neutral": "#1E293B",           // Slate surface
        "neutral-content": "#F1F5F9",   // Off-white text
        "base-100": "#0F172A",          // Near-black background
        "base-200": "#1E293B",          // Slate
        "base-300": "#334155",          // Light slate
        "base-content": "#F1F5F9",      // Off-white text
        "info": "#06B6D4",
        "success": "#10B981",
        "warning": "#F59E0B",
        "error": "#EF4444",

        "--rounded-box": "0.75rem",
        "--rounded-btn": "0.5rem",
        "--rounded-badge": "1rem",
        "--animation-btn": "0.2s",
        "--btn-focus-scale": "0.98",
      },
    },
  ],
  darkTheme: "hafexec",
},
```

---

## 3. Typography

### Font Pairing

| Role | Font | Source | Why |
|---|---|---|---|
| **Headlines / Display** | **Plus Jakarta Sans** (Bold, ExtraBold) | Google Fonts | Geometric sans with personality. Modern startup feel without being generic. Wider letterforms than Inter, more character than Outfit. |
| **Body** | **Plus Jakarta Sans** (Regular, Medium) | Google Fonts | Same family for cohesion, lighter weights for readability |
| **Monospace (badges, tags)** | **JetBrains Mono** | Google Fonts | Clean monospace for role-type badges, salary figures, metadata |

### Type Scale

| Element | Size | Weight | Tracking |
|---|---|---|---|
| Hero headline | 48–56px (3–3.5rem) | 800 (ExtraBold) | -0.02em |
| Section headline | 32–36px (2–2.25rem) | 700 (Bold) | -0.01em |
| Card title / Job title | 20–24px (1.25–1.5rem) | 600 (SemiBold) | normal |
| Body text | 16px (1rem) | 400 (Regular) | normal |
| Caption / metadata | 14px (0.875rem) | 500 (Medium) | 0.01em |
| Badge text | 12px (0.75rem) | 600 (SemiBold) | 0.05em (uppercase) |

### Typography Rules

- Headlines: tight tracking, bold weight, teal accent on key words
- Body: generous line height (1.6–1.75 on dark backgrounds for readability)
- Job listing cards: job title in SemiBold, company in Regular, metadata in caption size
- CTAs: uppercase with wide letter-spacing for buttons

---

## 4. UI Patterns (Job Board Specific)

### What the Best Job Boards Get Right

From analyzing WeWorkRemotely, Wellfound, Remotive, FractionalJobs.io, and Go Fractional:

**WeWorkRemotely:** Category-first navigation, clean job cards, prominent salary/location info, strong SEO category pages. Their yellow brand color is instantly recognizable.

**Wellfound:** Clean, modern interface with strong filtering. One-click apply. Startup-focused audience alignment. Transparent salary and equity info.

**Remotive:** Content-first approach. Job listings are simple and scannable. Strong email digest. Resources section adds SEO value.

**What they all lack for your audience:** None of them feel "executive." They're designed for individual contributors and mid-level roles. Your design should signal seniority and premium positioning.

### Job Card Design

The job card is your most important UI component. It appears everywhere — listing pages, category pages, homepage, email digests.

```
┌─────────────────────────────────────────────────┐
│  [Company Logo]                                  │
│                                                  │
│  Fractional COO                      ★ FEATURED  │
│  Acme Corp                                       │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │
│  │ 🏷 COO   │  │ 🌍 Remote │  │ ⏱ 10-15h/wk │   │
│  └──────────┘  └──────────┘  └──────────────┘   │
│                                                  │
│  $8,000 – $12,000/mo              Posted 2d ago  │
│                                                  │
└─────────────────────────────────────────────────┘
```

**Design rules for job cards:**
- Company logo on left or top-left (makes listings feel premium)
- Job title is the largest text, always a link
- Role type badge in teal (monospace font, pill shape)
- Location type badge (remote = green, hybrid = amber, onsite = gray)
- Salary range prominent — don't hide it. Transparency signals quality.
- Featured listings: amber border-left or subtle amber glow
- Hover state: slight elevation + border color shift to teal

### Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]   Jobs ▾   Salary Calculator   Blog   Post a Job   │
│                                              [CTA: $299]    │
└─────────────────────────────────────────────────────────────┘
```

- "Post a Job" is always the primary CTA in nav (amber button, stands out)
- Jobs dropdown shows category links (Fractional COO, CMO, CFO, etc.)
- Sticky nav on scroll
- Mobile: hamburger with full-screen menu

### Category Page Layout

```
┌──────────────────────────────────────────────┐
│  H1: 42 Fractional COO Jobs                 │
│  Subtext: Browse open fractional COO roles   │
│  from companies hiring right now.            │
│                                              │
│  [Filter: Remote ▾] [Filter: Salary ▾]      │
├──────────────────────────────────────────────┤
│  [Job Card]                                  │
│  [Job Card]                                  │
│  [Job Card] ★ FEATURED                       │
│  [Job Card]                                  │
│  ...                                         │
├──────────────────────────────────────────────┤
│  📧 Get new Fractional COO jobs weekly       │
│  [Email input]  [Subscribe]                  │
├──────────────────────────────────────────────┤
│  ▼ What does a Fractional COO do?            │
│  ▼ How much does a Fractional COO cost?      │
│  ▼ When should I hire a Fractional COO?      │
├──────────────────────────────────────────────┤
│  Related: Fractional CMO Jobs | CoS Jobs     │
└──────────────────────────────────────────────┘
```

### Homepage Hero

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   THE JOB BOARD FOR                                          │
│   FRACTIONAL EXECUTIVES                                      │
│                                                              │
│   Find or post fractional COO, CMO, CFO,                     │
│   and C-suite roles. No recruiters. No fees.                 │
│                                                              │
│   [Browse Jobs]  [Post a Job — $299]                         │
│                                                              │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │
│   │ COO  │ │ CMO  │ │ CFO  │ │ CTO  │ │ CoS  │             │
│   └──────┘ └──────┘ └──────┘ └──────┘ └──────┘             │
│                                                              │
│   42 active roles  •  127 fractional leaders  •  100% free   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Dark background with subtle gradient or noise texture
- Hero headline: Plus Jakarta Sans ExtraBold, white
- "FRACTIONAL EXECUTIVES" could have a teal text highlight or underline
- Category pills below the CTA as quick-access links
- Stats bar at bottom adds social proof

---

## 5. Design Details

### Spacing System

Use Tailwind's default spacing scale consistently:
- Section padding: `py-16` to `py-24` (generous)
- Card padding: `p-6`
- Element gap: `gap-4` (16px default)
- Page max-width: `max-w-6xl` (1152px)

### Border & Elevation

- Cards: `border border-base-300` (subtle) + `rounded-lg`
- Featured cards: `border-l-4 border-secondary` (amber left border)
- Hover: `hover:border-primary` transition
- No heavy drop shadows — dark themes don't need them. Use border and background shifts instead.

### Micro-interactions

- Button hover: slight scale (`hover:scale-[0.98]`) + color shift
- Job card hover: border color transition to teal
- Email capture: success state with green checkmark animation
- Page transitions: subtle fade-in on route change

### Icons

Use **Lucide Icons** (already available if using ShipFast/React ecosystem):
- Briefcase → Job listings
- MapPin → Location
- Clock → Hours/week
- DollarSign → Salary
- Mail → Email capture
- ArrowRight → CTAs
- Star → Featured badge

### Visual Texture

To avoid flat dark mode blandness:
- Subtle dot grid pattern on hero background (CSS only, no images)
- Gradient overlay from `base-100` to `base-200` on section transitions
- Noise texture overlay at 2-3% opacity on hero sections (optional, adds depth)

---

## 6. Competitive Differentiation Summary

| Competitor | Their Look | Your Advantage |
|---|---|---|
| WeWorkRemotely | Yellow on white, casual, IC-focused | Dark/premium, executive-focused |
| Wellfound | White/green, startup marketplace | Niche authority, fractional-specific |
| Go Fractional | White/blue, corporate matching service | Direct posting, no middleman, transparent pricing |
| FractionalJobs.io | White/purple, general fractional | .com domain, SEO-first, salary tools, coaching funnel |
| Chief of Staff Network | White/navy, community + job board | Broader C-suite coverage, free to browse, modern UI |

---

## 7. Implementation Checklist

For the Claude Code build, add these to the ShipFast customization:

- [ ] Create custom DaisyUI theme `hafexec` (config above)
- [ ] Set `hafexec` as default and only theme (no light/dark toggle for MVP)
- [ ] Install Plus Jakarta Sans from Google Fonts
- [ ] Install JetBrains Mono for badges/metadata
- [ ] Set font-family in Tailwind config `extend.fontFamily`
- [ ] Update ShipFast Hero component with new headline, colors, layout
- [ ] Build job card component matching the wireframe
- [ ] Update nav with "Post a Job" amber CTA
- [ ] Add subtle dot-grid or noise texture to hero background
- [ ] Set `max-w-6xl` as default container width
- [ ] Ensure all text passes WCAG AA contrast on dark backgrounds

---

*Dark mode is the move. Nobody in fractional exec space is doing it. Stand out.*
