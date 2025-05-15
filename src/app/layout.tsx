import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raaga Karumanchi",
  description: "Personal website of Raaga Karumanchi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-white font-sans min-h-screen bg-[#311535]">
        {/* Top Navigation */}
        <nav className="w-full flex justify-center gap-6 md:gap-8 py-8 text-lg lowercase sticky top-0 z-50 bg-[#311535]">
          <a href="#currently" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-300">currently</a>
          <a href="#hobbies" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-300">hobbies</a>
          <a href="#experience" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-300">experience</a>
          <a href="#photos" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-300">photos</a>
        </nav>
        <main className="flex flex-col items-center w-full px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
