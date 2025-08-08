import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "NextJS Shadcn Template",
  description: "Ready-to-use NextJS template with Shadcn/ui, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
