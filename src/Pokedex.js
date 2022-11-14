import Pokecard from "./Pokecard";

/** Renders a sequence of Pokemon
 * Takes in an array of Pokemon objects
 */
function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map(p =>
        <Pokecard id={p.id}
          name={p.name}
          exp={p.base_experience}
          type={p.type} />)
      }
    </div>
  );

}

export default Pokedex;