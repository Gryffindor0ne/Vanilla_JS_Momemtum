const quotes = [
  {
    quote: "You always pass failure on the way to success.",
    transQuote: "성공하기까지 항상 실패를 거친다.",
    author: "미키 루니",
  },
  {
    quote: "A minute's success pays the failure of years.",
    transQuote: "단 1분의 성공이 몇 년의 실패를 보상한다.",
    author: "로버트 브라우닝",
  },
  {
    quote: "Do not turn back when you are just at the goal.",
    transQuote: "목표에 도달했을 때 돌아서지 마라.",
    author: "퍼블릴리머스 사이러스",
  },
  {
    quote: "Underpromise, overdeliver.",
    transQuote: "덜 약속하고 더 해주어라.",
    author: "톰 피터스",
  },
  {
    quote: "There is no shortcut.",
    transQuote: "지름길은 없다.",
    author: "존 그루버",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    transQuote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "앨버트 아인슈타인",
  },
  {
    quote: "Luck is what you have left over after you give 100 percent.",
    transQuote: "행운은 100% 노력한 뒤에 남는 것이다.",
    author: "랭스턴 콜만",
  },
  {
    quote: "We are all growing.",
    transQuote: "우리는 모두 성장하고 있다.",
    author: "존 그루버",
  },
  {
    quote: "Success is never final.",
    transQuote: "성공이 끝은 아니다.",
    author: "윈스턴 처칠",
  },
  {
    quote:
      "The world is full of suffering but it is also full of people overcoming it.",
    transQuote:
      "세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.",
    author: "헬렌 켈러",
  },
  {
    quote: "A goal without a plan is just a wish.",
    transQuote: "계획 없는 목표는 단지 꿈에 불과하다.",
    author: "생텍쥐페리",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    transQuote: "성공은 열심히 노력하며 기다리는 사람에게 온다.",
    author: "토마스 에디슨",
  },
  {
    quote: "Joy is not in things, it is in us.",
    transQuote: "기쁨은 사물 안에 있지 않다. 그것은 우리 안에 있다.",
    author: "리하르트 바그너",
  },
  {
    quote: "Life is not fair: get used to it.",
    transQuote: "인생은 공평하지 않다는 사실에 익숙해져라.",
    author: "빌 게이츠",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    transQuote: "늘 행복하고 지혜로운 사람이 되려면 자주 변화해야 한다.",
    author: "공자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const transQuote = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
transQuote.innerText = todaysQuote.transQuote;
author.innerText = `- ${todaysQuote.author}`;
