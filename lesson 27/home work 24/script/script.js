const TILES = [];

function initGame() {
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  tilesContainer.addEventListener("click", onTileClick);
  TILES.length = 0; // clear all tiles in the array
  let tileIndex = 0;
  const randomIndex = getRandomIndex();
  for (let i = 0; i < 4; i++) {
    TILES[i] = [];
    for (let j = 0; j < 4; j++) {
      tileIndex = randomIndex();
      TILES[i].push(createTileEl(tileIndex));
    }
  }
  test ();

  renderTiles();
}

function test () {
  // let valueCount = 0;
  let myCount = document.getElementById("strokeCounter");
  myCount.textContent = `Stroke counter ${valueCount}`;
}

function getRandomIndex() { //рандомит поля плиточек
  let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return function () {
    const randomIndex = Math.floor(Math.random() * availableIdx.length);
    const val = availableIdx[randomIndex];
    availableIdx = availableIdx.filter((el) => el !== val);
    return val;
  };
}

function createTileEl(text) { //создание 1 плиточки
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.textContent = text;
  return tile;
}

function renderTiles() { // рендерет тайлы
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      tilesContainer.append(TILES[i][j]);
    }
  }
}

function onTileClick(e) {//обработка клика на одной плиточке
  if (e.target.classList.contains("tile")) {
    const id = +e.target.textContent;
    if (id) {
      swapTiles(id);
    }
  }
  renderTiles();
}

function swapTiles(id) {

  const [tileX, tileY] = findTileCoordById(id);
  const [emptyX, emptyY] = findEmptyTileCoords();

  // are they neibors
  if (
    (tileX === emptyX && Math.abs(tileY - emptyY) === 1) ||
    (tileY === emptyY && Math.abs(tileX - emptyX) === 1)
  ) {
    const temp = TILES[tileX][tileY];
    TILES[tileX][tileY] = TILES[emptyX][emptyY];
    TILES[emptyX][emptyY] = temp;
  }
}

function findEmptyTileCoords() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent === "") {
        return [i, j];
      }
    }
  }
}

function findTileCoordById(id) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent == id) {
        return [i, j];
      }
    }
  }
}