import type { Metadata } from "next"
import localFont from "next/font/local"

import { APP_TAGLINE, APP_TITLE } from "@/constants/app"
import "./globals.css"

const gtWalsheim = localFont({
  variable: "--assets/gt-walsheim-pro",
  src: [
    {
      path: "../assets/gt-walsheim-pro-font/GTWalsheimPro-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../assets/gt-walsheim-pro-font/GTWalsheimPro-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../assets/gt-walsheim-pro-font/GTWalsheimPro-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ]
})

export const metadata: Metadata = {
  title: `${APP_TITLE} - ${APP_TAGLINE}`,
  description: APP_TAGLINE
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gtWalsheim.className}>{children}</body>
    </html>
  )
}
