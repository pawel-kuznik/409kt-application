import React, { useState } from "react";
import { useRecoilState } from "recoil";
import useStratagemsList from "../../Hooks/useStratagemsList";
import Stratagem from "../../Types/Stratagem";
import ListItem from "../../Widgets/ListItem";
import StratagemForm from "./StratagemForm";

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
    const [ toEdit, setToEdit ] = useState<Stratagem|null>(null);

    return (
        <React.Fragment>
            {!toEdit && 
                <ListItem onEdit={() => void setToEdit(props.stratagem) } onDelete={() => remove(props.stratagem)}>
                    {props.stratagem.name}
                </ListItem>
            }
            {!!toEdit && <StratagemForm stratagem={toEdit} onSubmit={() => void setToEdit(null) } onCancel={() => void setToEdit(null) } />}
        </React.Fragment>
    );
};