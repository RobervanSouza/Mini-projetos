const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente",
    tipo: "Glass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    nome: "Charmander ",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },

  {
    id: 3,
    nome: "Squirtle",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

/* rotas*/
 
let pokemon = undefined;
app.get("/", (req, res) => {
    
  res.render("index", { pokedex, pokemon });
});

app.post("/creat", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);

  res.redirect("/");
});

 app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
 pokemon= pokedex.find(pokemon => pokemon.id === id );
 res.redirect("/");


 });
app.post("/update/:id", (req, res) => {
const id = +req.params.id -1;
const newPokemon = req.body;
newPokemon.id = id +1;
pokedex[id] = newPokemon;
pokemon=undefined;

  res.redirect("/");
});
app.listen(3000, () =>
  console.log(" Servidor rodando em http://localhost:3000")
);
