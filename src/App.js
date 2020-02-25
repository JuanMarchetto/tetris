import React, { useState } from "react";
import Matrix from "./matrix";
import { initialList, initialParams, Form } from "./consts";

function App() {
  const [list, setList] = useState(initialList);
  const [params, setParams] = useState(initialParams);
  let form = new Form();
  let scenario = [...list];

  let start = () => {
    setList(initialList);
    setParams(initialParams);
    form = new Form();
    scenario = [...initialList];
    draw();
  };

  let draw = () => {
    let isGameOver = false;
    let interv = setInterval(() => {
      gameOver(isGameOver, interv);
      scenario = [...list];
      if (isTouchSoil()) {
        isGameOver = scenario[0].some(el => el.exist);
        form = new Form();
      } else {
        cleanPreviuposition();
        drawNewPosition();
        setList(scenario);
        form.position.y++;
      }
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => start()}
        style={{
          display: "inline-block",
          position: "absolute",
          top: "2rem",
          right: "2rem",
          padding: "2rem",
          background: "green",
          color: "white",
          fontSize: "2rem",
          borderRadius: "1rem"
        }}
      >
        Empezar
      </button>
      <div
        style={{
          width: "400px",
          height: "800px",
          border: "2px solid #ccc",
          display: "inline-block"
        }}
      >
        <Matrix list={list} params={params} />
      </div>
    </>
  );

  function gameOver(isGameOver, interv) {
    if (isGameOver) {
      setParams({
        ...params,
        container: {
          styles: { background: "red" },
          classes: ""
        }
      });
      clearInterval(interv);
      alert("Game Over");
    }
  }
  function isTouchSoil() {
    let touchSoil = false;
    if (form.position.y + form.childs.length > list.length) {
      touchSoil = true;
    } else {
      for (let i = 0; i <= form.childs[0].length; i++) {
        if (list[form.position.y + 1][form.position.x + i].exist) {
          touchSoil = true;
        }
      }
    }
    return touchSoil;
  }

  function cleanPreviuposition() {
    if (form.position.y > 0) {
      form.childs.map((row, rowIndex) =>
        row.map(
          (el, index) =>
            (scenario[rowIndex + form.position.y - 1][
              index + form.position.x
            ] = { styles: {} })
        )
      );
    }
  }

  function drawNewPosition() {
    form.childs.map((row, rowIndex) =>
      row.map((el, index) => {
        return (scenario[rowIndex + form.position.y][
          index + form.position.x
        ] = el.exist
          ? {
              styles: { background: "blue" },
              exist: true
            }
          : {});
      })
    );
  }
}

export default App;
