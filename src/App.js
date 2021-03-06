import React, { useState, useEffect } from "react";
import Matrix from "matrix-component";
import { List, initialParams, Form } from "./consts";

function App() {
  const [list, setList] = useState(new List().list);
  const [params, setParams] = useState({ ...initialParams });
  let form = new Form();
  let previusForm = { ...form };
  let scenario = [...list];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
  }, [list, params]);

  let start = () => {
    setList(Array.from(new List().list));
    setParams({ ...initialParams });
    form = new Form();
    scenario = Array.from(new List().list);
    draw();
  };

  let draw = () => {
    let interv = setInterval(() => {
      if (isTouchSoil()) {
        gameOver(interv);
        form = new Form();
      } else {
        cleanPreviusPosition(previusForm);
        drawNewPosition(previusForm);
        setList([...scenario]);
        scenario = [...list];
        form.position.y++;
      }
    }, 100);
  };

  return (
    <div onKeyPress={handleKeyPress} style={{ width: "100%", height: "100%" }}>
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
          borderRadius: "1rem",
        }}
      >
        Empezar
      </button>
      <div
        style={{
          width: "400px",
          height: "800px",
          border: "2px solid #ccc",
          display: "inline-block",
        }}
      >
        <Matrix list={list} params={params} />
      </div>
    </div>
  );

  function gameOver(interv) {
    if (scenario[0].some((el) => el.exist)) {
      setParams({
        ...params,
        container: {
          styles: { background: "red" },
          classes: "",
        },
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

  function cleanPreviusPosition(previusForm) {
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

  function drawNewPosition(previusForm) {
    previusForm = { ...form };
    form.childs.map((row, rowIndex) =>
      row.map((el, index) => {
        return (scenario[rowIndex + form.position.y][
          index + form.position.x
        ] = el.exist
          ? {
              styles: { background: "green" },
              exist: true,
            }
          : {});
      })
    );
  }
  function handleKeyPress(event) {
    switch (event.key) {
      case "ArrowLeft":
        arrowLeft();
        break;
      case "ArrowRight":
        arrowRight();
        break;
      case "ArrowDown":
        arrowDown();
        break;
      default:
        form.rotate();
    }

    console.log("key", event);
  }
  function rotate() {
    let newForm = [];
    for (let i = 0; i === form.childs[0].length; i++) {
      for (let j = 0; i === form.childs.length; j++) {
        if (form.childs[j] && form.childs[j][i]) {
          newForm[i][j] = form.childs[j][i];
        }
      }
    }
    form.childs = newForm;
  }
  function arrowLeft() {
    form.position.x = form.position.x > 0 ? form.position.x - 1 : 0;
  }
  function arrowRight() {
    form.position.x =
      form.position.x + form.childs[0].length < list[0].length
        ? form.position.x + 1
        : 0;
  }
  function arrowDown() {
    if (!isTouchSoil()) {
      form.position.y = form.position.y + 1;
    }
  }
}

export default App;
