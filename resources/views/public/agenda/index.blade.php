@extends('layouts.app')

@section('content')

<div class="container">

    <div class="text-center mb-5">
        <h1 class="fw-bold">Agenda Kegiatan</h1>
        <p class="text-muted">Rencana dan catatan kegiatan IMNTT</p>
    </div>

    @foreach($items as $g)
    <div class="card shadow-sm mb-4 border-0">
        <div class="card-body">

            <h4 class="fw-bold">
                <a href="{{ route('agenda.show', $g->id) }}" class="text-dark text-decoration-none">
                    {{ $g->title }}
                </a>
            </h4>

            <div class="text-muted small mb-2">
                {{ $g->start_at?->format('d M Y H:i') }}
                @if($g->location) • {{ $g->location }} @endif
            </div>

            <p class="text-muted">{{ Str::limit($g->description, 160) }}</p>

            <a href="{{ route('agenda.show', $g->id) }}" class="btn btn-primary btn-sm">
                Lihat detail →
            </a>

        </div>
    </div>
    @endforeach

    <div class="mt-4">
        {{ $items->links() }}
    </div>

</div>

@endsection
