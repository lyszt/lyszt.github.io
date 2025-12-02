# Legacy Portfolio Project

**⚠️ This project has been abandoned.**

## History

This repository was originally built as a personal portfolio website using Jekyll (Ruby static site generator) combined with vanilla JavaScript and CSS. Over time, attempts were made to modernize it:

### Migration Attempts

1. **Initial State**: Jekyll + vanilla JS/CSS
   - Minified, unmaintainable JavaScript
   - Referenced removed DOM elements causing errors
   - Difficult to debug and extend

2. **React Migration**: Hybrid Jekyll + Vite + React
   - Migrated portfolio component to React with Material-UI
   - Added Vite build pipeline alongside Jekyll
   - Created dual build system (Vite → Jekyll → minify → compress)
   - Improved maintainability but introduced architectural complexity

3. **Ongoing Issues**:
   - Persistent layout shifting and sizing problems
   - Complex dual build process (Ruby + Node.js)
   - Difficult to maintain and extend
   - Technical debt from hybrid architecture

## Why It Was Abandoned

The fundamental architecture—a Jekyll static site with React components bolted on—proved to be unsustainable. While the React migration improved code quality, the underlying project structure remained a Frankenstein combination of two different paradigms.

Rather than continuing to fight the legacy architecture, the decision was made to start fresh with a modern stack.

## Successor Project

This project has been replaced by **Scarlett Citadel**—a clean, modern portfolio built from the ground up with:
- Pure React/Next.js architecture (no Jekyll hybrid)
- Unified build system
- Modern development practices
- Better performance and maintainability

## Legacy Status

This repository remains as a reference and historical record, but no further development will occur here. All future work continues in the Scarlett Citadel project.

---

*Last updated: December 2025*
