<?php

namespace App\Http\Controllers;

use App\Models\CartProducts;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\URL;
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
    protected function generateRandomString($length) {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        $randomString = '';
        
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        
        return $randomString;
    }
    protected function getAllSeats($section,$token,$noseat,$path)
    {

        
        $products = CartProducts::where([
            ['client_id', '=', $this->client_id],
            ['venue_section_id', '=', $section],
        ])->get();

        $cart = CartProducts::where([['token','<>',null],['token','=',$token],['client_id', '=', $this->client_id]])->get();
            
        $location = $path === "/" ? 'Index/Layout' : ($path === 'place_order' ? 'PlaceOrder/Layout' : '');
            
        return Inertia::render($location, [
            'seats' =>  $products,
            'selected' =>  $cart,
            'noseat' =>  $noseat,
            'location' =>$path
        ]);

    }
    public function index(Request $request)
    {
        
        
        $token = $request->session()->get('token');
        $noseat= $request->session()->get('noseat');
        $seats = $this->getAllSeats($request->section,$token, $noseat,$request->path());
        // if(count($seats->selected) === 0){
        //     $request->session()->forget('token');
        // }
        return $seats;
    }
    
    public function select_section(Request $request)
    {
        
        
        $token = $request->session()->get('token');
        $noseat= $request->session()->get('noseat');
        $seats = $this->getAllSeats($request->section,$token, $noseat,$request->path());
     
        return $seats;
    
    }
 
    public function noseat(Request $request){
        if($request->type === 'add'){
            $request->session()->put('noseat', $request->noseat);
        }else{
            $request->session()->forget('noseat');
        }
    }
    public function select(Request $request)
    {
       

        if($request->session()->get('token') === null){
            $token = $this->generateRandomString(32);
            $request->session()->put('token', $token);
        }

        if($request->select !== null){
            CartProducts::where('cart_product_id',$request->select[0])->update([
                'quantity' =>$request->select[2] === 0?1:0,
                'token' => $request->select[2] === 0?null:$request->session()->get('token'),
            ]);
           return $this->getAllSeats($request->select[1],$request->session()->get('token'),$request->session()->get('noseat'),$request->path());
        }
     
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
