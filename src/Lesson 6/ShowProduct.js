// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateName, updatePrice, updateAmount, updateProduct} from '../redux/actions/productAction';

function ShowProduct(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsReducer);
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [amount,setAmount] = useState(0);
//     const changeAmount = (itemAmount, index) => {
//     let newObjects = [...products]
//     newObjects[index].amount = itemAmount
//     setProducts(newObjects);
// }

// const deleteProduct = (i) => {
//     setProducts(currentProduct => currentProduct.filter((item, index) => index != i))
// }

// const addProduct = (newProduct) => {
//     let newState = [...products, newProduct];
//     setProducts(newState);
// }



return (
    <div>
    <table className="table table-hover table-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
                {products.map((item, index) => (
                    <tr>
                        <td>
                        <input placeholder={item.name} onChange={(e)=>{
                            setName(e.target.value);
                            // e.preventDefault();
                            // dispatch(updateName(e.target.value, index));
                        }}></input>
                        </td>
                        <td>
                        <input placeholder={item.price}onChange={(e)=>{
                            setPrice(e.target.value);
                            // e.preventDefault();
                            // dispatch(updatePrice(e.target.value, index))
                        }}></input>
                        </td>
                        <td>
                        <input placeholder={item.amount}onChange={(e)=>{
                            setAmount(e.target.value);
                            // e.preventDefault();
                            // dispatch(updateAmount(e.target.value, index))
                        }}></input>
                        </td>
                        <td>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                dispatch(updateProduct(name,price,amount,index));
                            }}>update</button>
                        </td>
                    </tr>
                ))}
            </table>
    </div>
)};
export default ShowProduct;