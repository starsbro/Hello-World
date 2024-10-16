import { useState } from 'react';
import './App.css';

import Reorder from './Reorder';

function App() {
  const [inventoryCount, setInventoryCount] = useState(0);

  return (
    <>
      <h1>Inventory state</h1>

      <div className="card">
        <p className="inventory-count"> The inventory count is {inventoryCount}</p>
        <button onClick={() => setInventoryCount(inventoryCount + 1)}>+</button>
        <button onClick={() => setInventoryCount(inventoryCount - 1) } disabled={!inventoryCount}>-</button>

        {inventoryCount === 0 && <Reorder onReorder={() => setInventoryCount(5)}/> }
        {/* the passed "onReorder" prop is a function that takes no arguments */}
      </div>

    </>
  )
}

export default App;
