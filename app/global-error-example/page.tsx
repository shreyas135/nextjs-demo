export default function GlobalErrorPage() {
  throw new Error("This will trigger global-error.tsx - 500 error page");
}
