import "./App.css";

import Header from "./Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./Components/Punklist";
import Main from "./Components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNFTS = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xb229427f9257aDA2c2C2021f694509409004cEBD&order_direction=asc&offset=0"
      );
      //console.log(selectedPunk);
      // console.log(punkListData);
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    return getNFTS();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
