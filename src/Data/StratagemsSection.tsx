import styled from "styled-components";
import StratagemsList from "./StratagememsSection/StratagemsList";

const StratagemsSectionFrame = styled.section`

    display:    grid;
    gap:        1rem;
`;

/**
 *  A component to manage all registered stratagems.
 */
export default function StratagemSection() {
    return (
        <StratagemsSectionFrame>
            <StratagemsList/>
        </StratagemsSectionFrame>
    );
};