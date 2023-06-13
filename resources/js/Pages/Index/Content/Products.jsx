import React, { useState, useEffect } from "react";

function ProductContentSections() {
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
                            <th className="px-4 py-2 text-black">Product Name</th>
                            <th className="px-4 py-2 text-black">Sections</th>
                            <th className="px-4 py-2 text-black">Rows</th>
                            <th className="px-4 py-2 text-black">Seats</th>
                            <th className="px-4 py-2 text-black">Price</th>
                            <th className="px-4 py-2 text-black"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-200">
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                A Long
                            </td>
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                Adam
                            </td>
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td className="border border-black px-4 py-2 text-black font-medium">
                                ADD TO CART
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProductContentSections;
