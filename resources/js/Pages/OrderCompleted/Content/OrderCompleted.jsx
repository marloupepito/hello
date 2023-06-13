import React, { useState, useEffect } from "react";

function OrderCompletedSection() {
    return (
        <>
         <p className="text-3xl font-bold">Order Complete</p>
        <p className="text-2xl">Thank you for purchasing your ticket(s) for Hollywood Fight Nights</p>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-black"></th>
                        <th className="px-4 py-2 text-black"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-200">
                        <td className="border px-4 py-2 text-black font-medium">
                        Products
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Tickets
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Price
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Quantity
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Total
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Fee
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Action
                        </td>
                    </tr>
                    <tr >
                        <td className="border px-4 py-2 text-black font-medium">
                        Products
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Tickets
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Price
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Quantity
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Total
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Fee
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                        Action
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="grid grid-cols-4 gap-4">
                <div className="..."></div>
                <div className="..."></div>
                <div className="..."></div>
                <div className="...">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-black"></th>
                                <th className="px-4 py-2 text-black"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200">
                                <td className="border px-4 py-2 text-black font-medium">
                                    Sub Total:
                                </td>
                                <td className="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border px-4 py-2 text-black font-medium">
                                Ticket Fee:	
                                </td>
                                <td className="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border px-4 py-2 text-black font-medium">
                                Transaction Fee:
                                </td>
                                <td className="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border px-4 py-2 text-black font-medium">
                                Discount:
                                </td>
                                <td className="border px-4 py-2 text-black font-medium">
                                    Adam
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border px-4 py-2 text-black font-medium">
                                Grand Total:
                                </td>
                                <td className="border px-4 py-2 text-black font-medium">
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
