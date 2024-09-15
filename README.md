## 0. 프로젝트 시작하기

커머스 서비스 구축하기

## 1. 생성하기

```js
yarn create next-app [프로젝트명] --typescript
```

## 2. git commit 전에 eslint, prettier 자동 실행

> `lint-staged`: git staged 상태로 올려진 파일(변경 파일)들만 타깃으로 linter 실행

> `husky`: .git이 아닌 .husky 파일에서 git hook 동작에 대해 정의하고 관리함으로써 remote repo 상에서 공유할 수 있게 도와준다.

```
yarn add lint-staged
```

package.json

```
 "lint-staged": {
    "*.{js, jsx, ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
```

```
yarn add husky

yarn husky install

yarn husky add .husky/pre-commit "yarn lint-staged --no-stash"
.huskt에 pre-commit 설정을 추가한다.
```

## 3. Notion Api 활용하기

> Getting started

- notion 계정
- workspace 생성
- integrations 만들기
- secrets key 복사
- url에 삽입된 databaseId 복사

```
yarn add @notionhq/client
```

## 4. planetscale DB, prisma ORM 활용하기

> planetscale: The Mysql-compatible serverless database platform

- 계정 생성
- database 생성
- branch 선택
- table 생성
- data 추가
- 조회(`show, desc, select`)

- DB connect(ORM)

```
yarn add -D prisma
yarn add @prisma/client
yarn prisma init

```

```
.env 설정
/prisma/schema.prisma 설정
yarn prisma generate 스키마 연결
```

### bot

> robots.tsx
> meta data
> sementic html
> next-sitemap

### admin editor

`draft.js`
`yarn add draft-js react-draft-wysiwyg`
`yarn add -D @types/draft-js @types/react-draft-wysiwyg`
