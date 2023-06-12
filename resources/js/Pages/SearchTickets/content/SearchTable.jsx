import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
function SearchTable() {
    return (
        <>
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-2 text-black">Order #</th>
                        <th class="px-4 py-2 text-black">Name Ticket</th>
                        <th class="px-4 py-2 text-black">Code</th>
                        <th class="px-4 py-2 text-black">Redeem</th>
                        <th class="px-4 py-2 text-black">Upgrade</th>
                        <th class="px-4 py-2 text-black">Release</th>
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
                            <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                                Redeem
                            </button>
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            <Link href={route('upgrade_orders')} class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                                Upgrade
                            </Link>
                        </td>
                        <td class="border px-4 py-2 text-black font-medium">
                            <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
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
