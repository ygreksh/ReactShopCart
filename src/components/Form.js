import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "./actions/cartActions";
import {connect} from "react-redux"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const productSchema = yup
    .object({
        title: yup.string().required(),
        description: yup.string().required(),
        img: yup.string().url().nullable(),
        price: yup.number().positive().required(),
    })
    .required();
    

const Form = ({items}) => {

    

    // let schema = object({
    //     title: string().required(),
    //     description: string().required(),
    //     price: number().required().positive().integer(),
    //     img: string().url().nullable(),
    // });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
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

    const onSubmitForm = (data) => {
        console.log('q',data);
        //addProduct(data);
        // const newProduct = productSchema.validate(data);
        
        // if (!newProduct) {
        //     putItem(newProduct);
        // } else {
        //     console.log(`Item ${data} not validate`);
        // }
        //console.log(items);

        putItem(data);

        reset();
    }

    
    
        return(
            <form className="addProductForm" onSubmit={handleSubmit(onSubmitForm)} >
                <div>
                    <input className="form-control" placeholder="Название товара" required 
                        {...register("title")} 
                        />
                    <p>{errors.title?.message}</p>
                </div>
                <div>
                    <input className="foorm-control" placeholder="Описание" required 
                        {...register("description")} 
                        />
                    <p>{errors.description?.message}</p>
                </div>
                <div>
                    <input className="foorm-control" placeholder="Ссылка на изображение" required 
                        {...register("img")} 
                        />
                    <p>{errors.img?.message}</p>
                </div>
                <div>
                    <input type="number" className="foorm-control" placeholder="Цена" required 
                        {...register("price")} 
                        />
                    <p>{errors.price?.message}</p>
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