import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.reddit.com/' })

export const fetchHomeData = () => API.get('/.json')

export const fetchSearchedData = searchTerm =>
  API.get(`/search.json?${searchTerm}`)

export const fetchCommunityData = community => API.get(`/r/${community}/.json`)

export const fetchPostData = (community, postPath) =>
  API.get(
    'https://www.reddit.com/r/Cricket/comments/yjrp9s/daily_general_discussion_and_match_links_thread/.json'
  )

export const fetchUserData = user => API.get(`/user/${user}/.json`)

// Fetching popular posts on Reddit
export const fetchPopularPostsData = param => API.get(`/hot.json?${param}`);

// /r/${community}/comments/${postPath}/.json
