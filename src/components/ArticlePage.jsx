import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { specificArticle } from "../utils/api"
import ArticlePageView from "./ArticlePageView"
import ArticleCommentSection from "./ArticleCommentSection"

export default function ArticlePage() {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [articleData, setArticleData]= useState()

    const location = useLocation()
    const {from} =location.state
    //console.log(location.state.article_id)

    useEffect(()=>{
        setIsError(false)
        setIsLoading(true)

        specificArticle(location.state.article_id)
        .then((response)=>{
            setArticleData(response.article)
            setIsLoading(false)
        })
        .catch((error)=>{
            setIsError(true)
        })


    },[])

    if(isError) return <h1>Error</h1>
    if(isLoading) return <h1>Loading...</h1>

  return (
    <>
    <ArticlePageView articleData={articleData}/>
    <ArticleCommentSection article_id={location.state.article_id}/>
    </>
  )
}
