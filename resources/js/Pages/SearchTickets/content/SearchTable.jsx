import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
function SearchTable() {
    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-black">Order #</th>
                        <th className="px-4 py-2 text-black">Name Ticket</th>
                        <th className="px-4 py-2 text-black">Code</th>
                        <th className="px-4 py-2 text-black">Redeem</th>
                        <th className="px-4 py-2 text-black">Upgrade</th>
                        <th className="px-4 py-2 text-black">Release</th>
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
                            <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                                Redeem
                            </button>
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            <Link href={route('upgrade_orders')} className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                                Upgrade
                            </Link>
                        </td>
                        <td className="border px-4 py-2 text-black font-medium">
                            <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                                Release
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default SearchTable;
