import React, { useState } from "react";
import Matrix from "./matrix";
import { List, initialParams, Form } from "./consts";

function App() {
  const [list, setList] = useState(new List().list);
  const [params, setParams] = useState({ ...initialParams });
  let form = new Form();
  let previusForm = { ...form };
  let scenario = [...list];

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

  function gameOver(interv) {
    if (scenario[0].some(el => el.exist)) {
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
              styles: { background: "blue" },
              exist: true
            }
          : {});
      })
    );
  }
}

export default App;
