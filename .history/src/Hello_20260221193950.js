import React from "react"


export const Hello = () => {
    return (
        <div>
            <h1> Hello world </h1>
        </div>
    )
}

export const Hello2 = () => {
    return React.createElement("div", null, React.createElement("h1", null, " Hello world 2 "));
}