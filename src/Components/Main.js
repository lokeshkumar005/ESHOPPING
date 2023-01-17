import React, { useEffect, useContext } from "react";
import MainItem from "./MainItem";
import Footer from "./footer";
import Spinner from "./spinner";
import { loading } from "../context/context";
import LoadingBar from "react-top-loading-bar";

function Main() {
  const { data, load, progress, setProgress, page, setPage, fetchProduct } =
    useContext(loading);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  const pageHandler = (selectedProduct) => {
    setPage(selectedProduct);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="mainBg">
        <h1>Welcome to E-SHOPPING </h1>
      </div>
      <div className="container main">
        <h1 className="heading">Latest Products</h1>
        {load && <Spinner />}
        <div className="row">
          {data.slice(0, page * 6).map((element) => {
            element.quantity = 1;
            return (
              <div className="col-lg-4" key={element.id}>
                <MainItem
                  id={element.id}
                  title={element.title}
                  image={element.image}
                  description={element.description}
                  price={element.price}
                  rating={element.rating.rate}
                  element={element}
                />
              </div>
            );
          })}
        </div>
        {data.length > 0 && (
          <div className="pagination">
            <button disabled={page === 1} onClick={() => pageHandler(page - 1)}>
              &#171; Prev
            </button>

            <button disabled={page === 4} onClick={() => pageHandler(page + 1)}>
              Next &#187;
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Main;
