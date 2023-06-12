import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
function PaymentMethodSection() {
    return (
        <div className="mb-4">
            <div class="grid grid-cols-5 mb-5 gap-4">
                <div>Select Payment Method:</div>
                <div>
                    <div class="flex items-center">
                        <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="default-radio-2"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Credit Card
                        </label>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="default-radio-2"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Cash
                        </label>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="default-radio-2"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Check
                        </label>
                    </div>
                    
                </div>
                
                <div>
                    sss
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <div>
                        <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Fullname"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        How did you hear about this event?
                    </label>
                    <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>
                            How did you hear about this event?
                        </option>
                        <option value="Previous Attendee">
                            Previous Attendee
                        </option>
                        <option value="Friends/Word of mount">
                            Friends/Word of mount
                        </option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Tweeter">Tweeter</option>
                        <option value="Email">Email</option>
                        <option value="Flyers/Signage">Flyers/Signage</option>
                        <option value="Radio">Radio</option>
                    </select>
                </div>
            </div>
            <div>
                <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Order Notes
                </label>
                <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                ></textarea>
            </div>
           <center className="mt-4 mb-5">
           <Link href={route('order_completed')} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place Order
            </Link>
           </center>
        </div>
    );
}

export default PaymentMethodSection;
