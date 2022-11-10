import logo from './logo.svg'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import Trending from './components/Trending/Trending'
import BestCommunites from './components/TopCommunites/BestCommunites'

function App () {
  // fetching theme state from redux-store

  const style = useSelector(state => state.style)
  const [theme, setTheme] = useState('')

  // here we are accessing the style property of state
  // To set the style of theme we can dispatch change action at toggleTheme component
  useEffect(() => {
    setTheme(style.theme)
  }, [style])

  // const toggleTheme = () => {
  //   setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  // }
  return (
    <div className='App' id={theme}>
      <NavBar theme={theme} />
      <div className='app-body'>
        <Trending />
        <BestCommunites />
      </div>
    </div>
  )
}

export default App
