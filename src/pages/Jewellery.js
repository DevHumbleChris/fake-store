import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import LoadingSpinner from '../components/LoadingSpinner'

function Jewellery() {
  const url = 'https://fakestoreapi.com/products/category/jewelery'
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getProductsFromAPI(url) {
    try {
      const response = await axios.get(url)
      const responseData = response.data
      setAllProducts(responseData)
      if(responseData) {
        setTimeout(() => {
          setIsLoading(false)
        }, 3500)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getProductsFromAPI(url)
  }, [url])

  return (
    <main>
      {
        isLoading ?
        <LoadingSpinner className="mx-2" />
        :
        <ProductList products={allProducts} />
      }
    </main>
  )
}

export default Jewellery
