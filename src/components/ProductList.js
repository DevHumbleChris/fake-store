import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCartCheckOut } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

function ProductList({ products }) {
  const [isAddToCart, setIsAddToCart] = useState(false)
  const [currentCart, setCurrentCart] = useState([])
  const dispatch = useDispatch()
  const addToCart = (product) => {
    setIsAddToCart(true)
    dispatch(addToCartCheckOut(product))
    setCurrentCart([...currentCart, product.id])
  }
  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-300 rounded p-2 shadow-xl">
              <div className="max-w-xl max-h-xs">
                <img src={product.image} alt={product.title} className="rounded-xl object-contain" />
                <div className="p-2">
                  <p className="text-sm font-extrabold">
                    { product.title }
                  </p>
                  <span className="text-sm text-gray-500">
                    { product.category }
                  </span>
                  <span className="float-right text-blue-900">
                    $ { product.price }
                  </span>
                </div>
              </div>
              {
                isAddToCart ?
                currentCart === product.id ?
                <div className="flex justify-between items-center">
                  <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                  </button>
                  <p>
                    { 5 }
                  </p>
                  <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    <FontAwesomeIcon icon={['fas', 'minus']} />
                  </button>
                </div>
                :
                <button
                  className="bg-pink-500 w-full text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                  type="button"
                  onClick={() => addToCart(product)}
                  >
                  <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
                  </button>
                :
                <button
                  className="bg-pink-500 w-full text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                  type="button"
                  onClick={() => addToCart(product)}
                  >
                  <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
                  </button>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
