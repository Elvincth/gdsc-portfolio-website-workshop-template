import type { Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "John Doe - Portfolio Workshop",
  description:
    "Explore John Doe's portfolio created during the portfolio workshop.",
};

//Here is the root layout which shared across all pages
//This layout includes the header and the main content
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*  This is the favicon using an SVG */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
        {children}
      </body>
    </html>
  );
}
