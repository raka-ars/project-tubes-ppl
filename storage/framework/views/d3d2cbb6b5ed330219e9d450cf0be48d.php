

<?php $__env->startSection('content'); ?>

<div class="container">

    <div class="text-center mb-5">
        <h1 class="fw-bold">Agenda Kegiatan</h1>
        <p class="text-muted">Rencana dan catatan kegiatan IMNTT</p>
    </div>

    <?php $__currentLoopData = $items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $g): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="card shadow-sm mb-4 border-0">
        <div class="card-body">

            <h4 class="fw-bold">
                <a href="<?php echo e(route('agenda.show', $g->id)); ?>" class="text-dark text-decoration-none">
                    <?php echo e($g->title); ?>

                </a>
            </h4>

            <div class="text-muted small mb-2">
                <?php echo e($g->start_at?->format('d M Y H:i')); ?>

                <?php if($g->location): ?> • <?php echo e($g->location); ?> <?php endif; ?>
            </div>

            <p class="text-muted"><?php echo e(Str::limit($g->description, 160)); ?></p>

            <a href="<?php echo e(route('agenda.show', $g->id)); ?>" class="btn btn-primary btn-sm">
                Lihat detail →
            </a>

        </div>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    <div class="mt-4">
        <?php echo e($items->links()); ?>

    </div>

</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\HP-PC\Documents\project-tubes-ppl\resources\views/public/agenda/index.blade.php ENDPATH**/ ?>