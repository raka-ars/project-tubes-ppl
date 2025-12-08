<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'title','location','start_at','end_at','description','image'
    ];

    protected $dates = ['start_at','end_at'];
}
