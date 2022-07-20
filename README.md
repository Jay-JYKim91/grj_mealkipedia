# Mealkipedia_Recipe APP

- [설계](#설계)
- [구현](#구현)
- [트러블 슈팅](#트러블-슈팅)
- [학습한 내용](#학습한-내용)

## 설계

### 목표

- `TypeScript` 와 `React`를 사용해 레시피앱 만들기
- ['TheMealDB' api](https://www.themealdb.com/) 사용

### 사용

| -             | Link                                          |
| ------------- | --------------------------------------------- |
| Lang          | [TypeScript](https://www.typescriptlang.org/) |
| Web Framework | [React](https://reactjs.org/)                 |
| CSS framework | [tailwind](https://tailwindcss.com/)          |

### 레이아웃

- Main page
  
  <img src="https://user-images.githubusercontent.com/69047256/174443744-e6f0d864-346a-45f7-ad9b-9e9dc7ea1299.PNG" width="75%"/>
- Search page
  
  <img src="https://user-images.githubusercontent.com/69047256/174443769-221afeee-af51-40e1-9660-54d652376225.PNG" width="75%"/>
- Recipe page
  
  <img src="https://user-images.githubusercontent.com/69047256/174443779-d10fafdb-4ad5-43ad-82f7-de9dafe88e04.PNG" width="75%"/>
- Category page
  
  <img src="https://user-images.githubusercontent.com/69047256/179733392-25892d73-eb63-4ece-8504-09c2c9366ce7.jpg" width="75%"/>

---

## 구현

### 반응형

| Home                 | Search               | 
| -------------------- | -------------------- | 
| <img src="https://user-images.githubusercontent.com/69047256/177495380-75de58ac-11df-40df-8c4b-99b6944db06c.png" width="100%"/> | <img src="https://user-images.githubusercontent.com/69047256/177495393-cd2f0900-02e3-46ea-86ea-bd7e9c396cab.png" width="100%"/> |


| Category         | Result              | 
| -------------------- | -------------------- | 
| <img src="https://user-images.githubusercontent.com/69047256/179960879-f7fa0f45-9cca-4bd5-be6a-0f7cea5c368b.png" width="80%"/> | <img src="https://user-images.githubusercontent.com/69047256/177495407-655fcbb6-187b-4db4-83d6-eb1453816678.png" width="200%"/> |


### Search recipes
<img src="https://user-images.githubusercontent.com/69047256/177498987-1c5344b3-ad4d-4b98-878c-87396c1c077c.gif" width="75%"/>

### Filter recipes by category

---

## 트러블 슈팅
### input 값 가져오기
#### 변경 전_useRef 사용 -> 변경 후_useState 사용
- 참고 자료
  - [What are Controlled and Uncontrolled Components in React JS?](https://medium.com/fasal-engineering/controlled-and-uncontrolled-components-in-react-js-c3111ee0a864)
  - [입력을 다루는 다양한 방법](https://so-so.dev/react/form-handling/)

### react-query에서 useQuery 여러번 하기
#### 문제
- 레시피 검색 기능 구현 중 검색을 처음으로 하면 이상없이 작동하나, 다시 새로운 검색어로 검색을 하려고 하면 아무 반응이 일어나지 않았다. input에 새로운 검색어를 넣은 후 버튼을 누르면 검색어는 잘 들어가는 것으로 보아 한번 useQuery가 이루어진 이후 새로운 검색어 입력 시 useQuery를 다시 동작시켜 줘야 하는 것으로 보인다.
#### 해결
- 첫번 째 시도
  - 검색 버튼이 눌리면 검색어를 search 페이지의 state로 넘기고 있었기 때문에 state가 달라지면 다시 useQuery를 하도록 useEffect를 사용했다.
  - useQuery는 useEffect 안에서 사용할 수 없어서 실패 [Github issue](https://github.com/trojanowski/react-apollo-hooks/issues/158#issuecomment-491028712)
- 두번 째 시도
  - react-query Docs를 보다가 refetch 발견 [React Query_Docs](https://react-query.tanstack.com/reference/useQuery)
  - useEffect안에서 state, 즉 검색어가 달라질 때마다 refetch 하도록 함

---

## 학습한 내용

### React + TypeScript
- 타입을 지정하며 코딩할 수 있어서 실제로 버그가 생길 가능성을 많이 낮춰준다고 느꼈다
- 전체적인 이해에 도움이 된 자료 [React & TypeScript - Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1215s)
### tailwindcss
- A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- 스타일들이 정의되어 있어서 일관되게 구현하기 편했다
- custom styles이 필요하면 'tailwind.config.js'에서 쉽게 정의해서 쓸 수 있었다. [Adding Custom Styles_tailwindcss Docs](https://tailwindcss.com/docs/adding-custom-styles)
### react-query
- async/await, fetch를 사용하다가 코드의 양도 줄여주고 loading/error 상태도 관리해주는 react-query로 변경하여 적용했다
- 여러 자료를 봤지만 공식 Docs가 제일 도움이 많이 됐다. [React Query_Docs](https://react-query.tanstack.com/overview)
