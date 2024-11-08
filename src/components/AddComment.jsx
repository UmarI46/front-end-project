import { useContext, useEffect, useState } from "react"
import { postComment } from "../utils/api"
import { usernameContext } from "../contexts/UsernameProvider"
import DisplayNewComment from "./DisplayNewComment"
export default function AddComment({article_id}) {
    const [comment, setComment]= useState("")
    const [commentView, setCommentView]= useState("")
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError]= useState(false)
    const {username}= useContext(usernameContext)
    const noText= document.getElementById("warningComment")

    const addComment = (event) =>{
        event.preventDefault()
        if (comment!== ""){
            noText.style.display="none"
            setIsLoading(true)
            postComment(article_id, username, comment)
            .then((response)=>{
                setCommentView(response.newComment)
            })
            .catch((error)=>{
                setIsError(true)
            })
            setIsLoading(false)
        }
        else{
            noText.style.display="block"
        }
    }

    if(isError) return <h1>Error</h1>
    if(isLoading) return <h1>Loading...</h1>

    return (
          <>
            <form id="newComment">
                <label>
                    <input onChange={(e)=>{setComment(e.target.value)}} type="text" name="comment" id="typeComment" placeholder="Comment Here..." required></input>
                </label>
                <br/>
                <button onClick={addComment} id="test">Comment!</button>
            </form>
            <h2>Comment Preview</h2>
            <h3 id="warningComment" style={{display:"none", color:"red"}}>Nothing to comment...</h3>
            <DisplayNewComment comment={commentView} />
          </>
    )
  }
  