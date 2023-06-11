import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Breakfast from './components/Breakfast/Breakfast';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Dinner></Dinner>
        <Routes>
          {/* <Route element={Header} path='/header'></Route> */}
          <Route element={Lunch} path='/lunch'></Route>
          <Route element={Dinner} path='/dinner'></Route>
          <Route element={Breakfast} path='/breakfast'></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
