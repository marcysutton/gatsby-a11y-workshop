import React from "react"
import { css } from "@emotion/core"

const styles = css`
    .routeSkipHeading {
        position: relative;
    }
    .routeSkipLink {
        display: inline-block;
        margin-left: -0.75em;
        opacity: 0;
        position: absolute;
        text-decoration: none;
    }
    .routeSkipLink:before {
        content: '⇽';
        display: block;
    }
    .routeSkipLink:focus,
    .routeSkipLink:hover {
        opacity: 1;
    }
`
const RouteHeading = ({children}) => {
    return (
        <>
        </>
    )
}
export default RouteHeading
