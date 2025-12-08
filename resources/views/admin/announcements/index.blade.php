@extends('layouts.app')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
  <h4>Admin - Pengumuman</h4>
  <div>
    <a href="{{ route('admin.announcements.create') }}" class="btn btn-primary">Buat Pengumuman</a>
    <a href="{{ url('/') }}" class="btn btn-secondary">Lihat Situs</a>
  </div>
</div>

<table class="table table-striped">
  <thead><tr><th>#</th><th>Judul</th><th>Kategori</th><th>Dipublikasikan</th><th>Aksi</th></tr></thead>
  <tbody>
    @foreach($items as $it)
      <tr>
        <td>{{ $it->id }}</td>
        <td>{{ $it->title }}</td>
        <td>{{ $it->category?->name }}</td>
        <td>{{ $it->published_at?->format('d M Y') }}</td>
        <td>
          <a href="{{ route('admin.announcements.edit', $it->id) }}" class="btn btn-sm btn-warning">Edit</a>
          <form action="{{ route('admin.announcements.destroy', $it->id) }}" method="post" style="display:inline" onsubmit="return confirm('Yakin?')">
            @csrf @method('DELETE')
            <button class="btn btn-sm btn-danger">Hapus</button>
          </form>
        </td>
      </tr>
    @endforeach
  </tbody>
</table>

{{ $items->links() }}
@endsection
