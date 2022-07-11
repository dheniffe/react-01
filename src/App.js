import React, { Component } from "react";
import FavoriteFruit from "./assets/maracuja.jpg"

class App extends Component {
  state = {
    name: "Yasmin",
    age: 21,
    favoriteFruit: "Hambúrguer",
    musics: ["Eu tô bem", "Sem filtro", "Dezembro de 81"],
  };

  render() {
    return (
      <section>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.favoriteFruit}</h3>
        <ol>
          <li>{this.state.musics[0]}</li>
          <li>{this.state.musics[1]}</li>
          <li>{this.state.musics[2]}</li>
        </ol>
        <img src={FavoriteFruit} alt="maracujás"/>
      </section>
    );
  }
}

export default App;

// Adicione uma imagem da sua fruta favorita via import
