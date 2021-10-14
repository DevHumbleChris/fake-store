import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import LoadingSpinner from '../components/LoadingSpinner'

function MensClothing() {
  const url = "https://fakestoreapi.com/products/category/men's%20clothing"
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getProductsFromAPI(url) {
    try {
      const response = await axios.get(url)
      const responseData = response.data
      setAllProducts(responseData)
      console.log(responseData)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getProductsFromAPI(url)
  }, [url])

  if(allProducts) {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }

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

export default MensClothing
