import { useSelector, useDispatch } from "react-redux";
import { updateUserId } from "../redux/actions/updateBook";
import { useState } from "react";

function Details() {
    const books = useSelector((state) => state.bookReducer);
    const customers = useSelector((state) => state.custumerReducer);
    const dispatch = useDispatch();
    return (
        <div>
            {/* <h1>{user.barkode} {user.name} {user.author} {user.userId}</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>Barkode</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>User name</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index) => (
                        <tr key={index}>
                            <td>{book.barcode}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{customers.filter(customer => customer.id == book.userId)[0].name}</td>
                            <td><input onChange={(e)=>{
                                var customer = customers.filter(customer => customer.id == e.target.value)[0];
                                if(customer!=null){
                                    e.preventDefault();
                                    // book.userId = customer.id;
                                dispatch(updateUserId(e.target.value, index));
                                }

                            }}></input></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Details;