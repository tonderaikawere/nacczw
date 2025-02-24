import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "NACC - National Association of Christian Churches",
    template: "%s | NACC",
  },
  description:
    "A united Church Community that meaningfully contributes to the spiritual and social-economic growth of Zimbabwe.",
  keywords: ["church", "christian", "zimbabwe", "nacc", "religion", "faith", "community"],
  authors: [{ name: "NACC" }],
  creator: "NACC",
  publisher: "NACC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}



import './globals.css'