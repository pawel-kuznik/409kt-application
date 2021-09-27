import React, { useState } from "react";
import StratagemForm from "./StratagemForm";

export default function NewStratagem() {

    const [ toCreate, setToCreate ] = useState(false);
  
    return (
        <React.Fragment>
            {!toCreate && 
                <div>
                    <button onClick={() => { setToCreate(true); }}>Create new</button>
                </div> 
            }
            {toCreate && <StratagemForm onSubmit={() => void setToCreate(false) } onCancel={() => void setToCreate(false) }/>}
        </React.Fragment>
    );
};