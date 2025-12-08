@extends('layouts.app')

@section('content')

<div class="container">

    <div class="card shadow-sm border-0 p-5">
        <h1 class="fw-bold mb-3">Kontak IMNTT</h1>

        <p class="text-muted">
            Untuk informasi lebih lanjut, silakan hubungi pengurus IMNTT.
        </p>

        <ul class="list-unstyled">
            <li><strong>Email:</strong> imntt@example.org</li>
            <li><strong>Instagram:</strong> @imntt_official</li>
            <li><strong>Alamat:</strong> Sekretariat IMNTT Kampus XYZ</li>
        </ul>

        <a href="{{ route('home') }}" class="btn btn-primary mt-3">← Kembali</a>
    </div>

</div>

@endsection
