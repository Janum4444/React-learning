export const Hello = () => {
    let text = "Hello world 1"
    return (
        <>
            <div id="hello-container1">
                <h1> Hello world 1</h1>
            </div>

            <p>
                To force
                <br /> line breaks
                <br /> in a text,
                <br /> use the br
                <br /> element.
            </p>

            <div id="hello-container2">
                <h1> Hello world 2</h1>
            </div>
        </>
    );
};
