import { Modale } from "./components/Modale";
import { useEffect, useState } from "react";

export default function App() {

    const [displayModale, setDisplayModale] = useState(false);
    useEffect(() => {
       setDisplayModale(true)
    },[])

  return (
    <div>
        {displayModale && <Modale setDisplayModale={setDisplayModale}/>}
    </div>
  );
}