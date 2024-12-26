import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "আমাদের কচুয়া",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100;400;700&family=Fira+Code:wght@300;700&family=Parkinsans:wght@300;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="flex flex-col justify-between min-h-screen p-4 bg-slate-100"
        style={{ fontFamily: "Anek Bangla, sans-serif" }}
      >
        <header className="text-2xl font-bold text-center md:text-3xl lg:text-4xl pb-3 md:mb-4">
          <Link href="/"> আমাদের কচুয়া</Link>
        </header>
        {children}
        <footer className="text-center text-sm lg:text-base py-2 md:py-4 lg:py-6 text-slate-400">
          &copy; {new Date().getFullYear()}. All right reserved by Amader Kachua
        </footer>
      </body>
    </html>
  );
}
