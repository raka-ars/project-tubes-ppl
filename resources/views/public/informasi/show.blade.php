@extends('layouts.app')

@section('content')

<div class="container">

    <div class="card shadow-sm border-0 p-4">
        
        {{-- Judul --}}
        <h1 class="fw-bold">{{ $item->title }}</h1>

        <div class="text-muted mb-3">
            Dipublikasikan: {{ $item->published_at?->format('d M Y') }}
            @if($item->category) • {{ $item->category->name }} @endif
        </div>

        {{-- Gambar --}}
        @if($item->image)
        <img src="{{ asset('storage/'.$item->image) }}" class="img-fluid rounded mb-3">
        @endif

        {{-- Isi --}}
        <div class="mt-3" style="line-height: 1.8;">
            {!! nl2br(e($item->body)) !!}
        </div>

        <hr>

        <a href="{{ route('informasi.index') }}" class="btn btn-secondary mt-3">
            ← Kembali ke Informasi
        </a>

    </div>

</div>

@endsection
