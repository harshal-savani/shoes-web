import React from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

export default function Layout({ children }) {
  const contentClassName =
    typeof children === "boolean" ? children.toString() : ""

  return (
    <>
      <Navbar />
      <div className={`content ${contentClassName}`}>{children}</div>
      <Footer />
    </>
  )
}
