<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'category_id' => ['required', 'string', 'max:255'],
            'meta_title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'selling_price' => ['required', 'numeric'],
            'original_price' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric', 'max:20'],
            'brand' => ['required', 'string', 'max:20'],          
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' =>$validator->messages(),
            ]);
        }else{
            $product =  Product::find($id);
            if($product){
            $product->category_id = $request->input('category_id');
            $product->slug = $request->input('slug');
            $product->name = $request->input('name');
            $product->description = $request->input('description');

            $product->meta_title = $request->input('meta_title');
            $product->meta_keyword = $request->input('meta_keyword');
            $product->meta_description = $request->input('meta_description');

            $product->selling_price = $request->input('selling_price');
            $product->original_price= $request->input('original_price');
            $product->brand = $request->input('brand');
            $product->quantity = $request->input('quantity');

            if ($request->hasFile('image')){
                $path = $product->image;
                if(File::exists($path)){
                    File::delete($path);
                }
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $originalFilename = $file->getClientOriginalName();
                $filename =  $originalFilename .'.'.$extension;
                $file->move('uploads/product/', $filename);
                $product->image = 'uploads/product/'.$filename;
            };
            
            $product->featured = $request->input('featured');
            $product->popular = $request->input('popular');
            $product->status = $request->input('status') ;
            $product->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Product Updated Successfully',
                ]);    
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'No Product ID Found',
                ]);  
            }
            
        }
    }

    public function edit($id){
        $product = Product::find($id);
        if($product){
            return response()->json([
                'status'=>200,
                'product'=>$product
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No Product Found'
            ]);
        }
    }

    public function index(){
        $products = Product::all();
        return response()->json([
            'status'=>200,
            'products'=>$products,
        ]);
    }


    public function store (Request $request){
        $validator = Validator::make($request->all(), [
            'category_id' => ['required', 'string', 'max:255'],
            'meta_title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'selling_price' => ['required', 'numeric'],
            'original_price' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric', 'max:20'],
            'brand' => ['required', 'string', 'max:20'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' =>$validator->messages(),
            ]);
        }else{
            $product = new Product;
            $product->category_id = $request->input('category_id');
            $product->slug = $request->input('slug');
            $product->name = $request->input('name');
            $product->description = $request->input('description');

            $product->meta_title = $request->input('meta_title');
            $product->meta_keyword = $request->input('meta_keyword');
            $product->meta_description = $request->input('meta_description');

            $product->selling_price = $request->input('selling_price');
            $product->original_price= $request->input('original_price');
            $product->brand = $request->input('brand');
            $product->quantity = $request->input('quantity');


            if ($request->hasFile('image')){
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $originalFilename = $file->getClientOriginalName();
                $filename =  $originalFilename;
                if ($file->move('uploads/product/', $filename)) {
                    // File moved successfully
                    $product->image = 'uploads/product/' . $filename;
                } else {
                    // Log the error
                    \Log::error('File move failed for product ID ' . $product->id);
                }
                $product->image = 'uploads/product/'.$filename;
            };

            $product->featured = $request->input('featured')  === 1 ? true : false;
            $product->popular = $request->input('popular')  === 1 ? true : false;
            $product->status = $request->input('status')  === 1 ? true : false;
            $product->save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Product Added Successfully',
            ]);
        } 
    }
}
