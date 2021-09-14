import { useRecoilState } from "recoil";
import useStratagemsList from "../../Hooks/useStratagemsList";
import Stratagem from "../../Types/Stratagem";
import { selectedStratagem } from "../StratagemsSection";

// properties for the component
export interface StratagemItemProps {

    // the actual stratagem instance to manage
    stratagem:Stratagem;
};

/**
 *  A component to manage a single stratagem item.
 */
export default function StratagemItem(props:StratagemItemProps) {

    const { remove } = useStratagemsList();
    const [ selected, setSelected ] = useRecoilState<Stratagem|null>(selectedStratagem);

    // @todo handle selected state

    return (
        <div>
            {props.stratagem.name}
            <button onClick={() => setSelected(props.stratagem)}>Edit</button>
            <button onClick={() => remove(props.stratagem)}>Remove</button>
        </div>
    );
};