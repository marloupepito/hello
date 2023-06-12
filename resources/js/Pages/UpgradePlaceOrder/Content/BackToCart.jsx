import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

function BackToCartSection() {
    return ( 
        <>
        <Link  href={route('Index')}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BACK TO CART</Link>
        </>
     );
}

export default BackToCartSection;