import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Loader from "./components/extras/loader";
import { useEffect, useState } from "react";

function App() {
  const [loadTrans, setLoadTrans] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [isSecondary, setSecondary] = useState(false);
  const [isTertary, setTertary] = useState(false);

  useEffect(() => {
    if (loadTrans) {
      setFirstLoad(true);
    }
  }, [loadTrans]);

  return (
    <>
      <div className="bg-primary">
        <Loader isOn={loadTrans} firstLoad={firstLoad} />
        <Navbar
          setLoadTrans={(e) => {
            setLoadTrans(e);
          }}
          loadTrans={loadTrans}
          isSecondary={isSecondary}
          isTertary={isTertary}
        />
        <Home setSecondary={(e) => setSecondary(e)} setTertary={(e) => setTertary(e)} />
      </div>
    </>
  );
}

export default App;
