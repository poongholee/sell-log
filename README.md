# group-purchase-react
1인가구 공동구매 서비스

# Create React-Project
<create-react-app>

 : 리액트 입문 시, 초반 복잡하게 설정하는 부분을 빼고, 바로 리액트 프로젝트를 만들 수 있는 도구

0. 설치해야할 것

1. node js

2. npm

3. yarn

4. create-react-app 도구

5. visual studio code (에디터)

6. git

cf. 2~4번은 윈도우 cmd를 이용하여 설치


1. node js 설치

 - https://nodejs.org/ko/ 에서

 - 8.12.0 LTS 버전 설치

 - cmd에서 node --version으로 설치 확인

 - 개발 폴더 생성 ( 경로: C:\dev\react )

2. npm 설치

 - npm은 node js 패키지 매니저로, 모듈을 설치할 수 있게해준다.

 - npm은 node js 와 함께 설치된다. node js를 설치했다면 기본으로 설치되며, 따로 설치할 필요 없음

3. yarn 설치

 - yarn 도구는 npm 문제점을 개선한 패키지 매니저로, 패키지를 훨씬 빨리 설치할 수 있다.

 - npm을 통해 설치해야한다.

 - npm install --global yarn

 - 설치확인: yarn --version

4. create-react-app 도구 설치

 - yarn 또는 npm을 통해 설치

 - yarn 권장 (npm 지역적, yarn 전역적으로 사용 가능, 모든 디렉토리에서 create-react-app을 사용해야하므로 yarn을 선택)

 - yarn global add creat-react-app

5. 프로젝트 생성

 - npx를 이용해서 프로젝트를 생성한다. (윈도우일 경우 npx로 해야지 정상적으로 생성된다)

 - npx create-react-app todo-list 를 하면 1~3분 정도 소요되며, 프로젝트가 생성된다.

 - 생성된 todo-list 프로젝트로 이동 (cd todo-list)

 - yarn으로 프로젝트 시작

 - yarn start 

6. 정리

 - node js 설치 후 개발 디렉토리 생성

 - yarn 설치 (npm install --global yarn)

 - create-react-app 글로벌 설치 (yarn global add create-react-app)

 - 프로젝트 생성 npx create-react-app todo-list)

 - 프로젝트 디렉토리로 이동 (cd todo-list)

 - yarn으로 프로젝트 시작 (yarn start)
