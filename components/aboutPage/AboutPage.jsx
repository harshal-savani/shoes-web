import React from "react"

const AboutPage = () => {
  return (
    <div className="container mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        About Our Shoe Store
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src="/images/about.jpg"
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            At Our Shoe Store, we're passionate about footwear and helping our
            customers find the perfect pair of shoes for every occasion.
          </p>
          <p className="text-lg mb-4">
            Our mission is to provide a wide selection of high-quality shoes,
            from casual sneakers to elegant dress shoes, at affordable prices.
          </p>
          <p className="text-lg mb-4">
            We carefully curate our collection to offer the latest trends and
            styles, ensuring that our customers stay fashionable and
            comfortable.
          </p>
          <p className="text-lg mb-4">
            Whether you're looking for athletic shoes for your next workout or
            stylish boots for a night out, Our Shoe Store has something for
            everyone.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing Our Shoe Store. We look forward to serving
            you and helping you step out in style!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
