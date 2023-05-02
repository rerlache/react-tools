export default class Cell {
  #id;
  #x;
  #y;
  #tile;
  #mergeTile

  constructor(id, x, y) {
    this.#id = id;
    this.#x = x;
    this.#y = y;
  }
  get id() {
    return this.#id;
  }
  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }
  get tile() {
    return this.#tile;
  }
  set tile(value) {
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }
  get mergeTile() {
    return this.#mergeTile;
  }

  set mergeTile(value) {
    this.#mergeTile = value;
    if (value == null) return;
    this.#mergeTile.x = this.#x;
    this.#mergeTile.y = this.#y;
  }
  canAccept(tile) {
    return (
      tile == null || (mergeTiles() == null && this.tile.value === tile.value)
    );
  }
  mergeTiles() {
    if (this.tile == null || this.mergeTile == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    this.mergeTile.remove();
    this.mergeTile = null;
  }
}
