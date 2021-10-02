import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

const SIZES = {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
}

export const Link = styled(LinkWouter)`
    align-self: center;
    background-color: #EFEFEF;
    border-radius: 6px;
    border: 2px solid darkgray;
    color: black;
    cursor: pointer;
    font-family: inherit;
    font-size: ${props => SIZES[props.size]};
    padding: 10px;

    &:hover {
        background-color: var(--brand-color-1);
        border: 2px solid #7c1ca3;
    }
`