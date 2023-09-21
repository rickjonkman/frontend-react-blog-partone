import './App.css'
import Navigation from './components/navigation/Navigation.jsx';
import Blogpost from "./pages/blogpost/Blogpost.jsx";
import Blogposts from './pages/blogposts/Blogposts.jsx';
import New from './pages/new/New.jsx';
import Home from './pages/home/Home.jsx';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
          <Navigation/>

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/new" element={<New/>} />
              <Route path="/blogposts" element={<Blogposts/>} />
              <Route path="/blogpost/:blogId" element={<Blogpost/>} />
          </Routes>
      </>

  )
}

export default App;
