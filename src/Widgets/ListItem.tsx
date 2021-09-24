/**
 *  A widget to display a list item with controls.
 */

import { ReactNode } from "react";
import styled from "styled-components";

export interface ListItemProps {
    
    // A callback executed when user wants to edit the list item. 
    // When this callback in not specified no edit button will render.
    onEdit?:() => void;

    // A callback exuected when user wants to remove the list item.
    // When this callback is not specificed no delete button will render.
    onDelete?:() => void;

    // Is the list item current selected is some way?
    selected?:boolean;

    // The contents of the list item widget
    children:ReactNode;
}

// the frame element of the list item
const ListItemFrame = styled.div`
    margin:         .5em 0;
    background:     var(--color-blending-medium);
    padding:        .5em;

    &.selected
    {
        background:     var(--color-blending-selected);
    }

    & > aside
    {
        float:          right;
        display:        grid;
        gap:            1ch;
        grid-auto-flow: column;

        & > button
        {
            min-width:      6rem;
        }
    }
`;

export default function ListItem(props:ListItemProps) {

    const css = [ ];
    if (props.selected) css.push('selected');

    return (<ListItemFrame className={css.join(' ')}>
        {props.children}
        <aside>
            {props.onEdit && (<button onClick={props.onEdit}>Edit</button>)}
            {props.onDelete && (<button onClick={props.onDelete}>Remove</button>)}
        </aside>
    </ListItemFrame>);
};