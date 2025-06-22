## 멋쟁이사자처럼 13기 클론코딩 과제
 **App**  
  - 최상위 컴포넌트, Header · Home · Footer 렌더링

- **Header**  
  - `HeaderWrapper` (고정 헤더)  
    - 의도: 스크롤해도 상단에 남도록 `position: sticky`

- **Home**  
  - `MainSection` (전체 레이아웃)  
  - `Intro` (소개 텍스트 & 버튼)  
    - 의도: 중앙 정렬, 버튼 사이 간격 조절  
  - `Grid`  
    - `PhotoCard` 6개 렌더링  
      - 의도: 카드마다 동일한 스타일·정렬 적용

- **PhotoCard**  
  - `Card` (박스)  
  - `CardImage`, `CardBody`, `Title`, `Description`, `ButtonGroup`, `Time`  
    - 의도: 재사용 가능한 카드 구조, View/Edit 버튼, 시간 표시

- **Footer**  
  - `FooterWrapper` → `FooterContainer` → `LeftContainer` · `RightContainer`  
    - 의도: 텍스트 중앙 정렬 · 좌우 콘텐츠 배치