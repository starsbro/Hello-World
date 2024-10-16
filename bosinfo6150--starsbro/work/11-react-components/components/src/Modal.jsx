import { useRef } from 'react';

function Modal({children, className}) {
    
    const dialogRef = useRef();

    return (
        <>
        <button className={className} onClick={ () =>{
            dialogRef.current.showModal();
        }}>Open Modal</button>
        
        <dialog ref={dialogRef}>
            {children}
            <button onClick={ () => {
                dialogRef.current.close();
            }}>Close</button>
        </dialog>
        </>
    );
}

export default Modal;