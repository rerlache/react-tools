import React, { useEffect, useState } from "react";
import Style from "../2048.module.css";
import Tile from "../classes/Tile";
import {
  setCSSVariables,
  setTileLightness,
  GRID_SIZE,
  UseCorrectGif,
} from "../helper";

export default function Board() {
  const [allCells, setAllCells] = useState([]);
  const [allTiles, setAllTiles] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    if (allCells.length < GRID_SIZE * GRID_SIZE) {
      createCells();
    }
    window.addEventListener("keydown", handleKeyPress);
  }, []);
  useEffect(() => {
    console.log(allTiles);
  }, [allCells]);

  function handleKeyPress(e) {
    if (gameRunning) {
      let tilesToMove;
      let canMoveUp;
      let canMoveDown;
      let canMoveLeft;
      let canMoveRight;
      switch (e.key) {
        case "ArrowUp":
        case "w":
          tilesToMove = getCellsByColumn();
          canMoveUp = canMove(tilesToMove);
          if (canMoveUp) {
            slideTiles(tilesToMove);
          }
          break;
        case "ArrowDown":
        case "s":
          tilesToMove = getCellsByColumn().map((column) =>
            [...column].reverse()
          );
          canMoveDown = canMove(tilesToMove);
          if (canMoveDown) {
            slideTiles(tilesToMove);
          }

          break;
        case "ArrowLeft":
        case "a":
          tilesToMove = getCellsByRow();
          canMoveLeft = canMove(tilesToMove);
          if (canMoveLeft) {
            slideTiles(tilesToMove);
          }
          break;
        case "ArrowRight":
        case "d":
          tilesToMove = getCellsByRow().map((row) => [...row].reverse());
          canMoveRight = canMove(tilesToMove);
          if (canMoveRight) {
            slideTiles(tilesToMove);
          }
          break;
      }
      allCells.forEach((cell) => cell.mergeTiles());
      const newTile = new Tile();
      addTileToCell(newTile);
      if (!canMoveUp && !canMoveDown && !canMoveLeft && !canMoveRight) {
        newTile.waitForTransition(true).then(() => {
          alert("You lose");
        });
        return;
      }
    }
  }
  function createCells() {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const cell = new Cell(i, i % GRID_SIZE, Math.floor(i / GRID_SIZE));
      setAllCells((cells) => [...cells, cell]);
    }
  }
  function getCellsByRow() {
    return allCells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || [];
      cellGrid[cell.y][cell.x] = cell;
      return cellGrid;
    }, []);
  }
  function getCellsByColumn() {
    return allCells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, []);
  }
  function getEmptyCells() {
    return allCells.filter((cell) => cell.tile == null);
  }
  function getRandomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * getEmptyCells().length);
    return getEmptyCells()[randomIndex];
  }
  function addTileToCell(tile) {
    const cell = getRandomEmptyCell();
    cell.tile = tile;
    tile.x = cell.x;
    tile.y = cell.y;
    setAllTiles((currentTiles) => [...currentTiles, tile]);
  }
  function startGame() {
    if(allCells.length == 0) createCells()
    for (let i = 0; i < 2; i++) {
      addTileToCell(new Tile());
    }
    console.log("startGame()-allTiles", allTiles);
    setGameRunning(true);
  }
  function restartGame() {
    setGameRunning(false);
    setAllTiles([]);

    startGame();
    console.log("restartGame()-allTiles", allTiles);
  }
  function canMove(cells) {
    return cells.some((group) => {
      return group.some((cell, index) => {
        if (index === 0) return false;
        if (cell.tile == null) return false;
        const moveToCell = group[index - 1];
        return moveToCell.canAccept(cell.tile);
      });
    });
  }

  function slideTiles(cells) {
    console.log("cells to slide", cells);
    return Promise.all(
      cells.flatMap((group) => {
        const promises = [];
        for (let i = 1; i < group.length; i++) {
          const cell = group[i];
          if (cell.tile == null) continue;
          let lastValidCell;
          for (let j = i - 1; j >= 0; j--) {
            const moveToCell = group[j];
            if (!moveToCell.canAccept(cell.tile)) break;
            lastValidCell = moveToCell;
          }

          if (lastValidCell != null) {
            promises.push(cell.tile.waitForTransition());
            if (lastValidCell.tile != null) {
              lastValidCell.mergeTile = cell.tile;
            } else {
              lastValidCell.tile = cell.tile;
            }
            cell.tile = null;
          }
        }
        return promises;
      })
    );
  }
  setCSSVariables();
  return (
    <>
      {gameRunning === false && <button onClick={startGame}>Start Game</button>}
      {gameRunning && <button onClick={restartGame}>new Game</button>}
      <div id={`${Style["game-board"]}`}>
        {allCells.map((cell) => {
          return (
            <div id={cell.id} key={cell.id} className={Style.cell}>
              {cell.tile && (
                <div
                  className={Style.tile}
                  style={setTileLightness(cell.tile.value)}
                >
                  <img
                    src={UseCorrectGif(cell.tile.value)}
                    className={Style.tile}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

class Cell {
  #id;
  #x;
  #y;
  #tile;
  #mergeTile;

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
      this.tile == null ||
      (this.mergeTile == null && this.tile.value === tile.value)
    );
  }

  mergeTiles() {
    if (this.tile == null || this.mergeTile == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    this.mergeTile.remove();
    this.mergeTile = null;
  }
}
