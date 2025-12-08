

<?php $__env->startSection('content'); ?>

<div class="container">

    
    <div class="text-center mb-5">
        <h1 class="fw-bold">Informasi & Pengumuman</h1>
        <p class="text-muted">Kumpulan informasi terbaru dari IMNTT</p>
    </div>

    <div class="row">

        
        <div class="col-md-8">

            <?php $__currentLoopData = $items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="card shadow-sm mb-4 border-0 info-card">
                <div class="card-body">
                    <h4>
                        <a href="<?php echo e(route('informasi.show', $item->slug)); ?>"
                           class="text-dark fw-bold text-decoration-none">
                           <?php echo e($item->title); ?>

                        </a>
                    </h4>

                    <div class="text-muted small mb-2">
                        <?php echo e($item->published_at?->format('d M Y')); ?>

                        <?php if($item->category): ?> • <?php echo e($item->category->name); ?> <?php endif; ?>
                    </div>

                    <p class="text-muted"><?php echo e($item->excerpt); ?></p>

                    <a href="<?php echo e(route('informasi.show', $item->slug)); ?>" class="btn btn-primary btn-sm">
                        Baca selengkapnya →
                    </a>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            <div class="mt-4">
                <?php echo e($items->links()); ?>

            </div>

        </div>

        
        <div class="col-md-4">
            <div class="card shadow-sm border-0 p-3">
                <h5 class="fw-bold">Kategori</h5>
                <ul class="list-group list-group-flush mt-2">
                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $c): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li class="list-group-item">
                        <a href="<?php echo e(route('informasi.index', ['category'=>$c->id])); ?>"
                           class="text-dark text-decoration-none">
                            <?php echo e($c->name); ?>

                        </a>
                    </li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
            </div>
        </div>

    </div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\laravel\tubes-ppl\resources\views/public/informasi/index.blade.php ENDPATH**/ ?>