import Editable from "../Types/Editable";
import Stratagem from "../Types/Stratagem";

export default function useEditableStratagem(id:string) : Editable<Stratagem> {

    return new Editable<Stratagem>();
};