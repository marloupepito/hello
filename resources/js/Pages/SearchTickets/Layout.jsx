import React, { useState, useEffect } from 'react';
import TopNavbar from "@/Components/TapNavbar";
import {Link} from '@inertiajs/react';
import SearchTicketsSection from './content/SearchTickets';
function SearchTicketsLayout() {
    return ( 
        <>
        <TopNavbar />
        <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 gap-4 mt-5">
                    <div>
                        <Link href={route('order_completed')}  class="float-left bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">Back</Link>
                    </div>
                    <div>
                            <SearchTicketsSection />
                    </div>
                  
                </div>
            </div>
        </>
     );
}

export default SearchTicketsLayout;