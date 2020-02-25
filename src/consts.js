const x = { exist: true };
const _ = { exist: false };

export class List {
  constructor() {
    this.list = [
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _],
      [_, _, _, _, _, _, _, _, _, _]
    ];
  }
}
export const initialParams = {
  container: {
    styles: {},
    classes: ""
  },
  rows: {
    styles: {},
    classes: ""
  },
  childs: {
    styles: {},
    classes: ""
  }
};

const forms = [
  [
    [_, x, _],
    [x, x, x]
  ],
  [
    [_, x],
    [_, x],
    [x, x]
  ],
  [
    [x, _],
    [x, _],
    [x, x]
  ],
  [
    [x, x],
    [x, x]
  ],
  [
    [_, x, x],
    [x, x, _]
  ],
  [
    [x, x, _],
    [_, x, x]
  ],
  [[x], [x], [x], [x]]
];

export class Form {
  constructor() {
    this.position = {
      x: 3,
      y: 0
    };
    this.childs = [...forms[Math.floor(Math.random() * forms.length)]];
  }

  rotate = () => {
    let newForm = [];
    for (let i = 0; i === this.childs[0].length; i++) {
      for (let j = 0; i === this.childs.length; j++) {
        if (this.childs[j] && this.childs[j][i]) {
          newForm[i][j] = this.childs[j][i];
        }
      }
    }
    this.childs = newForm;
  };
}
