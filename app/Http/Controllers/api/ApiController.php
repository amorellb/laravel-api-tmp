<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Contact[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index()
    {
//        return view('apiView');
//        return "Ejecutando api";
        $contacts = Contact::all();
        return $contacts;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request['slug'] = Str::slug($request->name, '-');
        Contact::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);
        return response()->json(['Contact successfully added'], );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return Contact::find($contact);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Contact $contact)
    {
        $editedContact = $request->all();
        $contact->update($editedContact);
        return response()->json(['Contact successfully updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(['Contact successfully deleted']);
    }
}
