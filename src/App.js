import Home from "./components/pages/home/Home";
import Bollywood from "./components/pages/bollywood/Bollywood"
import SinglePost from "./components/pages/singlepost/SinglePost";
import React from 'react';
import { BrowserRouter, Route ,Routes} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/bollywood" element={< Bollywood />} />
        <Route exact path="/singlepost" element={< SinglePost />} />
      </Routes> 
    </BrowserRouter>
  
  ) ;
}

export default App;
