import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "./actions/cartActions";
import {connect} from "react-redux"


function Form({items}) {
    
    const { register, handleSubmit } = useForm();

    const putItem = (data) => {
        //const data = { username: 'example' };

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
        console.log(data);    
        addProduct(data);
        putItem(data);
        console.log(items);
    }
    
        return(
            <form className="addProductForm" onSubmit={handleSubmit(onSubmitForm)} >
                <div>
                    <input type="text" className="form-control" name="title" placeholder="Название товара"
                        {...register("title", {
                            required: "Required",
                          })} 
                        />
                </div>
                <div>
                    <input type="text" className="foorm-control" name="description" placeholder="Описание"
                        {...register("description", {
                            required: "Required",
                          })} 
                        />
                </div>
                <div>
                    <input type="text" className="foorm-control" name="image" placeholder="Ссылка на изображение"
                        {...register("img", {
                            required: "Required",
                          })} 
                        />
                </div>
                <div>
                    <input type="number" className="foorm-control" name="price" placeholder="Цена"
                        {...register("price", {
                            required: "Required",
                          })} 
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