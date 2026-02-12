import "./ProfilCard.css";

function ProfilCard(
 { name,
  organization,
  attacksCount,
  status,
  relationToIsraelSummary,
  imageUrl,}
) {
  return (
    <tr>
      <td>
    <img src={imageUrl} alt="" /> 
        {name} 
      </td>
      <td>{organization}</td>
      <td>{attacksCount}</td>
      <td>{status}</td>
      <td>{relationToIsraelSummary}</td>
    </tr>
  );
}

export default ProfilCard;
