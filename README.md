## 0. 프로젝트 시작하기

커머스 서비스 구축하기

## 1. 생성하기

```js
yarn create next-app [프로젝트명] --typescript
```

## 2. git commit 전에 eslint, prettier 자동 실행

> `lint-staged`: git staged 상태로 올려진 파일(변경 파일)들만 타깃으로 linter 실행

> `husky`: .git이 아닌 .husky 파일에서 git hook 동작에 대해 정의 & 관리함으로써 remote repo 상에서 공유할 수 있게 도와준다.

```
yarn add lint-staged

yarn husky install

yarn husky add .husky/pre-commit "yarn lint-staged --no-stash"
.huskt에 pre-commit 설정을 추가한다.
```
