export default function Sidebar({ onAddProject, projects, onSelectProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <label className="text-xl font-bold uppercase">Your Projects</label>
            <button onClick={onAddProject} className="mt-8 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>

            <ul className="mt-8">
                {projects.map(project => <button key={project.title} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800" onClick={()=>{onSelectProject(project)}}>
                    {project.title}
                </button>)}
            </ul>
        </aside>
    );
}