import { useRef } from 'react';
import './Modal.css';
function Modal({children, className}) {
    
    const dialogRef = useRef();

    return (
        <>
        <button className={className} onClick={ () =>{
            dialogRef.current.showModal();
        }}>Log in</button>
        
        <dialog className={className} ref={dialogRef}>
            {children}
            <button className="dialog__form--closeButton" onClick={ () => {
                dialogRef.current.close();
            }}>Closed</button>
        </dialog>
        </>
    );
}

export default Modal;