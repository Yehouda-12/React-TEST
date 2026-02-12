
import ProfilCard from "./ProfilCard";
import "./Table.css";

function Table({dataTerrorist}) {
  
  return (
    <table id="table" className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Organisation</th>
          <th>Attacks</th>
          <th>Status</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {dataTerrorist?.map((ter,index) => (

            <ProfilCard
            key={index}
            name={ter.name}
            organization={ter.organization}
            attacksCount={ter.attacksCount}
            status={ter.status}
            relationToIsraelSummary={ter.relationToIsraelSummary}
            imageUrl={`https://i.pravatar.cc/150?img=${index}`}
            />
        )
        
        )}
      </tbody>
    </table>
  );
}

export default Table;
