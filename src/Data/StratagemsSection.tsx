import { atom } from "recoil";
import styled from "styled-components";
import Stratagem from "../Types/Stratagem";
import StratagemForm from "./StratagememsSection/StratagemForm";
import StratagemsList from "./StratagememsSection/StratagemsList";

export const selectedStratagem = atom<Stratagem|null>({
    key: 'selectedStratagem',
    default: null
})

const StratagemsSectionFrame = styled.section`

    display:    grid;
    gap:        1rem;
    grid-template-columns: auto auto;
`;

/**
 *  A component to wrap up a whole section.
 */
export default function StratagemSection() {
    return (
        <StratagemsSectionFrame>
            <StratagemsList/>
            <StratagemForm/>
        </StratagemsSectionFrame>
    );
};