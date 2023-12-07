<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Response;
use App\Models\Product;
use App\Models\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function removeCartItem($cart_id){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();

            if($cartitem){
                $cartitem->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Item has been removed',
                ]);
            }else{

            }
        }else{
            return response()->json([
                'status' => 401,
                'message' => 'Please Log In first',
            ]);
        }
    }
    public function updateQuantity($cart_id, $scope){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            
            if($scope == 'inc'){    
                $cartitem->product_qty +=1;
            }else if($scope == 'dec'){
                $cartitem->product_qty -=1;
            }
            $cartitem->update();
            return response()->json([
                'status' => 200,
                'message' => 'Quantity Updated',
            ]);
        }else{
            return response()->json([
                'status' => 401,
                'message' => 'Please Log In first',
            ]);
        }
    }
    public function viewCart(){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartitem = Cart::where('user_id', $user_id)->get();
            return response()->json([
                'status' => 200,
                'cart' => $cartitem,
            ]);
        }else{
            return response()->json([
                'status' => 401,
                'message' => 'Please Log In first',
            ]);
        }
    }


    public function addtocart(Request $request){
    if (auth('sanctum')->check()) {
        $user_id = auth('sanctum')->user()->id;
        $product_id = $request->input('product_id');
        $product_qty = $request->input('product_qty');

        $productCheck = Product::find($product_id);

        if ($productCheck) {
            if (Cart::where('product_id', $product_id)->where('user_id', $user_id)->exists()) {
                return response()->json([
                    'status' => 409,
                    'message' => $productCheck->name,
                ]);
            } else {
                $cartitem = new Cart;
                $cartitem->user_id = $user_id;
                $cartitem->product_id = $product_id;
                $cartitem->product_qty = $product_qty; 
                $cartitem->save();

                return response()->json([
                    'status' => 200,
                    'message' => "Product added to Cart",
                ]);
            }
        } else {
            return response()->json([
                'status' => 404,
                'message' => "Product not found",
            ]);
        }
    } else {
        return response()->json([
            'status' => 401,
            'message' => "Log in to Cart",
        ]);
    }
}

}
