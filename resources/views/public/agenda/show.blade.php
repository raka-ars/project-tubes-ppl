@extends('layouts.app')

@section('content')

<div class="container">

    <div class="card shadow-sm border-0 p-4">

        <h1 class="fw-bold">{{ $item->title }}</h1>
        
        <div class="text-muted mb-3">
            {{ $item->start_at?->format('d M Y H:i') }}
            @if($item->location) • {{ $item->location }} @endif
        </div>

        @if($item->image)
        <img src="{{ asset('storage/'.$item->image) }}" class="img-fluid rounded mb-3">
        @endif

        <p style="line-height: 1.8;">
            {!! nl2br(e($item->description)) !!}
        </p>

        <a href="{{ route('agenda.index') }}" class="btn btn-secondary mt-3">← Kembali</a>
    </div>

</div>

@endsection
