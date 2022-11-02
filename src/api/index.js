import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.reddit.com/' })

export const fetchHomeData = () => API.get('/.json')

export const fetchSearchedData = searchTerm =>
  API.get(`/search.json?q=${searchTerm}`)

export const fetchCommunityData = community => API.get(`/r/${community}/.json`)

export const fetchPostData = (community, postPath) =>
  API.get(
    'https://www.reddit.com/r/Cricket/comments/yjrp9s/daily_general_discussion_and_match_links_thread/.json'
  )

// /r/${community}/comments/${postPath}/.json
