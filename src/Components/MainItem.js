import React, { useContext } from "react";
import { loading } from "../context/context";
import { Link } from "react-router-dom";

function MainItem(props) {
  const { addCart, cart } = useContext(loading);

  return (
    <>
      <div className="container MainItem">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title.slice(0, 40)}</h5>
            <p className="card-text">{props.description.slice(0, 90)} </p>
            <h4>
              Price ~{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "1.2rem" }}
              ></i>{" "}
              {props.price * 20}
            </h4>

            {cart.some((item) => item.id === props.id) ? (
              <Link type="button" className="btn2" to="/cart">
                Go to cart
              </Link>
            ) : (
              <button
                type="button"
                className="btn"
                onClick={() => {
                  addCart(props.element);
                }}
              >
                Add to cart
              </button>
            )}

            <p className="rating">
              {" "}
              Rating -{" "}
              <i
                style={{ fontSize: "1.2rem" }}
                className="fa-solid fa-star"
              ></i>{" "}
              {props.rating}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainItem;
