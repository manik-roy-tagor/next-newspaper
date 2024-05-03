import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader 
      color="#266969"
      height={3}
      Speed={200}
      />
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
