const str = `{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "REST API",
    "description": ""
  },
  "host": "https://simple-backend-zlwj.onrender.com",
  "basePath": "/",
  "schemes": [],
  "paths": {
    "/teacher/get-result/{teacherID}": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "teacherID",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/teacher/delete-student/{studentID}/{teacherID}": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "studentID",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "teacherID",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/teacher/edit-student/{studentID}/{teacherID}": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "studentID",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "teacherID",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "score": {
                  "example": "any"
                },
                "dob": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/teacher/add-student": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "student": {
                  "example": {
                    "name": "string",
                    "score": "string",
                    "dob": "string",
                    "rollno": "number"
                  }
                },
                "teacherID": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/teacher/add-teacher": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "username": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                },
                "subject": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/teacher/login": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "username": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/student/get-result": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "rollno": {
                  "example": "any"
                },
                "dob": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    }
  }
}`;

export {str};
