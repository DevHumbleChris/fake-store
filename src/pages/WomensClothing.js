import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'

function WomensClothing() {
  const url = "https://fakestoreapi.com/products/category/women's%20clothing"
  const [allProducts, setAllProducts] = useState([])

  async function getProductsFromAPI(url) {
    try {
      const response = await axios.get(url)
      const responseData = response.data
      setAllProducts(responseData)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getProductsFromAPI(url)
  }, [url])

  return (
    <main>
      <ProductList products={allProducts} />
    </main>
  )
}

export default WomensClothing
