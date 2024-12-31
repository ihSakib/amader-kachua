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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body
        className="flex flex-col justify-between min-h-screen p-4 bg-slate-100"
        style={{ fontFamily: "Anek Bangla, sans-serif" }}
      >
        {/* <div className="fixed z-[1000] top-16 left-5  bg-red-400 px-4 py-2 text-white text-sm md:text-base font-semibold ">
          Under Development
        </div> */}

        <header className="text-3xl font-bold text-center md:text-4xl lg:text-5xl pb-3 md:pb-4">
          <Link href="/"> আমাদের কচুয়া</Link>
        </header>
        {children}
        <footer className="text-center text-sm lg:text-base py-2 md:py-4 lg:py-6 text-slate-400 mt-auto">
          &copy; {new Date().getFullYear()}. All right reserved by Amader Kachua
        </footer>
      </body>
    </html>
  );
}
