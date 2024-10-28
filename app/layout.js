import { Outfit } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import "@liveblocks/react-ui/styles.css";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Colabio",
  description: "Where Collaboration thrives",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
