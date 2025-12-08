<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id','title','slug','excerpt','body','image','published_at'
    ];

    protected $dates = ['published_at'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->slug)) {
                $model->slug = Str::slug($model->title).'-'.time();
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
