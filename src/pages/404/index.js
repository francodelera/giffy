/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsFrag React.Fragment */

import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useRandomGif from "hooks/useRandomGif";
import { Helmet } from "react-helmet";
import { css, jsx } from '@emotion/react';
import React from "react";

const containerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
`
const span404Styles = css({
    "font-size": "5rem",
    "&:hover": {
        transform: "scale(1.2)"
    }
})

const spanStyles = css`
    font-size: 1.5rem;
`
const gifStyles = css`
    width: 80%;
    align-self: center;
    justify-content: center;
    padding: 40px;
`

export default function ErrorPage() {
    const { loading, gif } = useRandomGif({ keyword: 'Nope', limit: 500 });

    if (loading) return <Spinner />
    else {
        return (
            <React.Fragment>
                <Helmet>
                    <title>404 Error | Giffy </title>
                </Helmet>
                <div css={containerStyles}>
                    <span css={spanStyles}> Oops... </span>
                    <span css={span404Styles}> 404 </span>
                    <span css={spanStyles}> not found </span>
                </div>
                <div css={gifStyles}>
                    {
                        gif !== undefined ?
                            <Gif
                                url={gif.url}
                                title={gif.title}
                                id={gif.id}
                            />
                            : <h1>Loading gif...</h1>
                    }
                </div>
            </React.Fragment>
        )
    }
}