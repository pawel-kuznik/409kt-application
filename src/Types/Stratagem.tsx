import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// this allows us to define persistance in local storage for our recoil data.
const { persistAtom } = recoilPersist();

// export the atom for storing all possible stratagems
export const stratagemState = atom<Stratagem[]>({
    key: 'stratagemlist',
    default: [],
    effects_UNSTABLE: [ persistAtom ]
});

/**
 *  A type of 
 */
export default interface Stratagem {
    id:string;
    name:string;
    cost:string;
    fluff:string;
    rules:string;
};
