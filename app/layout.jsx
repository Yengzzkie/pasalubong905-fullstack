import "./globals.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pasalubong 905",
  description: "Filipino Restaurant",
  keywords: "filipino, restaurant, asian food, durham, oshawa, GTA, pasalubong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
