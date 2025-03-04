import no_projects from '../assets/no-projects.png';

export default function NoProject({onAddProject}) {
    return (
        <div className="mx-auto flex flex-col items-center mt-8">
            <img src={no_projects} className="w-16 h-16 object-contain mx-auto" />
            <h1 className="text-xl font-bold text-stone-600">No Project Selected</h1>
            <p className="text-stone-600 my-4">Select a project or get started with a new one</p>
            <button onClick={onAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create new project</button>
        </div>
    );
}