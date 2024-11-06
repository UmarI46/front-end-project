import { useEffect, useState } from "react"
import { commentSection } from "../utils/api"
import ArticleCommentSectionView from "./ArticleCommentSectionView"


export default function ArticleCommentSection({article_id, comment_count}) {
    const [isError, setIsError]= useState(false)
    const [isLoading, setIsLoading]= useState(true)
    const [commentSectionData, setCommentSectionData]= useState()

    useEffect(()=>{
        setIsError(false)
        setIsLoading(true)

        commentSection(article_id)
        .then((response)=>{
            setCommentSectionData(response.comments)
            setIsLoading(false)
        })
        .catch((error)=>{
            setIsError(true)
        })
    },[])

    if(isError) return <h1>Error</h1>
    if(isLoading)return <h1>Loading...</h1>

  return (
    <ArticleCommentSectionView commentSection={commentSectionData} comment_count={comment_count}/>
  )
}
