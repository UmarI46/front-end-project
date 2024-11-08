import { useEffect, useState } from "react"
import { getAllTopics } from "../utils/api"
import TopicsView from "./TopicsView"
import { getAllArticles } from "../utils/api"

export default function Topics() {
  const [isLoading, setIsLoading]= useState(true)
  const [isError, setIsError]= useState(false)

  const [allTopics, setAllTopics]= useState(getAllTopics)
  const [allArticles, setAllArticles]= useState(getAllArticles)
  
  useEffect(()=>{
    setIsLoading(true)
    setIsError(false)

    getAllTopics()
    .then((response)=>{
      setAllTopics(response.topics)
    })
    .catch((error)=>{
      setIsError(true)
    })

    getAllArticles()
      .then((response)=>{
        setIsLoading(false)
        setAllArticles(response.articles)
      })
      .catch((error)=>{
        console.log("TEST TOPIC")
        setIsError(true)
      })

  },[])

  if (isError) {
    return <h1>Error Topic Not Found</h1>;
  }
  if (isLoading) {
    console.log("TEST LOADING TOPIC")
    return <h1>Loading...</h1>;
  }

  return (
    <TopicsView allTopics={allTopics} allArticles={allArticles}/>
  )
}
