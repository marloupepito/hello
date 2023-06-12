import TopNavbar from "@/Components/TapNavbar";
import {Link} from '@inertiajs/react';
import OrderCompletedSection from './Content/OrderCompleted';
export default function OrderCompletedLayout(props) {
    return (
        <>
        <TopNavbar />
        <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 gap-4 mt-5">
                    <div>
                        <Link href={route('search_tickets')}  class="float-right bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">Search Tickets</Link>
                    </div>
                    <div>
                            <OrderCompletedSection />
                    </div>
                    <div>
                        <Link href={route('Index')} class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">Next Order</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
