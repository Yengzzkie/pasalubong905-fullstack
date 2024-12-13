import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pasalubong 905",
  description: "Filipino Restaurant",
  keywords: "filipino, restaurant, asian food, durham, oshawa, GTA, pasalubong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--primary-light)]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}