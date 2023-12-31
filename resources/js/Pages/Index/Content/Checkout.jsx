import React, { useState, useEffect } from "react";
import { Link, useForm,router } from "@inertiajs/react";
function IndexCheckoutSection({ selected,noseat }) {
    const { data, setData, post, put,errors, processing, recentlySuccessful } =
        useForm({
            id: 0,
            noseat: 0,
        });
    const [noseatPrice,setNoSeatPrice] = useState(0)
    function submit(e) {
        e.preventDefault();
        post(route("Index"));
    }

    function submit2(e) {
        e.preventDefault();
        router.put('/',{
            noseat:data.noseat,
            type:'add'
        })
        setNoSeatPrice(data.noseat)
    }

    function cancelNoSeat(e) {
        e.preventDefault();
        setNoSeatPrice(0)
        router.put('/',{
            noseat:data.noseat,
            type:'delete'
        })
    }
    

    let subtotal = 0;
    for (let i = 0; i < selected.length; i++) {
        subtotal += selected[i].price_sale;
    }

    return (
        <>
            <div className="w-full rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Seats Pricing</div>
                    <p className="text-gray-700 text-base">
                        <form onSubmit={submit2}>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Price</div>
                                <div className="font-bold">
                                    General Admission No Seat
                                </div>
                                <div className="font-bold"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mt-2">$ 60.00</div>
                                <div className="...">
                                    <select
                                        value={data.noseat}
                                        onInput={(e) =>
                                            setData("noseat", e.target.value)
                                        }
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option selected  value="0">Quantity</option>
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
                                <div className="...">
                                    <button
                                        id="noseat"
                                       type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </form>
                        <hr className="h-px my-8 bg-black border-2 dark:bg-black" />
                        <div className="...">
                            <p className="font-bold text-2xl">
                                Subtotal: {subtotal + noseatPrice * 60}
                            </p>
                        </div>
                        <div className="rounded-t-xl overflow-hidden ">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-black">
                                            Product Name
                                        </th>
                                        <th className="px-4 py-2 text-black">
                                            Section
                                        </th>
                                        <th className="px-4 py-2 text-black">
                                            Row
                                        </th>
                                        <th className="px-4 py-2 text-black">
                                            Seat
                                        </th>
                                        <th className="px-4 py-2 text-black"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                      {
                                        noseat !== null && noseat !== 0 && noseat !== '0'?  <tr className="bg-gray-200">
                                        <td className="border border-black px-4 py-2 text-black font-medium">
                                         No Seat ({noseat} pcs)
                                        </td>
                                        <td className="border border-black px-4 py-2 text-black font-medium">
                                            -
                                        </td>
                                        <td className="border border-black px-4 py-2 text-black font-medium">
                                           -
                                        </td>
                                        <td className="border border-black px-4 py-2 text-black font-medium">
                                            -
                                        </td>
                                        <td className="border border-black px-4 py-2 text-black font-medium">
                                            <form onSubmit={cancelNoSeat}>
                                                <button
                                                    type="submit"
                                                    class="bg-black p-1 w-full hover:bg-black text-white font-bold "
                                                >
                                                    DELETE
                                                </button>
                                            </form>
                                        </td>
                                    </tr>:<tr></tr>
                                      }
                                    {selected.map((res) => (
                                        <tr className="bg-gray-200">
                                            <td className="border border-black px-4 py-2 text-black font-medium">
                                                {res.product_name}
                                            </td>
                                            <td className="border border-black px-4 py-2 text-black font-medium">
                                                {res.venue_section_id === 1
                                                    ? "A"
                                                    : res.venue_section_id === 2
                                                    ? "B"
                                                    : res.venue_section_id === 3
                                                    ? "C"
                                                    : res.venue_section_id === 4
                                                    ? "D"
                                                    : ""}
                                            </td>
                                            <td className="border border-black px-4 py-2 text-black font-medium">
                                                {res.venue_row}
                                            </td>
                                            <td className="border border-black px-4 py-2 text-black font-medium">
                                                {res.venue_seat}
                                            </td>
                                            <td className="border border-black px-4 py-2 text-black font-medium">
                                                <form onSubmit={submit}>
                                                    <button
                                                        href="#"
                                                        onClick={(e) =>
                                                            setData("select", [
                                                                res.cart_product_id,
                                                                res.venue_section_id,
                                                                res.quantity,
                                                            ])
                                                        }
                                                        class="bg-black p-1 w-full hover:bg-black text-white font-bold "
                                                    >
                                                        DELETE
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Link href={route("place_order")}>
                            <button className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
