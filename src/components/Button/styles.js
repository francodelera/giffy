import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

export const Link = styled(LinkWouter)`
    align-self: center;
    background-color: #EFEFEF;
    border-radius: 6px;
    border: 2px solid darkgray;
    color: black;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    padding: 10px;

    &:hover {
        background-color: #8c55a2;
        border: 2px solid #7c1ca3;
    }
`