import axios from 'axios'

const api =axios.create({baseURL:"https://back-end-project-ajfq.onrender.com/api"})

export const getAllArticles= (sortBy="created_at", orderBy="DESC") => {
    return api.get(`/articles?sort_by=${sortBy}&order=${orderBy}`)
        .then((response)=>{
            return response.data
        })
}
export const specificArticle= (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then((response)=>{
            return response.data
        })
}

export const commentSection= (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then((response)=>{
            return response.data
        })
}

export const updateArticleVotes= ( article_id, voteChange) => {
    return api.patch(`/articles/${article_id}`, {incVotes: voteChange})
        .then((response)=>{
            return response.data
        })
}

export const postComment= ( article_id, user, commentText) => {
    return api.post(`/articles/${article_id}/comments`, {username: user, body: commentText})
        .then((response)=>{
            return response.data
        })
}

export const deleteComment= ( comment_id) => {
    return api.delete(`/comments/${comment_id}`)
        .then((response)=>{
            return response.data
        })
}

export const getAllTopics= () => {
    return api.get(`/topics`)
        .then((response)=>{
            return response.data
        })
}