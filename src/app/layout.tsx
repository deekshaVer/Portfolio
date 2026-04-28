import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Deeksha Verma | Fullstack Developer",
  description: "Portfolio of Deeksha Verma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-textMain">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {children}
        </main>
      </body>
    </html>
  );
}
