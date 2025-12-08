<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use Illuminate\Http\Request;

class AgendaController extends Controller
{
    public function index()
    {
        $items = Agenda::orderBy('start_at','desc')->paginate(10);
        return view('admin.agendas.index', compact('items'));
    }

    public function create()
    {
        return view('admin.agendas.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'=>'required|string|max:255',
            'location'=>'nullable|string|max:255',
            'start_at'=>'nullable|date',
            'end_at'=>'nullable|date|after_or_equal:start_at',
            'description'=>'nullable|string',
            'image'=>'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('agendas','public');
        }

        Agenda::create($data);
        return redirect()->route('admin.agendas.index')->with('success','Agenda dibuat.');
    }

    public function edit(Agenda $agenda)
    {
        return view('admin.agendas.edit', compact('agenda'));
    }

    public function update(Request $request, Agenda $agenda)
    {
        $data = $request->validate([
            'title'=>'required|string|max:255',
            'location'=>'nullable|string|max:255',
            'start_at'=>'nullable|date',
            'end_at'=>'nullable|date|after_or_equal:start_at',
            'description'=>'nullable|string',
            'image'=>'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($agenda->image) \Storage::disk('public')->delete($agenda->image);
            $data['image'] = $request->file('image')->store('agendas','public');
        }

        $agenda->update($data);
        return redirect()->route('admin.agendas.index')->with('success','Agenda diperbarui.');
    }

    public function destroy(Agenda $agenda)
    {
        if ($agenda->image) \Storage::disk('public')->delete($agenda->image);
        $agenda->delete();
        return redirect()->route('admin.agendas.index')->with('success','Agenda dihapus.');
    }
}
