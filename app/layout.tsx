
import type { Metadata } from "next"
import { Inter, REM } from "next/font/google"
import { ReactNode } from "react"

import NavBar from "@/components/NavBar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const remFont = REM({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rem",
})

export const metadata: Metadata = {
  title: "Jose Solorio - Software Engineer",
  description: "Full-stack software engineer based in Reno, NV."
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en" className={`${remFont.variable} min-h-screen`}>
    <body className={inter.className}>
      <NavBar />
      {children}
    </body>
  </html>
)

export default RootLayout
