<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'meta_title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'name' => ['required'],
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' =>$validator->messages(),
            ]);
        }else{
            $category =  Category::find($id);
            if($category){
                $category->meta_title = $request->input('meta_title');
                $category->meta_keyword = $request->input('meta_keyword');
                $category->meta_description = $request->input('meta_description');
                $category->slug = $request->input('slug');
                $category->name = $request->input('name');
                $category->description = $request->input('description');
                
               

                if ($request->hasFile('banner')){
                    $path = $product->banner;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $file = $request->file('banner');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() .'.'.$extension;
                    $file->move('uploads/banner/', $filename);
                    $product->banner = 'uploads/banner/'.$filename;
                };
                $category->status = $request->input('status');
                $category->save();
        
                return response()->json([
                    'status' => 200,
                    'message' => 'Updated Successfully',
                ]);    
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'No Category ID Found',
                ]);  
            }
            
        }
    }

    public function allcategories(){
        $category = Category::where('status', '0')->get();

        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    public function edit($id){
        $category = Category::find($id);
        if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No Category Found'
            ]);
        }
    }


    public function index(){
        $category = Category::all();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    public function store (Request $request){
        
        $validator = Validator::make($request->all(), [
            'meta_title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'name' => ['required'],
            'banner' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:10120'],
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' =>$validator->messages(),
            ]);
        }else{
            $category = new Category;
            $category->meta_title = $request->input('meta_title');
            $category->meta_keyword = $request->input('meta_keyword');
            $category->meta_description = $request->input('meta_description');
            $category->slug = $request->input('slug');
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            

            if ($request->hasFile('banner')){
                $file = $request->file('banner');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .'.'.$extension;
                if ($file->move('uploads/banner/', $filename)) {
                    // File moved successfully
                    $category->banner = 'uploads/banner/' . $filename;
                } else {
                    // Log the error
                    \Log::error('File move failed for product ID ' . $category->id);
                }
            };
            $category->status = $request->input('status') == true ? '1' : '0';
            $category->save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Added Successfully',
            ]);
        } 
    }
    public function destroy($id){
        $category = Category::find($id);
        if($category){
            $category->delete();
            return response()->json([
                'status'=>200,
                'category'=>'Deleted Successfully'
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Cancel Deleted'
            ]);
        }
    }
}
