import Stratagem from "../Types/Stratagem";

export interface StratagemItemProps {
    stratagem:Stratagem
};

export default function StratagemItem(props:StratagemItemProps) {
    return (
        <div>
            {props.stratagem.name}
        </div>
    );
};