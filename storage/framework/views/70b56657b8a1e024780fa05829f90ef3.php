

<?php $__env->startSection('content'); ?>

<div class="container">

    <div class="text-center mb-5">
        <h1 class="fw-bold">Dokumentasi Kegiatan</h1>
        <p class="text-muted">Foto-foto kegiatan IMNTT</p>
    </div>

    <div class="row">
        <?php $__currentLoopData = $photos; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm border-0">
                <img src="<?php echo e(asset('storage/'.$p->filename)); ?>" 
                     class="card-img-top"
                     style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <h6 class="fw-bold"><?php echo e($p->title); ?></h6>
                    <p class="text-muted small"><?php echo e($p->caption); ?></p>
                </div>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>

    <?php echo e($photos->links()); ?>


</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\HP-PC\Documents\project-tubes-ppl\resources\views/public/gallery.blade.php ENDPATH**/ ?>