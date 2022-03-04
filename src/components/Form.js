import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "./actions/cartActions";
import {connect} from "react-redux"


function Form({items}) {
    
    const { register, handleSubmit } = useForm();

    const onSubmitForm = data => {
        console.log(data);    
        addProduct(data);
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
                        {...register("image", {
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