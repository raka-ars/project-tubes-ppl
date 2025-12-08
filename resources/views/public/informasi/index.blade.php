@extends('layouts.app')

@section('content')

<div class="container">

    {{-- Title --}}
    <div class="text-center mb-5">
        <h1 class="fw-bold">Informasi & Pengumuman</h1>
        <p class="text-muted">Kumpulan informasi terbaru dari IMNTT</p>
    </div>

    <div class="row">

        {{-- List pengumuman --}}
        <div class="col-md-8">

            @foreach($items as $item)
            <div class="card shadow-sm mb-4 border-0 info-card">
                <div class="card-body">
                    <h4>
                        <a href="{{ route('informasi.show', $item->slug) }}"
                           class="text-dark fw-bold text-decoration-none">
                           {{ $item->title }}
                        </a>
                    </h4>

                    <div class="text-muted small mb-2">
                        {{ $item->published_at?->format('d M Y') }}
                        @if($item->category) • {{ $item->category->name }} @endif
                    </div>

                    <p class="text-muted">{{ $item->excerpt }}</p>

                    <a href="{{ route('informasi.show', $item->slug) }}" class="btn btn-primary btn-sm">
                        Baca selengkapnya →
                    </a>
                </div>
            </div>
            @endforeach

            <div class="mt-4">
                {{ $items->links() }}
            </div>

        </div>

        {{-- Sidebar kategori --}}
        <div class="col-md-4">
            <div class="card shadow-sm border-0 p-3">
                <h5 class="fw-bold">Kategori</h5>
                <ul class="list-group list-group-flush mt-2">
                    @foreach($categories as $c)
                    <li class="list-group-item">
                        <a href="{{ route('informasi.index', ['category'=>$c->id]) }}"
                           class="text-dark text-decoration-none">
                            {{ $c->name }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>

    </div>
</div>

@endsection
