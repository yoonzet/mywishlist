import { RecoilRoot } from 'recoil';
import WishList from './components/WishList';

function App() {
  return (
    <RecoilRoot> 
      <div className="App">
        <WishList/>
      </div>
    </RecoilRoot>
  );
}

export default App;
