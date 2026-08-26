# Awesome Shadcn

This repo is a selection of shadcn resources that we use for our projects.

Several registries here overlap on the surface, so every entry carries three lines that tell them apart:

- **What it is** — the character of the registry, not its marketing.
- **Reach for it when** — the situation that makes this the right pick.
- **Reach elsewhere when** — the neighbouring registry that wins instead, and why.

Component tables sit inside a collapsed accordion under each entry. Each row names the concrete situation that should trigger the component, so an agent can match a task to a component without opening the docs first.

Adding a resource? Read [CONTRIBUTING.md](CONTRIBUTING.md) first — a banner and a complete component list are required, and the resource has to work without a specific backend or framework behind it.

## Table of Contents

- [Official](#official)
- [Plugins](#plugins)
  - [Gradient Border](#gradient-border)
  - [Border Beam](#border-beam)
- [Components](#components)
  - [AICSS](#aicss)
  - [Beautiful UI](#beautiful-ui)
  - [Chánh Đại Components](#chánh-đại-components)
  - [Extend UI](#extend-ui)
  - [Fluid Functionalism](#fluid-functionalism)
  - [interior.dev](#interiordev)
  - [Magic UI](#magic-ui)
  - [Payload Components](#payload-components)
  - [ReUI](#reui)
  - [Spell UI](#spell-ui)
  - [Supabase UI](#supabase-ui)
  - [Transitions.dev](#transitionsdev)
  - [Unlumen UI](#unlumen-ui)
  - [Watermelon UI](#watermelon-ui)
- [Loaders](#loaders)
  - [Dot Matrix](#dot-matrix)
  - [Thinking Orbs](#thinking-orbs)

## Official

### [shadcn Project Creator](https://ui.shadcn.com/create)

![shadcn Project Creator](assets/banners/shadcn-project-creator.png)

The official scaffolding flow: framework, style, base colour, and registry wiring decided up front.

**Reach for it when** you start a project from zero and want `components.json`, the CSS variables, and the registry config to be correct before the first component lands.

**Reach elsewhere when** the project already exists — then add registries by hand and pull single components with `shadcn add`.

## Plugins

### [Gradient Border](https://gradient-border.floriankiem.com/)

![Gradient Border](assets/banners/gradient-border.png)

A Tailwind CSS plugin for gradient borders. Not shadcn itself, but it lives in the same Tailwind styling system, so it composes with any shadcn component.

**Reach for it when** a card, button, or pricing tier needs a static gradient outline and you would otherwise fake it with a padded wrapper, a pseudo-element, and `background-clip` by hand.

**Reach elsewhere when** the border should move — [Border Beam](#border-beam) animates, this one does not.

### [Border Beam](https://beam.jakubantalik.com/)

![Border Beam](assets/banners/border-beam.png)

A lightweight animated glowing border-beam effect for React, with multiple sizes, colour variants, and themes.

**Reach for it when** exactly one element on the screen should pull the eye — an active plan, a highlighted feature, a running job — and a static border is not enough.

**Reach elsewhere when** you need the outline only for styling, not attention: [Gradient Border](#gradient-border) costs no animation frames.

## Components

### [AICSS](https://www.aicss.dev/#components)

![AICSS](assets/banners/aicss.png)

Free copy-paste blocks for everything an agent renders *inside* the conversation: thinking states, tool calls, streaming text, citations, and structured output.

**Reach for it when** you are building the message stream itself — the transcript where each agent turn has to be a distinct, readable block instead of a wall of markdown.

**Reach elsewhere when** the agent needs surfaces *around* the chat (approvals, task queues, CRM records): that is [Beautiful UI](#beautiful-ui). For documents an agent reads or edits, that is [Extend UI](#extend-ui).

<details>
<summary><strong>14 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Thinking State](https://www.aicss.dev/components/thinking-state) | The agent is between turns and the user has nothing to look at. Smallest honest signal: work is happening, no detail claimed. |
| [Thinking + Reasoning](https://www.aicss.dev/components/thinking-reasoning) | Reasoning is long enough that showing it all costs attention, but hiding it costs trust. Collapsed by default, expandable for the user who wants the chain. |
| [Orbs](https://www.aicss.dev/components/orbs) | A thinking state that shares a chat line with an avatar and must read as alive at 20–64px instead of as a stalled spinner. |
| [Web Search](https://www.aicss.dev/components/web-search) | The agent left the conversation to fetch sources, and the user should see the query and the hits before the answer arrives. |
| [File Diff](https://www.aicss.dev/components/file-diff) | The agent edited code and the user must approve or audit the exact lines — inline `+`/`-` with the surrounding context, not a prose summary. |
| [Image Generation](https://www.aicss.dev/components/image-generation) | Generation takes seconds and the layout must reserve the final image's box now, so the transcript does not jump when it resolves. |
| [Text Response](https://www.aicss.dev/components/text-response) | The finished, non-streamed reply: markdown, bold, inline code, sane spacing. The default block every other one falls back to. |
| [Streaming Text](https://www.aicss.dev/components/streaming-text) | Tokens arrive over a socket and perceived latency matters more than a clean paint. |
| [Inline Citations](https://www.aicss.dev/components/inline-citations) | The answer makes factual claims and each one needs an attributable source at the exact sentence, not a link dump at the end. |
| [Code Block](https://www.aicss.dev/components/code-block) | Agent output is code the user will copy — filename header, highlighting, copy button, no accidental markdown mangling. |
| [To-do List](https://www.aicss.dev/components/task-list) | A multi-step plan runs longer than one turn and the user needs to see what is done, running, and still queued. |
| [Data Table](https://www.aicss.dev/components/data-table) | Structured tool output belongs in rows and columns; a markdown table would lose alignment and overflow on mobile. |
| [Comparison Table](https://www.aicss.dev/components/comparison-table) | The agent's answer is a recommendation between options and the user should be able to check the criteria side by side. |
| [AI Agent Input](https://www.aicss.dev/components/ai-agent-input) | The composer needs agent affordances — multiline, submit-on-enter, attachments — and a plain `Textarea` would need all of it rebuilt. |

</details>

### [Beautiful UI](https://beautiful-ui-five.vercel.app/)

![Beautiful UI](assets/banners/beautiful-ui.png)

Copy-paste primitives for AI-native *products*: the approval, review, and data surfaces that sit around an agent rather than inside its chat bubble.

**Reach for it when** the agent acts on the user's data and the interface has to carry consequence — a human-in-the-loop approval before a write, a live task queue, a diff sweeping through a real table.

**Reach elsewhere when** you only need the transcript blocks themselves ([AICSS](#aicss) is narrower and free-standing), or when the table is a general product data grid with no agent in it ([ReUI](#reui) Data Grid).

<details>
<summary><strong>19 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Loading State](https://beautiful-ui-five.vercel.app/#loading-state) | A run takes long enough that the user starts wondering if it hung — the elapsed counter answers that without a progress bar you cannot honestly fill. |
| [Thinking](https://beautiful-ui-five.vercel.app/#thinking-state) | Reasoning, search, and coding steps arrive as a trace, and the user should be able to open any one of them without losing the others. |
| [Streaming Text](https://beautiful-ui-five.vercel.app/#streaming-text) | The answer streams and still has to end with sources, actions, and follow-up prompts attached — not just raw tokens. |
| [Approval Card](https://beautiful-ui-five.vercel.app/#approval-card) | The agent is about to do something irreversible and must stop and ask. The single most important surface in any agent that writes. |
| [Tool Chips](https://beautiful-ui-five.vercel.app/#tool-chips) | Many small tool calls would drown the transcript as full blocks; chips keep the run scannable and still expandable. |
| [Task Rows](https://beautiful-ui-five.vercel.app/#task-rows) | Several agent jobs run at once and each needs its own running / failed / completed state in a list the user can scan in one pass. |
| [Chat](https://beautiful-ui-five.vercel.app/#chat-composer) | You need a whole chat panel, not a message block — tabs for parallel threads plus a composer, wired together. |
| [Prompt Bar](https://beautiful-ui-five.vercel.app/#prompt-bar) | The composer is the product: `@` for sources, `/` for commands, a model picker, and dictation in one control. |
| [Recommendation Card](https://beautiful-ui-five.vercel.app/#recommendation-card) | The agent suggests an action and the user needs its confidence before deciding — the meter is what makes it acceptable or rejectable. |
| [Context Cards](https://beautiful-ui-five.vercel.app/#context-cards) | A RAG answer must show which chunks were retrieved, so the user can tell a grounded answer from a confident guess. |
| [Diff Table](https://beautiful-ui-five.vercel.app/#diff-table) | The agent proposes edits across many rows, and the user has to review the sweep as a whole before committing it. |
| [Records Table](https://beautiful-ui-five.vercel.app/#records-table) | A CRM-shaped grid with tags, sorting, and relationship strength — the surface an agent enriches and a human still works in daily. |
| [Filter Table](https://beautiful-ui-five.vercel.app/#filter-table) | Status chips reorganise live data in place, so filtering feels like a view change instead of a reload. |
| [Sidebar Nav](https://beautiful-ui-five.vercel.app/#sidebar-nav) | The app shell around all of the above: sections, active state, and room for run history. |
| [Search](https://beautiful-ui-five.vercel.app/#search) | Command-style search that filters as you type and still says something useful when nothing matches. |
| [Insight Cards](https://beautiful-ui-five.vercel.app/#insight-cards) | The agent reports findings, and each finding carries a chart the user can scrub instead of a static number. |
| [Code Block](https://beautiful-ui-five.vercel.app/#code-block) | Agent-written code that appears line by line — right when watching it being written is the point, not just reading it after. |
| [Fine-tune Card](https://beautiful-ui-five.vercel.app/#fine-tune-card) | The agent adjusts properties in an inspector and the user needs to see and override each change. |
| [Selection Actions](https://beautiful-ui-five.vercel.app/#selection-actions) | The user highlights a passage and hands exactly that to the agent — text selection as the prompt. |

</details>

### [Chánh Đại Components](https://chanhdai.com/components)

![Chánh Đại Components](assets/banners/chanh-ai-components.png)

Pixel-perfect one-off components from a personal site, published as a trusted `@ncdai` registry. Small set, unusually high finish per piece.

**Reach for it when** a single moment on a portfolio, docs site, or brand page has to look hand-made — a wordmark that draws itself, a logo that tracks the cursor, a career timeline.

**Reach elsewhere when** you need coverage rather than craft: [Magic UI](#magic-ui) has far more marketing effects, and [ReUI](#reui) has the product primitives this registry deliberately skips.

<details>
<summary><strong>36 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Apple Hello Effect](https://chanhdai.com/components/apple-hello-effect) | A landing or splash screen needs one memorable opening beat, and a handwritten "hello" drawing itself earns more attention than a fade-in headline. |
| [Brand Assets Menu](https://chanhdai.com/components/brand-assets-menu) | Press and partners keep asking for your logo files. Right-click the mark, copy the SVG, or jump to the brand guidelines. |
| [Chevrons Up Down Icon](https://chanhdai.com/components/chevrons-up-down-icon) | A sort control or select trigger where the icon should morph between up and down instead of swapping frames. |
| [Code Block Command](https://chanhdai.com/components/code-block-command) | Docs show an install snippet across npm, pnpm, yarn, and bun, and the package-manager tabs plus copy button should already work. |
| [Consent Manager](https://chanhdai.com/components/consent-manager) | You need a cookie banner that respects the design instead of a vendor widget bolted on top — GDPR categories with per-category opt-in. |
| [Copy Button](https://chanhdai.com/components/copy-button) | Any copyable value where the button must confirm the copy landed and reset itself afterwards. |
| [Dot Grid Spotlight](https://chanhdai.com/components/dot-grid-spotlight) | A hero or section background that should react to the pointer without becoming the subject of the page. |
| [Elastic Slider](https://chanhdai.com/components/elastic-slider) | A volume or intensity control that should feel rubbery at the ends, so hitting the limit is felt and not just displayed. |
| [Fluid Gradient Text](https://chanhdai.com/components/fluid-gradient-text) | A headline where the gradient follows the cursor across the words — interactive emphasis instead of a static gradient fill. |
| [GitHub Contributions](https://chanhdai.com/components/github-contributions) | A developer profile or team page proving activity over time, using the grid everyone already knows how to read. |
| [GitHub Stars](https://chanhdai.com/components/github-stars) | An open-source project page where the live star count is the social proof, fetched rather than hard-coded. |
| [Glow Card Grid](https://chanhdai.com/components/glow-card-grid) | A feature grid where hovering one card should light its border and leave neighbours calm. |
| [Haptic Feedback](https://chanhdai.com/components/haptic) | A mobile web app where confirmations should be felt, not only seen, on devices that support the Vibration API. |
| [Icon Swap](https://chanhdai.com/components/icon-swap) | An icon changes meaning mid-interaction (play/pause, copy/copied) and should scale-blur across instead of popping. |
| [Line Nav](https://chanhdai.com/components/line-nav) | A long vertical nav where the active item must stay findable — its marker extends and it scrolls itself into view on mount. |
| [Logos Carousel](https://chanhdai.com/components/logos-carousel) | More customer logos than fit the row: cycle them column by column in a staggered wave rather than scrolling a marquee. |
| [Middle Truncation](https://chanhdai.com/components/middle-truncation) | File paths, wallet addresses, or hashes where the tail identifies the item, so trailing `…` would destroy the information. |
| [Mobius Loop Icon](https://chanhdai.com/components/mobius-loop-icon) | A looping or "always on" concept needs a mark that morphs between circle and infinity rather than a static glyph. |
| [React Wheel Picker](https://chanhdai.com/components/react-wheel-picker) | A mobile web flow where a native-feeling iOS wheel beats a dropdown for dates, times, or durations. |
| [Scroll Fade Effect](https://chanhdai.com/components/scroll-fade-effect) | A scroll container whose hard cut-off makes it look broken — the fade signals there is more without adding a scrollbar. |
| [Share Menu](https://chanhdai.com/components/share-menu) | An article or product page where sharing must cover copy-link, X, LinkedIn, and the native share sheet in one control. |
| [Shimmering Text](https://chanhdai.com/components/shimmering-text) | One label ("New", "Pro", a loading heading) should draw the eye with a slow sweep and no layout impact. |
| [Slide to Unlock](https://chanhdai.com/components/slide-to-unlock) | A consequential action where a click is too cheap and a confirm dialog is too heavy — the gesture is the confirmation. |
| [Spinning Circular Text](https://chanhdai.com/components/spinning-circular-text) | A badge, seal, or scroll cue where text on a rotating circle carries the brand mark. |
| [Spotlight Logo](https://chanhdai.com/components/spotlight-logo) | The logomark itself is the interaction: highlight tracks the cursor, press morphs the paths, reduced motion respected. |
| [Testimonial](https://chanhdai.com/components/testimonial) | One quote, quietly presented, when the section is not about testimonials. |
| [Testimonial 2](https://chanhdai.com/components/testimonial-2) | A quote that must be verifiable — author, role, and a link back to the original post. |
| [Testimonial Spotlight](https://chanhdai.com/components/testimonial-spotlight) | One customer story deserves editorial weight and should not sit in a grid of equals. |
| [Testimonials Marquee](https://chanhdai.com/components/testimonials-marquee) | You have thirty quotes and want the volume itself to read as proof, in a strip that keeps moving. |
| [Text Flip](https://chanhdai.com/components/text-flip) | A hero headline that names several audiences or use cases by rotating the last word. |
| [Theme Switcher](https://chanhdai.com/components/theme-switcher) | Three-way light/dark/system choice that must be explicit, because a two-state toggle cannot express "system". |
| [Theme Toggle Effect](https://chanhdai.com/components/theme-toggle-effect) | Theme switching should feel deliberate — the new theme wipes in from the button using the View Transitions API. |
| [Timescale](https://chanhdai.com/components/timescale) | Milestones plotted against a real time axis, where the *gaps* between events carry meaning a plain list would flatten. |
| [TOC Minimap](https://chanhdai.com/components/toc-minimap) | Long-form docs where a full table of contents costs too much width but the reader still needs position and jump targets. |
| [Twemoji](https://chanhdai.com/components/twemoji) | Emoji appear in user-generated content and must render identically on Windows, Android, and iOS. |
| [Work Experience](https://chanhdai.com/components/work-experience-component) | A CV or about page with roles, dates, and nested projects that should collapse instead of running to three screens. |

</details>

### [Extend UI](https://ui.extend.ai/ui)

![Extend UI](assets/banners/extend-ui.png)

Open source document components for agents, internal tools, and user-facing review flows. The only registry here that treats a file format as a first-class UI problem.

**Reach for it when** the document *is* the workflow — an extraction pipeline a human must verify, a contract to sign, a batch of scans to split into invoices. Rendering PDF, DOCX, XLSX, and PPTX correctly in the browser is weeks of work you do not want to own.

**Reach elsewhere when** files are only an attachment on a form: [ReUI](#reui) File Upload or [Supabase UI](#supabase-ui) Dropzone are the smaller, right-sized answer.

<details>
<summary><strong>15 components and 6 blocks</strong></summary>

| Component | Use when |
| --- | --- |
| [PDF Viewer](https://ui.extend.ai/ui/docs/components/pdf-viewer) | Users must read the source PDF next to extracted data — sending them to a download breaks the review loop. |
| [DOCX Viewer](https://ui.extend.ai/ui/docs/components/docx-viewer) | Word files arrive from clients and must be readable in-app without a Microsoft round trip. |
| [DOCX Editor](https://ui.extend.ai/ui/docs/components/docx-editor) | Users have to change the Word document itself and hand it back, not just comment on it. |
| [XLSX Viewer](https://ui.extend.ai/ui/docs/components/xlsx-viewer) | A spreadsheet needs inspecting with its sheets and formatting intact, before anything is imported. |
| [XLSX Editor](https://ui.extend.ai/ui/docs/components/xlsx-editor) | Cell values must be corrected in place — typically fixing what an extraction model got wrong. |
| [PPTX Viewer](https://ui.extend.ai/ui/docs/components/pptx-viewer) | Slide decks are part of the intake and users need to page through them without PowerPoint. |
| [CSV/TSV Viewer](https://ui.extend.ai/ui/docs/components/csv-tsv-viewer) | A delimited file needs previewing as a table before import, so bad delimiters and headers surface early. |
| [Document Viewer Sidebar](https://ui.extend.ai/ui/docs/components/document-viewer-sidebar) | A long document needs page thumbnails and jump targets, because scrolling 200 pages is not navigation. |
| [Document Splits](https://ui.extend.ai/ui/docs/components/document-splits) | One scanned batch holds many logical documents and a human must confirm where each one starts. |
| [File Upload](https://ui.extend.ai/ui/docs/components/file-upload) | Intake is document-heavy: many files, real formats, per-file progress and errors. |
| [File Thumbnail](https://ui.extend.ai/ui/docs/components/file-thumbnail) | A list of uploads is unusable as filenames alone — users recognise documents by how they look. |
| [File System](https://ui.extend.ai/ui/docs/components/file-system) | Documents live in folders users browse, move, and organise, rather than a flat list. |
| [Schema Builder](https://ui.extend.ai/ui/docs/components/schema-builder) | Users define what to extract themselves, so the product does not need a developer for every new document type. |
| [Bounding Box Citations](https://ui.extend.ai/ui/docs/components/bounding-box-citations) | Every extracted value must point back to the exact place on the page — the difference between an audit trail and a guess. |
| [E-Signature](https://ui.extend.ai/ui/docs/components/e-signature) | A document flow ends in a signature and a third-party signing vendor would be too much machinery. |
| [Layout Blocks](https://ui.extend.ai/ui/blocks#layout-blocks) | You need the whole document-agent shell — viewer, sidebar, extraction panel — arranged and wired. |
| [Bounding Box Citations Block](https://ui.extend.ai/ui/blocks#bounding-box-citations) | The full citation review screen: extracted fields on one side, highlighted source on the other. |
| [Excel Document Splits](https://ui.extend.ai/ui/blocks#excel-document-splits) | Split review for spreadsheets, where the boundary is a sheet or row range rather than a page. |
| [PDF Dropzone](https://ui.extend.ai/ui/blocks#pdf-dropzone) | A focused single-purpose screen: drop a PDF, see it, act on it. Good first screen of a document product. |
| [DOCX Editor Block](https://ui.extend.ai/ui/blocks#docx-editor-block) | The editing screen around the DOCX editor, including file state and save actions. |
| [E-Signature Block](https://ui.extend.ai/ui/blocks#e-signature) | The complete signing screen: document, signer fields, and confirmation. |

</details>

### [Fluid Functionalism](https://www.fluidfunctionalism.com/)

![Fluid Functionalism](assets/banners/fluid-functionalism.png)

A complete replacement set for the standard shadcn form controls, rebuilt around spring motion, surface depth, and hover that responds instead of just changing colour.

**Reach for it when** the product is made of controls the user touches all day — settings, filters, config panels — and you want the whole set to feel consistent rather than pasting one animated control into stock shadcn.

**Reach elsewhere when** you need one specific interaction done right rather than a system ([interior.dev](#interiordev)), or when the missing piece is a complex widget like a data grid or kanban ([ReUI](#reui)).

<details>
<summary><strong>23 components and 3 system docs</strong></summary>

| Component | Use when |
| --- | --- |
| [Accordion](https://www.fluidfunctionalism.com/docs/accordion) | Sections open and close often enough that a jumpy height transition becomes the thing users notice. |
| [AskUserQuestions](https://www.fluidfunctionalism.com/docs/ask-user-questions) | An agent or wizard must ask a real question mid-flow: preset options, a skip path, and a free-text answer, without a modal. |
| [Badge](https://www.fluidfunctionalism.com/docs/badge) | Status labels sit beside these controls and stock shadcn badges would look flat next to them. |
| [Button](https://www.fluidfunctionalism.com/docs/button) | The primary action should confirm the press physically — the baseline this whole set is tuned against. |
| [Card](https://www.fluidfunctionalism.com/docs/card) | A container that has to hold the set's surface treatment, so nested controls do not look pasted on. |
| [ChatMessage](https://www.fluidfunctionalism.com/docs/chat-message) | A conversation surface built from the same system as the rest of the app, instead of an imported chat kit. |
| [CheckboxGroup](https://www.fluidfunctionalism.com/docs/checkbox-group) | Several related settings are toggled in one sitting and each change must register instantly. |
| [ColorPicker](https://www.fluidfunctionalism.com/docs/color-picker) | Users pick a brand or label colour and need to see the result while dragging, not after releasing. |
| [Dialog](https://www.fluidfunctionalism.com/docs/dialog) | A modal that must not feel abrupt — it should arrive from and return to its trigger. |
| [Dropdown](https://www.fluidfunctionalism.com/docs/dropdown) | Grouped actions behind one trigger, with a highlight that travels between items rather than blinking. |
| [InputCopy](https://www.fluidfunctionalism.com/docs/input-copy) | An API key, install command, or invite URL is shown to be copied, so the field and the copy action belong together. |
| [InputGroup](https://www.fluidfunctionalism.com/docs/input-group) | Related fields (currency + amount, protocol + host) read as one control instead of three inputs in a row. |
| [InputMessage](https://www.fluidfunctionalism.com/docs/input-message) | A chat composer with send and attachments, matching the rest of the system's motion. |
| [RadioGroup](https://www.fluidfunctionalism.com/docs/radio-group) | An exclusive choice where the selection should visibly move between options, making the swap legible. |
| [Select](https://www.fluidfunctionalism.com/docs/select) | A single choice from a longer list — roles, modes, environments — inside a settings surface. |
| [Slider](https://www.fluidfunctionalism.com/docs/slider) | A value is tuned by feel, not typed, and the handle must track the pointer without lag. |
| [Switch](https://www.fluidfunctionalism.com/docs/switch) | An instant-effect setting where the toggle itself is the confirmation, since there is no save button. |
| [Table](https://www.fluidfunctionalism.com/docs/table) | A small table inside a settings or detail panel, where a full data grid would be overkill. |
| [Tabs](https://www.fluidfunctionalism.com/docs/tabs) | Primary section switching where the indicator should carry the eye across. |
| [TabsSubtle](https://www.fluidfunctionalism.com/docs/tabs-subtle) | Secondary switching inside a panel that already has tabs above it, so the two levels stay distinguishable. |
| [ThinkingIndicator](https://www.fluidfunctionalism.com/docs/thinking-indicator) | Background work is running and the app needs a house-style waiting state instead of a foreign spinner. |
| [ThinkingSteps](https://www.fluidfunctionalism.com/docs/thinking-steps) | The wait is long enough that the user should see *which* step is running, not just that something is. |
| [Tooltip](https://www.fluidfunctionalism.com/docs/tooltip) | Dense controls need labels on hover, with delays tuned so passing the cursor over a toolbar does not flash. |
| [Surfaces](https://www.fluidfunctionalism.com/docs/surfaces) | Read before mixing this set into an existing app — it defines the elevation and background rules everything else assumes. |
| [Scrollbars](https://www.fluidfunctionalism.com/docs/scrollbars) | Default scrollbars break the surface treatment in panels and dropdowns. |
| [Motion](https://www.fluidfunctionalism.com/docs/motion) | You extend the set with your own components and need the same spring constants, or you must audit reduced-motion behaviour. |

</details>

### [interior.dev](https://interior.dev/docs)

![interior.dev](assets/banners/interior-dev.png)

Copy-paste micro-interactions organised by what the user is doing (action feedback, input, async, notification, overlay, navigation, scroll, data, gesture, content). Every component refuses three specific failures: the layout must not shift between states, the animation must be interruptible mid-flight, and the information must still arrive with reduced motion on.

**Reach for it when** the interaction is small but has to be *correct* — a loading button that does not resize, an accordion that animates to auto height, a "new items" pill that does not steal the scroll position. This is the registry to check first when a hand-rolled interaction feels almost right.

**Reach elsewhere when** you want decoration rather than correctness ([Magic UI](#magic-ui), [Unlumen UI](#unlumen-ui)), a whole matched control set ([Fluid Functionalism](#fluid-functionalism)), or a raw animation recipe to drop into an existing component ([Transitions.dev](#transitionsdev)).

<details>
<summary><strong>54 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Accordion](https://interior.dev/docs/accordion) | You need an accordion with height-auto animation done correctly. |
| [Blur-up Image](https://interior.dev/docs/blur-up-image) | You need images that resolve from a blurred placeholder into the full photo. |
| [Collapsible Banner](https://interior.dev/docs/collapsible-banner) | You need a banner that collapses to its title or dismisses entirely. |
| [Command Palette](https://interior.dev/docs/command-palette) | You need a command palette whose results reorder live as you type. |
| [Context Menu](https://interior.dev/docs/context-menu) | You need a right-click menu that opens from the pointer, not the corner. |
| [Copy Button](https://interior.dev/docs/copy-button) | You need a copy interaction that locks its width and reverts after a timeout. |
| [Drawer](https://interior.dev/docs/drawer) | You need a side panel that keeps its scroll position and state. |
| [Dropdown](https://interior.dev/docs/dropdown) | You need a dropdown menu whose active highlight travels between items. |
| [Expanding Search](https://interior.dev/docs/expanding-search) | You need a search icon that expands into a focused field. |
| [Filter Grid](https://interior.dev/docs/filter-grid) | You need a grid that rearranges on filter instead of blinking. |
| [Floating Label](https://interior.dev/docs/floating-label) | You need form labels that float out of the way instead of disappearing on focus. |
| [Hide on Scroll](https://interior.dev/docs/hide-on-scroll) | You need a toolbar that hides on scroll down and yields to content. |
| [Hold to Confirm](https://interior.dev/docs/hold-to-confirm) | You need a hold gesture that guards a destructive action from accidental clicks. |
| [Icon Morph](https://interior.dev/docs/icon-morph) | You need a play/pause or menu/close icon that morphs between states instead of swapping. |
| [Inline Validation](https://interior.dev/docs/inline-validation) | You need inline form error messages that don't shove the layout around. |
| [Lightbox](https://interior.dev/docs/lightbox) | You need an image lightbox that zooms in and returns to its origin on close. |
| [Like Burst](https://interior.dev/docs/like-burst) | You need an optimistic like/favorite animation that stays correct under rapid taps. |
| [Live Activity](https://interior.dev/docs/live-activity) | You need a compact, persistent indicator for ongoing system work. |
| [Load More](https://interior.dev/docs/load-more) | You need infinite-scroll loading that starts before the user hits the bottom. |
| [Loading Button](https://interior.dev/docs/loading-button) | You need a submit button that shows a loading state without resizing. |
| [Logo Marquee](https://interior.dev/docs/logo-marquee) | You need a logo marquee that pauses when the user looks at it. |
| [Long Press](https://interior.dev/docs/long-press) | You need a long-press gesture confirmed by hold time and cancelled by any interruption. |
| [Modal](https://interior.dev/docs/modal) | You need a modal with backdrop, scroll lock, and focus trap handled correctly. |
| [New Items Pill](https://interior.dev/docs/new-items-pill) | You need a "new content" pill that appears without stealing the user's scroll position. |
| [OTP Input](https://interior.dev/docs/otp-input) | You need a one-time-code input with auto-advance, paste, and error recovery. |
| [Pagination](https://interior.dev/docs/pagination) | You need pagination where the visible window moves without the row jumping. |
| [Password Strength](https://interior.dev/docs/password-strength) | You need a strength meter that reads segment by segment as the user types. |
| [Poll Results](https://interior.dev/docs/poll-results) | You need poll or vote result bars where the winner animates in last. |
| [Popover](https://interior.dev/docs/popover) | You need a popover that knows its trigger origin and flips on collision. |
| [Presence Avatars](https://interior.dev/docs/presence-avatars) | You need an avatar stack that animates as people join or leave. |
| [Press Depth](https://interior.dev/docs/press-depth) | You need buttons that visually confirm a press landed. |
| [Progress Bar](https://interior.dev/docs/progress-bar) | You need a progress bar that moves from indeterminate to determinate cleanly. |
| [Reading Progress](https://interior.dev/docs/reading-progress) | You need a reading-progress indicator showing how much content is left. |
| [Reorder List](https://interior.dev/docs/reorder-list) | You need a drag-to-reorder list where the gap itself is the drop target. |
| [Ripple](https://interior.dev/docs/ripple) | You need pointer-origin touch feedback on tap targets. |
| [Scroll Spy](https://interior.dev/docs/scroll-spy) | You need navigation that highlights the section actually in view. |
| [Segmented Control](https://interior.dev/docs/segmented-control) | You need a segmented control where the thumb slides and the label inverts through it. |
| [Show More](https://interior.dev/docs/show-more) | You need a "show more" toggle that animates height without reflowing text. |
| [Skeleton Swap](https://interior.dev/docs/skeleton-swap) | You need skeleton loaders that swap to content with zero layout shift. |
| [Slider Detents](https://interior.dev/docs/slider-detents) | You need a slider with snap points the user can feel. |
| [Snap Carousel](https://interior.dev/docs/snap-carousel) | You need a carousel where momentum scrolling lands cleanly on a slide. |
| [Sortable Table](https://interior.dev/docs/sortable-table) | You need a table where rows animate to their new sorted order. |
| [Sticky Header](https://interior.dev/docs/sticky-header) | You need a header that condenses as the user scrolls down. |
| [Streaming Text](https://interior.dev/docs/streaming-text) | You need token-by-token streaming text with a caret, like an LLM response. |
| [Swipe Deck](https://interior.dev/docs/swipe-deck) | You need a swipeable card stack, like a decision deck. |
| [Tabs](https://interior.dev/docs/tabs) | You need tabs sharing one animated indicator. |
| [Tag Input](https://interior.dev/docs/tag-input) | You need a tag input where Enter adds and backspace highlights before removing. |
| [Task Steps](https://interior.dev/docs/task-steps) | You need a step list that narrates ongoing background work. |
| [Text Reveal](https://interior.dev/docs/text-reveal) | You need text that reveals in reading order. |
| [Tooltip Group](https://interior.dev/docs/tooltip-group) | You need tooltips that delay once, then show instantly for the rest of the group. |
| [Tree View](https://interior.dev/docs/tree-view) | You need a tree view whose disclosure works with arrow keys. |
| [Typing Indicator](https://interior.dev/docs/typing-indicator) | You need a "someone is typing" indicator for chat or collaborative UIs. |
| [Value Flash](https://interior.dev/docs/value-flash) | You need numbers that flash or highlight when they change. |
| [Wizard Steps](https://interior.dev/docs/wizard-steps) | You need a multi-step wizard whose transitions know forward from back. |

</details>

### [Magic UI](https://magicui.design/docs)

![Magic UI](assets/banners/magic-ui.png)

The broadest catalogue of marketing-grade visual effects here: backgrounds, text animations, device mocks, and attention-grabbing buttons, all installable through the shadcn registry.

**Reach for it when** you are building the page that sells the product and need a specific effect off the shelf — a hero background, an animated headline, a beam connecting two features, a phone mock around a screenshot.

**Reach elsewhere when** the effect sits in the app the customer logs into: [interior.dev](#interiordev) cares about layout shift and reduced motion in a way a landing-page effect does not have to.

<details>
<summary><strong>76 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Android](https://magicui.design/docs/components/android) | An Android screenshot needs a device frame so it reads as a real app rather than a floating image. |
| [Animated Beam](https://magicui.design/docs/components/animated-beam) | An integration or architecture diagram must show that data actually flows between two nodes. |
| [Animated Circular Progress Bar](https://magicui.design/docs/components/animated-circular-progress-bar) | A single percentage is the headline number — usage, score, completion — and a bar would read as secondary. |
| [Animated Gradient Text](https://magicui.design/docs/components/animated-gradient-text) | A launch pill or badge above the hero headline needs to catch the eye before the headline does. |
| [Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern) | A section background should feel alive without competing with the copy — cells fade in and out slowly. |
| [Animated List](https://magicui.design/docs/components/animated-list) | You are demonstrating a live feed (notifications, events, orders) and items must enter in sequence, not all at once. |
| [Animated Shiny Text](https://magicui.design/docs/components/animated-shiny-text) | A small label needs a slow sweep of light to look interactive, typically a "What's new" link. |
| [Animated Theme Toggler](https://magicui.design/docs/components/animated-theme-toggler) | Theme switching should be a moment, using View Transitions to wipe the new theme in from the button. |
| [Aurora Text](https://magicui.design/docs/components/aurora-text) | One or two words in the hero headline carry the whole brand colour, with the gradient in motion. |
| [Avatar Circles](https://magicui.design/docs/components/avatar-circles) | Social proof near the call to action: overlapping faces plus a count, in the width of a button. |
| [Backlight](https://magicui.design/docs/components/backlight) | A product video or screenshot should look lit from behind, lifting it off a dark section. |
| [Bento Grid](https://magicui.design/docs/components/bento-grid) | Features differ in weight and a uniform three-column grid would flatten them into equals. |
| [Blur Fade](https://magicui.design/docs/components/blur-fade) | Sections should resolve as the user scrolls to them, giving a long page rhythm instead of one flat reveal. |
| [Border Beam](https://magicui.design/docs/components/border-beam) | A single card — the recommended plan, the featured feature — must be the one thing that moves on screen. |
| [Code Comparison](https://magicui.design/docs/components/code-comparison) | The pitch is "before and after our tool", and the diff itself is the argument. |
| [Comic Text](https://magicui.design/docs/components/comic-text) | A playful brand needs a headline with comic-book weight and impact, not a standard type ramp. |
| [Confetti](https://magicui.design/docs/components/confetti) | A genuine milestone lands — signup complete, first deploy — and the moment should be celebrated once, not on every click. |
| [Cool Mode](https://magicui.design/docs/components/cool-mode) | A single element gets a particle burst on click, for a playful surface where delight beats restraint. |
| [Dia Text Reveal](https://magicui.design/docs/components/dia-text-reveal) | A headline should arrive under a sweeping colour band and settle into the theme foreground. |
| [Dock](https://magicui.design/docs/components/dock) | A small icon toolbar should feel macOS-native, magnifying under the cursor. |
| [Dot Pattern](https://magicui.design/docs/components/dot-pattern) | A section needs texture rather than a flat colour, and dots read quieter than a grid. |
| [Dotted Map](https://magicui.design/docs/components/dotted-map) | You claim global coverage and need a lightweight SVG world map instead of a mapping library. |
| [File Tree](https://magicui.design/docs/components/file-tree) | Docs or a landing page must show project structure, and an indented code block would be unreadable. |
| [Flickering Grid](https://magicui.design/docs/components/flickering-grid) | A technical or infrastructure product needs a background that suggests activity and machines. |
| [Glare Hover](https://magicui.design/docs/components/glare-hover) | A card should catch light diagonally on hover — glass-like, done with CSS only, no extra keyframes. |
| [Globe](https://magicui.design/docs/components/globe) | An interactive globe with markers, when the claim is worldwide reach and a flat map undersells it. |
| [Glyph Matrix](https://magicui.design/docs/components/glyph-matrix) | A canvas background of shifting glyphs, for a developer or security product where "data moving" is the mood. |
| [Grid Pattern](https://magicui.design/docs/components/grid-pattern) | A static blueprint-style grid behind a section — the calm baseline the animated variants build on. |
| [Hero Video Dialog](https://magicui.design/docs/components/hero-video-dialog) | The demo video must not autoplay in the hero, but the thumbnail should open it in a proper dialog. |
| [Hexagon Pattern](https://magicui.design/docs/components/hexagon-pattern) | A background with more structure than dots, for a technical or scientific feel. |
| [Highlighter](https://magicui.design/docs/components/highlighter) | A phrase in a paragraph is the point and needs a hand-drawn marker stroke instead of a `<mark>` block. |
| [Hyper Text](https://magicui.design/docs/components/hyper-text) | A heading should scramble into place on hover or on view, for a technical brand. |
| [Icon Cloud](https://magicui.design/docs/components/icon-cloud) | You support dozens of integrations and a rotating sphere of logos shows the breadth a list would bury. |
| [Interactive Grid Pattern](https://magicui.design/docs/components/interactive-grid-pattern) | The background should respond to the pointer, making an otherwise static section feel touchable. |
| [Interactive Hover Button](https://magicui.design/docs/components/interactive-hover-button) | The primary call to action should transform on hover, not merely darken. |
| [iPhone](https://magicui.design/docs/components/iphone) | A mobile screenshot needs an iPhone frame with correct proportions and notch. |
| [Kinetic Text](https://magicui.design/docs/components/kinetic-text) | A variable font is loaded and hovering the headline should shift character weight — typography as the interaction. |
| [Lens](https://magicui.design/docs/components/lens) | Detail matters in an image (a dashboard screenshot, a product photo) and users should magnify it in place. |
| [Light Rays](https://magicui.design/docs/components/light-rays) | A dark hero needs directional light so the composition has a source instead of a flat gradient. |
| [Line Shadow Text](https://magicui.design/docs/components/line-shadow-text) | A headline needs an offset line shadow for editorial weight, with an animated stroke. |
| [Magic Card](https://magicui.design/docs/components/magic-card) | A grid of cards where the border should follow the cursor, so hover targets are unmistakable. |
| [Marquee](https://magicui.design/docs/components/marquee) | Logos or testimonials outnumber the available width and infinite scroll beats a cramped grid. |
| [Meteors](https://magicui.design/docs/components/meteors) | A dark section needs slow diagonal motion in the background — space-themed, cheap to run. |
| [Morphing Text](https://magicui.design/docs/components/morphing-text) | One headline word cycles through several values and letters should melt between them rather than cut. |
| [Neon Gradient Card](https://magicui.design/docs/components/neon-gradient-card) | A card must glow hard against a dark background — highest-attention treatment in the set. |
| [Noise Texture](https://magicui.design/docs/components/noise-texture) | Flat gradients band on real displays; an SVG turbulence layer removes the plastic look. |
| [Number Ticker](https://magicui.design/docs/components/number-ticker) | A stats row should count up when it scrolls into view, so the numbers get read instead of skipped. |
| [Orbiting Circles](https://magicui.design/docs/components/orbiting-circles) | Your product sits at the centre of an ecosystem, and orbiting logos say that faster than a diagram. |
| [Particles](https://magicui.design/docs/components/particles) | A hero needs ambient depth that reacts to the pointer without a WebGL dependency. |
| [Pixel Image](https://magicui.design/docs/components/pixel-image) | An image should resolve from pixelation, turning a plain asset into a reveal. |
| [Pointer](https://magicui.design/docs/components/pointer) | A demo area needs a custom cursor to signal "this is interactive, try it". |
| [Progressive Blur](https://magicui.design/docs/components/progressive-blur) | Scrollable content must fade under a sticky header or toolbar instead of being cut off hard. |
| [Pulsating Button](https://magicui.design/docs/components/pulsating-button) | One call to action must be found without reading — waitlist, live event, limited offer. |
| [Rainbow Button](https://magicui.design/docs/components/rainbow-button) | The primary button carries the brand's colour range, when a single accent colour looks too plain. |
| [Retro Grid](https://magicui.design/docs/components/retro-grid) | A synthwave horizon grid, for a brand that leans deliberately retro. |
| [Ripple](https://magicui.design/docs/components/ripple) | Concentric rings behind a centred hero element, suggesting broadcast or reach. |
| [Ripple Button](https://magicui.design/docs/components/ripple-button) | A button should show where it was clicked, Material-style, on touch-heavy surfaces. |
| [Safari](https://magicui.design/docs/components/safari) | A web app screenshot needs a browser chrome frame so it reads as a real product, with your URL in the bar. |
| [Scroll Based Velocity](https://magicui.design/docs/components/scroll-based-velocity) | A text strip should speed up and reverse with scroll direction, tying motion to the reader's own input. |
| [Scroll Progress](https://magicui.design/docs/components/scroll-progress) | Long-form content needs a reading indicator so the length is visible from the first screen. |
| [Shimmer Button](https://magicui.design/docs/components/shimmer-button) | A premium call to action with a light sweep — quieter than pulsating, louder than a solid fill. |
| [Shine Border](https://magicui.design/docs/components/shine-border) | A card border should shine periodically, marking it as featured without the constant motion of a beam. |
| [Shiny Button](https://magicui.design/docs/components/shiny-button) | A secondary action still needs polish, but must not compete with the primary one. |
| [Smooth Cursor](https://magicui.design/docs/components/smooth-cursor) | A portfolio or agency site replaces the system cursor with a lagging, springy one. |
| [Sparkles Text](https://magicui.design/docs/components/sparkles-text) | A word should sparkle — typically the AI or "magic" feature name in the hero. |
| [Spinning Text](https://magicui.design/docs/components/spinning-text) | A circular text badge rotates around a mark or a scroll cue. |
| [Striped Pattern](https://magicui.design/docs/components/striped-pattern) | A diagonal striped background for a section that needs separation without a hard divider. |
| [Terminal](https://magicui.design/docs/components/terminal) | A CLI product should show its own output typing itself out — the most honest demo a CLI can give. |
| [Text 3D Flip](https://magicui.design/docs/components/text-3d-flip) | Letters flip in 3D on hover with a stagger, for a playful headline. |
| [Text Animate](https://magicui.design/docs/components/text-animate) | You need one text-entrance API covering fade, slide, blur, and stagger, instead of four components. |
| [Text Reveal](https://magicui.design/docs/components/text-reveal) | A statement should reveal word by word as the user scrolls it, forcing a slower read. |
| [Tweet Card](https://magicui.design/docs/components/tweet-card) | Real posts are the testimonials, and the embedded X widget would cost a third-party script and a layout shift. |
| [Typing Animation](https://magicui.design/docs/components/typing-animation) | A headline or prompt example should type itself, mimicking someone using the product. |
| [Video Text](https://magicui.design/docs/components/video-text) | Video plays inside the letterforms of a headline, for a bold single-word hero. |
| [Warp Background](https://magicui.design/docs/components/warp-background) | A section background should warp toward a vanishing point, suggesting speed. |
| [Word Rotate](https://magicui.design/docs/components/word-rotate) | The headline names several audiences and the last word cycles cleanly between them. |

</details>

### [Payload Components](https://www.payload-components.xyz/)

MIT registry of typed Payload CMS blocks for Payload v3 and Next.js. Components install as reviewable source, and the companion CLI wires the block into the Payload collection and renderer before regenerating types and the admin import map.

Use when you are building a Payload-backed Next.js site and want shadcn-style block installation without manually repeating the Payload integration work.

### [ReUI](https://reui.io/components)

![ReUI](assets/banners/reui.png)

Copy-ready shadcn components plus the heavy product widgets shadcn/ui deliberately leaves out: data grid, kanban, gantt, event calendar, schema-driven filters.

**Reach for it when** you are building the application behind the login — internal tools, admin panels, dashboards — and the next component would otherwise mean adding TanStack Table, dnd-kit, or a scheduling library by hand.

**Reach elsewhere when** the surface is marketing ([Magic UI](#magic-ui), [Spell UI](#spell-ui)) or when you want many styled variants of the same primitive to pick from ([Watermelon UI](#watermelon-ui)).

<details>
<summary><strong>72 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Accordion](https://reui.io/components/accordion) | A page has more content than screen — FAQ, settings groups, help — and only one section matters at a time. |
| [Alert](https://reui.io/components/alert) | A message belongs to a region of the page and must stay visible, unlike a toast that disappears. |
| [Alert Dialog](https://reui.io/components/alert-dialog) | The action destroys data or costs money and the user must not be able to dismiss the question by clicking outside. |
| [Aspect Ratio](https://reui.io/components/aspect-ratio) | Images of unknown size go into a grid and mismatched ratios would shift the layout as they load. |
| [Autocomplete](https://reui.io/components/autocomplete) | Options come from a server as the user types — debouncing, loading, and empty results are part of the problem. |
| [Avatar](https://reui.io/components/avatar) | People appear in the UI and you need a reliable fallback for a missing or broken image. |
| [Badge](https://reui.io/components/badge) | A row or card carries a state (`active`, `failed`, `3`) that must be scannable in a column of many. |
| [Breadcrumb](https://reui.io/components/breadcrumb) | Content is nested deep enough that users lose track of where they are and how to get one level up. |
| [Button](https://reui.io/components/button) | Any action — the variant set here covers the loading, icon, and destructive states apps actually need. |
| [Button Group](https://reui.io/components/button-group) | Several actions belong to the same object and should read as one control instead of three loose buttons. |
| [Calendar](https://reui.io/components/calendar) | The month view itself is the interface: booking, availability, localised week starts. |
| [Card](https://reui.io/components/card) | Dashboard content needs consistent padding, header, and footer slots across many panels. |
| [Carousel](https://reui.io/components/carousel) | More items than fit and horizontal browsing beats pagination — product images, onboarding steps. |
| [Chart](https://reui.io/components/chart) | An analytics view needs Recharts already themed to your design tokens, in light and dark. |
| [Checkbox](https://reui.io/components/checkbox) | Independent options, or a table's select-all with a correct indeterminate state. |
| [Collapsible](https://reui.io/components/collapsible) | One block of detail should hide behind a trigger, without accordion grouping semantics. |
| [Combobox](https://reui.io/components/combobox) | The list is too long to scroll but fixed enough not to need a server — searchable single or multi select. |
| [Command](https://reui.io/components/command) | Power users should reach any action by typing, without hunting through menus. |
| [Context Menu](https://reui.io/components/context-menu) | Rows, files, or canvas objects have per-item actions that would clutter the row if always visible. |
| [Data Grid](https://reui.io/components/data-grid) | The table is the product: sorting, column filters, row selection, pinning, virtualised rows. The main reason to install ReUI. |
| [Date Selector](https://reui.io/components/date-selector) | A date or range is one field among many in a form and a full calendar would dominate it. |
| [Dialog](https://reui.io/components/dialog) | A task needs the user's full attention but not a new page — create, edit, confirm. |
| [Drawer](https://reui.io/components/drawer) | The same flow must work on mobile, where a centred modal is worse than a sheet that slides up. |
| [Dropdown Menu](https://reui.io/components/dropdown-menu) | Related actions collapse behind one trigger, keeping toolbars and row ends readable. |
| [Empty](https://reui.io/components/empty) | A list has no rows and the screen must explain why and what to do — first run, filtered out, or an error. |
| [Event Calendar](https://reui.io/components/event-calendar) | Scheduling is the feature: month, week, day, and agenda views with overlapping events handled. |
| [Field](https://reui.io/components/field) | Forms need label, description, and error text wired to the input for screen readers, every time. |
| [File Upload](https://reui.io/components/file-upload) | Multiple files, drag and drop, per-file progress and per-file failure — a plain `<input type="file">` cannot carry it. |
| [Filters](https://reui.io/components/filters) | Filter state must survive a reload and be shareable as a URL, defined from a schema rather than hand-built. |
| [Frame](https://reui.io/components/frame) | You render a preview of the user's own content or an embedded app and need it isolated in a frame. |
| [Gantt](https://reui.io/components/gantt) | Tasks have durations and dependencies, and a list would hide the fact that two of them collide. |
| [Hover Card](https://reui.io/components/hover-card) | Previewing a linked entity saves a navigation — user profiles, referenced issues, product details. |
| [Icon Stack](https://reui.io/components/icon-stack) | A row must show a tech or integration set compactly, overlapping instead of wrapping. |
| [Icon Tile](https://reui.io/components/icon-tile) | An icon needs a consistent framed container across a settings list or feature grid. |
| [Input](https://reui.io/components/input) | Text entry with the sizes, prefixes, and invalid state a real form needs. |
| [Input Group](https://reui.io/components/input-group) | The value has a fixed unit or action attached — `https://`, `.com`, a currency, a search button. |
| [Input OTP](https://reui.io/components/input-otp) | A verification code arrives by SMS or email and must handle paste, auto-advance, and correction. |
| [Item](https://reui.io/components/item) | Settings and list rows repeat with icon, title, description, and trailing control — build it once. |
| [Kanban](https://reui.io/components/kanban) | Work moves between states by dragging, and the board must stay accessible by keyboard too. |
| [Kbd](https://reui.io/components/kbd) | Shortcuts are documented in the UI and must render platform-correct modifier keys. |
| [Label](https://reui.io/components/label) | Any form control that needs a click-to-focus, screen-reader-correct label. |
| [Menubar](https://reui.io/components/menubar) | The app is desktop-shaped — an editor or IDE-like tool — and users expect File/Edit menus. |
| [Native Select](https://reui.io/components/native-select) | Mobile matters more than styling: the OS picker is faster and more accessible than a custom listbox. |
| [Navigation Menu](https://reui.io/components/navigation-menu) | Site navigation with nested sections or a mega menu, with keyboard and focus handled. |
| [Number Field](https://reui.io/components/number-field) | Quantities are nudged rather than typed, and min/max/step must be enforced in the control. |
| [Pagination](https://reui.io/components/pagination) | Result sets are too large to load at once and users need to jump to a specific page. |
| [Phone Input](https://reui.io/components/phone-input) | Users are international, so country codes and per-country formats must be part of the input. |
| [Popover](https://reui.io/components/popover) | Secondary controls should appear anchored to their trigger without taking over the screen. |
| [Progress](https://reui.io/components/progress) | The completion percentage is actually known — upload, import, onboarding — unlike a spinner. |
| [Radio Group](https://reui.io/components/radio-group) | Options are few and mutually exclusive, and seeing them all at once beats a dropdown. |
| [Rating](https://reui.io/components/rating) | Users score something and half-steps or hover previews are part of the interaction. |
| [Resizable](https://reui.io/components/resizable) | Users work in the tool long enough to want their own pane widths — editors, inbox layouts, dashboards. |
| [Scroll Area](https://reui.io/components/scroll-area) | A panel scrolls independently and native scrollbars would break the design across platforms. |
| [Scrollspy](https://reui.io/components/scrollspy) | Long documentation needs side navigation that reflects the section actually in view. |
| [Select](https://reui.io/components/select) | A single choice from a moderate list where search would be overhead but styling matters. |
| [Separator](https://reui.io/components/separator) | Groups within a menu or panel need a boundary that is also announced semantically. |
| [Sheet](https://reui.io/components/sheet) | Details or a secondary task open beside the list, so the user keeps their place. |
| [Skeleton](https://reui.io/components/skeleton) | Loading must not shift the layout when data arrives — the placeholder holds the final shape. |
| [Slider](https://reui.io/components/slider) | A value is set by feel within a known range: price, opacity, thresholds. |
| [Sonner](https://reui.io/components/sonner) | Background results need reporting without interrupting — saved, failed, undo. |
| [Sortable](https://reui.io/components/sortable) | Order is data the user controls, and dragging must work with a keyboard as well. |
| [Spinner](https://reui.io/components/spinner) | Duration is unknown and there is nothing honest to show a percentage for. |
| [Stepper](https://reui.io/components/stepper) | A form is long enough that users need to see progress and go back without losing input. |
| [Switch](https://reui.io/components/switch) | The setting applies immediately, with no save button to confirm it. |
| [Table](https://reui.io/components/table) | Rows are static and semantic markup is all you need — deliberately not the Data Grid. |
| [Tabs](https://reui.io/components/tabs) | Panels are alternatives to each other and only one is relevant at a time. |
| [Textarea](https://reui.io/components/textarea) | Input is prose — descriptions, comments, notes — and may need to grow with content. |
| [Timeline](https://reui.io/components/timeline) | Order in time is the information: deploys, audit logs, activity feeds. |
| [Toggle](https://reui.io/components/toggle) | A single on/off *action* rather than a setting, typically bold or italic in an editor toolbar. |
| [Toggle Group](https://reui.io/components/toggle-group) | A small set of view or format options where the current one must always be visible. |
| [Tooltip](https://reui.io/components/tooltip) | Icon-only controls need names, and the delay must be tuned so a toolbar sweep does not flash. |
| [Tree](https://reui.io/components/tree) | Data is hierarchical and depth matters — files, org charts, categories — with keyboard traversal. |

</details>

### [Spell UI](https://spell.sh/docs/introduction)

![Spell UI](assets/banners/spell-ui.png)

Copy-ready Tailwind components and text effects aimed squarely at landing pages, with an explicit thesis: the page's polish is what earns trust before the product is ever tried.

**Reach for it when** the marketing page needs finished set pieces — an embedded post, a Spotify card, a 3D book mock, a signature that draws itself — that a generic effects library does not carry. It also ships an [MCP server](https://spell.sh/docs/mcp) for agent installs.

**Reach elsewhere when** you need backgrounds and device frames in bulk ([Magic UI](#magic-ui) is broader), or the effect belongs inside the logged-in app ([interior.dev](#interiordev)).

<details>
<summary><strong>33 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Chart](https://spell.sh/docs/chart) | A landing page shows real numbers and the chart should invite hovering instead of sitting there as an image. |
| [Perspective Book](https://spell.sh/docs/perspective-book) | You sell an ebook, guide, or course and a flat cover image undersells it. |
| [Badge](https://spell.sh/docs/badge) | Small labels — "New", "Beta", a plan tier — matched to the rest of this set. |
| [Keyboard Shortcuts](https://spell.sh/docs/kbd) | The page documents shortcuts and must show ⌘ on macOS and Ctrl elsewhere without a manual check. |
| [Marquee](https://spell.sh/docs/marquee) | Logos or cards outnumber the row and continuous scroll beats a cramped static grid. |
| [Tweet](https://spell.sh/docs/tweet) | A real post is your testimonial, and you want it in your own styling rather than X's embed script. |
| [Spotify Card](https://spell.sh/docs/spotify-card) | Music is part of the brand — a podcast, an artist page, a soundtrack — and the official embed is too heavy. |
| [Logos Carousel](https://spell.sh/docs/logos-carousel) | The customer logo wall is the proof and should animate rather than sit still. |
| [QR Code](https://spell.sh/docs/qr-code) | The page bridges to a phone — app download, ticket, menu — and the code should match the design. |
| [Fallback Avatar](https://spell.sh/docs/fallback-avatar) | Users have no profile image and you want a stable gradient per name instead of grey initials. |
| [Blur Reveal](https://spell.sh/docs/blur-reveal) | The hero headline should come into focus rather than fade — softest of the entrance effects. |
| [Special Text](https://spell.sh/docs/special-text) | A technical brand wants characters to scramble before settling on the final word. |
| [Shimmer Text](https://spell.sh/docs/shimmer-text) | A single label needs a light sweep to be noticed without moving anything. |
| [Highlighted Text](https://spell.sh/docs/highlighted-text) | One phrase in a paragraph is the promise and needs a marker stroke drawn across it. |
| [Slide Up Text](https://spell.sh/docs/slide-up-text) | Headline lines should rise in sequence, giving the section a beat as it enters. |
| [Text Marquee](https://spell.sh/docs/text-marquee) | A vertical strip of words scrolls beside content, used as a visual rail rather than a message. |
| [Words Stagger](https://spell.sh/docs/words-stagger) | The headline should be read at the pace it appears, one word at a time. |
| [Signature](https://spell.sh/docs/signature) | A founder letter or about page closes with a signature that draws itself as you reach it. |
| [Randomized Text](https://spell.sh/docs/randomized-text) | Characters resolve out of noise — a heavier variant of the scramble effect. |
| [Gradient Wave Text](https://spell.sh/docs/gradient-wave-text) | The brand gradient should move through the headline in a wave rather than sit static. |
| [Rich Button](https://spell.sh/docs/rich-button) | The primary call to action needs colour variants that carry weight on a busy hero. |
| [Flow Button](https://spell.sh/docs/flow-button) | A secondary action should look provisional and inviting — animated dashed border, good for "try it". |
| [Copy Button](https://spell.sh/docs/copy-button) | An install command or code sits on the marketing page and must be copyable with feedback. |
| [Pop Button](https://spell.sh/docs/pop-button) | A playful brand wants a button that physically depresses on click. |
| [Color Selector](https://spell.sh/docs/color-selector) | The page demonstrates theming or product variants and visitors should try colours live. |
| [Label Input](https://spell.sh/docs/label-input) | A signup or waitlist field where the label floats and the password toggle already works. |
| [Animated Checkbox](https://spell.sh/docs/animated-checkbox) | A checklist or terms box where checking should feel satisfying — spring plus strike-through. |
| [Exploding Input](https://spell.sh/docs/exploding-input) | A demo input where typing bursts particles, to make an empty field worth touching. |
| [Spinner](https://spell.sh/docs/spinner) | A loading state on a marketing surface that should match this set rather than the app's. |
| [Bars Spinner](https://spell.sh/docs/bars-spinner) | Same job, rotating-bars look, when a circular spinner reads too generic. |
| [Light Rays](https://spell.sh/docs/light-rays) | A dark hero needs volumetric WebGL light — check the frame cost before shipping to mobile. |
| [Animated Gradient](https://spell.sh/docs/animated-gradient) | The hero background is a slowly shifting WebGL gradient instead of a static image. |
| [Tilt Card](https://spell.sh/docs/tilt-card) | A feature or pricing card should tilt toward the cursor with a spotlight following it. |

</details>

### [Supabase UI](https://supabase.com/ui/docs/getting-started/introduction)

![Supabase UI](assets/banners/supabase-ui.png)

Supabase-powered blocks built on the shadcn registry system. The only entry here where the components arrive already wired to a backend.

**Reach for it when** the project runs on Supabase and the component needs real behaviour, not a shape — auth that actually sets a session, an upload that lands in a Storage bucket, presence that reflects real connections.

**Reach elsewhere when** the backend is not Supabase: these components carry client and RLS assumptions you would have to unpick, so an unwired [ReUI](#reui) equivalent is cheaper.

<details>
<summary><strong>12 blocks</strong></summary>

| Block | Use when |
| --- | --- |
| [Supabase Client Libraries](https://supabase.com/ui/docs/nextjs/client) | First step in a new App Router project — server, client, and middleware clients set up so sessions survive server components. |
| [Password-Based Auth](https://supabase.com/ui/docs/nextjs/password-based-auth) | You need the full email/password surface, including the reset and update flows people forget until launch. |
| [Social Auth](https://supabase.com/ui/docs/nextjs/social-auth) | Sign-in should be one click via an OAuth provider, with the callback route already handled. |
| [Dropzone](https://supabase.com/ui/docs/nextjs/dropzone) | Uploads go to Supabase Storage and you want bucket paths, progress, and errors wired rather than re-derived. |
| [Current User Avatar](https://supabase.com/ui/docs/nextjs/current-user-avatar) | The header avatar must reflect the signed-in user without you plumbing the session down to it. |
| [Realtime Avatar Stack](https://supabase.com/ui/docs/nextjs/realtime-avatar-stack) | Users should see who else is in the document or room right now — presence, not a member list. |
| [Realtime Chat](https://supabase.com/ui/docs/nextjs/realtime-chat) | A room chat needs to exist and running a separate socket service for it is not worth it. |
| [Realtime Cursor](https://supabase.com/ui/docs/nextjs/realtime-cursor) | Collaboration must feel live — other people's cursors moving is the cheapest proof of that. |
| [Realtime Monaco](https://supabase.com/ui/docs/nextjs/realtime-monaco) | Multiple people edit code in the same buffer and you need a working collaborative editor. |
| [Infinite Query Hook](https://supabase.com/ui/docs/infinite-query-hook) | A table is too large to fetch at once and paging must stay typed against your schema. |
| [Platform Kit](https://supabase.com/ui/docs/platform/platform-kit) | Your own users manage their Supabase project from inside your app — database, auth, storage, secrets, logs embedded. |
| [Agent Skills](https://supabase.com/ui/docs/ai-editors-rules/skills) | An AI agent writes Supabase code in this repo and should follow project conventions instead of guessing RLS. |

</details>

### [Transitions.dev](https://transitions.dev/)

![Transitions.dev](assets/banners/transitions-dev.png)

Transition *recipes* rather than components: each entry is the tuned motion for one moment, copied into a component you already have. It also ships an [agent skill](https://transitions.dev/skill.html) and a [refine tool](https://transitions.dev/refine.html) for adjusting curves.

**Reach for it when** the component is already built and only the motion is wrong — you are hand-tuning a spring, guessing at a cubic-bezier, or trying to make an exit animation not feel like a bug.

**Reach elsewhere when** you want the whole component and not just its motion: [interior.dev](#interiordev) ships the same moments as complete, accessibility-checked files.

Individual transitions are not separately addressable — the site is one page (`transitions.dev/detail.html?t=…`), so browse it there.

<details>
<summary><strong>36 transitions and 2 Pro transitions</strong></summary>

| Transition | Use when |
| --- | --- |
| Card resize | A card changes size when content loads or expands, and the jump is what makes it look cheap. |
| Number pop-in | A value updates in place — price, count, score — and the change must be noticed without a flash. |
| Notification badge | A badge appears on an icon and should arrive with a diagonal slide and spring, not just exist. |
| Text states swap | A label switches meaning (`Save` → `Saving` → `Saved`) and the swap must read as one control changing state. |
| Menu dropdown | A menu should open from its trigger, so origin is visible instead of appearing centred from nowhere. |
| Confetti burst | A single celebration lands on the button that caused it, with physics rather than a full-screen shower. |
| Modal open/close | A modal needs scale on entry and, more importantly, an exit that does not just cut. |
| Panel reveal | A side panel opens and closes and the content underneath must not shift or flash. |
| Gooey plus menu | One plus button splits into a fan of actions — liquid separation instead of a list dropping down. |
| Page side-by-side | Forward and back navigation should move in opposite directions, so history has a direction. |
| Icon swap | An icon changes meaning and should scale-blur across rather than pop. |
| Success check | An operation succeeds and the confirmation should feel earned — blur and rotate into a check. |
| Avatar group hover | Hovering an avatar stack lifts the nearest faces most, with distance falloff. |
| Card stack hover | A stack of cards fans out on hover to show there is more than the top one. |
| Error state shake | Validation fails and the field must be felt as rejected, using a decaying shake rather than a loop. |
| Input clear with dissolve | Clearing a field should dissolve word by word, so the user sees that it was deliberate. |
| Skeleton loader and reveal | The skeleton must cross-fade into real content at identical size, with no reflow at the swap. |
| Texts reveal | Two lines rise with an offset stagger, giving a heading and subheading a reading order. |
| Tabs sliding | The active pill travels between tabs so the eye follows the change instead of relocating. |
| Drag & drop | An item is dragged into a zone and both the item and the target must respond during the drag. |
| Drag & drop with physics | The drop zone morphs into the dropped image — for upload flows where the drop is the moment. |
| Shimmer text | A masked gradient sweeps across a label to mark it as live or loading. |
| Organic shimmer | The same idea with a wavy edge glow, for a warmer, less mechanical feel. |
| Tooltip open/close | Tooltips need a delay on appear and none on exit, or a toolbar sweep turns into a strobe. |
| 3D tilt | A card tilts toward the pointer with a glare that tracks the light source. |
| Dropdown menu morph | A button becomes the menu surface itself, rather than spawning a detached panel. |
| Accordion | Height animation done with `grid-template-rows` instead of a `max-height` guess, with a chevron that morphs. |
| Toast open/close | A toast rises in with fade, blur, and scale, and leaves without a jump when its stack reflows. |
| Like button | A heart fills and bursts particles — optimistic feedback for an action that may still fail server-side. |
| Image open tilt | An image zooms open with 3D tilt and bend, for a gallery where opening should feel physical. |
| Learn more hover | A chevron shifts and opens on hover, making a text link read as a real affordance. |
| Checkbox check | The check draws along its stroke path instead of appearing, making the state change legible. |
| Spinner to check morph | The spinner becomes the check, so success visibly belongs to the operation that was pending. |
| Spinning counter | Digits spin like a reel to the final value, for stats that should be watched arriving. |
| Toggle | The thumb slides with a double bounce, giving a switch tactile weight. |
| Pro gradient text | *(Pro)* Colour washes orbit the letters, for a headline that must carry the brand gradient in motion. |
| Delete with smoky dissolve | *(Pro)* An item shreds into smoke on delete, when destruction should be unmistakable and final. |

</details>

### [Unlumen UI](https://ui.unlumen.com/docs/ui)

![Unlumen UI](assets/banners/unlumen-ui.png)

A small, tightly scoped Motion + Tailwind set, weighted toward pointer-driven interactions: things that track, follow, or react to where the cursor actually is.

**Reach for it when** the page should feel responsive to the person using it — a magnetic button, a tooltip that follows the pointer, highlighting that reacts to scroll velocity. Smaller and more coherent than the big effect catalogues.

**Reach elsewhere when** you need breadth of effects ([Magic UI](#magic-ui) has three times as many) or product-grade correctness ([interior.dev](#interiordev)).

<details>
<summary><strong>27 components</strong></summary>

| Component | Use when |
| --- | --- |
| [Command Menu](https://ui.unlumen.com/docs/ui/unlumen/command-menu) | A palette is the main navigation and its open, filter, and selection motion should feel deliberate. |
| [Cursor](https://ui.unlumen.com/docs/ui/unlumen/cursor) | A portfolio or campaign page replaces the system cursor to make the whole surface feel authored. |
| [Floating Tooltip](https://ui.unlumen.com/docs/ui/unlumen/floating-tooltip) | The hover target is large (a map, a chart, an image) and a corner-anchored tooltip would lose the pointer. |
| [Glowing Badge](https://ui.unlumen.com/docs/ui/unlumen/glowing-badge) | One status must be visible in peripheral vision — live, recording, new — without becoming an alarm. |
| [Highlight](https://ui.unlumen.com/docs/ui/unlumen/highlight) | A phrase inside a heading should be emphasised on entry rather than merely coloured. |
| [Kbd](https://ui.unlumen.com/docs/ui/unlumen/kbd) | Shortcut labels sit next to this set's command menu and should share its styling. |
| [Magnetic Button](https://ui.unlumen.com/docs/ui/unlumen/magnetic-button) | The primary call to action should lean toward the cursor, making it easier to hit and harder to ignore. |
| [Orbiting Skills](https://ui.unlumen.com/docs/ui/unlumen/orbiting-skills) | A CV or about page shows a tool set, and a logo cluster in orbit beats a list of badges. |
| [Progressive Blur](https://ui.unlumen.com/docs/ui/unlumen/progressive-blur) | Content must fade under a sticky header or bottom bar instead of being clipped hard. |
| [Scramble Text](https://ui.unlumen.com/docs/ui/unlumen/scramble-text) | Technical copy should resolve out of noise, matching a terminal or security brand. |
| [Shimmer Skeleton](https://ui.unlumen.com/docs/ui/unlumen/shimmer-skeleton) | A loading placeholder needs to look alive so slow requests do not read as frozen. |
| [Shimmering Text](https://ui.unlumen.com/docs/ui/unlumen/shimmering-text) | A label needs a light sweep for emphasis without displacing anything around it. |
| [Slider](https://ui.unlumen.com/docs/ui/unlumen/slider) | A range control in an animated context, where the stock shadcn slider would feel inert. |
| [Switch](https://ui.unlumen.com/docs/ui/unlumen/switch) | A toggle whose thumb motion should match the rest of this set. |
| [Text Reveal](https://ui.unlumen.com/docs/ui/unlumen/text-reveal) | A statement reveals as it scrolls into view, slowing the reader down on purpose. |
| [Theme Switch](https://ui.unlumen.com/docs/ui/unlumen/theme-switch) | Theme switching is a visible moment rather than a setting buried in a menu. |
| [Tilt Card](https://ui.unlumen.com/docs/ui/unlumen/tilt-card) | A card should gain depth on hover, marking it as interactive in a grid of many. |
| [Tilt](https://ui.unlumen.com/docs/ui/unlumen/tilt) | You want the same tilt behaviour around your own content — the primitive behind Tilt Card. |
| [Tooltip Preview](https://ui.unlumen.com/docs/ui/unlumen/tooltip-preview) | A link should preview its destination, so the user can decide without navigating away. |
| [Velocity Highlight](https://ui.unlumen.com/docs/ui/unlumen/velocity-highlight) | Emphasis should react to how fast the user scrolls, tying the effect to their own input. |
| [Copy Button](https://ui.unlumen.com/docs/ui/buttons/copy) | A token, command, or ID is copied often and the button must confirm and reset itself. |
| [Glow Button](https://ui.unlumen.com/docs/ui/buttons/glow) | The hero call to action must survive a busy or dark background. |
| [Refresh Button](https://ui.unlumen.com/docs/ui/buttons/refresh) | Data can be re-fetched manually and the spin must be tied to the actual request, not a fixed timeout. |
| [Pixel Background](https://ui.unlumen.com/docs/ui/backgrounds/pixel) | A retro or game-adjacent brand needs an animated pixel field behind a section. |
| [Clipped Circle](https://ui.unlumen.com/docs/ui/effects/clipped-circle) | A section or image reveals through an expanding circular clip, used as a transition between states. |
| [Count Up](https://ui.unlumen.com/docs/ui/effects/count-up) | Metrics should count when they enter the viewport, so the numbers get read instead of scrolled past. |
| [Math Graph](https://ui.unlumen.com/docs/ui/effects/math-graph) | A technical page needs a plotted curve as decoration, without pulling in a charting library. |

</details>

### [Watermelon UI](https://ui.watermelon.sh/)

![Watermelon UI](assets/banners/watermelon-ui.png)

The largest registry here, and the one organised by *quantity of variants*: 30 base components shipped in 6–38 styled versions each, plus 150 animated product patterns, 22 block families, and 8 full dashboards.

**Reach for it when** you want to choose a look rather than build one — 38 button variants to pick from — or when you need a finished pattern lifted from a real product (a wallet card, a swap form, a macOS sidebar) instead of assembling it.

**Reach elsewhere when** the widget has to be functionally complex ([ReUI](#reui) for data grid, kanban, gantt) or when correctness under reduced motion and layout shift matters more than looks ([interior.dev](#interiordev)).

Watermelon ships no written documentation per component — the live demo is the spec — so verify behaviour in the preview before committing to one.

<details>
<summary><strong>30 base components</strong></summary>

Each links to a gallery of styled variants; the count is how many versions you can choose from.

| Component | Use when |
| --- | --- |
| [Accordion](https://ui.watermelon.sh/components/accordion) | 16 variants — pick a disclosure style that matches the page rather than restyling the stock one. |
| [Alerts](https://ui.watermelon.sh/components/alerts) | 30 variants — the widest set here, for products that need distinct looks per severity and placement. |
| [Avatar](https://ui.watermelon.sh/components/avatar) | 21 variants — including stacked, status-dot, and shaped versions you would otherwise build by hand. |
| [Badge](https://ui.watermelon.sh/components/badge) | 24 variants — enough to give status, count, and tag badges visually distinct treatments. |
| [Breadcrumb](https://ui.watermelon.sh/components/breadcrumb) | 8 variants — separators and truncation styles for deep hierarchies. |
| [Button](https://ui.watermelon.sh/components/button) | 38 variants — the reason to come here first when the design has no button style yet. |
| [Button Group](https://ui.watermelon.sh/components/button-group) | 12 variants — segmented and split-action groupings. |
| [Calendar](https://ui.watermelon.sh/components/calendar) | 25 variants — date display and picking in many densities. |
| [Card](https://ui.watermelon.sh/components/card) | 15 variants — container styles to settle a product's card language early. |
| [Checkbox](https://ui.watermelon.sh/components/checkbox) | 16 variants — including the animated and card-style selections. |
| [Collapsible](https://ui.watermelon.sh/components/collapsible) | 9 variants — single show/hide regions without accordion semantics. |
| [Combobox](https://ui.watermelon.sh/components/combobox) | 12 variants — searchable selects in several shapes. |
| [Data Table](https://ui.watermelon.sh/components/data-table) | 13 variants — styled tables; for heavy behaviour use [ReUI Data Grid](https://reui.io/components/data-grid) instead. |
| [Date Picker](https://ui.watermelon.sh/components/date-picker) | 13 variants — single date and range pickers as form fields. |
| [Dialog](https://ui.watermelon.sh/components/dialog) | 23 variants — modal treatments from minimal to full-bleed. |
| [Dropdown Menu](https://ui.watermelon.sh/components/dropdown-menu) | 14 variants — action menus with different grouping and icon styles. |
| [Form](https://ui.watermelon.sh/components/form) | 10 variants — complete form layouts, so field spacing and error placement are decided for you. |
| [Input Mask](https://ui.watermelon.sh/components/input-mask) | 6 variants — enforce format while typing for phone, date, IBAN, or card numbers. |
| [Input OTP](https://ui.watermelon.sh/components/input-otp) | 10 variants — verification code entry in several box styles. |
| [Pagination](https://ui.watermelon.sh/components/pagination) | 15 variants — from compact prev/next to full page ranges. |
| [Popover](https://ui.watermelon.sh/components/popover) | 12 variants — anchored panels with different arrow and padding treatments. |
| [Radio Group](https://ui.watermelon.sh/components/radio-group) | 13 variants — including card-style choices for plan pickers. |
| [Select](https://ui.watermelon.sh/components/select) | 36 variants — the second-largest set, covering most select styling needs. |
| [Sheet](https://ui.watermelon.sh/components/sheet) | 7 variants — edge panels from each side. |
| [Sonner](https://ui.watermelon.sh/components/sonner) | 20 variants — toast styling per severity and position. |
| [Switch](https://ui.watermelon.sh/components/switch) | 18 variants — including icon and labelled thumbs. |
| [Table](https://ui.watermelon.sh/components/table) | 16 variants — static tables in several densities and border styles. |
| [Tabs](https://ui.watermelon.sh/components/tabs) | 26 variants — underline, pill, and segmented tab languages. |
| [Textarea](https://ui.watermelon.sh/components/textarea) | 9 variants — including auto-growing and character-counted versions. |
| [Tooltip](https://ui.watermelon.sh/components/tooltip) | 12 variants — hover hints matched to the rest of the set. |

</details>

<details>
<summary><strong>150 animated components</strong></summary>

| Component | Category | Use when |
| --- | --- | --- |
| [Card Split Accordian](https://ui.watermelon.sh/animated-components/card-split-accordian) | Accordion | A card must reveal detail by splitting open, when a normal accordion below it would break the card's shape. |
| [Inline Action](https://ui.watermelon.sh/animated-components/inline-action) | Action | A value is edited where it sits, so the user never leaves the context to change it. |
| [Family Receive Button](https://ui.watermelon.sh/animated-components/family-receive-button) | Buttons | A button must become a full confirmation modal with backdrop blur — for money or transfer flows. |
| [Morphing Button](https://ui.watermelon.sh/animated-components/morphing-button) | Buttons | A button expands into its own input or panel instead of opening a detached surface. |
| [Run Action Button](https://ui.watermelon.sh/animated-components/run-action-button) | Buttons | One click starts a sequence of steps and the button itself reports progress through them. |
| [Save Toggle](https://ui.watermelon.sh/animated-components/save-toggle) | Buttons | Save state cycles through idle, saving, and saved, and all three must live in one control. |
| [Shimmer Button](https://ui.watermelon.sh/animated-components/shimmer-button) | Buttons | A call to action needs a light sweep on hover to read as primary. |
| [Split Button](https://ui.watermelon.sh/animated-components/split-button) | Buttons | A default action plus alternates, where the expansion should feel like one control widening. |
| [Timed Undo Action](https://ui.watermelon.sh/animated-components/time-undo-action) | Buttons | A destructive action is reversible for a few seconds and the countdown must be visible, not implied. |
| [Stepper](https://ui.watermelon.sh/animated-components/stepper) | Buttons | A quantity is nudged up and down, with digits rolling so the change is legible at a glance. |
| [Budget Card](https://ui.watermelon.sh/animated-components/budget-card) | Cards | Spending against a limit must be read in one look — the remaining balance is the headline. |
| [Compose Email Card](https://ui.watermelon.sh/animated-components/compose-email-card) | Cards | Composing happens inline in a list view, without navigating to a full mail screen. |
| [Credit Usage Card](https://ui.watermelon.sh/animated-components/credit-usage-card) | Cards | Usage-based pricing means the customer must always be able to see how much they have burned. |
| [Deployment Card](https://ui.watermelon.sh/animated-components/deployment-card) | Cards | A deploy needs environment, progress, duration, logs, and commit in one card a developer can scan. |
| [Expandable Event Card](https://ui.watermelon.sh/animated-components/expandable-event-card) | Cards | A grid item opens into a full-screen detail view without a route change — events, concerts, destinations. |
| [Expandable Profile Card](https://ui.watermelon.sh/animated-components/expandable-profile-card) | Cards | A profile expands into a side-by-side detail view, keeping the list visible beside it. |
| [Integration Card](https://ui.watermelon.sh/animated-components/integration-card) | Cards | A settings page lists connected services with status and connect/disconnect actions per row. |
| [Meeting Card](https://ui.watermelon.sh/animated-components/meeting-card) | Cards | An upcoming meeting needs time, participants, and a join action reachable in one tap. |
| [Onboarding Checklist](https://ui.watermelon.sh/animated-components/onboarding-checklist) | Cards | Activation depends on finishing several steps, and visible progress is what drives completion. |
| [Onboarding Screen](https://ui.watermelon.sh/animated-components/onboarding-screen) | Cards | First run needs a guided screen that explains setup visually rather than as a form. |
| [Onboarding Setup](https://ui.watermelon.sh/animated-components/onboarding-setup) | Cards | Initial configuration has real choices to make, and they should be sequenced rather than dumped. |
| [Profile Card](https://ui.watermelon.sh/animated-components/profile-card) | Cards | A compact identity card with quick actions, for directories and member lists. |
| [Returns Calculator Snippet](https://ui.watermelon.sh/animated-components/returns-calculator-snippet) | Cards | The user should model an outcome themselves — inputs and instant results beat a static claim. |
| [Subscription Calendar](https://ui.watermelon.sh/animated-components/subscription-calendar) | Cards | Recurring charges must be seen on a calendar so renewals stop being a surprise. |
| [Trade Summary](https://ui.watermelon.sh/animated-components/trade-summary) | Cards | Positions and performance need a dense summary a finance user can read without drilling in. |
| [Minimal Carousel](https://ui.watermelon.sh/animated-components/minimal-carousel) | Carousel | Cards expand within the carousel, so browsing and detail live in the same component. |
| [Radial Carousel](https://ui.watermelon.sh/animated-components/radial-carousel) | Carousel | Items are browsed by dragging around an arc — for showcases where a straight rail feels flat. |
| [Wiggling Cards](https://ui.watermelon.sh/animated-components/wiggling-cards) | Carousel | A playful brand wants the deck to react physically as the user moves through it. |
| [Emoji Spree Choice Chips](https://ui.watermelon.sh/animated-components/emoji-spree-choice-chips) | Choice Chips | Multi-select should feel rewarding — reactions, mood pickers, interest tagging. |
| [Create Community](https://ui.watermelon.sh/animated-components/create-community) | Dialog | Creating an entity needs name, description, and settings in one dialog rather than a wizard. |
| [Dialog Stack](https://ui.watermelon.sh/animated-components/dialog-stack) | Dialog | One dialog opens another and the stack must stay legible instead of covering itself. |
| [Edit Profile](https://ui.watermelon.sh/animated-components/edit-profile) | Dialog | Profile editing with validation and save actions, without leaving the current page. |
| [Uniswap Dialog](https://ui.watermelon.sh/animated-components/uniswap-dialog) | Dialog | A wallet or swap surface where expandable cards carry the flow — a proven crypto pattern. |
| [Activities Card](https://ui.watermelon.sh/animated-components/activities-card) | Disclosure | An activity summary expands to the full list, with a 3D header that keeps the summary anchored. |
| [Add Cash Disclosure](https://ui.watermelon.sh/animated-components/add-cash-disclosure) | Disclosure | Limits and fees must be disclosed before the user confirms a deposit — regulated-flow shaped. |
| [Inline Overflow](https://ui.watermelon.sh/animated-components/inline-overflow) | Disclosure | A row has more actions than fit, and the extra ones should spring out inline rather than in a menu. |
| [Invite Disclosure](https://ui.watermelon.sh/animated-components/invite-disclosure) | Disclosure | Pending invitations need a badge count that expands into the actual list. |
| [Switch Disclosure](https://ui.watermelon.sh/animated-components/switch-disclosure) | Disclosure | A setting has sub-options that only matter when it is on, so they should appear with it. |
| [Task Widget Disclosure](https://ui.watermelon.sh/animated-components/task-widget-disclosure) | Disclosure | A task summary expands into per-step progress, for a dashboard widget. |
| [Inline Disclosure Menu](https://ui.watermelon.sh/animated-components/inline-disclosure-menu) | Dropdown | Contextual options including delete, with a two-step confirm so destructive clicks cannot slip through. |
| [Filter Disclosure](https://ui.watermelon.sh/animated-components/filter-disclosure) | Filters | Filters should stay collapsed until needed, while still showing that some are active. |
| [Draw Signature](https://ui.watermelon.sh/animated-components/draw-signature) | Inputs | A signature is captured by hand, with a step-based workflow rather than a bare canvas. |
| [Floating Input](https://ui.watermelon.sh/animated-components/floating-input) | Inputs | The label must survive focus, so the field's purpose stays visible while typing. |
| [Card Swipe](https://ui.watermelon.sh/animated-components/card-swipe) | Interaction | Decisions are made by swiping and the throw must respect velocity, not just direction. |
| [Carousel Slider](https://ui.watermelon.sh/animated-components/carousel-slider) | Interaction | A gesture-driven card rail with spring rotation, for touch-first browsing. |
| [Edit Badge](https://ui.watermelon.sh/animated-components/edit-badge) | Interaction | Users customise a label's text, icon, and colour in place — tags, statuses, categories. |
| [Layered Progressive Disclosure](https://ui.watermelon.sh/animated-components/layered-progressive-disclosure) | Interaction | Advanced configuration must not overwhelm on first sight, but power users still need every toggle. |
| [Morphing Sidebar Controls](https://ui.watermelon.sh/animated-components/morphing-sidebar-controls) | Interaction | A sidebar carries progressive settings and presets, changing shape as options are revealed. |
| [Schedule Button](https://ui.watermelon.sh/animated-components/schedule-button) | Interaction | Publishing later needs date and time picked from the button that schedules it. |
| [Slot Picker](https://ui.watermelon.sh/animated-components/slot-picker) | Interaction | Availability is chosen as time slots, with toggles that make taken and free unmistakable. |
| [Swap Form](https://ui.watermelon.sh/animated-components/swap-form) | Interaction | Sign in and sign up share one surface, and switching must not feel like a page reload. |
| [Tags](https://ui.watermelon.sh/animated-components/tags) | Interaction | Tags are added and removed constantly, and the row must reflow smoothly and auto-scroll. |
| [Voice Chat Disclosure](https://ui.watermelon.sh/animated-components/voice-chat-disclosure) | Interaction | A live voice call collapses to a pill with stacked avatars and speaking indicators. |
| [Pin Item](https://ui.watermelon.sh/animated-components/pin-item) | Lists | Users promote items to the top and the move must be visible, not a silent reorder. |
| [Shuffle Pinned List](https://ui.watermelon.sh/animated-components/shuffle-pinned-item) | Lists | The pinned item becomes a hero header, so priority is expressed by layout and not just position. |
| [View On Map](https://ui.watermelon.sh/animated-components/view-on-map) | Map | A location needs pins, zoom, and directions inline, without a full mapping page. |
| [Changeable Pricing Section](https://ui.watermelon.sh/animated-components/changeable-pricing-section) | Marketing | Monthly/yearly billing toggles and plan details expand — a complete SaaS pricing surface. |
| [Waveform Scrub](https://ui.watermelon.sh/animated-components/waveform-scrub) | Media | Audio is navigated by its waveform, because a plain progress bar hides where the content is. |
| [Aave Swap Component](https://ui.watermelon.sh/animated-components/aave-swap-component) | Micro-interaction | A crypto exchange input where amounts and converted values update as the user types. |
| [Card Cue](https://ui.watermelon.sh/animated-components/card-cue) | Micro-interaction | A card needs a small cue that it can be acted on, before the user commits to touching it. |
| [Carousel Navigator](https://ui.watermelon.sh/animated-components/carousel-navigator) | Micro-interaction | Carousel controls adapt their background to the active slide and sync with its progress. |
| [Collection Grid Disclosure](https://ui.watermelon.sh/animated-components/collection-grid-disclosure) | Micro-interaction | A grid tile expands in place to show more of a collection, keeping the grid as context. |
| [Contextual AI Bar](https://ui.watermelon.sh/animated-components/contextual-ai-bar) | Micro-interaction | A toolbar morphs between tool icons and an AI prompt field, so both live in one bar. |
| [Copy Confirm](https://ui.watermelon.sh/animated-components/copy-confirm) | Micro-interaction | A copy action must confirm visibly and reset itself, without the button changing width. |
| [Dock Component](https://ui.watermelon.sh/animated-components/dock) | Micro-interaction | An icon bar should magnify under the cursor, macOS-style, making small targets hittable. |
| [Dropdown Disclosure](https://ui.watermelon.sh/animated-components/dropdown-disclosure) | Micro-interaction | Selecting an item should animate the selection into the trigger rather than closing abruptly. |
| [Editable Chip](https://ui.watermelon.sh/animated-components/editable-chip) | Micro-interaction | A chip's text is corrected in place, for filters and tags that are often slightly wrong. |
| [Event Reminders](https://ui.watermelon.sh/animated-components/event-reminders) | Micro-interaction | Reminders are set and adjusted with lightweight controls, not a scheduling dialog. |
| [Expand Details](https://ui.watermelon.sh/animated-components/expand-details) | Micro-interaction | A summary row expands to full detail without pushing the rest of the list out of view. |
| [Extended Toolbar](https://ui.watermelon.sh/animated-components/extended-toolbar) | Micro-interaction | A toolbar reveals contextual actions for the current selection and confirms each one instantly. |
| [Family Wallet](https://ui.watermelon.sh/animated-components/family-wallet) | Micro-interaction | A wallet where cards transition between stacked and detailed states — a well-known finance pattern. |
| [Feature Tour](https://ui.watermelon.sh/animated-components/feature-tour) | Micro-interaction | A new feature must be introduced in place, with focus pulled to each step and an obvious exit. |
| [Feedback](https://ui.watermelon.sh/animated-components/feedback) | Micro-interaction | Collecting a rating or comment inline, with morphing icons and a dark mode that holds up. |
| [Feedback Action](https://ui.watermelon.sh/animated-components/feedback-action) | Micro-interaction | Thumbs up/down on an answer or item, where the response must register instantly. |
| [Fractional Picker](https://ui.watermelon.sh/animated-components/fractional-picker) | Micro-interaction | A precise numeric value is dragged on a ruler with snapping — better than typing on touch. |
| [Inline Edit](https://ui.watermelon.sh/animated-components/inline-edit) | Micro-interaction | Display and edit modes are the same element, so editing never causes a layout jump. |
| [Inline Table Control](https://ui.watermelon.sh/animated-components/inline-table-control) | Micro-interaction | Table rows are edited in place, keeping the user's position and focus in the grid. |
| [Inline Toast](https://ui.watermelon.sh/animated-components/inline-toast) | Micro-interaction | Feedback belongs next to the action rather than in a screen corner, with a copy action attached. |
| [Labeled Progress Indicator](https://ui.watermelon.sh/animated-components/labeled-progress-indicator) | Micro-interaction | Progress needs a label that changes with the phase, because a bare percentage says too little. |
| [Licence Key](https://ui.watermelon.sh/animated-components/licence-key) | Micro-interaction | A licence key is revealed, copied, and masked again — entry and handling in one control. |
| [List Stack](https://ui.watermelon.sh/animated-components/list-stack) | Micro-interaction | A long list collapses into a stack and expands on demand, saving vertical space. |
| [Pop Stepper](https://ui.watermelon.sh/animated-components/pop-stepper) | Micro-interaction | A quantity control on touch, where each increment needs tactile visual confirmation. |
| [Predictive Text](https://ui.watermelon.sh/animated-components/predictive-text) | Micro-interaction | Inline completion suggests the rest of the sentence while typing, ghost-text style. |
| [Quick Feedback](https://ui.watermelon.sh/animated-components/quick-feedback) | Micro-interaction | A one-tap reaction must confirm in real time, for high-frequency, low-stakes input. |
| [Quick Option Picker](https://ui.watermelon.sh/animated-components/quick-option-picker) | Micro-interaction | A short option list rolls into view, for choices made often and quickly. |
| [Quick Paste](https://ui.watermelon.sh/animated-components/quick-paste) | Micro-interaction | Pasting is triggered by shortcut and the panel confirms what landed — codes, links, snippets. |
| [Quick Switcher](https://ui.watermelon.sh/animated-components/quick-switcher) | Micro-interaction | Two modes are switched constantly and the bar must make the current one unmistakable. |
| [Reveal Copy](https://ui.watermelon.sh/animated-components/reveal-copy) | Micro-interaction | Sensitive text stays hidden until revealed deliberately — keys, tokens, recovery codes. |
| [Revealing Cards](https://ui.watermelon.sh/animated-components/revealing-cards) | Micro-interaction | Cards uncover their content on interaction, for progressive browsing of a set. |
| [Scroll Island](https://ui.watermelon.sh/animated-components/scroll-island) | Micro-interaction | A floating pill carries scroll progress and contextual actions, Dynamic Island style. |
| [Scrub Slider](https://ui.watermelon.sh/animated-components/scrub-slider) | Micro-interaction | A value is scrubbed with fine control, for media position or precise ranges. |
| [Select AI Agent](https://ui.watermelon.sh/animated-components/select-ai-agent) | Micro-interaction | The product has several agents or models and switching must be one visible, fast choice. |
| [Send Money](https://ui.watermelon.sh/animated-components/send-money) | Micro-interaction | A transfer flow needs confirmation, status, and result states in one compact interaction. |
| [Split Actions](https://ui.watermelon.sh/animated-components/split-actions) | Micro-interaction | One control splits into related actions, keeping the primary path obvious. |
| [Split To Edit](https://ui.watermelon.sh/animated-components/split-to-edit) | Micro-interaction | A field splits into editable segments — codes, dates, or structured values. |
| [Status Picker](https://ui.watermelon.sh/animated-components/status-picker) | Micro-interaction | Status changes often (issues, tasks, availability) and the transition should confirm the new state. |
| [Step Indicator](https://ui.watermelon.sh/animated-components/step-indicator) | Micro-interaction | A multi-step flow needs the current stage highlighted with a tooltip naming it. |
| [Step Pager](https://ui.watermelon.sh/animated-components/step-pager) | Micro-interaction | Steps are paged through, with icons transitioning to show direction of travel. |
| [Transaction List](https://ui.watermelon.sh/animated-components/transaction-list) | Micro-interaction | Transactions expand to full detail in the list, so the ledger keeps its context. |
| [Voice Note](https://ui.watermelon.sh/animated-components/voice-note) | Micro-interaction | Audio messages are recorded, previewed, and deleted before sending. |
| [Voice Transcribe](https://ui.watermelon.sh/animated-components/voice-transcribe) | Micro-interaction | Speech becomes text live, and the user must see it appearing to trust it. |
| [Command Search](https://ui.watermelon.sh/animated-components/command-search) | Navigation | A palette with sectioned results and keyboard navigation, for apps with many destinations. |
| [Journal Navigation](https://ui.watermelon.sh/animated-components/journal-navigation) | Navigation | Entries are browsed by date or section, with transitions that keep the reader oriented. |
| [Navigation-1](https://ui.watermelon.sh/animated-components/navigation-1) | Navigation | A SaaS navbar with a hoverable mega menu, minimal styling. |
| [Navigation-2](https://ui.watermelon.sh/animated-components/navigation-2) | Navigation | Same mega-menu pattern, different layout and density. |
| [Navigation-3](https://ui.watermelon.sh/animated-components/navigation-3) | Navigation | Third mega-menu variant, for comparing options before committing. |
| [Navigation-4](https://ui.watermelon.sh/animated-components/navigation-4) | Navigation | A dashboard navbar: central search, action buttons, and account menu — the app-shell option. |
| [Navigation-5](https://ui.watermelon.sh/animated-components/navigation-5) | Navigation | A floating island navbar with a three-column mega menu and glass treatment. |
| [Navigation-6](https://ui.watermelon.sh/animated-components/navigation-6) | Navigation | Second floating-island variant with different column weighting. |
| [Navigation-7](https://ui.watermelon.sh/animated-components/navigation-7) | Navigation | Third floating-island variant, heaviest of the glass treatments. |
| [Tree Menu](https://ui.watermelon.sh/animated-components/tree-menu) | Navigation | Nested navigation where drilling in should animate levels and leave a breadcrumb back. |
| [macOS Sidebar](https://ui.watermelon.sh/animated-components/macos-sidebar) | Navigation | A collapsible sidebar that morphs on hover — for tools users keep open all day. |
| [Notification 1](https://ui.watermelon.sh/animated-components/notification-1) | Notification | Inform without interrupting; first of four styling options. |
| [Notification 2](https://ui.watermelon.sh/animated-components/notification-2) | Notification | Second variant, different emphasis and placement. |
| [Notification 3](https://ui.watermelon.sh/animated-components/notification-3) | Notification | Third variant, denser for stacked notifications. |
| [Notification 4](https://ui.watermelon.sh/animated-components/notification-4) | Notification | Fourth variant, most prominent of the set. |
| [Continuous Pagination](https://ui.watermelon.sh/animated-components/continuous-pagination) | Pagination | Paging must stay responsive on mobile, with the active page clearly raised. |
| [Pagination](https://ui.watermelon.sh/animated-components/pagination) | Pagination | A draggable ruler-style pager with snapping, for jumping across many pages quickly. |
| [Floating Disclosure](https://ui.watermelon.sh/animated-components/floating-disclosure) | Popover | A compact action menu that resizes to its content, with a floating close affordance. |
| [Schedule Date](https://ui.watermelon.sh/animated-components/schedule-date) | Scheduler | Date and time are picked together and confirmed in one dialog. |
| [Adaptive Slider](https://ui.watermelon.sh/animated-components/adaptive-slider) | Sliders | The track's colour carries meaning as the value changes — targets, intensity, health. |
| [Knob Slider](https://ui.watermelon.sh/animated-components/knob-slider) | Sliders | A radial dial fits where a linear track does not, and rotation suits the parameter. |
| [Continuous Tabs](https://ui.watermelon.sh/animated-components/continuous-tabs) | Tabs | Button-like tabs with a sliding pill, for filter bars and view switching. |
| [Discrete Tabs](https://ui.watermelon.sh/animated-components/discrete-tabs) | Tabs | Tabs that morph between active states, when each section is visually distinct. |
| [Fluid Tabs](https://ui.watermelon.sh/animated-components/fluid-tabs) | Tabs | A floating indicator with icon scaling — the most animated of the three tab options. |
| [Frequency Selector](https://ui.watermelon.sh/animated-components/frequency-selector) | Tabs | Recurrence is chosen (daily, weekly, monthly) and each choice reveals its own sub-options. |
| [Morphing Discovery Bar](https://ui.watermelon.sh/animated-components/morphing-discovery-bar) | Tabs | A discovery bar that expands into contextual actions as the user explores. |
| [Switch Mode](https://ui.watermelon.sh/animated-components/switch-mode) | Toggle | A theme toggle with sliding icon states, when the switch should be part of the personality. |
| [Gooey Menu](https://ui.watermelon.sh/animated-components/gooey-menu) | Tooltip | A logo or mark expands into an informational tooltip, for framework and tech callouts. |
| [Tooltip Navbar](https://ui.watermelon.sh/animated-components/tooltip-navbar) | Tooltip | An icon-only navbar where labels appear on hover with continuous motion. |
| [Vertical Tooltip Navbar](https://ui.watermelon.sh/animated-components/vertical-tooltip-navbar) | Tooltip | The same for a vertical rail, with clip-path reveals that do not disturb the layout. |
| [Widget 1](https://ui.watermelon.sh/animated-components/widget-1) | Widget | Self-contained dashboard widget; first of nine layout options. |
| [Widget 2](https://ui.watermelon.sh/animated-components/widget-2) | Widget | Second widget layout, different data density. |
| [Widget 3](https://ui.watermelon.sh/animated-components/widget-3) | Widget | Third widget layout. |
| [Widget 4](https://ui.watermelon.sh/animated-components/widget-4) | Widget | Fourth widget layout. |
| [Widget 5](https://ui.watermelon.sh/animated-components/widget-5) | Widget | Fifth widget layout. |
| [Widget 6](https://ui.watermelon.sh/animated-components/widget-6) | Widget | Sixth widget layout. |
| [Widget 7](https://ui.watermelon.sh/animated-components/widget-7) | Widget | Seventh widget layout. |
| [Widget 8](https://ui.watermelon.sh/animated-components/widget-8) | Widget | Eighth widget layout. |
| [Widget 9](https://ui.watermelon.sh/animated-components/widget-9) | Widget | Ninth widget layout. |
| [Calendar Widget](https://ui.watermelon.sh/animated-components/calendar-widget) | Widgets | A dashboard calendar where progressive blur keeps focus on the selected range. |
| [Fund Widget](https://ui.watermelon.sh/animated-components/fund-widget) | Widgets | A fund or balance widget with 3D transforms, for finance dashboards. |
| [Pricing Widget](https://ui.watermelon.sh/animated-components/pricing-widget) | Widgets | Prices update dynamically as options change, inside a compact widget. |
| [Progressive Input Stack](https://ui.watermelon.sh/animated-components/progressive-input-stack) | Widgets | Form fields appear as earlier ones are completed, so a long form never looks long. |
| [Range Selection Slider](https://ui.watermelon.sh/animated-components/range-selection-slider) | Widgets | A two-handle range with immediate feedback, for filters and budgets. |
| [Run Widget](https://ui.watermelon.sh/animated-components/run-widget) | Widgets | A fitness or activity metric where the number transitions as it updates. |
| [Show QR](https://ui.watermelon.sh/animated-components/show-qr) | Widgets | A QR code is revealed on demand — tickets, payments, device pairing. |
| [Swap Currency Card](https://ui.watermelon.sh/animated-components/swap-currency-card) | Widgets | Currency conversion with instant confirmation of the direction being swapped. |
| [Weight Widget](https://ui.watermelon.sh/animated-components/weight-widget) | Widgets | A sliding scale for precise input, where dragging beats typing on touch. |
| [Share Sheet](https://ui.watermelon.sh/animated-components/share-sheet) | Widgets | Sharing expands to a list of people, so the common case is one tap. |

</details>

<details>
<summary><strong>22 block families</strong></summary>

Full page sections. Each family holds numbered variants of the same section type.

| Family | Use when |
| --- | --- |
| [Hero](https://ui.watermelon.sh/blocks/hero) | 43 blocks — the widest set: pick a hero shape before designing one, since it decides the page's rhythm. |
| [Footer](https://ui.watermelon.sh/blocks/footer) | 31 blocks — footers carry navigation, legal, and newsletter duties and are always underestimated. |
| [Auth](https://ui.watermelon.sh/blocks/auth) | 13 blocks — complete sign-in and sign-up screens, including split-image and centred layouts. |
| [Announcement](https://ui.watermelon.sh/blocks/Announcement) | 9 blocks — top-of-page banners for launches, maintenance, or migration notices. |
| [Widget](https://ui.watermelon.sh/blocks/widget) | 9 blocks — self-contained dashboard sections rather than page-width blocks. |
| [Contact](https://ui.watermelon.sh/blocks/contact) | 7 blocks — contact sections combining form, address, and map. |
| [Error](https://ui.watermelon.sh/blocks/Error) | 7 blocks — 404 and error screens that still offer a way forward. |
| [FAQ](https://ui.watermelon.sh/blocks/FAQ) | 6 blocks — objection handling near the bottom of a landing page. |
| [CTA](https://ui.watermelon.sh/blocks/CTA) | 5 blocks — the closing ask, in several levels of insistence. |
| [Feature](https://ui.watermelon.sh/blocks/Feature) | 5 blocks — feature sections in grid, alternating, and list arrangements. |
| [File Upload](https://ui.watermelon.sh/blocks/file-upload) | 5 blocks — upload sections; for real document workflows see [Extend UI](#extend-ui). |
| [Integrations](https://ui.watermelon.sh/blocks/integrations) | 5 blocks — showing what you connect to, when the ecosystem is part of the pitch. |
| [Newsletter](https://ui.watermelon.sh/blocks/newsletter) | 5 blocks — email capture as a section rather than a lone input. |
| [Pricing](https://ui.watermelon.sh/blocks/pricing) | 5 blocks — plan comparison including the billing toggle. |
| [Team](https://ui.watermelon.sh/blocks/Team) | 5 blocks — people sections for about and careers pages. |
| [Blog](https://ui.watermelon.sh/blocks/Blog) | 4 blocks — post listings and article layouts. |
| [Career](https://ui.watermelon.sh/blocks/Career) | 4 blocks — open-roles sections with filtering by team or location. |
| [Notification](https://ui.watermelon.sh/blocks/notification) | 4 blocks — in-page notification sections rather than toasts. |
| [Stats](https://ui.watermelon.sh/blocks/Stats) | 4 blocks — metric rows for social proof. |
| [Testimonials](https://ui.watermelon.sh/blocks/testimonials) | 4 blocks — quote sections in grid and carousel forms. |
| [Bento](https://ui.watermelon.sh/blocks/Bento) | 2 blocks — mixed-size feature grids where items differ in importance. |
| [Navigation](https://ui.watermelon.sh/blocks/navigation) | 7 blocks — full navbars, complementing the animated navigation components above. |

</details>

<details>
<summary><strong>8 dashboards</strong></summary>

Complete application screens, useful as a starting layout or as a reference for information density.

| Dashboard | Use when |
| --- | --- |
| [Agndex Dashboard](https://ui.watermelon.sh/dashboard/agndex-dashboard) | A developer portal: indexes, API credentials, billing, and project settings, in light and dark. |
| [Astrix Dashboard](https://ui.watermelon.sh/dashboard/astrix-dashboard) | An AI-in-the-loop review workspace — classification metrics, a live pipeline, and a human review stream. |
| [Demostack Dashboard](https://ui.watermelon.sh/dashboard/demostack-dashboard) | A multi-tenant workspace with organisation switching, resource discovery, and team filtering. |
| [Gridline Dashboard](https://ui.watermelon.sh/dashboard/gridline-dashboard) | Heavy operational tooling: network modelling, asset planning, and stakeholder workflows. |
| [Jobtracker Dashboard](https://ui.watermelon.sh/dashboard/jobtracker-dashboard) | A field-service or agency tool: customer records, job pipelines, estimates with drag-and-drop line items. |
| [Library Dashboard](https://ui.watermelon.sh/dashboard/library-dashboard) | Inventory and circulation: collection metrics, charts, branch switching, and alerts. |
| [Portfolio Dashboard](https://ui.watermelon.sh/dashboard/portfolio-dashboard) | Task management sorted by priority and category — the general-purpose starting point. |
| [Web3 Dashboard](https://ui.watermelon.sh/dashboard/web3-dashboard) | The same task layout with a Web3 treatment. |

</details>


## Loaders

### [Dot Matrix](https://dotmatrix.zzzzshawn.cloud/getting-started/usage)

![Dot Matrix](assets/banners/dot-matrix.png)

Sixty dot-matrix loaders in three grid shapes — square, circular, triangle — installed straight from a custom shadcn registry.

**Reach for it when** loading states appear often enough that a default spinner becomes the app's visual signature, and you want one deliberate motion instead. Pick by *rhythm*: sweeps and scans read as searching, spirals and helixes as processing, pulses as waiting.

**Reach elsewhere when** the wait belongs to an AI agent whose state should be named — [Thinking Orbs](#thinking-orbs) maps nine distinct animations to nine verbs.

Links point at the registry JSON, which is the install target: `pnpm dlx shadcn@latest add <url>`.

<details>
<summary><strong>60 loaders and a bulk install</strong></summary>

| Loader | Use when |
| --- | --- |
| [Neon Drift](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-1.json) | You need a square matrix loader with a diagonal ripple. |
| [Pulse Ladder](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-2.json) | You need a square matrix loader with a stepped snake motion. |
| [Core Spiral](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-3.json) | You need a square matrix loader that spirals toward the center. |
| [Twin Orbit](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-4.json) | You need a square matrix loader with opposing ring motion. |
| [Prism Sweep](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-5.json) | You need a square matrix loader with alternating diagonal movement. |
| [Flux Columns](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-6.json) | You need a square matrix loader with vertical column motion. |
| [Block Drop](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-7.json) | You need a square matrix loader with a stacking block feel. |
| [Strobe Stack](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-8.json) | You need a square matrix loader with stacked columns and a flash beat. |
| [Glyph Pulse](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-9.json) | You need a square matrix loader with braille-like glyph changes. |
| [CRT Glide](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-10.json) | You need a square matrix loader with a scanline effect. |
| [Echo Ring](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-11.json) | You need a square matrix loader with concentric ripple motion. |
| [Origin Wave](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-12.json) | You need a square matrix loader that expands from one origin point. |
| [Core Rotor](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-13.json) | You need a square matrix loader with a compact rotor. |
| [Prism Bloom](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-14.json) | You need a square matrix loader with radial bloom motifs. |
| [Helix Glow](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-15.json) | You need a square matrix loader with a DNA-like helix. |
| [Helix Core](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-16.json) | You need a square matrix loader with a narrow central helix. |
| [Half Helix](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-17.json) | You need a square matrix loader with a single-strand helix. |
| [Sound Bars](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-18.json) | You need a square matrix loader that reads like audio levels. |
| [Infinity Run](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-19.json) | You need a square matrix loader with a figure-eight trace. |
| [Mobius Run](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-20.json) | You need a square matrix loader with outer-ring chase motion. |
| [Halo Drift](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-1.json) | You need a circular loader with a diagonal helix drift. |
| [Tri Orbit](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-2.json) | You need a circular loader with three orbiting heads. |
| [Plasma Veil](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-3.json) | You need a circular loader with a soft plasma sweep. |
| [Radar Arc](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-4.json) | You need a circular loader with a rotating radar beam. |
| [Nova Wheel](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-5.json) | You need a circular loader with pinwheel motion. |
| [Phase Orb](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-6.json) | You need a circular loader with an orbiting energy point. |
| [Gate Shift](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-7.json) | You need a circular loader with alternating scan gates. |
| [Heart Pulse](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-8.json) | You need a circular loader with a center pulse. |
| [Star Compass](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-9.json) | You need a circular loader with directional beacon motion. |
| [Binary Bloom](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-10.json) | You need a circular loader with coded pulse tiers. |
| [Lunar Breathe](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-11.json) | You need a circular loader with a crescent-like sweep. |
| [Arc Beacon](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-12.json) | You need a circular loader with a stepped beacon beam. |
| [Twin Helix](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-13.json) | You need a circular loader with a twin-helix rhythm. |
| [Rung Shift](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-14.json) | You need a circular loader with DNA ladder movement. |
| [Glyph Cluster](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-15.json) | You need a circular loader with grouped glyph motifs. |
| [Rail Scan](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-16.json) | You need a circular loader with a braille rail scan. |
| [Checker Shift](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-17.json) | You need a circular loader with checker phase changes. |
| [Pulse Pair](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-18.json) | You need a circular loader with mirrored dot pairs. |
| [Orbit Cell](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-19.json) | You need a circular loader with a braille-cell orbit. |
| [Glyph Cycle](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-20.json) | You need a circular loader with readable glyph transitions. |
| [Core Spokes](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-1.json) | You need a triangle loader with spokes from the center. |
| [Altitude Wave](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-2.json) | You need a triangle loader with apex-to-base wave motion. |
| [Corner Bounce](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-3.json) | You need a triangle loader that bounces between corners. |
| [Vertex Chase](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-4.json) | You need a triangle loader with three perimeter heads. |
| [Row Sweep](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-5.json) | You need a triangle loader with reflected row scanning. |
| [Braille Beat](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-6.json) | You need a triangle loader with braille-style fills. |
| [Oblique Weave](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-7.json) | You need a triangle loader with diagonal harmonic bands. |
| [Wing Metronome](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-8.json) | You need a triangle loader with left-right wing emphasis. |
| [Corona Tier](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-9.json) | You need a triangle loader with tiered energy rings. |
| [Column Rake](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-10.json) | You need a triangle loader with strict column movement. |
| [Shelf Descent](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-11.json) | You need a triangle loader with descending horizontal tiers. |
| [Skew Drift](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-12.json) | You need a triangle loader with skewed ridge motion. |
| [Serpent Zip](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-13.json) | You need a triangle loader with a row-wise zigzag snake. |
| [Pillar Sweep](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-14.json) | You need a triangle loader with a vertical beam sweep. |
| [Tripod Handoff](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-15.json) | You need a triangle loader that hands brightness between vertices. |
| [Updraft](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-16.json) | You need a triangle loader with a rising V-shaped ridge. |
| [Infinity Trace](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-17.json) | You need a triangle loader with a crossing loop path. |
| [Hollow Shell](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-18.json) | You need a triangle loader with a hollow pulse. |
| [Pivot Ray](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-19.json) | You need a triangle loader with a rotating searchlight. |
| [Twin Perimeter](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-20.json) | You need a triangle loader with two perimeter chasers. |
| [All Dot Matrix Loaders](https://dotmatrix.zzzzshawn.cloud/r/all.json) | You want to install every Dot Matrix loader in one step. |

</details>

### [Thinking Orbs](https://orbs.jakubantalik.com/)

![Thinking Orbs](assets/banners/thinking-orbs.png)

One canvas component with nine hand-tuned states, each shipped at two purpose-built sizes (64px for chat-avatar scale, 20px for inline text — separate designs, not a scale factor). Plain 2D canvas: no WebGL, no CSS filters, identical in Chrome, Safari, and Firefox. Installs as an npm package (`thinking-orbs`) rather than through the shadcn registry.

**Reach for it when** an agent's wait should say *what kind of work* is happening. The state is the point: switching from `searching` to `solving` tells the user the run advanced, which no single spinner can do.

**Reach elsewhere when** the wait is ordinary app loading — [Dot Matrix](#dot-matrix) has more shapes and no agent semantics — or when the state needs a text label beside it ([AICSS](#aicss) Thinking State, [Fluid Functionalism](#fluid-functionalism) ThinkingSteps).

Theme is monochrome and resolves automatically from a `data-theme` attribute or `dark`/`light` class, falling back to `prefers-color-scheme`. Each state ships a sensible `aria-label`, overridable per instance.

<details>
<summary><strong>9 states</strong></summary>

| State | Use when |
| --- | --- |
| `working` | The default for unattributed work — particles on tilted orbits, no claim about what is happening. |
| `searching` | The agent is querying an index or the web; a meridian sweeping a dotted globe reads as "looking through". |
| `solving` | Reasoning toward a single answer — bands scramble, then click into place, so the resolution is visible. |
| `listening` | Voice input is open and the user needs to know the mic is live; a waveform rolls through the rings. |
| `connecting` | Establishing a session, tool, or integration — a constellation wiring itself, for the wait before work starts. |
| `weaving` | Combining several sources into one answer; three strands plait around the sphere. |
| `composing` | Generating long output before the first token streams, so the pause before text appears is accounted for. |
| `breathing` | A long idle wait where motion should not imply progress — a slowly morphing ring. |
| `shaping` | Producing something structured (an image, a layout, a schema); the outline cycles circle → triangle → square. |

</details>
