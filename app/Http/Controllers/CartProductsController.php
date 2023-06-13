<?php

namespace App\Http\Controllers;

use App\Models\CartProducts;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartProductsController extends Controller
{
    public $client_id = 157;
    /**
     * 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $a = CartProducts::where([
            ['client_id','=',$this->client_id],
            ['venue_section_id','=',1],
        ])->get();

        $b = CartProducts::where([
            ['client_id','=',$this->client_id],
            ['venue_section_id','=',2],
        ])->get();

        $c = CartProducts::where([
            ['client_id','=',$this->client_id],
            ['venue_section_id','=',3],
        ])->get();

        $d = CartProducts::where([
            ['client_id','=',$this->client_id],
            ['venue_section_id','=',4],
        ])->get();

        return Inertia::render('Index/Layout', [
            'seats' =>  [$a,$b,$c,$d],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CartProducts  $cartProducts
     * @return \Illuminate\Http\Response
     */
    public function show(CartProducts $cartProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CartProducts  $cartProducts
     * @return \Illuminate\Http\Response
     */
    public function edit(CartProducts $cartProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CartProducts  $cartProducts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CartProducts $cartProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CartProducts  $cartProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(CartProducts $cartProducts)
    {
        //
    }
}
