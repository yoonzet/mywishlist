import { RecoilRoot } from 'recoil';
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import WishListPage from './pages/WishListPage';
function App() {
  return (
    <>
    <RecoilRoot> 
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wishlist/:id'element={<WishListPage/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>

  );
}

export default App;
