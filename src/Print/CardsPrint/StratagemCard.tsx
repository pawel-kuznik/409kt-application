import { Card } from "./Card";
import Stratagem from "../../Types/Stratagem";

export interface StratagemCardProps {
    stratagem:Stratagem
};

export default function StratagemCard(props:StratagemCardProps) {
    return (
        <Card size="poker">
            {props.stratagem.name}
        </Card>
    );
};