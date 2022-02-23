<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory;
    use softDeletes;

    public $table = 'contacts';

    protected $fillable = ['name', 'email', 'phone', 'address'];
}
