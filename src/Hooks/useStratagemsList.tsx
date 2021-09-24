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

        // are we dealing with an update? then we need to find it and update the data at the point
        if (item.id) {

            const idx = list.findIndex(s => s.id === item.id);
            const current = [...list];

            if (idx === -1) current.push(item);
            else current.splice(idx, 1, item);

            setList(current);
        }
        
        // if we deal with a completely new stratagem then we can just push it to the end.
        else setList([...list, item]);

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