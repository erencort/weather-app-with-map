import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: "130vh", backgroundColor: "#4F709C" }}>
      <div className="container mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
