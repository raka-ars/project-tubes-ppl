@extends('layouts.app')

@section('content')
<h4>Buat Pengumuman</h4>

<form action="{{ route('admin.announcements.store') }}" method="post" enctype="multipart/form-data">
  @csrf
  <div class="mb-3">
    <label>Judul</label>
    <input class="form-control" name="title" required value="{{ old('title') }}">
  </div>

  <div class="mb-3">
    <label>Kategori</label>
    <select class="form-select" name="category_id">
      <option value="">-- Pilih --</option>
      @foreach($categories as $c)
        <option value="{{ $c->id }}">{{ $c->name }}</option>
      @endforeach
    </select>
  </div>

  <div class="mb-3">
    <label>Excerpt</label>
    <input class="form-control" name="excerpt" value="{{ old('excerpt') }}">
  </div>

  <div class="mb-3">
    <label>Isi</label>
    <textarea class="form-control" name="body" rows="8" required>{{ old('body') }}</textarea>
  </div>

  <div class="mb-3">
    <label>Gambar</label>
    <input type="file" class="form-control" name="image">
  </div>

  <div class="mb-3">
    <label>Tanggal Publikasi (kosongkan untuk draft)</label>
    <input type="datetime-local" class="form-control" name="published_at" value="{{ old('published_at') }}">
  </div>

  <button class="btn btn-primary">Simpan</button>
</form>
@endsection
