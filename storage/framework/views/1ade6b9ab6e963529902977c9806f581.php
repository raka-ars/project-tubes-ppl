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
</body>
</html>
<?php /**PATH C:\Users\HP-PC\Documents\project-tubes-ppl\resources\views/layouts/app.blade.php ENDPATH**/ ?>