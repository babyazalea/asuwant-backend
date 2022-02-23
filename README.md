# asuwant-backend
> 뉴스를 골라볼 수 있는 웹 앱 asuwant의 Backend

asuwant는 각국 뉴스를 골라볼 수 있는 웹 앱입니다. asuwant의 백엔드는 Express를 기반으로, [NewsAPI](https://newsapi.org/) 를 이용하여 각국의 헤드라인을 불러올 수 있습니다.
<br>
<br>

## 사용하기

Github Pages를 통해서 배포한 프론트엔드와 연결되어 있습니다. 아래의 주소로 들어가시면 사용해보실 수 있습니다.

[https://tyange.github.io/asuwant-frontend/](https://tyange.github.io/asuwant-frontend/)
<br>
<br>

## 로컬 환경에서 테스트하기:

아래의 명령으로 의존성 설치를 실행합니다.
```shell
yarn install
```

[NewsAPI](https://newsapi.org/) 의 api key가 필요합니다.

```javascript
app.use("/api/news", (req, res) => {
  const query = req.query;

  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${categoryName}&apiKey=${NEWS_API_KEY}`
    )
  
    ...
```
위의 코드는 프로젝트의 루트 폴더 속 `app.js` 파일의 코드 일부입니다. `axios`를 통해 요청을 보내는 `url`의 `countryCode`, `categoryName`, 그리고 발급 받은 api key를 `NEWS_API_KEY`에 각각 채워 넣습니다.

(`countryCode`와 `categoryName`에 대한 명세는 NewsAPI의 [Documentation](https://newsapi.org/docs) 를 참고하시기 바랍니다.)

로컬 환경에서의 테스트는 다른 프론트엔드 프로젝트를 연결하거나. GET 요청 이후 응답을 `console.log()`로 처리하여 브라우저에서 확인하는 방법이 있습니다. 여기서는 `console.log()`를 이용하는 방법을 소개합니다.

`yarn dev`명령으로 앱을 작동하고, 브라우저를 통해 기본 포트인 [http://localhost:3001/](http://localhost:3001/) 에 접속합니다. `http://localhost:3001/api/news` 로 이동해 지정한 옵션대로 응답하는지 브라우저 콘솔에서 확인합니다.
<br>
<br>

## 업데이트 내역

* 2022-02
    - Gh-Pages 통해 배포
* 2022-02
    - 프로젝트 시작

[작업 일지 & Todos (Notion)](https://tyange.notion.site/asuwant-PIONEER-React-c304faa199644f038adb48d6ab24f1a4)
<br>
<br>

## 만든 사람

Github: [tyange](https://github.com/tyange)
<br>
Email: [usun16@gmail.com](mailto:usun16@gmail.com)