import { Link } from "react-router-dom"
export default function TopicsView({allTopics, allArticles}) {
  return (
    <div>
        <p id="topicListHeader">List of All Topics:</p>
        {allTopics.map((topic)=>{
            return(
                <Link className="topicLink" to= {`/topics/${topic.slug}`} >-&gt; {topic.slug} </Link>
            )
        })}
    {allTopics.map((topic) => {
      return(
        <div className="topicListing" key={topic.slug}>
            
          <h1 id="topicName">{topic.slug}</h1>
          <h2 id="topicDescription">{topic.description}</h2>
          {allArticles.map((article)=>{
              if(article.topic===topic.slug){
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
        
      )
    })}
    </div>
  )
}
