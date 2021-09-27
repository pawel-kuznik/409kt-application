import useStratagemsList from "../../Hooks/useStratagemsList";
import NewStratagem from "./NewStratagem";
import StratagemItem from "./StratagemItem";

/**
 *  A component to show/manage a list of stratagems.
 */
export default function StratagemsList() {

    const { list } = useStratagemsList();

    return (
        <div>
            <NewStratagem/>
            {list.map(s => <StratagemItem key={s.id} stratagem={s}/>)}
        </div>
    );
};