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
