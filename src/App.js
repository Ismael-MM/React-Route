import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Inicio from './components/inicio';
import Contacto from './components/contacto';
import Blog from './components/blog';
import { Route, Routes } from 'react-router-dom';
import Loyaout from './components/loyaout';
import NotFound from './components/notFound';
import BlogCharacter from './components/blogCharacter';
import { createContext, useState } from 'react';

export const CharacterContext = createContext();



function App() {

  const [characterList, setCharactersList] = useState(null);

  return (
    <div className="App">
      <CharacterContext.Provider value={{characterList, setCharactersList}}>
        <Navbar></Navbar>
        <h1>App</h1>
        <Routes>
          <Route path='/' element={<Loyaout />}>
            <Route element={<Inicio />} path='/'></Route>
            <Route element={<Contacto />} path='/contacto'></Route>
            <Route element={<Blog />} path='/blog'></Route>
            <Route element={<BlogCharacter />} path='/blog/:id'></Route>
            <Route element={<NotFound />} path='*'></Route>
          </Route>
        </Routes>
      </CharacterContext.Provider>
    </div>
  );
}

export default App;
