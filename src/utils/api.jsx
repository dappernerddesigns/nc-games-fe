const axios = require('axios')

const gamesApi = axios.create({
  baseURL: 'https://dappernerddesigns-nc-games.herokuapp.com/api',
})

export const AllCategories = () => {
  return gamesApi.get(`/categories`).then((res) => {
    return res.data.categories
  })
}

export const AllReviews = () => {
  return gamesApi.get(`/reviews`).then((res) => {
    return res.data.reviews
  })
}

export const AllReviewsByQuery = (query) => {
  return gamesApi.get(`/reviews${query}`).then((res) => {
    return res.data.reviews
  })
}

export const AllUsers = () => {
  return gamesApi.get(`/users`).then((res) => {
    return res.data.users
  })
}

export const ReviewByID = (reviewID) => {
  return gamesApi.get(`/reviews/${reviewID}`).then((res) => {
    return res.data.review[0]
  })
}

export const CommentsByReview = (reviewID) => {
  return gamesApi.get(`/reviews/${reviewID}/comments`).then((res) => {
    return res.data.comments
  })
}

export const ReviewVotes = (reviewID, num) => {
  return gamesApi
    .patch(`/reviews/${reviewID}`, { inc_votes: num })
    .then((res) => {
      return res.data.reviews[0].votes
    })
}

export const AddComment = (reviewID, comment) => {
  return gamesApi
    .post(`/reviews/${reviewID}/comments`, {
      username: 'jessjelly',
      body: comment,
    })
    .then((res) => {
      return res.data.comments
    })
    .catch((err) => {
      console.dir(err)
    })
}

export const RemoveComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data
  })
}
