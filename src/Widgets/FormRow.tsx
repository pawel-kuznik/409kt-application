import { ReactNode } from "react";

export interface FormRowProps {

    // the label associated with the content of the form row.
    label:string;

    // the actual children of the form row
    children:ReactNode;
};

export default function FormRow(props:FormRowProps) {

    return (
        <div className="formRow">
            <div>
                <label>{props.label}</label>
            </div> 
            <div>
                {props.children}
            </div>
        </div>
    );
};