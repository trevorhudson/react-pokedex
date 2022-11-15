import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Renders a sequence of Pokemon
 * Takes in an array of Pokemon objects
 */
function Pokedex({ pokemon, totalExp, isWinner }) {
  return (
    <div className="Pokedex">
      <h2>{totalExp}</h2>
      <div>
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            exp={p.base_experience}
            type={p.type}
          />
        ))}
      </div>
      <p>{isWinner ? "THIS HAND WINS!" : "Loser"}</p>
    </div>
  );
}

export default Pokedex;
