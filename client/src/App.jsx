
import Topjs from './component/Topjs'
import Home from './pages/home/home';
import Single from './pages/single/Single';
import Write from './pages/write/write';
import Settings from './pages/setting/setting';
import Login from './pages/login/login';
import Register from './pages/register/register';
import About from './pages/about/about'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
function App() {
  const user=false;
  return (
    <Router>
      <Topjs />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/register" element={user ? <Home/>:<Register/>} />
         <Route path="/single" element={<Single/>} />
         <Route path="/login" element={user ? <Home/>:<Login/>} />
         <Route path="/setting" element={<Settings/>} />
         <Route path="/write" element={<Write/>} />
         <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
  );
}

export default App;
