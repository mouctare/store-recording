import React, { Component } from "react";
import Title from './Title';
import CartColumns from "../components/Cart/CartColumns";
import EmptyCart from "../components/Cart/EmptyCart";
import {ProductConsumer} from "../context";
import CartList from "../components/Cart/CartList";
import CartTotals from "../components/Cart/CartTotals";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                   {value =>{
                     const {cart} = value;
                     if (cart.length > 0) {
                         return(
                             <React.Fragment>

                             <Title name="votre" title="panier" />
                             <CartColumns />
                             <CartList  value={value} />
                             <CartTotals value={value} history=
                             {this.props.history}/>
                             </React.Fragment>
                             );
                        }else{
                       return <EmptyCart />;

                        }
                   }} 
                </ProductConsumer>
            </section>
        )
    }
}
