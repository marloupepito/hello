import React, { useState, useEffect } from "react";

function OrderSummarySection() {
    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-black">Products</th>
                        <th className="px-4 py-2 text-black">Price</th>
                        <th className="px-4 py-2 text-black">Fee</th>
                        <th className="px-4 py-2 text-black">Quantity</th>
                        <th className="px-4 py-2 text-black">Total</th>
                        <th className="px-4 py-2 text-black">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-200">
                        <td className="border px-4 py-2 text-black font-medium">
                            A Long
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            Adam
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            112
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            112
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            delete
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            delete
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

export default OrderSummarySection;
