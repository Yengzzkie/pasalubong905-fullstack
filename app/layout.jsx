import "./globals.css";
import Navigation from "./components/Navbar";

export const metadata = {
  title: "Pasalubong 905",
  description: "Filipino Restaurant",
  keywords: "filipino, restaurant, asian food, durham, oshawa, GTA, pasalubong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--primary-light)] overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
