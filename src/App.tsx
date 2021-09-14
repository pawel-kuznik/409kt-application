import { RecoilRoot } from 'recoil';
import './App.css';
import './CommonStyles/Card.css';
import StratagemSection from './Data/StratagemsSection';
import CardsPrint from './Print/CardsPrint';

function App() {
  return (
    <RecoilRoot>
      <datalist id="suggestions-factions">
        <option value="Necrons"/>
        <option value="Adeptus Astartes"/>
      </datalist>
      <datalist id="suggestions-stratagem-type">
        <option value="Requisition"/>
        <option value="Strategic Ploy"/>
        <option value="Epic Deed"/>
        <option value="Wargear"/>
        <option value="Battle Tactic"/>
      </datalist>
      <datalist id="suggestions-stratagem-cost">
        <option value="1CP"/>
        <option value="2CP"/>
        <option value="3CP"/>
      </datalist>
      <div>
        <StratagemSection/>
        <CardsPrint/>
      </div>
    </RecoilRoot>
  );
}

export default App;
