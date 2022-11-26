import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.reddit.com/' })

export const fetchHomeData = () => API.get('/.json')

export const fetchSearchedData = (searchTerm) =>
  API.get(`/search.json?${searchTerm}`)

export const fetchCommunityData = (community) =>
  API.get(`/r/${community}/.json`)

export const fetchPostData = (url) => API.get(`${url}.json`)


export const fetchSubredditsList = () => API.get(`subreddits/.json`)

export const fetchUserData = (user) => API.get(`/user/${user}/.json`)

// Fetching popular posts on Reddit
export const fetchPopularPostsData = (param) => API.get(`/hot.json?${param}`)

// /r/${community}/comments/${postPath}/.json
