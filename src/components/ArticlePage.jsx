import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { specificArticle } from "../utils/api"
import ArticlePageView from "./ArticlePageView"
import ArticleCommentSection from "./ArticleCommentSection"
import ArticleVoting from "./ArticleVoting"

export default function ArticlePage() {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [articleData, setArticleData]= useState()
    const {article_id}= useParams()


    useEffect(()=>{
        setIsError(false)
        setIsLoading(true)

        specificArticle(article_id)
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
    <ArticleVoting article_id={article_id} votes={articleData.votes}/>
    <ArticleCommentSection article_id={article_id} comment_count={articleData.comment_count}/>
    </>
  )
}
