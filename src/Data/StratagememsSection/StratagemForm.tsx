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
    stratagem?:Stratagem;
};

/**
 *  The componenet to define a stratagem.
 */
export default function StratagemForm(props:StratagemFormProps) {

    const { push } = useStratagemsList(); 

    // an event handler function to handle the submit of the form
    function handleSubmit(event:FormEvent) : void {

        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));

        data.id = uuid();

        push(data as unknown as Stratagem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormRow label="name">
                <input type="text" name="name"/>
            </FormRow>
            <FormRow label="cost">
                <input type="text" name="cost"  list="suggestions-stratagem-cost"/>
            </FormRow>
            <FormRow label="faction">
                <input type="text" name="faction" list="suggestions-factions"/>
            </FormRow>
            <FormRow label="type">
                <input type="text" name="type" list="suggestions-stratagem-type"/>
            </FormRow>
            <FormRow label="fluff">
                <textarea name="fluff"/>
            </FormRow>
            <FormRow label="rules">
                <textarea name="rules"/>
            </FormRow>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
};