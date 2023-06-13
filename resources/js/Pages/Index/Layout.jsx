import React, { useState, useEffect } from "react";
import IndexContentSections from "./Content/Sections";
import IndexCheckoutSection from "./Content/Checkout";
import ProductContentSections from "./Content/Products";
import TopNavbar from "@/Components/TapNavbar";
export default function IndexLayout(props) {
   
   const seats = props.seats
   const selected = props.selected
   const noseat = props.noseat
    return (
        <>
        <TopNavbar />
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                    <IndexContentSections />
                </div>
                <div>
                    <IndexCheckoutSection selected={selected} noseat={noseat}/>
                </div>
                <div>
                    <ProductContentSections seats={seats}/>
                </div>
            </div>
        </div>
        </>
    );
}
