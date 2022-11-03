import logo from './logo.svg'
import { createContext, useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { styleActions } from './store/styleSlice'

const ThemeContext = createContext(null)

function App () {
  // fetching theme state from redux-store

  const style = useSelector(state => state.style)
  const [theme, setTheme] = useState('')

  // here we are accessing the style property of state
  // To set the style of theme we can dispatch change action at toggleTheme component
  useEffect(() => {
    setTheme(style.theme)
  }, [style,])

  // const toggleTheme = () => {
  //   setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  // }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App' id={theme}>
        <NavBar />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
