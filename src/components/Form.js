import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "./actions/cartActions";
import {connect} from "react-redux"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

function Form({items}) {

    const productSchema = yup
    .object()
    .shape({
        title: yup.string(),
        description: yup.string(),
        price: yup.string(),
        img: yup.number()
    });

    // let schema = object({
    //     title: string().required(),
    //     description: string().required(),
    //     price: number().required().positive().integer(),
    //     img: string().url().nullable(),
    // });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(productSchema),
    });

    const putItem = (data) => {

        fetch("http://localhost:3004/products", {
        method: 'POST', // or 'PUT'
        headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const onSubmitForm = data => {
        //addProduct(data);
        const newProduct = productSchema.validate(data);
        if (!newProduct) {
            putItem(newProduct);
        }
        //console.log(items);
    }

    
    
        return(
            <form className="addProductForm" onSubmit={handleSubmit(onSubmitForm)} >
                <div>
                    <input type="text" className="form-control" name="title" placeholder="Название товара"
                        {...register("title")} 
                        />
                </div>
                <div>
                    <input type="text" className="foorm-control" name="description" placeholder="Описание"
                        {...register("description")} 
                        />
                </div>
                <div>
                    <input type="text" className="foorm-control" name="image" placeholder="Ссылка на изображение"
                        {...register("img")} 
                        />
                </div>
                <div>
                    <input type="number" className="foorm-control" name="price" placeholder="Цена"
                        {...register("price")} 
                        />
                </div>
                <button type="submit" className="btn btn-primary" >Добавить</button>
            </form>
        )
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        addProduct: (data)=>{dispatch(addProduct(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)