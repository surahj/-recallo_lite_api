# recallo_lite_api

## Introduction
api for for Recallo-Lite Login & Sign up (Registration)

## Getting Started

This project makes use of **Node**, **Express** for the backend **Mongoose** and **mongoDB** for the database.

**BASE URL**: `https://recallo-api.onrender.com`


## Endpoint Library

### Register

### `POST /signup`

This register a new user and return user data and token for authentication, the token expires after 15 days and the token is also in the cookies for 30 days.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

`name`: string <small> (required) </small> - Business name of the new user. <br>
`email`: string <small> (required) </small> - Business email of the new user. <br>
`password`: string <small> (required) </small> - password of the new user. <br>
`confirmPassword`: string <small> (required) </small> - password of the new user. <br>


#### Sample Request
`curl https://recallo-api.onrender.com/signup -XPOST -H "Content-Type: application/json" -d '{"email":"ope@gmail.com", "password":"abcd12345", "name": "Opeyemi Odebode", "passwordConfirm": "abcd12345"}'`

#### Sample Response

```
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmYxODc2ZDI0MGMzMDAzNDIxYzVkNCIsImlhdCI6MTY3NzY2MjMzMCwiZXhwIjoxNjc4OTU4MzMwfQ.d5HG9jEpQIgEUp2FJSta4WxW55TNb8w_M8niI1WBmLo",
  "data": {
    "user": {
      "_id": "63ff1876d240c3003421c5d4",
      "name": "Opeyemi Odebode",
      "email": "ope@gmail.com",
      "__v": 0
    }
  }
}
```

### login

### `POST /login`

Log in a new user and return user data and token for authentication, the token expires after 15 days and the token is also in the cookies for 30 days.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

`email`: string <small> (required) </small> - email of the user. <br>
`password`: string <small> (required) </small> - Password of the user. <br>

#### Sample Request

`curl https://recallo-api.onrender.com/login -XPOST -H "Content-Type: application/json" -d '{"email":"ope@gmail.com", "password":"abcd12345"}'`

#### Sample Response

```
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmYxODc2ZDI0MGMzMDAzNDIxYzVkNCIsImlhdCI6MTY3NzY2MzQ4NSwiZXhwIjoxNjc4OTU5NDg1fQ.1rP2wG8zLVC9HHoCabHkYGsZQaIqxD9rIz0UpRdPhtk",
  "data": {
    "user": {
      "_id": "63ff1876d240c3003421c5d4",
      "name": "Opeyemi Odebode",
      "email": "ope@gmail.com",
      "__v": 0
    }
  }
}
```
