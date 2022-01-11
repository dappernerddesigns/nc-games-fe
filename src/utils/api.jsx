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

export const AllUsers = () => {
  return gamesApi.get(`/users`).then((res) => {
    return res.data.users
  })
}

export const ReviewByID = (reviewID) => {
  return gamesApi.get(`/reviews/${reviewID}`).then((res) => {
    console.log(res.data.review[0])
    return res.data.review[0]
  })
}
