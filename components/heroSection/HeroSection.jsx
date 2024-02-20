import React from "react"
import Heroshoes from "../../assets/Heroshoes.png"
import "../heroSection/HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="inner-container">
        <div className="flex-container">
          <div className="left-column">
            <h1 className="heading">Nike Air Max Pre-Day</h1>
            <p className="paragraph">
              Taking the classic look of heritage Nike Running into a new realm,
              the Nike Air Max Pre-Day brings you a fast-paced look that's ready
              for today's world. A true nod to the past with a design made from
              at least 20% recycled material by weight.
            </p>
            <div className="button-container">
              <button className="button">Add to Bag</button>
            </div>
          </div>
          <div className="right-column">
            <img className="image" src={Heroshoes} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
