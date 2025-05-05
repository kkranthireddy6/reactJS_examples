import React, { useReducer, useRef, useState } from "react";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

const Form = () => {
  
  //USING USEREDUCER

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };

  return (

    // USING USESTATE

    // <div>
    //   <form>
    //     <input
    //       type="text"
    //       name="title"
    //       onChange={handleChange}
    //       placeholder="Title"
    //     />
    //     <input
    //       type="text"
    //       name="desc"
    //       onChange={handleChange}
    //       placeholder="Desc"
    //     />
    //     <input
    //       type="number"
    //       name="price"
    //       onChange={handleChange}
    //       placeholder="Price"
    //     />
    //     <p>Category:</p>
    //     <select name="category" id="category" onChange={handleChange}>
    //       <option value="sneakers">Sneakers</option>
    //       <option value="tshirts">T-shirts</option>
    //       <option value="jeans">Jeans</option>
    //     </select>
    //     <p>Tags:</p>
    //     <textarea
    //       ref={tagRef}
    //       placeholder="Seperate tags with commas..."
    //     ></textarea>
    //     <button type="button" onClick={handleTags}>
    //       Add Tags
    //     </button>
    //     <div className="tags">
    //       {product.tags.map((tag) => (
    //         <small key={tag} onClick={() => handleRemoveTag(tag)}>
    //           {tag}
    //         </small>
    //       ))}
    //     </div>
    //     <div className="quantity">
    //       <button type="button" onClick={handleDecrease}>
    //         -
    //       </button>
    //       <span>Quantity ({product.quantity})</span>
    //       <button type="button" onClick={handleIncrease}>
    //         +
    //       </button>
    //     </div>
    //   </form>
    // </div>


    //USING USEREDUCER
    
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button onClick={() => dispatch({ type: "DECREASE" })} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: "INCREASE" })} type="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
