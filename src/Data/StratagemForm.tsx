/**
 *  This is a component to define a new stratagem.
 * 
 *  @todo add indication about the faction.
 *  @todo add indication about the phase
 *  @todo add indication about the keywords it affects (this might be useful when we have list building)
 */

import { FormEvent } from "react";
import FormRow from "../Widgets/FormRow";

export default function StragagemForm() {

    function handleSubmit(event:FormEvent) : void {

        event.preventDefault();


    };

    return (
        <form onSubmit={handleSubmit}>
            <FormRow label="name">
                <input type="text" name="name"/>
            </FormRow>
            <FormRow label="cost">
                <input type="text" name="cost"/>
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