import React, { useContext } from "react";
import { loading } from "../context/context";
import emptyBag from "../Images/emptyBag.jpg";

function Cart() {
  const { cart, removeCart, increaseItem, decreaseItem } = useContext(loading);

  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * 20 * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        <img src={emptyBag} alt="emptyBag" />
        <h1>Cart is empty</h1>
        <p>Add some item in your bag</p>
      </div>
    );
  }

  return (
    <>
      <div className="cartContainer">
        <div className="cartContainer__body">
          {cart.map((item, index) => {
            item.quantity = item.quantity;
            // if (item.quantity === 0) {
            //   return [];
            // }
            return (
              <div className="cartContainer__body--1 card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="cartContainer__body--image"
                      alt="productImage"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.description.slice(0, 80)}
                      </p>
                      <h5>
                        Price ~{" "}
                        <i
                          className="fa-solid fa-indian-rupee-sign"
                          style={{ fontSize: "1.1rem" }}
                        ></i>{" "}
                        {item.quantity * item.price.toFixed(0) * 20}
                      </h5>
                      <div className="icon">
                        <i
                          onClick={() => {
                            decreaseItem(item.id);
                            // item.quantity > 1
                            //   ? decreaseItem(item.id)
                            //   : removeCart(item.id);
                          }}
                          className="fa-solid fa-minus"
                        ></i>
                        <p className="icon__value">{item.quantity}</p>
                        <i
                          onClick={() => increaseItem(item.id)}
                          className="fa-solid fa-plus"
                        ></i>
                        <i
                          onClick={() => removeCart(item.id)}
                          className="fa-solid fa-trash"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartContainer__total">
          <div className="cartContainer__total--1">
            <h1> Order Summary</h1>
            <h4> {cart.length} - item</h4>
            <br />
            <h2>
              Total:{" "}
              <i
                style={{ fontSize: "1.7rem" }}
                className="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              {totalAmount.toFixed(0)}
            </h2>
            <button type="button" className="checkoutBtn my-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
