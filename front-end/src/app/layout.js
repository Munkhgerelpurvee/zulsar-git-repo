import { Inter } from "next/font/google";
import "./globals.css";
import { CategoryContextProvider } from "@/components/utils/context/categoryContext";
import { RecordContextProvider } from "@/components/utils/context/recordContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RecordContextProvider>
        <CategoryContextProvider>
          <body className={inter.className}>{children}</body>
        </CategoryContextProvider>
      </RecordContextProvider>
    </html>
  );
}
