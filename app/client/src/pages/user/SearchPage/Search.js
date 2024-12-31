import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// css
import "./search.css"
// Components.
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'
import ProductCard from '../../../components/Card/ProductCard'


const Search = () => {
  const { query } = useParams()
  const navigate = useNavigate()

  // useEffect.
  useEffect(() => {
    if (!query) {
      navigate('/404')
    } else {
      console.log(query)
    }
  }, [query, navigate])

  return (
    <>
      <BreadCrumb />
    </>
  )
}

export default Search