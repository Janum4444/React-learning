export const DynamicToaster = ({message, product}) => {
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
        </div>
    )
}