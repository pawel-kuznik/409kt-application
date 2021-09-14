import { RecoilRoot } from 'recoil';
import './App.css';
import './CommonStyles/Card.css';
import StratagemSection from './Data/StratagemsSection';
import CardsPrint from './Print/CardsPrint';

function App() {
  return (
    <RecoilRoot>
      <div>
        <StratagemSection/>
        <CardsPrint/>
      </div>
    </RecoilRoot>
  );
}

export default App;
