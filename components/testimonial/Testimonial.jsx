import React, { useContext } from "react"
import myContext from "../../context/data/myContext"

export default function TestiMonial() {
  const context = useContext(myContext)
  const { mode } = context
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  harshal savani
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://webknudocs.vercel.app/logo/react.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
