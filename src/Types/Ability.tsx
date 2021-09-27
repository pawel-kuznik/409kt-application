import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// this allows the atom to be persisted in local storage
const { persistAtom } = recoilPersist();

// export the atom for storing all possible abilities
export const abilitiesState = atom<Ability[]>({
    key: 'abilitylist',
    default: [],
    effects_UNSTABLE: [ persistAtom ]
});

/**
 *  An interface describing an ability data. These are abilities that
 *  you can see on data cards under units and weapons stats. We use same
 *  structure to describe both cases.
 */
export default interface Ability {
    id:string;
    name:string;
    rules:string;
    faction:string;
};
