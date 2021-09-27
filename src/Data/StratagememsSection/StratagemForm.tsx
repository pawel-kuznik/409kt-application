/**
 *  This is a component to define a new stratagem.
 * 
 *  @todo add indication about the faction.
 *  @todo add indication about the phase
 *  @todo add indication about the keywords it affects (this might be useful when we have list building)
 */

import { v4 as uuid } from 'uuid';
import { FormEvent } from "react";
import useStratagemsList from "../../Hooks/useStratagemsList";
import Stratagem from "../../Types/Stratagem";
import FormRow from "../../Widgets/FormRow";

/**
 *  The properties for the component.
 */
export interface StratagemFormProps {

    // the stratagem to edit
    stratagem?:Stratagem|null;

    // the callback called when form submits
    onSubmit?:() => void;

    // the cancel callback
    onCancel?:() => void;
};

/**
 *  The componenet to define a stratagem.
 */
export default function StratagemForm(props:StratagemFormProps) {

    const { push, remove } = useStratagemsList(); 

    // an event handler function to handle the submit of the form
    function handleSubmit(event:FormEvent) : void {

        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));

        if (!data.id) data.id = uuid();

        push(data as unknown as Stratagem);

        if (props.onSubmit) props.onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" defaultValue={props.stratagem?.id || ''}/>
            <FormRow label="name">
                <input type="text" name="name" defaultValue={props.stratagem?.id || ''}/>
            </FormRow>
            <FormRow label="cost">
                <input type="text" name="cost"  list="suggestions-stratagem-cost" defaultValue={props.stratagem?.cost || ''}/>
            </FormRow>
            <FormRow label="faction">
                <input type="text" name="faction" list="suggestions-factions" defaultValue={props.stratagem?.faction || ''}/>
            </FormRow>
            <FormRow label="type">
                <input type="text" name="type" list="suggestions-stratagem-type" defaultValue={props.stratagem?.type || ''}/>
            </FormRow>
            <FormRow label="fluff">
                <textarea name="fluff" defaultValue={props.stratagem?.fluff || ''}/>
            </FormRow>
            <FormRow label="rules">
                <textarea name="rules" defaultValue={props.stratagem?.rules || ''}/>
            </FormRow>
            <div>
                <button type="submit">Save</button>
                {props.stratagem?.id && <button type="button" onClick={() => { 
                    
                    if (!props.stratagem) return;

                    remove(props.stratagem.id);

                    if (props.onSubmit) props.onSubmit();
                }}>Remove</button> }
                {props.onCancel && <button type="button" onClick={props.onCancel}>Cancel</button>} 
            </div>
        </form>
    );
};