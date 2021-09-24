import { useRecoilState } from "recoil";
import useStratagemsList from "../../Hooks/useStratagemsList";
import Stratagem from "../../Types/Stratagem";
import ListItem from "../../Widgets/ListItem";
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
        <ListItem onEdit={() => setSelected(props.stratagem)} onDelete={() => remove(props.stratagem)}>
            {props.stratagem.name}
        </ListItem>
    );
};