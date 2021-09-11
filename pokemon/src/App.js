import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from "../src/assets/bg1.jpeg"
import bg3 from "../src/assets/bg3.jpeg"
import PokemonCard from "./components/PokemonCard/PokemonCard";

import Pokemons from "./data.json"

function App() {
  return (
      <>
          <Header title='Pokemon Game' descr='This is Description!'/>
          <Layout title='Rules' descr='Read to start the game' urlBg={bg1} colorBg={null}>
              <p>
                  In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                  Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

                  To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                  To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                  If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
                  If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
              </p>
          </Layout>
          <Layout title='Cards' descr='Descr2' urlBg={null} colorBg='#e2e2e2'>
              <div className="flex">
              {Pokemons.map((item, index) => <PokemonCard
                  key={index}
                  id={item.id}
                  img={item.img}
                  type={item.type}
                  values={item.values}
                  name={item.name}
                  />)}
              </div>
          </Layout>
          <Layout title='Title3' descr='Descr3' urlBg={bg3} colorBg={null} />
          <Footer/>
      </>
  );
}

export default App;
