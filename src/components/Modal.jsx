import {  useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ response, ref, onReset }) {
    const dialog = useRef();


    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();

            }
        }
    })

    return createPortal(
        <dialog ref={dialog} onClose={onReset} className="text-center bg-stone-400 top-10 rounded-md p-4">
            {response.success && <h2 className="text-green-800 font-bold uppercase">Success</h2>}
            {!response.success && <h2 className="text-red-700 font-bold uppercase">Error</h2>}

            <p>{response.msg}</p>
            <form method="dialog" onSubmit={onReset}>
                <button className="px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">X</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
}