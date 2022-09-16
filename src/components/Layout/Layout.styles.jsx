import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .content-page {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #1e1e1e;
    overflow: hidden;
    z-index: -10;
  }

  .background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 1;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #000000;
    top: 70%;
    left: 85%;
    animation-duration: 29s;
    animation-delay: -151s;
    transform-origin: 20vw -4vh;
    box-shadow: -2vmin 0 0.8727057128362692vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #000000;
    top: 65%;
    left: 6%;
    animation-duration: 320s;
    animation-delay: -331s;
    transform-origin: 5vw 10vh;
    box-shadow: 2vmin 0 0.3757756993783006vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #000000;
    top: 91%;
    left: 78%;
    animation-duration: 38s;
    animation-delay: -136s;
    transform-origin: -4vw 7vh;
    box-shadow: -2vmin 0 0.819455664230351vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #583c87;
    top: 23%;
    left: 30%;
    animation-duration: 173s;
    animation-delay: -257s;
    transform-origin: -21vw -2vh;
    box-shadow: 2vmin 0 0.3386792488854522vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #000000;
    top: 11%;
    left: 15%;
    animation-duration: 90s;
    animation-delay: -403s;
    transform-origin: -22vw 5vh;
    box-shadow: 2vmin 0 1.2446061851150996vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #000000;
    top: 27%;
    left: 25%;
    animation-duration: 185s;
    animation-delay: -67s;
    transform-origin: -7vw 22vh;
    box-shadow: -2vmin 0 0.3379439875776098vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #583c87;
    top: 17%;
    left: 57%;
    animation-duration: 198s;
    animation-delay: -157s;
    transform-origin: -10vw -23vh;
    box-shadow: 2vmin 0 0.7593315613351723vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #583c87;
    top: 91%;
    left: 85%;
    animation-duration: 147s;
    animation-delay: -83s;
    transform-origin: -3vw -6vh;
    box-shadow: 2vmin 0 1.2331694113222755vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #583c87;
    top: 92%;
    left: 12%;
    animation-duration: 289s;
    animation-delay: -345s;
    transform-origin: -5vw -18vh;
    box-shadow: 2vmin 0 1.0328708541205642vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #000000;
    top: 93%;
    left: 63%;
    animation-duration: 9s;
    animation-delay: -244s;
    transform-origin: -15vw 7vh;
    box-shadow: 2vmin 0 0.6051326791688112vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #000000;
    top: 73%;
    left: 88%;
    animation-duration: 205s;
    animation-delay: -272s;
    transform-origin: -3vw 10vh;
    box-shadow: -2vmin 0 0.5481422632426316vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #583c87;
    top: 4%;
    left: 41%;
    animation-duration: 431s;
    animation-delay: -83s;
    transform-origin: 14vw 15vh;
    box-shadow: 2vmin 0 0.7917315412151666vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #000000;
    top: 22%;
    left: 16%;
    animation-duration: 25s;
    animation-delay: -437s;
    transform-origin: 18vw -6vh;
    box-shadow: -2vmin 0 1.2004031498008516vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #000000;
    top: 75%;
    left: 39%;
    animation-duration: 9s;
    animation-delay: -43s;
    transform-origin: -12vw 17vh;
    box-shadow: -2vmin 0 0.7720000830943134vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #000000;
    top: 54%;
    left: 21%;
    animation-duration: 117s;
    animation-delay: -156s;
    transform-origin: -24vw 24vh;
    box-shadow: -2vmin 0 1.0176475304121264vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #000000;
    top: 75%;
    left: 50%;
    animation-duration: 432s;
    animation-delay: -157s;
    transform-origin: 16vw -18vh;
    box-shadow: -2vmin 0 1.116932295773409vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #583c87;
    top: 33%;
    left: 62%;
    animation-duration: 198s;
    animation-delay: -469s;
    transform-origin: -24vw 4vh;
    box-shadow: 2vmin 0 0.9201650801183374vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #000000;
    top: 76%;
    left: 21%;
    animation-duration: 151s;
    animation-delay: -100s;
    transform-origin: -7vw -17vh;
    box-shadow: 2vmin 0 0.511857419389331vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #583c87;
    top: 36%;
    left: 97%;
    animation-duration: 69s;
    animation-delay: -366s;
    transform-origin: 1vw -5vh;
    box-shadow: 2vmin 0 0.9426777756522629vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #583c87;
    top: 36%;
    left: 34%;
    animation-duration: 460s;
    animation-delay: -451s;
    transform-origin: 0vw 3vh;
    box-shadow: -2vmin 0 0.6550664404844517vmin currentColor;
  }
  .background span:nth-child(20) {
    color: #000000;
    top: 72%;
    left: 26%;
    animation-duration: 381s;
    animation-delay: -305s;
    transform-origin: 19vw 10vh;
    box-shadow: 2vmin 0 0.6813041257402628vmin currentColor;
  }
  .background span:nth-child(21) {
    color: #583c87;
    top: 3%;
    left: 63%;
    animation-duration: 275s;
    animation-delay: -411s;
    transform-origin: -14vw 25vh;
    box-shadow: -2vmin 0 1.0241270124667319vmin currentColor;
  }
  .background span:nth-child(22) {
    color: #000000;
    top: 44%;
    left: 11%;
    animation-duration: 330s;
    animation-delay: -187s;
    transform-origin: -10vw -22vh;
    box-shadow: -2vmin 0 0.9785518611309085vmin currentColor;
  }
  .background span:nth-child(23) {
    color: #583c87;
    top: 4%;
    left: 65%;
    animation-duration: 98s;
    animation-delay: -120s;
    transform-origin: -23vw -11vh;
    box-shadow: -2vmin 0 0.778807854373446vmin currentColor;
  }
  .background span:nth-child(24) {
    color: #000000;
    top: 56%;
    left: 3%;
    animation-duration: 256s;
    animation-delay: -377s;
    transform-origin: 14vw 19vh;
    box-shadow: 2vmin 0 0.5339073454891159vmin currentColor;
  }
`;

export const TopBlackContainer = styled.header`
  width: 100vw;
  height: 70px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;
  top: 0;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 90%,
    rgba(45, 23, 23, 0) 100%
  );
  color: var(--top-title);

  .title {
    font-size: 20px;
    margin: 20px;
    color: var(--title-homepage);
  }
`;
