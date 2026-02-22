export const ProductList = ({ products }) => {
    return (
        <div>
            <h1> Product List </h1>
            {products.map((product, index) => (
                <div key={product.name}>
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};




