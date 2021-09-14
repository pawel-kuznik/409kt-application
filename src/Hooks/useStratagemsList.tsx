import { useCallback } from "react";
import { useRecoilState } from "recoil";
import Stratagem, { stratagemState } from "../Types/Stratagem";

export default function useStratagemsList() {

    // get the current value of the list.
    const [ list, setList ] = useRecoilState<Stratagem[]>(stratagemState);

    /**
     *  A special function to push a new stratagem.
     */
    const push = useCallback((item:Stratagem) => {

        setList([...list, item]);

    }, [ list, setList ]);

    /**
     *  A special function to remove a stratagem.
     */
    const remove = useCallback((item:string|Stratagem) => {

        setList(list.filter(typeof(item) === 'string' ? (s => s.id !== item) : (s => s !== item)));
    }, [ list, setList ]);

    // remove the list + helper functions
    return { list, push, remove };
};