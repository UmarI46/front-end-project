import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function TopicsArticleView({allTopics, allArticles}) {
    const {topic}=useParams()
    const [isValidTopic, setIsValidTopic]= useState(false)
    useEffect(()=>{

      allTopics.map((topicData) => {
        if(topicData.slug===topic && !isValidTopic){
          setIsValidTopic(true)}
        })
      },[isValidTopic])
      let i=0
    return (
        <div>
        { 
        allTopics.map((topicData) => {
          i++
            if(topicData.slug===topic){
          return(
            <div className="topicListing" key={topicData.slug}>
              <h1 id="topicName">{topicData.slug}</h1>
              <h2 id="topicDescription">{topicData.description}</h2>
              {allArticles.map((article)=>{
                  if(article.topic===topicData.slug){
                  return (
                    <div className="homeListing">
                    <div className="box" key={article.article_id}>
                        <Link to= {`/articles/${article.article_id}`} >{article.title} </Link>
                        <br/>
                        <img className="imgHomeList" src={article.article_img_url}/>
                        <p>{article.author}</p>
                        <p>votes: {article.votes}</p>
                    </div>
                    </div>
                )
                }
            })}
            </div>
            
          )}
          else if(topicData.slug!==topic && i===allTopics.length && isValidTopic===false){
            return (<h1>Error 404: Topic Not Found</h1>)
          }
        })}
        </div>
      )
}
