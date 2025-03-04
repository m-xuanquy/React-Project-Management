import { useState } from 'react'

export default function SelectedProject({ project, onDelete }) {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    console.log(tasks);

    function handleAddTask(event) {
        event.preventDefault();
        setTasks((prevTasks) => [taskName, ...prevTasks])
        project.tasks.push(taskName);
    }

    function handleDeleteTask(task) {
        setTasks((prevTasks) => prevTasks.filter(item => item !== task))
    }

    return (
        <div className="w-2/3 flex flex-col">
            <div className="w-full flex flex-row justify-between px-auto h-fit">
                <div className="flex flex-col">
                    <label className="text-2xl font-bold uppercase">{project.title}</label>
                    <label className="text-sm text-stone-600">{project.date}</label>
                </div>
                <button onClick={() => onDelete(project)} className="px-6 py-2 rounded-md text-stone-800  hover:text-red-500 ">Delete</button>
            </div>

            <div className="flex flex-col border-b-2 border-stone-300">
                {/* <p className="text-stone-800 my-4">Title</p> */}
                <p className="text-stone-800 my-4">{project.description}</p>
            </div>

            <div className="flex flex-col pt-10">
                <label className="text-2xl font-bold uppercase">Tasks</label>
                <form className="mt-4 text-left" onSubmit={handleAddTask}>
                    <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={(event) => { setTaskName(event.target.value) }} />
                    <button type="submit" className="px-6 py-2 rounded-md text-stone-800  hover:text-blue-500 ">Add Task</button>
                </form>
            </div>

            <ul className="px-9 mt-8 rounded-md bg-stone-100">
                {project.tasks.map((task) =>
                    <li key={task} className="flex justify-between my-1">
                        <p className="text-stone-800 my-4">{task}</p>
                        <button onClick={()=> handleDeleteTask(task)} className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>)}
            </ul>
        </div>
    );
}