import { useEffect, useState } from "react"
import { updateArticleVotes } from "../utils/api"
export default function ArticleVoting({article_id, votes}) {
    const [isUpVoted, setIsUpVoted]= useState(false)
    const [isDownVoted, setIsDownVoted]= useState(false)
    const [currentVotes, setCurrentVotes]= useState(0)

    useEffect(()=>{
        setCurrentVotes(votes)
    },[])

    function upVoting(){
        console.log("UP VOTING")
        console.log(currentVotes, "PAGE STATE")
        if(!isUpVoted && !isDownVoted){
            setIsUpVoted(true)
            setCurrentVotes(votes +1)
            updateArticleVotes( article_id, 1)
        }
        else if(isUpVoted && !isDownVoted){
            setIsUpVoted(false)
            setCurrentVotes(votes )
            updateArticleVotes( article_id, -1)
        }
        else if(!isUpVoted && isDownVoted){
            setIsUpVoted(true)
            setIsDownVoted(false)
            setCurrentVotes(votes +1)
            updateArticleVotes( article_id, 2)
        }
    }
    function downVoting(){
        console.log("DOWN VOTING")
        console.log(currentVotes, "PAGE STATE")
        if(!isUpVoted && !isDownVoted){
            setIsDownVoted(true)
            setCurrentVotes(votes -1)
            updateArticleVotes(article_id, -1)
        }
        else if(isUpVoted && !isDownVoted){
            setIsUpVoted(false)
            setIsDownVoted(true)
            setCurrentVotes(votes -1)
            updateArticleVotes( article_id, -2)
        }
        else if(!isUpVoted && isDownVoted){
            setIsDownVoted(false)
            setCurrentVotes(votes )
            updateArticleVotes( article_id, 1)
        }
    }

    
  return (
    <>
    <p>Votes: {currentVotes}</p>
    <button id="upVote" onClick={upVoting}>Up Vote</button>
    <button id="downVote" onClick={downVoting}>Down Vote</button>
    </>
  )
}
