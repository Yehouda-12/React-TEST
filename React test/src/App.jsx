import { useState } from "react";

import "./App.css";

import terrorists from "./terrorists_data.json";
import Table from "./componements/Table";
import Header from "./componements/Header";

function App() {
  const [dataterrorists, setTerrorists] = useState(terrorists);
  const [filter, setFilter] = useState("all");


  const max = Math.max(...dataterrorists.map(o => o.attacksCount));
  


  function filteredTerrorist(dataTerrorist) {
    if (filter === "all") return dataterrorists;
 else if (filter ==='dangerous'){
  return dataTerrorist.filter((ter) => ter.status === "active" &&
                                       ter.attacksCount=== max &&
                                      ter.imageUrl) 
 }
    else if (filter === "Active") {
      return dataTerrorist.filter((ter) => ter.status === "active");
    } else if (filter === "Quiet") {
      return dataTerrorist.filter((ter) => ter.status === "quiet");
    } else if (filter === "Dead") {
      return dataTerrorist.filter((ter) => ter.status === "dead");
    } else if (filter === "Israeli agent") {
      return dataTerrorist.filter((ter) => ter.status === "agent");
    }
    return dataTerrorist.filter(
      (ter) =>
        ter.name.toLowerCase().includes(filter) || ter.attacksCount === +filter,
    );
  }

  const filterTerrorist = filteredTerrorist(dataterrorists);

  return (
    <>
      <Header setFilter={setFilter} />
      <main>
        <Table dataTerrorist={filterTerrorist} />
      </main>
    </>
  );
}

export default App;
