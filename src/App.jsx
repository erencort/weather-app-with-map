import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "#4F709C" }}>
      <div className="container mx-auto tablet:h-full desktop:h-screen">
        <Home />
      </div>
    </div>
  );
}

export default App;
