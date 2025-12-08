<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AnnouncementController extends Controller
{
    public function index()
    {
        $items = Announcement::orderBy('created_at','desc')->paginate(10);
        return view('admin.announcements.index', compact('items'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('admin.announcements.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'=>'required|string|max:255',
            'category_id'=>'nullable|exists:categories,id',
            'excerpt'=>'nullable|string|max:500',
            'body'=>'required|string',
            'image'=>'nullable|image|max:2048',
            'published_at'=>'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('announcements','public');
            $data['image'] = $path;
        }

        $data['slug'] = Str::slug($data['title']).'-'.time();

        Announcement::create($data);

        return redirect()->route('admin.announcements.index')->with('success','Pengumuman berhasil dibuat.');
    }

    public function show(Announcement $announcement)
    {
        return view('admin.announcements.show', compact('announcement'));
    }

    public function edit(Announcement $announcement)
    {
        $categories = Category::all();
        return view('admin.announcements.edit', compact('announcement','categories'));
    }

    public function update(Request $request, Announcement $announcement)
    {
        $data = $request->validate([
            'title'=>'required|string|max:255',
            'category_id'=>'nullable|exists:categories,id',
            'excerpt'=>'nullable|string|max:500',
            'body'=>'required|string',
            'image'=>'nullable|image|max:2048',
            'published_at'=>'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            // delete old
            if ($announcement->image) {
                Storage::disk('public')->delete($announcement->image);
            }
            $path = $request->file('image')->store('announcements','public');
            $data['image'] = $path;
        }

        $announcement->update($data);

        return redirect()->route('admin.announcements.index')->with('success','Pengumuman berhasil diperbarui.');
    }

    public function destroy(Announcement $announcement)
    {
        if ($announcement->image) {
            \Storage::disk('public')->delete($announcement->image);
        }
        $announcement->delete();
        return redirect()->route('admin.announcements.index')->with('success','Pengumuman dihapus.');
    }
}
