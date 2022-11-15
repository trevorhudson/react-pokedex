import "./App.css";
import { split } from "./helper";
import Pokedex from "./Pokedex";
import pokemon from "./pokemon";
function App() {
  const [firstHalf, secondHalf] = split(pokemon);
  const firstHalfExp = firstHalf.reduce((acc, p) => acc + p.base_experience, 0);
  const secondHalfHalfExp = secondHalf.reduce(
    (acc, p) => acc + p.base_experience,
    0
  );

  return (
    <div className="App">
      <Pokedex
        pokemon={firstHalf}
        totalExp={firstHalfExp}
        isWinner={firstHalfExp > secondHalfHalfExp ? true : false}
      />
      <Pokedex
        pokemon={secondHalf}
        totalExp={secondHalfHalfExp}
        isWinner={secondHalfHalfExp > firstHalfExp ? true : false}
      />
    </div>
  );
}

export default App;
