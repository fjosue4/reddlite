import logo from './logo.svg';
import { createContext, useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="App" id={theme}>
      <NavBar />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
