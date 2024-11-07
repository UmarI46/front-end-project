import { useEffect, useState } from "react"
import { getAllTopics } from "../utils/api"
import TopicsView from "./TopicsView"
import { getAllArticles } from "../utils/api"
import TopicsArticleView from "./TopicsArticleView"

export default function IndivisualTopic() {
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
    <TopicsArticleView allTopics={allTopics} allArticles={allArticles}/>
  )
}
