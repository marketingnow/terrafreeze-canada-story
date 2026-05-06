import { Snowflake } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2 text-primary">
          <Snowflake className="h-5 w-5" strokeWidth={1.5} />
          <span className="font-serif text-xl">TERRAFREEZE Canada</span>
        </div>
        <p>© {new Date().getFullYear()} TERRAFREEZE Canada. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="https://terrafreeze.ca/shop/" className="hover:text-primary">Shop</a>
          <a href="https://terrafreeze.ca/blog/" className="hover:text-primary">Blog</a>
          <a href="https://terrafreeze.ca/contact/" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}
