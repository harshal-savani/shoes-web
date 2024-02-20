import React, { Children } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/Order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Nopage from "./pages/nopage/Nopage"
import MyState from "./context/data/myState"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import AddProduct from "./pages/admin/page/AddProduct"
import UpdateProduct from "./pages/admin/page/UpdateProduct"
import ReturnPolicy from "./components/returnPolicy/ReturnPolicy"
import AboutPage from "./components/aboutPage/AboutPage"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            />

            <Route path="/*" element={<Nopage />} />
            <Route path="/returnpolicy" element={<ReturnPolicy />} />
            <Route path="aboutPage" element={<AboutPage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </>
  )
}

export default App

//user protected route

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user")
  if (user) {
    return children
  } else {
    return <Navigate to={"/login"} />
  }
}

//admin protected route

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"))

  if (admin && admin.user.email === "husavani5@gmail.com") {
    return children
  } else {
    return <Navigate to={"/login"} />
  }
}
