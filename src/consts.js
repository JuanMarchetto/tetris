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
    [
      [_, x, _],
      [x, x, x]
    ],
    [
      [x, _],
      [x, x],
      [x, _]
    ],
    [
      [x, x, x],
      [_, x, _]
    ],
    [
      [_, x],
      [x, x],
      [_, x]
    ]
  ],
  [
    [
      [_, x],
      [_, x],
      [x, x]
    ],
    [
      [_, _, x],
      [x, x, x]
    ],
    [
      [x, x],
      [x, _],
      [x, _]
    ]
  ],
  [
    [
      [x, _],
      [x, _],
      [x, x]
    ],
    [
      [x, x, x],
      [x, _, _]
    ]
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
      y: 0,
      z: 0
    };
    this.childs = [...forms[Math.floor(Math.random() * forms.length)]];
  }

  rotate = () => {
    this.position.z =
      this.position.z <= this.childs.length - 1 ? this.position.z + 1 : 0;
  };
}
