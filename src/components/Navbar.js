import React, { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import { useSelector } from 'react-redux'

const pages = [
    { name: "Men's Clothing", href: '/mens-clothing', fontIcon: ['fas', 'male'] },
    { name: "Women's Clothing", href: '/womens-clothing', fontIcon: ['fas', 'female']  },
    { name: "Electronics", href: '/electronics', fontIcon: ['fas', 'tv']  },
    { name: "Jewellery", href: '/jewelery', fontIcon: ['fas', 'gem']  },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [isShoppingCart, setIsShoppingCart] = useState(false)
  const { cart } = useSelector(state => state.userCart)

  const noCartItems = cart.length

  const showShoppingCart = () => {
    setIsShoppingCart(true)
  }

  const closeShoppingCart = () => {
    setIsShoppingCart(false)
  }

  return (
    <div className="bg-white sticky z-40 w-full mb-2 top-0 right-0 left-0">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 mx-4 my-6">
                <Link
                  to="/" className="flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <img
                    className="h-16 w-auto logo"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                <span className="block mx-1 font-extrabold text-2xl appName">FakeStore</span>
                </Link>
              </div>

              {/* Links */}

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.href}
                      className="-m p-2 block font-medium text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      <FontAwesomeIcon icon={page.fontIcon} className="mx-2 text-xl"/>
                      {console.log(page.fontIcon)}
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create account
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 left-0 border-t border-gray-200 py-10 px-4 space-y-6 text-center">
                <a href="#" className="text-3xl mx-2">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href="#" className="text-3xl mx-2">
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                </a>
                <a href="#" className="text-3xl mx-2">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
                <a href="#" className="text-3xl mx-2">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a href="#" className="text-3xl mx-2">
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                </a>
                <div>
                  Made With
                  <FontAwesomeIcon icon={['fas', 'heart']} className="mx-1 text-red-600" />,
                  Am.Chris_KE
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link
                  to="/"
                  className="flex items-center"
                >
                  <img
                    className="h-8 w-auto logo"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                <span className="block mx-1 font-extrabold text-xl appName">FakeStore</span>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  { isShoppingCart && <ShoppingCart closeCart={closeShoppingCart} /> }
                  <button
                    className="group -m-2 p-2 flex items-center"
                    onClick={showShoppingCart}
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  <span className="ml-2 text-sm font-extrabold text-green-700 group-hover:text-green-800"> { noCartItems } </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
