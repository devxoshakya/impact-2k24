import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
