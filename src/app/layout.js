import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import useLenis from "./components/lib/useLenis";

export const metadata = {
  title: "Ayush Shah - Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
