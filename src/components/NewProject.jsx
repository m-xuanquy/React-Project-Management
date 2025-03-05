import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewProject({ onCancel, onSubmit }) {
    var curr = new Date();
    var defaultDate = curr.toISOString().split("T")[0];

    const dialog = useRef();
    const [response, setResponse] = useState({
        success: false,
        msg: ''
    });

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleReset() {
        title.current.value = "";
        description.current.value = "";
        date.current.value = defaultDate;
    }

    function validateInput(title, description, date) {
        if (!title) {
            return ({
                success: false,
                msg: "Title is invalid"
            })
        }

        if (!description) {
            return ({
                success: false,
                msg: "Description is invalid"
            })
        }

        if (Date.parse(date) < Date.parse(defaultDate)) {
            return ({
                success: false,
                msg: "Due date is invalid"
            })
        }

        return ({
            success: true,
            msg: "Successfully created a project"
        })
    }

    function handleSave(event) {
        event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        let currResponse = validateInput(enteredTitle, enteredDescription, enteredDate) 
        setResponse(currResponse)
        console.log(currResponse)


        if (currResponse.success) {
            onSubmit({
                title: enteredTitle,
                description: enteredDescription,
                date: enteredDate,
                tasks: []
            })
            console.log("success subbmitted")
        }
        console.log("subbmitted")

        dialog.current.open();


    }

    return (
        <>
            <Modal ref={dialog} response={response} onReset={handleReset}></Modal>

            <form className="mt-4 mx-auto" onSubmit={(event) => { handleSave(event) }}>
                <span className="flex justify-end">
                    <button onClick={onCancel} className="px-6 py-2 rounded-md text-stone-800  hover:bg-stone-200 ">Cancel</button>
                    <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </span>
                <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                <input ref={title} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                <textarea ref={description} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                <input id="date" ref={date} type="date" defaultValue={defaultDate} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </form>
        </>
    );
}