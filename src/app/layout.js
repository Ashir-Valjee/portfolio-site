import localFont from "next/font/local";
import NavBar from "@/components/Navbar";
import Script from "next/script";
import ThemeProvider from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ashir Valjee - web developer",
  description: "Portfolio site of Ashir Valjee",
  openGraph: {
    title: "Ashir Valjee - web developer",
    description: "Portfolio site of Ashir Valjee",
    type: "website",
    url: "https://ashir-valjee-portfolio.vercel.app/",
    images: {
      url: "https://ashir-valjee-portfolio.vercel.app/mylogo.png",
      width: 1800,
      height: 1600,
      alt: "My custom alt",
    }, // add an appropriate image to your public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // data-theme="light"
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Script
          src="https://kit.fontawesome.com/5d4d1c054f.js"
          crossOrigin="anonymous"
        ></Script>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="min-h-screen bg-base-200 px-2">
              <NavBar />
              {children}
            </div>
            {/* <Footer /> */}
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
