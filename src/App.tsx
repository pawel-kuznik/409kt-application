import { RecoilRoot } from 'recoil';
import './App.css';
import StragagemForm from './Data/StratagemForm';
import StratagemsList from './Data/StratagemsList';

function App() {
  return (
    <RecoilRoot>
      <div>
        <StratagemsList/>
        <StragagemForm/>
      </div>
    </RecoilRoot>
  );
}

export default App;
