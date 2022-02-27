<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contacts = [
            ['name' => 'Bernat Smith', 'email' => 'bernat@email.com', 'phone' => 123456784, 'address' => 'Calle 123'],
            ['name' => 'Margalida Johnson', 'email;' => 'mjohnson@email.com', 'phone' => 987654321, 'address' => 'Calle calle 321'],
            ['name' => 'Miquel Jackson', 'email' => 'mjackson@email.com', 'phone' => 123432123, 'address' => 'calle 123, street'],
        ];

        DB::table('contacts')->insert($contacts);
    }
}
