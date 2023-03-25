import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import About from './Pages/About/About';
import News from './Pages/News/News';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path='/new' element={<News></News>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
      </Routes>
      

      <Footer></Footer>
    </div>
  );
}

export default App;
