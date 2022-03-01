import React from "react";
import Product from "./Product";

const ProductDelails = (props) => {
    return (
            <div>
                <h1>
                    Описание товара
                </h1>
                <p>
                    <Product product={props}/>
                </p>
            </div>
    )
}

export default ProductDelails