import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'highlight.js/styles/github.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Conditionnel from './pages/Conditionnel';
import NotFound from './pages/NotFound';
import Presentation from './pages/Presentation';
import Presentation2 from './pages/Presentation2';
import Props from './pages/Props';
import Reactivity from './pages/Reactivity';



function App() {
  return (
  <div id='App'>
    <BrowserRouter>
      <NavBar/>
      <Header/>

      <Routes>
        <Route path="/" element={<Presentation/>} />
        <Route path='/presentation' element={<Presentation2/>} />
        <Route path='/affichage-conditionnel' element={<Conditionnel/>} />
        <Route path="/props" element={<Props/>} />
        <Route path="/reactivity" element={<Reactivity/>} />
        <Route path='*' element={<NotFound/>} />
       {/* <Routes path='*' element={<Redirect to="/404"/>} /> */}
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
