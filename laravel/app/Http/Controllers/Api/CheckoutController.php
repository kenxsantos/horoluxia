<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Cart;
class CheckoutController extends Controller
{
    public function placeOrder(Request $request){
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $validator = Validator::make($request->all(), [
                'firstname' => ['required', 'string', 'max:255'],
                'lastname' => ['required', 'string', 'max:255'],
                'contact' => ['required', 'numeric'],
                'zip' => ['required', 'numeric', 'digits:4'],
                'email' => ['required', 'string', 'max:50'],
                'address' => ['required', 'string', 'max:255'],
                'city' => ['required', 'string', 'max:50'],
                'state' => ['required', 'string', 'max:50'],
            ]);
            if($validator->fails()){
                return response()->json([
                    'status' => 422,
                    'errors' =>$validator->messages(),
                ]);
            }else{
                $order = new Order;
                $order->user_id = $user_id;
                $order->firstname = $request->firstname;
                $order->lastname = $request->lastname;
                $order->contact = $request->contact;
                $order->zip = $request->zip;
                $order->email = $request->email;
                $order->address = $request->address;
                $order->city = $request->city;
                $order->state = $request->state;

                $order->payment_mode = "cod";
                $order->total_amount = $request->total_amount;
                $order->tracking_no = 'horoluxia'.rand(1111,9999);
                $order->save();
                
                $cart = Cart::where('user_id', 1)->get();

                $orderitems = [];
                foreach($cart as $item){
                    $orderitems[] = [
                        'product_id' => $item->product_id,
                        'quantity' => $item->product_qty,
                        'price' => $item->product->selling_price,
                    ];
                    $item->product->update([
                        'quantity'=>$item->product->quantity - $item->product_qty,
                    ]);
                }

                $order->orderitems()->createMany($orderitems);
                Cart::destroy($cart);
                return response()->json([
                    'status' => 200,
                    'message' =>'Place Order Successfully',
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
