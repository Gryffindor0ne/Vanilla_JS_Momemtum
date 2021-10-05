const quotes = [
  {
    quote: "지금 있는 곳에서, 자기가 가진 것으로, 할 수 있는 일을 하라.",
    author: "시어도어 루즈벨트",
  },
  {
    quote:
      "열렬히 박수 받는 투자 활동에 주의하라. 위대한 조치는 대부분 조용하고 지루하고 재미가 없다.",
    author: "웨렌 버핏",
  },
  {
    quote:
      "사람들이 당신에 대해 뭐라고 쓰든지 상관하지 마라. 얼마나 길게 썼는지만 봐라.",
    author: "앤디 워홀",
  },
  {
    quote: "지식은 실천의 시작이다. 행동은 지식의 완성이다.",
    author: "왕양명",
  },
  {
    quote: "모든 일에는 언제나 위험보다 두려움이 더 많다.",
    author: "세네카",
  },
  {
    quote: "사람들은 달에 갈 생각만 하느라 자기 발밑에 핀 꽃을 보지 못한다.",
    author: "알베르트 슈바이처",
  },
  {
    quote: "개를 고용하지 말고 그냥 직접 짖어라.",
    author: "데이비드 오길비",
  },
  {
    quote:
      "사람들이 아이디어를 훔칠까 봐 걱정할 필요 없다. 정말 독창적인 아이디어라면 목구멍에 쑤셔 넣어줘도 받아먹지 못할 테니까.",
    author: "하워드 H. 에이컨",
  },
  {
    quote:
      "누구에게 공이 돌아갈지 신경 쓰지 않을 때 얼마나 많은 일을 이룰 수 있는지 보면 놀랍다.",
    author: "해리 트루먼",
  },
  {
    quote: "세상에서 보고 싶은 변화는 스스로 이루어야 한다.",
    author: "마하트라 간디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
