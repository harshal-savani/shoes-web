import React, { useContext } from "react"
import Layout from "../../components/layout/Layout"
import myContext from "../../context/data/myContext"
import HeroSection from "../../components/heroSection/HeroSection"
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/productCard/ProductCard"
import TestiMonial from "../../components/testimonial/TestiMonial"
import Track from "../../components/track/Track"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)

  return (
    <>
      <div>
        <Layout>
          <HeroSection />
          <Filter />
          <ProductCard />
          <Track />
          <TestiMonial />
        </Layout>
      </div>
    </>
  )
}
