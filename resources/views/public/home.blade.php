@extends('layouts.app')

@section('content')

{{-- ========================= --}}
{{--        HERO SECTION       --}}
{{-- ========================= --}}
<div class="hero-section position-relative mb-5" 
     style="
        width:100%; 
        height:420px;
        background-image: url('{{ asset('images/hero.jpg') }}');
        background-size: cover;
        background-position: center;
        border-radius: 14px;
        overflow: hidden;
     ">

    {{-- Overlay --}}
    <div class="position-absolute top-0 start-0 w-100 h-100" 
         style="background: rgba(0,0,0,0.45);">
    </div>

    {{-- Text --}}
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
        <h1 class="fw-bold display-5 mb-2">Pusat Informasi IMNTT</h1>
        <p class="lead mb-3">Temukan pengumuman, agenda, dan dokumentasi kegiatan IMNTT.</p>

        <a href="{{ route('informasi.index') }}" class="btn btn-light btn-lg shadow-sm">
            Lihat Pengumuman
        </a>
    </div>

</div>

{{-- ========================= --}}
{{--     CONTENT SECTION       --}}
{{-- ========================= --}}
<div class="container">

    <div class="row">

        {{-- ========================= --}}
        {{--     Kolom Pengumuman     --}}
        {{-- ========================= --}}
        <div class="col-md-8">

            <h3 class="fw-bold mb-3">📢 Pengumuman Terbaru</h3>

            @forelse($latest as $a)
            <div class="card shadow-sm mb-4 border-0">
                <div class="card-body">
                    <h5 class="fw-bold">
                        <a href="{{ route('informasi.show', $a->slug) }}" 
                           class="text-decoration-none text-dark">
                           {{ $a->title }}
                        </a>
                    </h5>

                    <div class="text-muted small mb-2">
                        {{ $a->published_at?->format('d M Y') }}
                    </div>

                    @if($a->excerpt)
                    <p class="text-muted">{{ $a->excerpt }}</p>
                    @endif
                </div>
            </div>
            @empty
            <p class="text-muted">Belum ada pengumuman.</p>
            @endforelse



            {{-- ========================= --}}
            {{--     Kolom Agenda         --}}
            {{-- ========================= --}}
            <h3 class="fw-bold mt-5 mb-3">📅 Agenda Mendatang</h3>

            @forelse($upcoming as $g)
            <div class="card shadow-sm mb-4 border-0">
                <div class="card-body">
                    <h5 class="fw-bold">
                        <a href="{{ route('agenda.show', $g->id) }}" 
                           class="text-decoration-none text-dark">
                           {{ $g->title }}
                        </a>
                    </h5>

                    <div class="text-muted small mb-2">
                        {{ $g->start_at?->format('d M Y H:i') }}
                        @if($g->location) • {{ $g->location }} @endif
                    </div>

                    @if($g->description)
                    <p class="text-muted">{{ \Illuminate\Support\Str::limit($g->description, 120) }}</p>
                    @endif
                </div>
            </div>
            @empty
            <p class="text-muted">Belum ada agenda.</p>
            @endforelse

        </div>



        {{-- ========================= --}}
        {{--     Profil Organisasi     --}}
        {{-- ========================= --}}
        <div class="col-md-4">
            <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
                <div class="card-body">
                    <h5 class="fw-bold">🏛 Profil Organisasi</h5>

                    <p class="text-muted mb-3">
                        Ikatan Mahasiswa Nusa Tenggara Timur (IMNTT) adalah organisasi yang mewadahi mahasiswa 
                        asal NTT untuk berkarya dalam kegiatan sosial, akademik, dan budaya.
                    </p>

                    <a href="{{ route('kontak') }}" class="btn btn-primary w-100">
                        Hubungi Pengurus
                    </a>
                </div>
            </div>
        </div>

    </div>
</div>

@endsection
