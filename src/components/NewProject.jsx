import { useState } from "react";

export default function NewProject({ onCancel, projects, onSubmit }) {
    var curr = new Date();
    var date = curr.toISOString().split("T")[0];

    const [addedProject, setAddedProject] = useState({
        title: '',
        description: '',
        date: date,
        tasks: []
    })

    function handleChange(identifier, value) {
        setAddedProject((prev) => {
            return {
                ...prev,
                [identifier]: value
            }
        })
    }


    return (
        <form className="mt-4 mx-auto" onSubmit={(event) => { onSubmit(addedProject, event) }}>
            <span className="flex justify-end">
                <button onClick={onCancel} className="px-6 py-2 rounded-md text-stone-800  hover:bg-stone-200 ">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </span>
            <label className="text-sm font-bold uppercase text-stone-500">Title</label>
            <input required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" value={addedProject.title} onChange={(event) => { handleChange("title", event.target.value) }} />
            <label className="text-sm font-bold uppercase text-stone-500">Description</label>
            <textarea required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" value={addedProject.description} onChange={(event) => { handleChange("description", event.target.value) }} />
            <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <input id="date" type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" value={addedProject.date} onChange={(event) => { handleChange("date", event.target.value) }} />
        </form>
    ); 
}