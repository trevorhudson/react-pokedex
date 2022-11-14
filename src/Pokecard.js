
const img_url = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
/** Shows a single Pokemon, with their name, image, and type.
*/
// move img url to global
function Pokecard({ id, name, type, exp }) {
  //line break after return
  return <div className="Pokecard">
    <h2>{name}</h2>
    <img src={img_url(id)} />
    <p>Type: {type}</p>
    <p>Exp: {exp}</p>
  </div>;
}

export default Pokecard;