<!doctype html>
<html>
  <style>
    /* Default Light Mode */
body {
    background: #f5f6fa;
    color: #222;
}

/* Dark Mode Styles */
.dark-mode {
    background: #1a1a1a !important;
    color: #eee !important;
}

.dark-mode .card {
    background: #2a2a2a !important;
    color: #ddd !important;
}

.dark-mode .navbar {
    background: rgba(0,0,0,0.6) !important;
}

.dark-mode footer {
    background: #222 !important;
    color: #bbb !important;
}

.dark-mode .btn-primary {
    background: #0045b5 !important;
}

.dark-mode .btn-light {
    background: #ddd !important;
    color: #111 !important;
}
<script>
    / Apply fade-in animation to visible elements
    document.addEventListener("DOMContentLoaded", () => {

        const elements = document.querySelectorAll(".card, h1, h3, p, .hero-section, footer, .nav-link");

        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("fade-in");
            }, index * 80); / delay per element
        });

    });
</script>

.fade-in {
    opacity: 0;
    transform: translateY(15px);
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* Card pop */
.card:hover {
    transform: translateY(-6px) scale(1.02);
    transition: 0.25s ease-in-out;
}

/* Smooth button animation */
.btn {
    transition: 0.25s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

/* Gallery photo hover */
.card img:hover {
    transform: scale(1.05);
    transition: 0.3s;
    border-radius: 8px;
}

/* Slide-in left/right */
.slide-left {
    opacity: 0;
    transform: translateX(-40px);
    animation: slideLeft 0.7s ease forwards;
}

.slide-right {
    opacity: 0;
    transform: translateX(40px);
    animation: slideRight 0.7s ease forwards;
}

@keyframes slideLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.btn-shine {
    background: linear-gradient(90deg,#0062ff,#00d4ff);
    color: white;
    border: none;
    animation: shine 3s infinite linear;
    background-size: 400%;
}

@keyframes shine {
    0% { background-position: 0%; }
    100% { background-position: 400%; }
}

.btn-shine:hover {
    transform: scale(1.05);
}

<button class="btn btn-shine px-4 py-2">Jelajahi Informasi</button>




    .card {
        border-radius: 14px;
        transition: 0.15s ease-in-out;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }

    .hero-section {
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }
</style>


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

        <a class="navbar-brand fw-bold fs-4" href="<?php echo e(route('home')); ?>">
            IMNTT
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navMenu" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto gap-2">
                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs('home') ? 'active-nav' : ''); ?>"
                       href="<?php echo e(route('home')); ?>">
                       Home
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs('informasi.*') ? 'active-nav' : ''); ?>"
                       href="<?php echo e(route('informasi.index')); ?>">
                       Informasi
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs('agenda.*') ? 'active-nav' : ''); ?>"
                       href="<?php echo e(route('agenda.index')); ?>">
                       Agenda
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs('gallery') ? 'active-nav' : ''); ?>"
                       href="<?php echo e(route('gallery')); ?>">
                       Dokumentasi
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link <?php echo e(request()->routeIs('kontak') ? 'active-nav' : ''); ?>"
                       href="<?php echo e(route('kontak')); ?>">
                       Kontak
                    </a>
                </li>
            </ul>

            <form class="d-flex" action="<?php echo e(route('search')); ?>" method="get">
                <input class="form-control me-2" name="q" placeholder="Cari..." value="<?php echo e(request('q')); ?>">
                <button class="btn btn-light" type="submit">Cari</button>
            </form>
            

        </div>
    </div>
</nav>
<button id="themeToggle" class="btn btn-outline-light ms-3">
    🌙
</button>


<div class="container">
    <?php if(session('success')): ?>
      <div class="alert alert-success"><?php echo e(session('success')); ?></div>
    <?php endif; ?>

    <?php echo $__env->yieldContent('content'); ?>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<footer class="mt-5 py-4 text-center text-muted" style="background:#f1f3f5;">
    <div class="container">
        <p class="mb-0">&copy; <?php echo e(date('Y')); ?> IMNTT — Ikatan Mahasiswa Nusa Tenggara Timur</p>
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
<?php /**PATH C:\laravel\tubes-ppl\resources\views/layouts/app.blade.php ENDPATH**/ ?>