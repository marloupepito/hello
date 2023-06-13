import React, { useState, useEffect } from "react";

function OrderCompletedSection() {
    return (
        <>
         <p class="text-3xl font-bold">Order Complete</p>
        <p class="text-2xl">Thank you for purchasing your ticket(s) for Hollywood Fight Nights</p>
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-2 text-black"></th>
                        <th class="px-4 py-2 text-black"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-200">
                        <td class="border px-4 py-2 text-black font-medium">
                        Products
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Tickets
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Price
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Quantity
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Total
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Fee
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Action
                        </td>
                    </tr>
                    <tr >
                        <td class="border px-4 py-2 text-black font-medium">
                        Products
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Tickets
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Price
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Quantity
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Total
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Fee
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                        Action
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="grid grid-cols-4 gap-4">
                <div class="..."></div>
                <div class="..."></div>
                <div class="..."></div>
                <div class="...">
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 text-black"></th>
                                <th class="px-4 py-2 text-black"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-200">
                                <td class="border px-4 py-2 text-black font-medium">
                                    Sub Total:
                                </td>
                                <td class="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="border px-4 py-2 text-black font-medium">
                                Ticket Fee:	
                                </td>
                                <td class="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="border px-4 py-2 text-black font-medium">
                                Transaction Fee:
                                </td>
                                <td class="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="border px-4 py-2 text-black font-medium">
                                Discount:
                                </td>
                                <td class="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="border px-4 py-2 text-black font-medium">
                                Grand Total:
                                </td>
                                <td class="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OrderCompletedSection;
