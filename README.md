# Client

## Development server

this is the production server `https://boisterous-caramel-6c7385.netlify.app/`


# AWS Lambda and S3 JSON Storage API

This project is a simple web service that allows users to store and retrieve JSON data using Amazon Web Services (AWS). The service is built using AWS Lambda, S3, and API Gateway. It provides two API endpoints: a POST endpoint for storing JSON data and a GET endpoint for retrieving all stored JSON data.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [AWS Resources](#aws-resources)
- [Endpoints](#endpoints)
  - [POST /store](#post-store)
  - [GET /retrieve](#get-retrieve)
- [Setup Instructions](#setup-instructions)
- [Testing the API](#testing-the-api)
  - [POST Testing](#post-testing)
  - [GET Testing](#get-testing)
- [Error Handling](#error-handling)

---

## Overview

This application leverages AWS services to store and retrieve JSON files. It uses AWS Lambda for backend logic, API Gateway for handling HTTP requests, and S3 for storage.

- **POST Endpoint**: Stores JSON data in the S3 bucket and returns an S3 link and eTag.
- **GET Endpoint**: Retrieves all stored JSON files from the S3 bucket and returns their contents.

---

## Technologies Used

- **AWS Lambda**: Executes the backend code for handling API requests.
- **AWS S3**: Stores JSON files uploaded via the POST endpoint.
- **AWS API Gateway**: Manages the API routes (POST and GET) and directs them to the appropriate Lambda functions.
- **AWS SDK**: Used within Lambda functions to interact with S3.

---

## AWS Resources

### 1. **S3 Bucket**
- A public S3 bucket is used to store JSON data. Each JSON payload is stored as a unique file.
  
### 2. **API Gateway**
- Handles HTTP requests and routes them to the corresponding Lambda functions.

### 3. **Lambda Functions**
- **POST function**: Stores JSON data into the S3 bucket.
- **GET function**: Retrieves all stored JSON data from the S3 bucket.

---

## Endpoints

### POST `/StoreJsonData`
### URL : `https://2s0yf14y97.execute-api.ap-southeast-2.amazonaws.com/StoreJsonData`

This endpoint allows users to send valid JSON data, which is stored in the S3 bucket.

- **Method**: `POST`
- **Payload**: Valid JSON object.
  
#### Success Response:

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "message": "File uploaded successfully",
    "eTag": "<etag>",
    "s3Url": "https://your-s3-bucket-name.s3.amazonaws.com/<filename>"
  }


### GET `/GetJsonData`
### URL : `https://lsio10iepc.execute-api.ap-southeast-2.amazonaws.com/GetJsonData`

This endpoint allows users to get JSON data, which is stored in the S3 bucket.

- **Method**: `GET`

#### Success Response:
   ```json
   [
  {"key1": "value1", "key2": "value2"},
  {"key3": "value3", "key4": "value4"}
]
