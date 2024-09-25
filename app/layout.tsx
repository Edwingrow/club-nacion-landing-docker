import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Club Nacion",
  description: "Club Nacion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
