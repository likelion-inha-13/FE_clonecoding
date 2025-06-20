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
![clonecoding-image](https://github.com/user-attachments/assets/0a072b87-bcdf-4363-8558-ac1c2de73477)

## 구현 조건

1. `components`, `assets`, `pages` 3개의 폴더로 구분하여 개발합니다.
   - components 폴더엔 내가 구현한 컴포넌트들을, assets 에는 이미지 파일들을, pages 에는 내가 보여줄 페이지 컴포넌트를 위치시킵니다.
2. 상단에 `Header`는 스크롤하여도 화면에 고정되어 보이도록 합니다.

## 컴포넌트 계층 구조

주된 컴포넌트인 헤더, 푸터, 포토카드(사진과 글이 있는 것), 버튼에 대해 어떤 계층으로 설계했는지 이곳에 작성해주세요. 그리고 자식 컴포넌트 들에 대해서 어떤 의도를 갖고 설계했는지(ex 정렬하기 위해서, border를 주기 위해서 등) 부담없이 간단하게 적으면 됩니다. (아래는 예시입니다.)

📌 Header.jsx
- 상단 네비게이션을 담당하는 컴포넌트

header-bar: 전체 레이아웃 중앙 정렬
logo-bar: 카메라 아이콘 + 텍스트 수평 정렬
camera_icon: SVG 아이콘
menu-button, menu_icon: 우측 햄버거 버튼 / 현재는 정적인 버튼으로만 구성함

📌Hero.jsx
- 설명글과 버튼 2개를 포함하는 부분

hero-title, hero-subtitle: 텍스트 정렬 중심
btn-group: 버튼 2개를 나란히 배치 (display: inline-block)

버튼은 Bootstrap 스타일을 참고해 padding, hover 등을 구현함

📌Card.jsx
앨범의 사진 카드 구성 

card-image: 이미지가 들어가는 영역
card-content: 카드 설명 텍스트
btn-group: 버튼 그룹 및 시간 표시
btn-view, btn-edit: 동일한 버튼
card-time: 우측에 위치하도록 margin-left: auto
각 카드가 따로따로 균일한 디자인을 유지하도록 생성함

📌 CardSection.jsx
9개의 카드가 3×3 그리드로 구성

container-under: 전체 카드  중앙 정렬
row: flex-wrap을 통해 카드 3개씩 줄바꿈 가능하게 설정
col: 카드 하나의 컬럼, width: 33.33%
