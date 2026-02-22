export const DynamicToaster = (props) => {
    console.log(props);
    return (
        <div>
            <h1> Dynamic Toaster </h1>
            <p>{props.message}</p>
        </div>
    )
}