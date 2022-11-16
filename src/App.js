import Home from "./components/pages/home/Home";
import Bollywood from "./components/pages/bollywood/Bollywood"
import SinglePost from "./components/pages/singlepost/SinglePost";
import React from 'react';
import { HashRouter, Route ,Routes} from "react-router-dom"


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
      <Routes> 
        <Route path="/" element={< Home />} />
        <Route path="/bollywood" element={< Bollywood />} />
        <Route path="/singlepost" element={< SinglePost />} />
      </Routes>
    </HashRouter>
  
  ) ;
}

export default App;
