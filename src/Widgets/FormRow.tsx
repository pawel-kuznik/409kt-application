import { ReactNode } from "react";
import styled, { isStyledComponent } from "styled-components";

export interface FormRowProps {

    // the label associated with the content of the form row.
    label:string;

    // the actual children of the form row
    children:ReactNode;
};

const FormRowFrame = styled.div`
    width:      100%;
    max-width:  40rem;
`;

const FormRowContent = styled.div`
    input, textarea {
        width:  100%;

        border:         none;
        border-bottom:  1px solid black;
    }

    input:focus, textarea:focus
    {
        outline:        none;
        border-bottom-color: cyan;
    }
`;

/**
 *  The component used to show a row of a form.
 */
export default function FormRow(props:FormRowProps) {

    return (
        <FormRowFrame>
            <div>
                <label>{props.label}</label>
            </div> 
            <FormRowContent>
                {props.children}
            </FormRowContent>
        </FormRowFrame>
    );
};