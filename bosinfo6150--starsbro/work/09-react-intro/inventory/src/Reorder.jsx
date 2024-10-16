import './Reorder.css';

function Reorder({onReorder}) {
    
    return (
        <div>
            <button className="reorder" onClick={onReorder}>Reorder</button>
            {/* callback to modify the ancestors state */ }
        </div> 
    );
}

export default Reorder;