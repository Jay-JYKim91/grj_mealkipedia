# Mealkipedia_Recipe APP

- [설계](#설계)
- [기능](#기능)
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

### 공부 필요

- react에 tailwind 적용하는 법
  - [Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
- react + typescript

### 레이아웃

- Main page
  ![mealkipedia_main](https://user-images.githubusercontent.com/69047256/174443744-e6f0d864-346a-45f7-ad9b-9e9dc7ea1299.PNG)
- Search page
  ![mealkipedia_search](https://user-images.githubusercontent.com/69047256/174443769-221afeee-af51-40e1-9660-54d652376225.PNG)
- Recipe page
  ![mealkipedia_recipe](https://user-images.githubusercontent.com/69047256/174443779-d10fafdb-4ad5-43ad-82f7-de9dafe88e04.PNG)

## 기능

### 반응형
#### Mobile

| Home                 | Search               | Result               |
| -------------------- | -------------------- | -------------------- |
| <img align=top src="https://user-images.githubusercontent.com/69047256/177492939-b2671b65-24bd-47ba-a8b7-c64e07bb3216.png" width="100%"/> | <img src="https://user-images.githubusercontent.com/69047256/177492950-1eb13b46-1957-4a23-bcb1-b0b674c7ee31.png" width="100%"/> | <img src="https://user-images.githubusercontent.com/69047256/177492961-518ba014-3ea0-4cf7-8515-11b4c6417b23.png" width="100%"/> |

#### Desktop

| Home                 | Search               | Result               |
| -------------------- | -------------------- | -------------------- |
| <img src="https://user-images.githubusercontent.com/69047256/177495380-75de58ac-11df-40df-8c4b-99b6944db06c.png" width="100%"/> | <img src="https://user-images.githubusercontent.com/69047256/177495393-cd2f0900-02e3-46ea-86ea-bd7e9c396cab.png" width="100%"/> | <img src="https://user-images.githubusercontent.com/69047256/177495407-655fcbb6-187b-4db4-83d6-eb1453816678.png" width="100%"/> |

### 레시피 검색
<img src="https://user-images.githubusercontent.com/69047256/177498987-1c5344b3-ad4d-4b98-878c-87396c1c077c.gif" width="200px">


![sdf](https://user-images.githubusercontent.com/69047256/177498987-1c5344b3-ad4d-4b98-878c-87396c1c077c.gif)

## 구현

TBD

## 트러블 슈팅

TBD

## 학습한 내용
### tailwindcss
- A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- 스타일들이 정의되어 있어서 일관되게 구현하기 편했다
- custom styles이 필요하면 'tailwind.config.js'에서 쉽게 정의해서 쓸 수 있었다. [Adding Custom Styles_tailwindcss Docs](https://tailwindcss.com/docs/adding-custom-styles)

## 참고 소스

TBD
