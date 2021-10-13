import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProductList({ products }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-300 rounded p-2 shadow-xl">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-pink-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0 font-extrabold" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-blue-900 mx-2">{product.price}</p>
              </div>
              <button className="bg-pink-500 w-full text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150" type="button"
              >
                <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
