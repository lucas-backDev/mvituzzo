import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway, Ubuntu, Rubik } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
})
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: "Art Paisage | M Vituzzo",
  description:
    "Em breve em Santana - São José dos Campos. Onde a arte emoldura a paisagem e a paisagem inspira a arte.",
  keywords: "Art Paisage, M Vituzzo, Santana, São José dos Campos, apartamento, lançamento",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${raleway.variable} ${ubuntu.variable} ${rubik.variable}`}>{children}</body>
    </html>
  )
}
