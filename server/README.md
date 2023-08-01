# TMediaN - Backend

## ⚓ Environment

- Node 19.1.0

## 💻 How to run

```bash
> cd server
> cp .env.example .env
> yarn install
> yarn start
```

## 🖋️ API List

- Authenticate

    `POST /auth/register`: register a user

    `POST /auth/login`: login

- User

    `GET /users/:id`: get information a user

    `GET /users/:id/friends`: get friends of a user

    `GET /users/:id/posts`: get posts of a user

    `PATCH /users/:id/:friendId`: add or remove a user's friend

- Post

    `GET /posts`: get posts

    `POST /posts`: create a post

    `PATCH /posts/:id/like`: like or unlike a post
