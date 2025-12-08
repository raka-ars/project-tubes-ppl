<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    public function index()
    {
        $items = Photo::orderBy('created_at','desc')->paginate(12);
        return view('admin.photos.index', compact('items'));
    }

    public function create()
    {
        return view('admin.photos.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'=>'nullable|string|max:255',
            'caption'=>'nullable|string',
            'file'=>'required|image|max:4096',
        ]);

        $path = $request->file('file')->store('photos','public');
        Photo::create([
            'title'=>$data['title'] ?? null,
            'caption'=>$data['caption'] ?? null,
            'filename'=>$path
        ]);

        return redirect()->route('admin.photos.index')->with('success','Foto diunggah.');
    }

    public function destroy(Photo $photo)
    {
        \Storage::disk('public')->delete($photo->filename);
        $photo->delete();
        return redirect()->route('admin.photos.index')->with('success','Foto dihapus.');
    }
}
