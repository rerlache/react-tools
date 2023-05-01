import React, { useEffect, useState } from "react";
import Style from "../2048.module.css";
import Tile from "./Tile";

const GRID_SIZE = 4;
const CELL_SIZE = "10vmin";
const CELL_GAP = "1.5vmin";

export function getCells(){
  return Board.cells
}

export default function Board() {
  const [cells, setCells] = useState([]);
  useEffect(() => {
    if (cells.length < GRID_SIZE * GRID_SIZE) {
      createCells();
    }
  }, []);
  function createCells() {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const cell = new Cell(i, i % GRID_SIZE, Math.floor(i / GRID_SIZE));
      setCells((cells) => [...cells, cell]);
    }
  }
  function getCellsByRow() {
    return cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || []
      cellGrid[cell.y][cell.x] = cell
      return cellGrid
    }, [])
  }
  function getCellsByColumn() {
    return cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell
      return cellGrid
    }, [])
  }
  document.documentElement.style.setProperty("--grid-size", GRID_SIZE);
  document.documentElement.style.setProperty("--cell-size", CELL_SIZE);
  document.documentElement.style.setProperty("--cell-gap", CELL_GAP);
  getCellsByRow()
  getCellsByColumn()
  console.log(getCellsByColumn())
  return (
    <div id={`${Style["game-board"]}`}>
      {cells.map((cell) => {
        return <div id={cell.id} key={cell.id} className={Style.cell}></div>
      })}
    </div>
  );
}

class Cell {
  #id;
  #x;
  #y;

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
}
