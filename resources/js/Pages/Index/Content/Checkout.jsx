import React, { useState, useEffect } from "react";
import { Link } from '@inertiajs/react';
function IndexCheckoutSection() {
    return (
        <>
            <div class="w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seats Pricing</div>
                    <p class="text-gray-700 text-base">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="font-bold">Price</div>
                            <div class="font-bold">
                                General Admission No Seat
                            </div>
                            <div class="font-bold"></div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="mt-2">$ 60.00</div>
                            <div class="...">
                                <select
                                    id="countries"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Quantity</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div class="...">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                        <hr class="h-px my-8 bg-black border-2 dark:bg-black" />
                        <div className="...">
                            <p class="font-bold text-2xl">Subtotal: 100</p>
                        </div>
                        <div class="rounded-t-xl overflow-hidden ">
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-2 text-black">
                                            Product Name
                                        </th>
                                        <th class="px-4 py-2 text-black">
                                            Section
                                        </th>
                                        <th class="px-4 py-2 text-black">
                                            Row
                                        </th>
                                        <th class="px-4 py-2 text-black">
                                            Seat
                                        </th>
                                        <th class="px-4 py-2 text-black">
                                            
                                        </th>
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
                                            delete
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link  href={route('place_order')} >
                        <button class="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            CHECKOUT
                        </button>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default IndexCheckoutSection;
