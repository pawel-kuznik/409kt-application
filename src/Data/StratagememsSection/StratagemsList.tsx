import useStratagemsList from "../../Hooks/useStratagemsList";
import StratagemItem from "./StratagemItem";

/**
 *  A component to show/manage a list of stratagems.
 */
export default function StratagemsList() {

    const { list } = useStratagemsList();

    return (
        <div>
            {list.map(s => <StratagemItem key={s.id} stratagem={s}/>)}
        </div>
    );
};