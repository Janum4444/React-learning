import { Button } from "./Button"

export const DynamicToaster = ({message = "Default message", product, label = "Close"   }) => {
    // console.log(props);
    // let {message, product} = props

    return (
        <div>
            <h1> Dynamic Toaster </h1>
            <p>{message}</p>
            {product && (
                <div>
                    <p>Product: {product.name}</p>
                    <p>Price: ${product.price}</p>
                </div>
            )}

            <Button label="Click me" onClick={() => alert("Button clicked!")} />
        </div>
    )
}