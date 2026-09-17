# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

- `src/main.tsx` - React entrypoint
- `src/App.tsx` - Primary application component
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell
- `package.json` - Project dependencies
- `vite.config.ts` - Vite configuration
- `.mise.toml` - Toolchain versions

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4
- Build tooling: Vite 8, TypeScript 5.7

## Styling

Tailwind CSS v4 via `@tailwindcss/vite`. Use utility classes in JSX; put global CSS in `src/index.css`.
