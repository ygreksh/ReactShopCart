import { Component } from "react";

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
           isLoading: true,
           products: [],
           error: null
        }
    }

    getFetchProducts() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:3004/products").then(res => res.json()).then(result => this.setState({
                loading: false,
                products: result
            })).catch(console.log);
        })
    }

    componentDidMount() {
        this.getFetchProducts();
    }

    handleUserInput = (e) => {
        const title = e.target.title;
        const description = e.target.description;
        const image = e.target.image;
        const price = e.target.price;
        this.setState({});
    }

    render() {
        return(
            <form className="addProductForm">
                <div>
                    <label htmlFor="title">Email address</label>
                    <input type="text" className="form-control" name="title"
                        value={this.state.title}
                        onChange={this.handleUserInput} />
                </div>
                <div>
                    <label htmlFor="description">Email address</label>
                    <input type="text" className="foorm-control" name="description"
                        value={this.state.description}
                        onChange={this.handleUserInput} />
                </div>
                <div>
                    <label htmlFor="image">Email address</label>
                    <input type="text" className="foorm-control" name="image"
                        value={this.state.image}
                        onChange={this.handleUserInput} />
                </div>
                <div>
                    <label htmlFor="price">Email address</label>
                    <input type="number" className="foorm-control" name="price"
                        value={this.state.price}
                        onChange={this.handleUserInput} />
                </div>
                <button type="submit" className="btn btn-primary" >Добавить</button>
            </form>
        )
    }
}
export default Form;