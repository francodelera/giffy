import React from 'react'

import {
    CategoryTitle,
    CategoryList,
    CategoryListItem,
    CategoryLink
} from './styles';

export default function Category({ name, options = [], ...props }) {
    return <section>
        <CategoryTitle>{name}</CategoryTitle>
        <CategoryList>
            {options.map((singleOption, index) => (
                <CategoryListItem key={singleOption} index={index}>
                    <CategoryLink index={index}
                        to={`/search/${singleOption}`}
                    >
                        {singleOption}
                    </CategoryLink>
                </CategoryListItem>
            ))}
        </CategoryList>
    </section>
}