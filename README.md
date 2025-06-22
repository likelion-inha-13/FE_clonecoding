## 멋쟁이사자처럼 13기 클론코딩 과제

이번 시간에는 그동안 배운 React, CSS, React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.
모두 화이팅!

## 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

- Icon 이미지 가져오기 : https://heroicons.com

### 심화학습 (필수 x)

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 구현 화면

![](https://velog.velcdn.com/images/boyeon0628/post/e732f899-31b5-47fc-94ae-e637befd9e6d/image.png)

## 구현 조건

1. `components`, `assets`, `pages` 3개의 폴더로 구분하여 개발합니다.
   - components 폴더엔 내가 구현한 컴포넌트들을, assets 에는 이미지 파일들을, pages 에는 내가 보여줄 페이지 컴포넌트를 위치시킵니다.
2. 상단에 `Header`는 스크롤하여도 화면에 고정되어 보이도록 합니다.

## 컴포넌트 계층 구조
! 이 페이지의 구조와 대략적인 기능을 참고, 이름과 테마는 제가 새롭게 정하였습니다.
! 페이지 이름은 "Pocket 


💥assets : img1 ~ img5
Photo.jsx에서 불러와서 사용할 이미지 저장.


💥components : Header.jsx, PhotoCard.jsx

Header.jsx - 상단 고정되는 로고, 메뉴를 포함한 바. header_container 안에 크게 header_left, header_menu 요소들을 넣어서 설계, flex를 이용하여 각각 왼쪽, 오른쪽으로 붙게 정렬. hover를 이용하여 menu 안의 home과 contact를 누르면 언더바가 생기게 동적인 기능을 넣음. 

PhotoCard.jsx - Photo 페이지의 사진 카드 틀. 사진인 image, 제목인 title, 설명인 description을 변수 설정함. 사진, 제목, 설명을 적을 곳을 설정하고 view (자세히 보기), edit (수정하기) 버튼을 추가함. 여기에도 hover 효과를 추가하여 마우스를 가져다대면 부드럽게 잠시 커지게 됨. 세로로 정렬하여 순서대로 사진, 제목, 설명 순으로 카드의 형태 지정.


💥pages : Home.jsx, Photo.jsx

Home.jsx - 사용자가 페이지에 접속하였을 때 가장 먼저 보게 되는 화면. (헤더 밑에 위치) 먼저 useEffect, 라우터 기능을 사용하여 콘솔에 페이지에 접속한 것을 보내게 함. 간단한 환영 인사, 설명이 뜨고 밑에 "회원가입 / 로그인" 버튼과 "자세히 알아보기" 버튼을 삽입. 각각 누르게 되면 화면 위에 "~~ 화면으로 이동합니다." 라는 메시지가 뜨도록 함. 또한 hover 효과를 삽입하여 동적 효과 부여.

Photo.jsx - 먼저, components에 있는 PhotoCard 파일과 assets에 있는 사진들을 불러옴. 사진 카드에 들어갈 이미지, 제목, 설명을 적은 배열. map을 이용하여 photolist 배열에 적은 항목들을 PhotoCard 컴포넌트로 만들어 props 로 사진, 제목, 설명을 전달하여 여러 개의 사진 카드가 만들어지게 됨. 배열은 flex를 이용하여 가로로 가운데 정렬하게 설정.

