import React, { useState, useEffect } from "react";

function OrderSummarySection({ selected, noseat }) {
    console.log('dada',selected)
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
                    {selected.map((res) => (
                        <tr className="bg-gray-200">
                            <td className="border px-4 py-2 text-black font-medium">
                              {res.product_name}( {res.venue_section_id === 1
                                              ? "Section A"
                                              : res.venue_section_id === 2
                                              ? "Section B"
                                              : res.venue_section_id === 3
                                              ? "Section C"
                                              : res.venue_section_id === 4
                                              ? "Section D"
                                              : ""}, Row {res.venue_row}, Seat {res.venue_seat}) 
                            </td>
                            <td className="border px-4 py-2 text-black font-medium">
                              {res.price_sale}
                            </td>
                            <td className="border px-4 py-2 text-black font-medium">
                                {res.price_fee}
                            </td>
                            <td className="border px-4 py-2 text-black font-medium">
                                1
                            </td>
                            <td className="border px-4 py-2 text-black font-medium">
                            {res.price_sale + res.price_fee}
                            </td>
                            <td className="border px-4 py-2 text-black font-medium">
                                delete
                            </td>
                        </tr>
                    ))}
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
