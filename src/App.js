import React, { useState, useEffect } from "react";
import Matrix from "./matrix";
import { initialList, initialParams, Form } from "./consts";

function App() {
  const [list, setList] = useState(initialList);
  const [params, setParams] = useState(initialParams);
  const [isDropping, setIsDropping] = useState(false);
  const [form, setForm] = useState(new Form());
  const [touchSoil, setTouchSoil] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  let start = () => {
    draw();
    console.log(form);
  };
  let isTouchSoil = () => {
    if (form.position.y + form.childs.length >= list.length) {
      setTouchSoil(true);
    } else {
      for (let i = 0; i <= form.childs[0].length; i++) {
        if (list[form.position.y + 1][form.position.x + i].exist) {
          setTouchSoil(true);
          setIsDropping(false);
        }
      }
    }
  };
  let draw = () => {
    let interv = setInterval(() => {
      if (gameOver) {
        clearInterval(interv);
      }
      isTouchSoil();

      if (!isDropping) {
        setForm(new Form());
        setTouchSoil(false);
        setIsDropping(true);
      }
      let scenario = [...list];
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
      form.childs.map((row, rowIndex) =>
        row.map((el, index) => {
          return (scenario[rowIndex + form.position.y][
            index + form.position.x
          ] = el.exist
            ? {
                styles: { background: "red" }
              }
            : {});
        })
      );
      setList(scenario);

      form.position.y++;
    }, 1000);
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
}

export default App;
