import React, { useState, useEffect } from "react";

function ProductContentSections() {
    return (
        <>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2">
                    <a
                        href="#"
                        class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                        aria-current="page"
                    >
                        Remaining
                    </a>
                </li>
                <li class="mr-2">
                    <a
                        href="#"
                        class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Sold Out
                    </a>
                </li>
            </ul>

            <div class="rounded-t-xl overflow-hidden ">
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-black">Product Name</th>
                            <th class="px-4 py-2 text-black">Sections</th>
                            <th class="px-4 py-2 text-black">Rows</th>
                            <th class="px-4 py-2 text-black">Seats</th>
                            <th class="px-4 py-2 text-black">Price</th>
                            <th class="px-4 py-2 text-black"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-200">
                            <td class="border border-black px-4 py-2 text-black font-medium">
                                A Long
                            </td>
                            <td class="border border-black px-4 py-2 text-black font-medium">
                                Adam
                            </td>
                            <td class="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td class="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td class="border border-black px-4 py-2 text-black font-medium">
                                112
                            </td>
                            <td class="border border-black px-4 py-2 text-black font-medium">
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
