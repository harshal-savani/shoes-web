import React, { useContext } from "react"
import myContext from "../../context/data/myContext"
import Layout from "../layout/Layout"

const ReturnPolicyTermsSheet = () => {
  const context = useContext(myContext)
  const { mode } = context

  return (
    <Layout>
      <div
        className={`container mx-auto px-8 py-10 ${
          mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } border border-gray-300 rounded-lg shadow-lg overflow-hidden`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Return Policy</h1>
        <div className="mx-auto max-w-2xl">
          <p className={`text-lg mb-6 ${mode === "dark" ? "text-grey" : ""}`}>
            Please review the following terms and conditions regarding returns
            at OurStore. If you have any questions or concerns, please don't
            hesitate to{" "}
            <a
              href="mailto:support@shoesers.com"
              className={
                mode === "dark"
                  ? "text-blue-300 underline"
                  : "text-blue-500 underline"
              }
            >
              contact us
            </a>
            .
          </p>
          <div
            className={`bg-gray-100 rounded-lg p-6 mb-6 shadow-md ${
              mode === "dark" ? "text-black" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">1. Return Period</h2>
            <p className="mb-4">
              You may return most new, unopened items within 30 days of delivery
              for a full refund. We'll also pay the return shipping costs if the
              return is a result of our error (you received an incorrect or
              defective item, etc.).
            </p>
          </div>
          <div
            className={`bg-gray-100 rounded-lg p-6 mb-6 shadow-md ${
              mode === "dark" ? "text-black" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">
              2. Non-Returnable Items
            </h2>
            <ul className="list-disc pl-6 mb-2">
              <li>Custom or personalized orders</li>
              <li>Perishable products (like food or flowers)</li>
              <li>Intimate items (for health/hygiene reasons)</li>
            </ul>
            <p className="text-sm text-gray-600">
              Please note: Certain items are non-returnable due to health,
              safety, and hygiene reasons.
            </p>
          </div>
          <div
            className={`bg-gray-100 rounded-lg p-6 mb-6 shadow-md ${
              mode === "dark" ? "text-black" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">3. Return Process</h2>
            <ol className="list-decimal pl-6 mb-2">
              <li>Contact Customer Service to initiate your return.</li>
              <li>Package your item securely and ship it back to us.</li>
              <li>Receive your refund once the return is processed.</li>
            </ol>
          </div>
          <div
            className={`bg-gray-100 rounded-lg p-6 mb-6 shadow-md ${
              mode === "dark" ? "text-black" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">4. Refund Method</h2>
            <p className="mb-4">
              Refunds are processed back to the original payment method used for
              the purchase.
            </p>
          </div>
          <div
            className={`bg-gray-100 rounded-lg p-6 mb-6 shadow-md ${
              mode === "dark" ? "text-black" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
            <p className={`mb-2 ${mode === "dark" ? "text-black" : ""}`}>
              If you have any questions about our Return Policy, please{" "}
              <a
                href="mailto:support@ourstore.com"
                className={
                  mode === "dark"
                    ? "text-blue-300 underline"
                    : "text-blue-500 underline"
                }
              >
                contact us
              </a>{" "}
              at support@shoesers.com.
            </p>
            <p className="text-sm text-gray-600">
              Our customer support team is available to assist you with any
              inquiries or concerns regarding returns.
            </p>
          </div>
          <p
            className={`text-sm text-gray-600 mt-4 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            These terms are subject to change without notice. Last updated:
            [Date].
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ReturnPolicyTermsSheet
