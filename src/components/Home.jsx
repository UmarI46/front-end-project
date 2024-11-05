import { getAllArticles } from "../utils/api"
import { useState, useEffect } from "react"
import HomeListing from "./HomeListing"
export default function Home() {
  const [isLoading, setIsLoading]= useState(true)
  const [isError, setIsError]= useState(false)

  const [allArticles, setAllArticles]= useState(getAllArticles)

  useEffect(()=>{
    setIsError(false)
    setIsLoading(true)
    getAllArticles()
      .then((response)=>{
        setAllArticles(response.articles )
        setIsLoading(false)
      })
      .catch((error)=>{
        setIsError(true)
      })

  },[])

  if (isError) {
    return <h1>Error No Items Found</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <HomeListing allArticles={allArticles}/>
    </>
  )
}
