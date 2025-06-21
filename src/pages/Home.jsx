import React, { useEffect } from "react";
import "./Home.css";

function Home(){
  useEffect(() => {
    console.log("Home 페이지에 접속했습니다.");
  }, []);

  const handleJoinClick = () => {
    alert("회원가입 / 로그인 화면으로 이동합니다.");
  };

  const handleEtcClick = () => {
    alert("자세히 알아보기 화면으로 이동합니다.");
  };

  
  return(
    <section className="intro">
        <h1> Welcome to Pocket Album!</h1>
        <p>
        포켓앨범에 오신 것을 환영합니다! 이곳은 여러분의 소중한 추억을 혼자만의 공간에 < br />
        가볍게 스크랩할 수 있는 서비스를 제공합니다. 간단한 회원가입을 통하여 저희 서비스를
        즐겨주세요!
        </p>
        <div className="buttons">
            <button className="btn1" onClick={handleJoinClick}> 회원가입 / 로그인 </button>
            <button className="btn2" onClick={handleEtcClick}> 자세히 알아보기 </button>
        </div>
    </section>
  );
}

export default Home;