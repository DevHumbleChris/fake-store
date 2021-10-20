import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NoCartImage from '../assets/images/cart_empty.png'

export default function Checkout() {
  const { cart } = useSelector(state => state.userCart)
  const subtotal = cart.reduce((total, product) => {
    return total + product.price
  }, 0)
  const tax = Math.floor((subtotal * 10) / 100)
  const total = subtotal - tax
  return (
    <React.Fragment>
    <div class="mt-4">
          <h1 class="flex items-center justify-center font-bold text-blue-600 text-3xl uppercase">Checkout
          </h1>
      </div>
      {
        cart.length <= 0 ?
        <div className="mx-auto max-w-lg px-2 mt-2">
          <img src={NoCartImage} alt="cart_empty" className="mx-auto lg:w-48 md:w-48" />
          <div className="p-3 my-2 text-center">
            <h4 className="text-2xl font-extrabold">
              Cart is
              <span className="text-red-600 mx-1">
                Empty.
              </span>
            </h4>
            <p className="p-2">
              Looks like you have no items in your shopping cart.
            </p>
            <p className="p-2">
              Click here to
              <Link
                to="/"
                className="text-indigo-600 font-medium hover:text-indigo-500 mx-1"
              >
                Start Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
        :
        <div className="container p-8 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-2 md:pt-0 2xl:ps-2">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                  {cart.map(product => {
                                    return (
                                      <>
                                        <div className="flex space-x-4">
                                            <div>
                                                <img src={product.image} alt="image"
                                                    className="w-60" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold">
                                                  {product.title}
                                                </h2>
                                                <p className="text-sm">
                                                  {product.category}
                                                </p>
                                                <span className="text-red-600">
                                                  $ {product.price}
                                                </span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                      </>
                                    )
                                  })}
                                </div>
                            </div>
                            <div className="flex p-2 mt-4">
                                <h2 className="text-xl font-bold">Calculations</h2>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2 text-blue-600">$ {subtotal}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span className="ml-2 text-red-700">$ {tax}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2 text-green-700 flex-end">$ {total}</span></div>
                        </div>
                    </div>
                    <h2 className="mb-4 my-4 font-bold text-2xl ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" method="post" action>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                        First Name
                                    </label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Last Name
                                    </label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">
                                      Email
                                    </label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      }
    </React.Fragment>
  )
}
