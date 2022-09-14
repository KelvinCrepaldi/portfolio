import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //========================= TITLE =======================

  .apresentation-content {
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;
    align-items: center;
  }
  .me-img {
    margin: 30px;
    width: 50vw;
  }

  .title-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    min-height: 70vh;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 300px;
    padding: 15px;
    border-radius: 10px;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 5%
    );

    span {
      width: auto;
      text-align: center;
    }
  }

  .name {
    margin: 0 6px;
  }

  .title-content-top {
    display: flex;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
  }
  .title-content-bottom {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
  }

  .social-links {
    display: flex;
    justify-content: center;

    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      margin: 10px;
      padding: 10px;
      width: 60px;
      height: 60px;
      color: rgb(100, 100, 250);
      box-shadow: 1px 1px 5px black;
      border-radius: 50px;
      text-align: center;
      background-color: rgb(0, 0, 0, 0.2);
    }
    a:hover {
      background-color: rgb(0, 0, 0, 0.6);
      transform: scale(1.2);
      transition: 0.3s;
    }
  }

  .welcome-message {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: end;

    width: 100%;
    margin-top: 100px;

    span {
      display: block;
      width: 320px;
      text-align: center;
      font-size: 16px;
      color: rgb(255, 255, 255, 0.5);
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 875px) {
    .apresentation-content {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .me-img {
      margin-top: 60px;
      width: 350px;
    }

    .title-container {
      flex-direction: column;
      background: none;
      width: 100%;
      align-items: center;
      padding: 0;
      padding-bottom: 15px;

      span {
        font-size: 32px;
      }
    }

    .title-content {
      margin: 0;
    }

    .welcome-message {
      span {
        width: 400px;
        font-size: 18px;
        margin: 0;
      }
    }

    .background-lines {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1400' height='500' preserveAspectRatio='none' viewBox='0 0 1400 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1197%26quot%3b)' fill='none'%3e%3cpath d='M -533.7769595609258%2c254 C -477.78%2c227.4 -365.78%2c104.4 -253.77695956092577%2c121 C -141.78%2c137.6 -85.78%2c319.6 26.223040439074225%2c337 C 138.22%2c354.4 194.22%2c197.2 306.2230404390742%2c208 C 418.22%2c218.8 474.22%2c388.6 586.2230404390742%2c391 C 698.22%2c393.4 754.22%2c200.6 866.2230404390742%2c220 C 978.22%2c239.4 1039.47%2c493.6 1146.2230404390743%2c488 C 1252.98%2c482.4 1349.24%2c251.2 1400%2c192' stroke='rgba(0%2c 0%2c 0%2c 0.7)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -445.8321246188091%2c169 C -389.83%2c202.6 -277.83%2c329 -165.8321246188091%2c337 C -53.83%2c345 2.17%2c187.8 114.1678753811909%2c209 C 226.17%2c230.2 282.17%2c468 394.1678753811909%2c443 C 506.17%2c418 562.17%2c78.6 674.1678753811909%2c84 C 786.17%2c89.4 842.17%2c453.6 954.1678753811909%2c470 C 1066.17%2c486.4 1145%2c209.8 1234.167875381191%2c166 C 1323.33%2c122.2 1366.83%2c234 1400%2c251' stroke='rgba(183%2c 183%2c 183%2c 0.7)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -175.61710779245868%2c299 C -119.62%2c285.6 -7.62%2c232 104.38289220754132%2c232 C 216.38%2c232 272.38%2c318.4 384.3828922075413%2c299 C 496.38%2c279.6 552.38%2c133.4 664.3828922075413%2c135 C 776.38%2c136.6 832.38%2c320.6 944.3828922075413%2c307 C 1056.38%2c293.4 1112.38%2c56.6 1224.3828922075413%2c67 C 1336.38%2c77.4 1469.26%2c323.8 1504.3828922075413%2c359 C 1539.51%2c394.2 1420.88%2c266.2 1400%2c243' stroke='rgba(0%2c 0%2c 0%2c 0.7)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -501.6980681188257%2c75 C -445.7%2c151 -333.7%2c435.4 -221.6980681188257%2c455 C -109.7%2c474.6 -53.7%2c178 58.30193188117431%2c173 C 170.3%2c168 226.3%2c428.6 338.3019318811743%2c430 C 450.3%2c431.4 506.3%2c171.2 618.3019318811744%2c180 C 730.3%2c188.8 786.3%2c462 898.3019318811744%2c474 C 1010.3%2c486 1077.96%2c277.6 1178.3019318811744%2c240 C 1278.64%2c202.4 1355.66%2c276.8 1400%2c286' stroke='rgba(183%2c 183%2c 183%2c 0.7)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1197'%3e%3crect width='1400' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
      width: 100vw;
      height: 500px;
      position: absolute;
      z-index: -3;
    }
  }
`;
