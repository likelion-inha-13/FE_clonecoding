import React from "react";
import PhotoCard from "../components/PhotoCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import "./Photo.css";

function Photo() {
    const photolist = [
      { image: img1, title : "오사카1", description: "일본은 라멘이 맛잇더라고요" },
      { image: img2, title : "오사카2", description: "유니버셜스튜디오도 재밋엇어요" },
      { image: img3, title : "시드니", description: "여기는 고급 일본 여행같은 느낌이래요 꼭 가보고 싶습니다" },
      { image: img4, title : "뉴욕", description: "무조건... 타임 스퀘어 앞에서 새해 맞이하는 게 버킷리스트 1번" },
      { image: img5, title : "텍사스", description: "카우걸 체험 해보고 싶음" },
    ];

    return(
        <div className="photo-grid">
            {photolist.map((item, idx) => (
                <PhotoCard key={idx} image={item.image} title={item.title} description={item.description}/>
            ))}
        </div>
    );
};


export default Photo;