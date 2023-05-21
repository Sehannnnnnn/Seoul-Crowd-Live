import './App.css';
import React, {useEffect} from 'react';
import Splash from './page/Splash';
import Main from './page/Main';
import List from './page/List';
import About from './page/About';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPlaceList } from './reducer/placeReducer'
import { fetchLiveData } from './reducer/liveDataReducer';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaceList())
    dispatch(fetchLiveData())
  },[dispatch]);

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Splash/>} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/list" element={<List/>} />
        <Route path="/about/:id" element={<About/>} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
