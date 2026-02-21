export const Hello = () => {
    let text = "Hello world 1 dynbamic parameter";
    let age = 20
    return (
        <>
            <div id="hello-container1">
                <h1 class=""> {text}</h1>
                <h1> { age > 18 ? 'major' : 'minor'}</h1>
                <h2>{ text.toLowerCase().replace(' ', ',')}</h2>
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
