import React, { useState, useEffect } from "react";
import TopNavbar from "@/Components/TapNavbar";
import OrderSummarySection from "./Content/OrderSummary";
import PaymentMethodSection from "./Content/PaymentMethod";
import BackToCartSection from "./Content/BackToCart";
export default function PlaceOrderLayout(props) {
    const selected = props.selected
    const noseat = props.noseat
    console.log('waaass',props)
    return (
        <>
            <TopNavbar />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-4 mt-5">
                    <div>
                        <OrderSummarySection selected={selected} noseat={noseat}/>
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
