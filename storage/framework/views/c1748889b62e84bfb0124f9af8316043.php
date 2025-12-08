

<?php $__env->startSection('content'); ?>

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

        <a href="<?php echo e(route('home')); ?>" class="btn btn-primary mt-3">← Kembali</a>
    </div>

</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\HP-PC\Documents\project-tubes-ppl\resources\views/public/kontak.blade.php ENDPATH**/ ?>