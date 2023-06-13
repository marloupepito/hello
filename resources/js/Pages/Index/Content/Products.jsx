import React, { useState, useEffect } from "react";
import { Link, useForm, usePage } from '@inertiajs/react';

function ProductContentSections({ seats }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        select: 0,
    });
    
    // useEffect(() => {
    //     // Disable scroll on component mount
     
    
    //     // Enable scroll on component unmount
    //     return () => {
    //       document.body.style.overflow = 'auto';
    //     };
    //   }, []);

     function submit(e){
        e.preventDefault();
        
        post(route('Index'))
       
    }
    return (
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <a
                        href="#"
                        className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                        aria-current="page"
                    >
                        Remaining
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        href="#"
                        className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Sold Out
                    </a>
                </li>
            </ul>

            <div className="rounded-t-xl overflow-hidden ">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-black">
                                Product Name
                            </th>
                            <th className="px-4 py-2 text-black">Sections</th>
                            <th className="px-4 py-2 text-black">Rows</th>
                            <th className="px-4 py-2 text-black">Seats</th>
                            <th className="px-4 py-2 text-black">Price</th>
                            <th className="px-4 py-2 text-black"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {seats.length === 0
                            ? ""
                            : seats.map((res) => (
                                  <tr className="bg-gray-200">
                                      <td className="border border-black px-3  text-black font-medium">
                                          {res.product_name}
                                      </td>
                                      <td className="border border-black px-3  text-black font-medium">
                                          {res.venue_section_id === 1
                                              ? "A"
                                              : res.venue_section_id === 2
                                              ? "B"
                                              : res.venue_section_id === 3
                                              ? "C"
                                              : res.venue_section_id === 4
                                              ? "D"
                                              : ""}
                                      </td>
                                      <td className="border border-black px-3  text-black font-medium">
                                          {res.venue_row}
                                      </td>
                                      <td className="border border-black px-3  text-black font-medium">
                                          {res.venue_seat}
                                      </td>
                                      <td className="border border-black px-3  text-black font-medium">
                                          {res.price_sale}
                                      </td>
                                      <td className="border border-black   text-black font-medium">
                                        <form onSubmit={submit}>
                                          <button
                                          href="#"
                                            onClick={(e) => setData('select', [res.cart_product_id,res.venue_section_id,res.quantity])}
                                             class="bg-black p-1 w-full hover:bg-black text-white font-bold ">
                                              ADD{res.quantity}
                                          </button>
                                        </form>
                                      </td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProductContentSections;
