import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// css
import "./search.css"
// Components.
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'

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
    <section className='Search_Container_page'>

      <BreadCrumb />
    
    </section>
  )
}

export default Search