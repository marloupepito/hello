import React, { useState, useEffect } from "react";

function OrderSummarySection() {
    return (
        <>
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-2 text-black">Products</th>
                        <th class="px-4 py-2 text-black">Price</th>
                        <th class="px-4 py-2 text-black">Fee</th>
                        <th class="px-4 py-2 text-black">Quantity</th>
                        <th class="px-4 py-2 text-black">Total</th>
                        <th class="px-4 py-2 text-black">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-200">
                        <td class="border px-4 py-2 text-black font-medium">
                            A Long
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            Adam
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            112
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            112
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            delete
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            delete
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

export default OrderSummarySection;
