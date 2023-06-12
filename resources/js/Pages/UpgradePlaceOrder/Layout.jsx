import React, { useState, useEffect } from "react";
import TopNavbar from "@/Components/TapNavbar";
import OrderSummarySection from "./Content/OrderSummary";
import PaymentMethodSection from "./Content/PaymentMethod";
import BackToCartSection from "./Content/BackToCart";
export default function PlaceOrderLayout() {
    return (
        <>
            <TopNavbar />
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 gap-4 mt-5">
                    <div>
                        <OrderSummarySection />
                    </div>
                    <div>
                        <BackToCartSection />
                    </div>
                    <div>
                        <PaymentMethodSection />
                    </div>
                </div>
            </div>
        </>
    );
}
