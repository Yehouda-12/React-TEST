
import "./Header.css";

function Header({ setFilter }) {

       function handleSubmit(e) {
    e.preventDefault();
    
  }


  return (
    <form className="form"  onSubmit={handleSubmit}>
      <input type="text" placeholder="Search by name" onChange={(e) => setFilter(e.target.value)} />


      <input type="number" placeholder="Search by number of attacks" onChange={(e) => setFilter(e.target.value)}/>
      <div className="filter-option">
        <label>Search by filter:</label>
        <select id="terrorist-filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All </option>
          <option value="Active">
            Active{" "}
          </option>
          <option value="Quiet">
            Quiet{" "}
          </option>
          <option value="Dead">
            Dead
          </option>
          <option
            value="Israeli agent"
          >
            Israeli Agent
          </option>
        </select>
      </div>
    
      <button value= 'dangerous' onClick={(e) => setFilter(e.target.value)}  >Find Most dangerous Terrorist</button>
     
    </form>
  );
 
}

export default Header;
