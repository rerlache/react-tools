import React, { useEffect, useState } from "react";
import Style from "../2048.module.css";
import Tile from "../classes/Tile";
import Cell from "../classes/Cell";
import { setCSSVariables, setTileLightness, GRID_SIZE } from "../helper";

export default function Board() {
  const [cells, setCells] = useState([]);
  const [tiles, setTiles] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);
  useEffect(() => {
    if (cells.length < GRID_SIZE * GRID_SIZE) {
      createCells();
    }
    window.addEventListener("keydown", handleKeyPress);
  }, []);
  async function handleKeyPress(e) {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        console.log("can move up", canMove(getCellsByColumn()));
        break;
      case "ArrowDown":
      case "s":
        console.log(
          "can move down",
          canMove(getCellsByColumn().map((column) => [...column].reverse()))
        );
        break;
      case "ArrowLeft":
      case "a":
        console.log("can move left", canMove(getCellsByRow()));
        break;
      case "ArrowRight":
      case "d":
        console.log(
          "can move right",
          canMove(getCellsByRow().map((row) => [...row].reverse()))
        );
        break;
      default:
        break;
    }
  }
  function createCells() {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const cell = new Cell(i, i % GRID_SIZE, Math.floor(i / GRID_SIZE));
      setCells((cells) => [...cells, cell]);
    }
  }
  function getCellsByRow() {
    return cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || [];
      cellGrid[cell.y][cell.x] = cell;
      return cellGrid;
    }, []);
  }
  function getCellsByColumn() {
    return cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, []);
  }
  function getEmptyCells() {
    return cells.filter((cell) => cell.tile == null);
  }
  function getRandomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * getEmptyCells().length);
    return getEmptyCells()[randomIndex];
  }
  function startGame() {
    for (let i = 0; i < 2; i++) {
      const tile = new Tile();
      const cell = getRandomEmptyCell();
      cell.tile = tile;
      tile.x = cell.x;
      tile.y = cell.y;
      setTiles((tiles) => [...tiles, tile]);
    }
    console.log("tiles", tiles);
    setGameRunning(true);
  }

  function canMove(cells) {
    console.log("cells", cells);
    return cells.some((group) => {
      console.log("group", group);
      return group.some((cell, index) => {
        console.log("index", index);
        console.log("cell", cell);
        if (index === 0) return false;
        if (cell.tile === null) return false;
        console.log("group index-1", group[index - 1]);
        const moveToCell = group[index - 1];
        return moveToCell.canAccept(cell.tile);
      });
    });
  }

  setCSSVariables();
  return (
    <>
      {gameRunning === false && <button onClick={startGame}>Start Game</button>}
      <div id={`${Style["game-board"]}`}>
        {cells.map((cell) => {
          return (
            <div id={cell.id} key={cell.id} className={Style.cell}>
              {cell.tile && (
                <div
                  className={Style.tile}
                  style={setTileLightness(cell.tile.value)}
                >
                  {cell.tile.value}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
