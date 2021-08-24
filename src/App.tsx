import { RecoilRoot } from 'recoil';
import './App.css';
import StratagemSection from './Data/StratagemsSection';

function App() {
  return (
    <RecoilRoot>
      <div>
        <StratagemSection/>
      </div>
    </RecoilRoot>
  );
}

export default App;
