import { Card } from "./Card";
import Stratagem from "../../Types/Stratagem";

export interface StratagemCardProps {
    stratagem:Stratagem
};

export default function StratagemCard(props:StratagemCardProps) {
    return (
        <Card>
            {props.stratagem.name}
        </Card>
    );
};