import Home from "./components/pages/home/Home";
import Bollywood from "./components/pages/bollywood/Bollywood"
import SinglePost from "./components/pages/singlepost/SinglePost";
import React from 'react';
import { BrowserRouter, Route ,Routes} from "react-router-dom"

function App() {
  return (
  <>
    <Home />
     {/* <Bollywood /> */}
     {/* <SinglePost /> */}

    {/* <BrowserRouter>
    <Routes>
     <Route path="/" component={Home} />
     <Route path="/bollywood" component={Bollywood} />
     <Route path="/singlepost" component={SinglePost} />
    </Routes>
    </BrowserRouter> */}
  </>
  ) ;
}

export default App;
