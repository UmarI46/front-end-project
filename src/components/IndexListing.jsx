export default function IndexListing({allArticles}) {
  return (
    <div className="indexListing">
        {allArticles.map((article)=>{
            return (
                <div className="box" key={article.article_id}>
                    <p>{article.title}</p>
                    <img className="imgIndexList" src={article.article_img_url}/>
                    <p>{article.author}</p>
                    <p>votes: {article.votes}</p>
                </div>

            )
                
            
        })}
    </div>
  )
}
