export const DynamicToaster = ({message, product}) => {
    console.log({message, product});
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