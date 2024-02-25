import type { Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js with TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*  Change the favicon to your favorite emoji */}
        {/*  See: https://css-tricks.com/emoji-as-a-favicon/*/}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
