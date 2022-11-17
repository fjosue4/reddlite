import logo from './logo.svg'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import Trending from './components/Trending/Trending'
import PopularPosts from './components/PopularPosts/PopularPosts'
import BestCommunites from './components/BestCommunites/BestCommunites'
import ModalPreview from './components/ModalPreview/ModalPreview'

function App () {
  // fetching theme state from redux-store

  const style = useSelector(state => state.style);
  const modalState = useSelector(state => state.modal);
  const [currentModal, setCurrentModal] = useState(false);
  const [theme, setTheme] = useState('');

  // here we are accessing the style property of state
  // To set the style of theme we can dispatch change action at toggleTheme component
  useEffect(() => {
    setTheme(style.theme)
  }, [style])

  console.log(currentModal)
  useEffect(() => {
    setCurrentModal(modalState.showModal) 
    console.log(modalState.showModal)
  }, [modalState])

  return (
    <div className='App' id={theme}>
      <NavBar theme={theme} />
      <div className='app-body'>
        <Trending />
        <BestCommunites />
        <PopularPosts />
        {currentModal && <ModalPreview />}
      </div>
    </div>
  )
}

export default App
