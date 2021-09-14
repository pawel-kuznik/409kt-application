import { ReactNodeArray } from "react";
import styled from "styled-components";
import { Orientation } from "../../Types/Orientation";

export interface PrintPageProps {
    children:ReactNodeArray
};

const Page = styled.div`
    display:    grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows:     auto auto;
    justify-content:        space-around;
    align-content:          space-around;

    width:      297mm;
    height:     210mm;

    border:     1px dashed gray;
`;

const EmptySpot = styled.div`
    background:     gray;

    width:  100px;
    height: 100px;
`;

export default function PrintPage(props:PrintPageProps) {

    const items = [...props.children];

    for (let i = items.length; i < 6; i++) items.push((<EmptySpot className="card"/>));

    return (
        <Page className="cards-portrait">
            {items}
        </Page>
    );
};