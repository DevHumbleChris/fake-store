import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RemoveModal from './RemoveModal'
import { Link } from 'react-router-dom'
import { openCartWrapper, removeFromCart, increaseQuantity } from '../features/cartSlice'
import NoCartImage from '../assets/images/cart_empty.png'

function ShoppingCart() {
  const { cart, cartWrapper } = useSelector(state => state.userCart)
  const [ modalOpen, setModalOpen ] = useState(false)
  const dispatch = useDispatch()
  const cartNoItems = cart.length

  const subTotal = cart.reduce((total, product) => {
    return total + product.price
  }, 0)

  const closeShoppingCart = () => {
    dispatch(openCartWrapper())
  }

  const removeFromCart = (id) => {
    setModalOpen(true)
  }

  const closeCartRemoveModal = () => {
    setModalOpen(false)
  }

  const removeItemFromCart = (id) => {
    const newCart = cart.filter(product => product.id !== id)
    newCart.map(product => {
      setTimeout(() => {
        dispatch(removeFromCart(product))
      }, 300)
    })
  }

  const incBtnProductQuantity = (productId) => {
    dispatch(increaseQuantity(productId))
  }

  return (
    <Transition.Root show={cartWrapper} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 overflow-hidden" onClose={() => dispatch(openCartWrapper())}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping cart
                        <span className="text-blue-700 mx-2 font-semibold">
                          (Cart Items {cartNoItems})
                        </span>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={closeShoppingCart}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      {
                        cartNoItems <= 0 ?
                        <div className="p-2">
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
                              <button
                                type="button"
                                className="text-indigo-600 font-medium hover:text-indigo-500 mx-1"
                                onClick={() => dispatch(openCartWrapper())}
                              >
                                Start Shopping<span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                        :
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product) => {
                              return(
                                <>
                                  {/*{ modalOpen && <RemoveModal key={product.id} modalOpen={modalOpen} closeCartRemoveModal={closeCartRemoveModal} product={product} /> } */}
                                  <li key={product.id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                      <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-center object-cover"
                                      />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{product.title}</a>
                                          </h3>
                                          <p className="ml-4">{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                      </div>
                                      <div className="flex-1 flex items-end justify-between text-sm">
                                        <div className="flex justify-between items-center">
                                          <button
                                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                                            type="button"
                                            >
                                            <FontAwesomeIcon icon={['fas', 'minus']} />
                                          </button>
                                          <p className="text-gray-500 mx-2">
                                            Qty
                                            <span className="mx-2 text-blue-900 font-extrabold">
                                              {product.quantity}
                                            </span>
                                          </p>
                                          <button
                                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150 cursor-pointer"
                                            type="button"
                                            onClick={() => incBtnProductQuantity(product.id)}
                                            >
                                            <FontAwesomeIcon icon={['fas', 'plus']} />
                                          </button>
                                        </div>
                                        <div className="flex">
                                          <button
                                            type="button" className="font-medium text-red-600 hover:text-indigo-500"
                                            onClick={() => removeItemFromCart(product.id)}
                                          >
                                            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </>
                              )
                            } )}
                          </ul>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p className="text-green-900 font-extrabold">$ {subTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link
                        to="/checkout"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={closeShoppingCart}
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => dispatch(openCartWrapper())}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShoppingCart
