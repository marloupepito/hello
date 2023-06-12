import React, { useState, useEffect } from "react";
import IndexContentSections from "./Content/Sections";
import IndexCheckoutSection from "./Content/Checkout";
import ProductContentSections from "./Content/Products";
import TopNavbar from "@/Components/TapNavbar";
export default function IndexLayout() {
    return (
        <>
            <TopNavbar />
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <IndexContentSections />
                    </div>
                    <div>
                        <IndexCheckoutSection />
                    </div>
                    <div>
                        <ProductContentSections />
                    </div>
                </div>
            </div>
        </>
    );
}
