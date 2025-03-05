import { useRef } from "react";

export default function NewProject({ onCancel, onSubmit }) {
    var curr = new Date();
    var defaultDate = curr.toISOString().split("T")[0];

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(event) {
        event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        onSubmit({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate, 
            tasks: []
        })
    }

    return (
        <form className="mt-4 mx-auto" onSubmit={(event) => { handleSave(event) }}>
            <span className="flex justify-end">
                <button onClick={onCancel} className="px-6 py-2 rounded-md text-stone-800  hover:bg-stone-200 ">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </span>
            <label className="text-sm font-bold uppercase text-stone-500">Title</label>
            <input required ref={title} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            <label className="text-sm font-bold uppercase text-stone-500">Description</label>
            <textarea required ref={description} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <input id="date" ref={date} type="date" defaultValue={defaultDate} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        </form>
    ); 
}