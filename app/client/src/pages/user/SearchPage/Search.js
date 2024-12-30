import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// css
import "./search.css"
// Components.
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'
import { ENDPOINT } from '../../../api/Endpoint'
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios'
import { toast } from "react-hot-toast"
const Search = () => {
  const { query } = useParams()
  const [result, setResult] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  // useEffect.
  useEffect(() => {
    if (!query) {
      navigate('/404')
    }

    const SearchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${ENDPOINT}/products/${query}`)
        console.log(response.data.products)
        setResult(response.data.products)
        setLoading(false)
      } catch (error) {
        console.error(error)
        toast.error("Internal server error")

      }

    }
    SearchData()

  }, [query, navigate])

  return (
    <section className='Search_Container_page'>

      <BreadCrumb />
      <div>
        {
          loading ? ( 
            <div   style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress />
            </div>
          ) : (
            <div className="search_results">
              <h1>Search results for: {query}</h1>

            </div>
          )
        }
      </div>
    </section>
  )
}

export default Search