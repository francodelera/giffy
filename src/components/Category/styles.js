import styled from "@emotion/styled";
import { Link } from "wouter";
import { bps } from 'styles';

export const CategoryTitle = styled.h3`
    color: white;
    font-weight: bold;
    text-align: center;

    ${bps.greaterThanMobile} {
        text-align: right;
    }
`
export const CategoryList = styled.ul`
    list-style-position: inside;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: center;

    ${bps.greaterThanMobile} {
        justify-content: flex-end;
    }
`
export const CategoryListItem = styled.li`
    list-style: none;
    padding: 0.5rem;
    margin: 0.2rem;
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    border-radius: 6px;

    ${props => {
        const color = props.index % 2 === 0 ? 'var(--brand-color-1)' : 'var(--brand-color-2)'
        return `border: 1px solid ${color}`
    }}
`

export const CategoryLink = styled(Link)`
    color: white;
    font-size: 1rem;
    transition: color ease-in 0.1s;

    ${props => {
        const color = props.index % 2 !== 0 ? 'var(--brand-color-1)' : 'var(--brand-color-2)'
        return `
        :hover {
            color: ${color}
        }`
    }}
`
