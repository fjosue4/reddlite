import { useEffect } from 'react'
import logo from '../../img/logo.svg'
import logoWhite from '../../img/logo-white.svg';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeData } from '../../store/home/homeSlice'

import { getPostData } from '../../store/post/postSlice'
import { getCommunityData } from '../../store/community/communitySlice'
import { getUserData } from '../../store/user/userSlice'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function NavBar (props) {
  const homeData = useSelector(state => state.home);
  const { pending, loading, data } = homeData;
  const dispatch = useDispatch();
  const currTheme = props.theme;

  // using useEffect to fetch Home data by dispatching action getHomeData()
  useEffect(() => {
    dispatch(getHomeData())
  }, [dispatch, getHomeData])
  console.log(homeData)

  // Fetching post data just to test ... Got it!
  const post = useSelector(state => state.post)
  useEffect(() => {
    dispatch(
      getPostData(
        'Cricket',
        'yjy0lk/match_thread_35th_match_group_2_bangladesh_vs/'
      )
    )
  }, [dispatch, getPostData])
  console.log(post)

  // Fetching community data just to test
  const community = useSelector(state => state.community)
  useEffect(() => {
    dispatch(getCommunityData('Cricket'))
  }, [dispatch, getCommunityData])
  console.log(community)

  // Fetching community data just to test
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getUserData('CricketMatchBot'))
  }, [dispatch, getUserData])
  console.log(user)

  return (
    <div className='nav-bar'>
      <div className='logo'>
        <img src={currTheme === 'light' ? logo : logoWhite} alt='reddlite logo' />
      </div>
      <SearchBar />
      <ThemeToggle />
    </div>
  )
}

export default NavBar
