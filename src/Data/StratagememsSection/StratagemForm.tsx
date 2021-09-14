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
import { selectedStratagem } from "../StratagemsSection";
import { useRecoilState } from 'recoil';

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

    const [ selected, setSelected ] = useRecoilState<Stratagem|null>(selectedStratagem);

    // an event handler function to handle the submit of the form
    function handleSubmit(event:FormEvent) : void {

        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));

        if (!data.id) data.id = uuid();

        push(data as unknown as Stratagem);

        setSelected(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" defaultValue={selected ? selected.id : ''}/>
            <FormRow label="name">
                <input type="text" name="name" defaultValue={selected ? selected.name : ''}/>
            </FormRow>
            <FormRow label="cost">
                <input type="text" name="cost"  list="suggestions-stratagem-cost" defaultValue={selected ? selected.cost : ''}/>
            </FormRow>
            <FormRow label="faction">
                <input type="text" name="faction" list="suggestions-factions" defaultValue={selected ? selected.faction : ''}/>
            </FormRow>
            <FormRow label="type">
                <input type="text" name="type" list="suggestions-stratagem-type" defaultValue={selected ? selected.type : ''}/>
            </FormRow>
            <FormRow label="fluff">
                <textarea name="fluff" defaultValue={selected ? selected.fluff : ''}/>
            </FormRow>
            <FormRow label="rules">
                <textarea name="rules" defaultValue={selected ? selected.rules : ''}/>
            </FormRow>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
};