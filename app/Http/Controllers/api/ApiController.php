<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $contacts = Contact::all();
        return response()->json(['msg' => 'Contacts shown successfully', 'data' => $contacts]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);
        return response()->json(['msg' => 'Contact added successfully', 'data' => $contact]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        return response()->json(['msg' => 'Contact with id: ' .$id . ' shown successfully', 'data' => Contact::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Contact $contact
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $contact = Contact::find($id);
        $editedContact = $request->all();
        $contact->update($editedContact);
        return response()->json(['Contact with id: ' .$id . ' updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Contact $contact
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $contact = Contact::find($id);

        $contact->delete();
        return response()->json(['Contact with id: ' .$id . ' deleted successfully' ]);
    }
}
