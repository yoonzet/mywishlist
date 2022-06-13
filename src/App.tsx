import { RecoilRoot } from 'recoil';
import WishList from './pages/WishList';
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <RecoilRoot> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='wishlist' element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
