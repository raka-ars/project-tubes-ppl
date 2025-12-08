<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Announcement;
use App\Models\Agenda;
use App\Models\Photo;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $cat1 = Category::create(['name'=>'Pengumuman', 'slug'=>'pengumuman']);
        $cat2 = Category::create(['name'=>'Beasiswa', 'slug'=>'beasiswa']);
        $cat3 = Category::create(['name'=>'Kegiatan', 'slug'=>'kegiatan']);

        Announcement::create([
            'category_id'=>$cat1->id,
            'title'=>'Selamat Datang Anggota IMNTT',
            'slug'=>'selamat-datang-'.time(),
            'excerpt'=>'Pengumuman selamat datang untuk anggota baru IMNTT.',
            'body'=>'Isi pengumuman contoh. Selamat bergabung di IMNTT.',
            'published_at'=>now()
        ]);

        Agenda::create([
            'title'=>'Rapat Pengurus Bulanan',
            'location'=>'Aula Fakultas',
            'start_at'=>now()->addDays(7),
            'end_at'=>now()->addDays(7)->addHours(2),
            'description'=>'Rapat membahas program kerja bulan depan.'
        ]);

        Photo::create([
            'title'=>'Kegiatan Sosial',
            'filename'=>'photos/placeholder.jpg', // anda bisa upload replace
            'caption'=>'Dokumentasi kegiatan sosial IMNTT.'
        ]);
    }
}
