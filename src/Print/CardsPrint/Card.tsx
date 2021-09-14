import { ReactNode } from "react";
import { Orientation } from "../../Types/Orientation";

export interface CardProps {
    size:'poker'|'stats',
    children:ReactNode,
    orientation?:Orientation
};

export function Card(props:CardProps) {

    const css = [ 'card' ];
    css.push(`card-${props.size}`);

    if (props.orientation) css.push(props.orientation == Orientation.landscape ? 'card-landscape' : 'card-portrait');

    return (<div className={css.join(' ')}>
        {props.children}
    </div>);
};
