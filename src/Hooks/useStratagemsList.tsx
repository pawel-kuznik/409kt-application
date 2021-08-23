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

        const idx = typeof(item) === 'string' ? list.findIndex(s => s.id === item) : list.indexOf(item);

        if (idx === undefined || idx < 0) return;

        setList(list.splice(idx, 1));
    }, [ list, setList ]);

    // remove the list + helper functions
    return { list, push, remove };
};