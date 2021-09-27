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
 *  An interface describing a Stratagem data. Stratagems are special abilities
 *  that each faction has + some general use ones. Player has to play a cost
 *  in CP to make an effect in the game.
 */
export default interface Stratagem {
    id:string;
    name:string;
    cost:string;
    faction:string;
    type:string;
    fluff:string;
    rules:string;
};
