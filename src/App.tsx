import { atom, RecoilRoot } from 'recoil';
import './App.css';
import StragagemForm from './Data/StratagemForm';
import Stratagem from './Types/Stratagem';

export const stratagemsState = atom<Array<Stratagem>>({
  key: 'stratagemsState',
  default: []
});

function App() {
  return (
    <RecoilRoot>
      <div>
        <StragagemForm/>
      </div>
    </RecoilRoot>
  );
}

export default App;
