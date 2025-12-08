<!doctype html>
<html>
  
<head>
    <meta charset="utf-8">
    <title>IMNTT - Pusat Informasi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CDN supaya mudah -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm modern-nav">
    <div class="container">

        <a class="navbar-brand fw-bold fs-4" href="{{ route('home') }}">
            IMNTT
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navMenu" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto gap-2">
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('home') ? 'active-nav' : '' }}"
                       href="{{ route('home') }}">
                       Home
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('informasi.*') ? 'active-nav' : '' }}"
                       href="{{ route('informasi.index') }}">
                       Informasi
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('agenda.*') ? 'active-nav' : '' }}"
                       href="{{ route('agenda.index') }}">
                       Agenda
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('gallery') ? 'active-nav' : '' }}"
                       href="{{ route('gallery') }}">
                       Dokumentasi
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('kontak') ? 'active-nav' : '' }}"
                       href="{{ route('kontak') }}">
                       Kontak
                    </a>
                </li>
            </ul>

            <form class="d-flex" action="{{ route('search') }}" method="get">
                <input class="form-control me-2" name="q" placeholder="Cari..." value="{{ request('q') }}">
                <button class="btn btn-light" type="submit">Cari</button>
            </form>
            

        </div>
    </div>
</nav>
<button id="themeToggle" class="btn btn-outline-light ms-3">
    🌙
</button>


<div class="container">
    @if(session('success'))
      <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    @yield('content')
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<footer class="mt-5 py-4 text-center text-muted" style="background:#f1f3f5;">
    <div class="container">
        <p class="mb-0">&copy; {{ date('Y') }} IMNTT — Ikatan Mahasiswa Nusa Tenggara Timur</p>
        <small>Dibangun dengan Laravel 10</small>
    </div>
</footer>
<script>
    // Load theme when page loads
    document.addEventListener("DOMContentLoaded", function () {
        const theme = localStorage.getItem("theme");

        if (theme === "dark") {
            document.body.classList.add("dark-mode");
            document.getElementById("themeToggle").innerHTML = "☀️";
        }
    });

    // Toggle theme
    document.getElementById("themeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            this.innerHTML = "☀️";
        } else {
            localStorage.removeItem("theme");
            this.innerHTML = "🌙";
        }
    });
</script>

</body>
</html>
