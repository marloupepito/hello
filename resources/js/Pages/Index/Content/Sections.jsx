import React, { useState, useEffect } from "react";
import { Link, useForm, usePage,router  } from '@inertiajs/react';

function IndexContentSections() {
    const { data, setData, errors, processing, recentlySuccessful } = useForm({
        section: 0,
    });

    function submit(e){
        e.preventDefault();
        router.patch('/',{
            section:data.section
        })
    }
    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="...">
                    <button id="section" value={data.section} onClick={(e) => setData('section', 1)} className="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section A
                    </button>
                </div>
                <div className="...">
                    <button id="section" value={data.section}  onClick={(e) => setData('section',2)}  className="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section B
                    </button>
                </div>
                <div className="...">
                    <button  id="section" value={data.section} onClick={(e) => setData('section',3)} className="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section C
                    </button>
                </div>
                <div className="...">
                    <button id="section" value={data.section}  onClick={(e) => setData('section', 4)}  className="text-4xl w-100 py-12 bg-black hover:bg-black text-white font-bold  px-4 border border-black rounded">
                        Section D
                    </button>
                </div>
                
            </div>
        </form>
    );
}

export default IndexContentSections;
