

<?php $__env->startSection('content'); ?>




<div class="hero-section position-relative mb-5" 
     style="
        width:100%; 
        height:420px;
        background-image: url('<?php echo e(asset('images/hero.jpg')); ?>');
        background-size: cover;
        background-position: center;
        border-radius: 14px;
        overflow: hidden;
     ">

    
    <div class="position-absolute top-0 start-0 w-100 h-100" 
         style="background: rgba(0,0,0,0.45);">
    </div>

    
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
        <h1 class="fw-bold display-5 mb-2">Pusat Informasi IMNTT</h1>
        <p class="lead mb-3">Temukan pengumuman, agenda, dan dokumentasi kegiatan IMNTT.</p>

        <a href="<?php echo e(route('informasi.index')); ?>" class="btn btn-light btn-lg shadow-sm">
            Lihat Pengumuman
        </a>
    </div>

</div>




<div class="container">

    <div class="row">

        
        
        
        <div class="col-md-8">

            <h3 class="fw-bold mb-3">📢 Pengumuman Terbaru</h3>

            <?php $__empty_1 = true; $__currentLoopData = $latest; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $a): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <div class="card shadow-sm mb-4 border-0">
                <div class="card-body">
                    <h5 class="fw-bold">
                        <a href="<?php echo e(route('informasi.show', $a->slug)); ?>" 
                           class="text-decoration-none text-dark">
                           <?php echo e($a->title); ?>

                        </a>
                    </h5>

                    <div class="text-muted small mb-2">
                        <?php echo e($a->published_at?->format('d M Y')); ?>

                    </div>

                    <?php if($a->excerpt): ?>
                    <p class="text-muted"><?php echo e($a->excerpt); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <p class="text-muted">Belum ada pengumuman.</p>
            <?php endif; ?>



            
            
            
            <h3 class="fw-bold mt-5 mb-3">📅 Agenda Mendatang</h3>

            <?php $__empty_1 = true; $__currentLoopData = $upcoming; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $g): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <div class="card shadow-sm mb-4 border-0">
                <div class="card-body">
                    <h5 class="fw-bold">
                        <a href="<?php echo e(route('agenda.show', $g->id)); ?>" 
                           class="text-decoration-none text-dark">
                           <?php echo e($g->title); ?>

                        </a>
                    </h5>

                    <div class="text-muted small mb-2">
                        <?php echo e($g->start_at?->format('d M Y H:i')); ?>

                        <?php if($g->location): ?> • <?php echo e($g->location); ?> <?php endif; ?>
                    </div>

                    <?php if($g->description): ?>
                    <p class="text-muted"><?php echo e(\Illuminate\Support\Str::limit($g->description, 120)); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <p class="text-muted">Belum ada agenda.</p>
            <?php endif; ?>

        </div>



        
        
        
        <div class="col-md-4">
            <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
                <div class="card-body">
                    <h5 class="fw-bold">🏛 Profil Organisasi</h5>

                    <p class="text-muted mb-3">
                        Ikatan Mahasiswa Nusa Tenggara Timur (IMNTT) adalah organisasi yang mewadahi mahasiswa 
                        asal NTT untuk berkarya dalam kegiatan sosial, akademik, dan budaya.
                    </p>

                    <a href="<?php echo e(route('kontak')); ?>" class="btn btn-primary w-100">
                        Hubungi Pengurus
                    </a>
                </div>
            </div>
        </div>

    </div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\project-tubes-ppl\resources\views/public/home.blade.php ENDPATH**/ ?>