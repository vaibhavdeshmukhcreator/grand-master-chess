const right_answer = "You are absolutely right: +1";
const wrong_answer = "Sorry, this is wrong: 0";
const anirban_alike = "You and Anirban think alike";
const biswa_alike = "You and Biswa think alike";
const samay_alike = "You and Samay think alike";
const vaibhav_alike = "You and Vaibhav think alike";
const but_partially = ", but this is only partially correct: +0.5";
const but_wrong = ", but this is wrong: 0";

export const episode1 = [
  {
    question: "What did Vidit play in this position?", //1
    image_path: "ep01-q01",
    options: [
      {
        id: 0,
        text: "♕c2",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
      {
        id: 1,
        text: "e4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "g4",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "h4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //2
    image_path: "ep01-q02",
    options: [
      {
        id: 0,
        text: "♖xb3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
      {
        id: 1,
        text: "e4",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♘g3",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
      {
        id: 3,
        text: "g4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "Although this was not played in the game, what is the best move here?", //3
    image_path: "ep01-q03",
    options: [
      {
        id: 0,
        text: "♕e1",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "e5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "♗f3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♗g5",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //4
    image_path: "ep01-q04",
    options: [
      {
        id: 0,
        text: "d5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "e5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "♔h1",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: biswa_alike + but_partially,
      },
      {
        id: 3,
        text: "h3",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //5
    image_path: "ep01-q05",
    options: [
      {
        id: 0,
        text: "♕c2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "d5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "e5",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "h4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //6
    image_path: "ep01-q06",
    options: [
      {
        id: 0,
        text: "♕c2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
      {
        id: 1,
        text: "♗d5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: vaibhav_alike + but_wrong,
      },
      {
        id: 2,
        text: "♕e1",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♕e3",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //7
    image_path: "ep01-q07",
    options: [
      {
        id: 0,
        text: "♕c5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♕d4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "d6",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "e6",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: biswa_alike + but_partially,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //8
    image_path: "ep01-q08",
    options: [
      {
        id: 0,
        text: "♘e7",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♖f5",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♘f6",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♕g3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: "You think a lot like Biswa and Vaibhav" + but_wrong,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //9
    image_path: "ep01-q09",
    options: [
      {
        id: 0,
        text: "♘e7",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♖bf1",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♕f3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♘f6",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //10
    image_path: "ep01-q10",
    options: [
      {
        id: 0,
        text: "♘e7",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 1,
        text: "♖1f3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "♖5f3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♘f6",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "What did Vidit play in this position?", //11
    image_path: "ep01-q11",
    options: [
      {
        id: 0,
        text: "♕f2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♕f3",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "♕f4",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "♖f5",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
    ],
  },
];

export const episode2 = [
  {
    question: "What did Tania play in this position?", //1
    image_path: "ep02-q01",
    options: [
      {
        id: 0,
        text: "♗c7",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 1,
        text: "♘d2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: "You think a lot like Samay and Anirban" + but_wrong,
      },
      {
        id: 2,
        text: "d5",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
      {
        id: 3,
        text: "e5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_partially,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //2
    image_path: "ep02-q02",
    options: [
      {
        id: 0,
        text: "♗c4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♕d2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "d5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
      {
        id: 3,
        text: "e5",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //3
    image_path: "ep02-q03",
    options: [
      {
        id: 0,
        text: "♘a2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: anirban_alike + but_wrong,
      },
      {
        id: 1,
        text: "♘d2",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♘e4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: samay_alike + but_wrong,
      },
      {
        id: 3,
        text: "♖e4",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //4
    image_path: "ep02-q04",
    options: [
      {
        id: 0,
        text: "dxc5",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: biswa_alike + but_partially,
      },
      {
        id: 1,
        text: "d5",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♘de4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: samay_alike + but_wrong,
      },
      {
        id: 3,
        text: "♗g2",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: anirban_alike + but_partially,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //5
    image_path: "ep02-q05",
    options: [
      {
        id: 0,
        text: "♖a1",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
      {
        id: 1,
        text: "♘xc8",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♖d5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: vaibhav_alike + but_wrong,
      },
      {
        id: 3,
        text: "♗g2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: samay_alike + but_wrong,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //6
    image_path: "ep02-q06",
    options: [
      {
        id: 0,
        text: "♘a2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♘xd5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 2,
        text: "e6",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "♕f5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //7
    image_path: "ep02-q07",
    options: [
      {
        id: 0,
        text: "♘xd5",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: "You think a lot like Biswa and Samay" + but_partially,
      },
      {
        id: 1,
        text: "♖xd5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: anirban_alike + wrong_answer,
      },
      {
        id: 2,
        text: "♕g6",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: vaibhav_alike + but_wrong,
      },
      {
        id: 3,
        text: "♖xh6",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //8
    image_path: "ep02-q08",
    options: [
      {
        id: 0,
        text: "♗xc4",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♘xd5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: vaibhav_alike + but_wrong,
      },
      {
        id: 2,
        text: "♖e1",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 3,
        text: "♕h2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //9
    image_path: "ep02-q09",
    options: [
      {
        id: 0,
        text: "♘xd5",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 1,
        text: "♖e6",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♗g2",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
      {
        id: 3,
        text: "♖g6",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: wrong_answer,
      },
    ],
  },

  {
    question: "What did Tania play in this position?", //10
    image_path: "ep02-q10",
    options: [
      {
        id: 0,
        text: "♘b5",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: samay_alike + but_partially,
      },
      {
        id: 1,
        text: "♖ef6",
        isPartiallyCorrect: false,
        isCorrect: true,
        comments: right_answer,
      },
      {
        id: 2,
        text: "♖hf6",
        isPartiallyCorrect: true,
        isCorrect: false,
        comments: vaibhav_alike + but_partially,
      },
      {
        id: 3,
        text: "♕xg7",
        isPartiallyCorrect: false,
        isCorrect: false,
        comments: biswa_alike + but_wrong,
      },
    ],
  },
];
