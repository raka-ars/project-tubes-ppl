<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\PhotoController;
use App\Models\Announcement;

/*
| Public routes
*/
Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('informasi', [PublicController::class, 'announcements'])->name('informasi.index');
Route::get('informasi/{slug}', [PublicController::class, 'announcementShow'])->name('informasi.show');
Route::get('agenda', [PublicController::class, 'agendas'])->name('agenda.index');
Route::get('agenda/{id}', [PublicController::class, 'agendaShow'])->name('agenda.show');
Route::get('dokumentasi', [PublicController::class, 'gallery'])->name('gallery');
Route::get('kontak', function () {
    return view('public.kontak');
})->name('kontak');

/*
| Admin area: simple HTTP Basic Auth using .env
*/
Route::middleware(['basic.auth'])->prefix('admin')->group(function () {
    Route::get('/', function () { return redirect()->route('admin.announcements.index'); });
    Route::resource('announcements', AnnouncementController::class)->names('admin.announcements');
    Route::resource('agendas', AgendaController::class)->names('admin.agendas');
    Route::resource('photos', PhotoController::class)->names('admin.photos');
    // categories simple management via announcements form / or you can build separate resource
});

/*
| Quick API for search (optional)
*/
Route::get('search', function (\Illuminate\Http\Request $req) {
    $q = $req->get('q');
    $items = Announcement::where('title', 'like', "%$q%")
                ->orWhere('body', 'like', "%$q%")
                ->paginate(10);
    return view('public.search', ['items'=>$items,'q'=>$q]);
})->name('search');
