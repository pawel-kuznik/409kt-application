import Stratagem from "../../Types/Stratagem";

// properties for the component
export interface StratagemItemProps {

    // the actual stratagem instance to manage
    stratagem:Stratagem;

    // a callback triggered when user wants to remove a stratagem
    onRemove?:() => void;
};

/**
 *  A component to manage a single stratagem item.
 */
export default function StratagemItem(props:StratagemItemProps) {
    return (
        <div>
            {props.stratagem.name}
            <button onClick={() => props.onRemove && props.onRemove()}>Remove</button>
        </div>
    );
};