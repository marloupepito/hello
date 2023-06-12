import React, { useState, useEffect } from "react";

function IndexContentSections() {
    return (
        <>
            <div class="grid grid-cols-2 gap-4">
                <div class="...">
                    <button class="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section A
                    </button>
                </div>
                <div class="...">
                    <button class="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section B
                    </button>
                </div>
                <div class="...">
                    <button class="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section C
                    </button>
                </div>
                <div class="...">
                    <button class="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section D
                    </button>
                </div>
                
            </div>
        </>
    );
}

export default IndexContentSections;
