<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\Agenda;
use App\Models\Photo;
use App\Models\Category;

class PublicController extends Controller
{
    public function home()
    {
        $latest = Announcement::whereNotNull('published_at')->orderBy('published_at','desc')->take(5)->get();
        $upcoming = Agenda::whereNotNull('start_at')->orderBy('start_at','asc')->take(5)->get();
        return view('public.home', compact('latest','upcoming'));
    }

    public function announcements(Request $req)
    {
        $query = Announcement::query();
        if ($req->get('category')) {
            $query->where('category_id',$req->get('category'));
        }
        $items = $query->whereNotNull('published_at')->orderBy('published_at','desc')->paginate(8);
        $categories = Category::all();
        return view('public.informasi.index', compact('items','categories'));
    }

    public function announcementShow($slug)
    {
        $item = Announcement::where('slug', $slug)->firstOrFail();
        return view('public.informasi.show', compact('item'));
    }

    public function agendas()
    {
        $items = Agenda::orderBy('start_at','desc')->paginate(8);
        return view('public.agenda.index', compact('items'));
    }

    public function agendaShow($id)
    {
        $item = Agenda::findOrFail($id);
        return view('public.agenda.show', compact('item'));
    }

    public function gallery()
    {
        $photos = Photo::orderBy('created_at','desc')->paginate(12);
        return view('public.gallery', compact('photos'));
    }
}
