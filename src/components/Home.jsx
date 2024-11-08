import { getAllArticles } from "../utils/api"
import { useState, useEffect, useContext } from "react"
import HomeListing from "./HomeListing"
import ArticleSortBy from "./ArticleSortBy"
import { sortByContext } from "../contexts/SortByProvider"
import { orderByContext } from "../contexts/OrderByProvider"

export default function Home() {
  const [isLoading, setIsLoading]= useState(true)
  const [isError, setIsError]= useState(false)

  const [allArticles, setAllArticles]= useState(getAllArticles)
  const {setPickSort}= useContext(sortByContext)
  const {pickSort}= useContext(sortByContext)
  const {setPickOrder}= useContext(orderByContext)
  const {pickOrder}= useContext(orderByContext)

  useEffect(()=>{
    setIsError(false)
    setIsLoading(true)
    getAllArticles(pickSort, pickOrder)
      .then((response)=>{
        setAllArticles(response.articles )
        setIsLoading(false)
      })
      .catch((error)=>{
        setIsError(true)
        setTimeout(()=>{setPickOrder("DESC")
          setPickSort("created_at")},3000)
      })

  },[pickSort, pickOrder])

  if (isError) {
    return <h1>Error No Items Found.<br/>Sending you to Home Page.</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ArticleSortBy allArticles={allArticles}/>
      <HomeListing allArticles={allArticles}/>
    </>
  )
}
