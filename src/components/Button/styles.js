import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

const SIZES = {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
}

const getFontSize = props => {
    const size = SIZES[props.size]
    if (!size) {
        console.warn(`[Button Styled Component] this size is not correct. Use ${Object.keys(SIZES).join(', ')}`)
        return SIZES.small;
    }
    return size;
}

export const Link = styled(LinkWouter)`
    align-self: center;
    background-color: #EFEFEF;
    border-radius: 6px;
    border: 2px solid darkgray;
    color: black;
    cursor: pointer;
    font-family: inherit;
    font-size: ${getFontSize};
    padding: 10px;

    &:hover {
        background-color: var(--brand-color-1);
        border: 2px solid #7c1ca3;
    }
`