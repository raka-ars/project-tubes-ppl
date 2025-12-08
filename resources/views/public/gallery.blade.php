@extends('layouts.app')

@section('content')

<div class="container">

    <div class="text-center mb-5">
        <h1 class="fw-bold">Dokumentasi Kegiatan</h1>
        <p class="text-muted">Foto-foto kegiatan IMNTT</p>
    </div>

    <div class="row">
        @foreach($photos as $p)
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm border-0">
                <img src="{{ asset('storage/'.$p->filename) }}" 
                     class="card-img-top"
                     style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <h6 class="fw-bold">{{ $p->title }}</h6>
                    <p class="text-muted small">{{ $p->caption }}</p>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    {{ $photos->links() }}

</div>

@endsection
