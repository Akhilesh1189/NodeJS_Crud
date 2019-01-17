module.exports = {
    User: {
        addUsers: {
          "type": "object",
          "properties": {
            "FirstName": {
              "description": "FirstName is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1,
              "maxLength": 100
            },
            "LastName": {
              "description": "LastName is required and must be string.",
              "type": "string",
              "maxLength": 100
            },
            "EmailID": {
              "description": "EmailID is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1,
              "maxLength": 100
            },
            "MobileNumber": {
              "description": "MobileNumber is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 10,
              "maxLength": 10
            },
            "Password": {
              "description": "password is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 6,
              "maxLength": 100
            },
            "FcmID":{
                "description": "FcmID is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 6,
              "maxLength": 100
            }
          }
        },
        login: {
          "type": "object",
          "properties": {
            "EmailID": {
              "description": "EmailID is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1,
              "maxLength": 100
            },
            "Password": {
              "description": "Password is required and must be string.",
              "type": "string",
              "required": true
            }
          }
        },
        changePassword: {
          "type": "object",
          "properties": {
            "EmailID": {
              "description": "EmailID is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1,
              "maxLength": 100
            },
            "Password": {
              "description": "password is required and must be string.",
              "type": "string",
              "required": true
            },
            "cPassword": {
              "description": "cPassword is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 5,
              "maxLength": 100
            },
            "ccpassword": {
              "description": "ccpassword is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 5,
              "maxLength": 100
            }
          }
        },
        getReviewerSeller: {
          "type": "object",
          "properties": {
            "adminId": {
              "description": "adminId is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1
            }
          }
        },
        assignReviewerToSeller: {
          "type": "object",
          "properties": {
            "adminId": {
              "description": "adminId is required and must be string.",
              "type": "string",
              "required": true,
              "minLength": 1
            },
            "reviewerSellerList": {
              "description": "reviewerSellerList is required and must be an array of atleast one element.",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "sellerId": {
                    "description": "sellerId is required and must be string.",
                    "type": "string",
                    "required": true,
                    "minLength": 1
                  },
                  "reviewerId": {
                    "description": "reviewerId is required and must be string.",
                    "type": "string",
                    "required": true,
                    "minLength": 1
                  },
                  "questions": {
                    "description": "questions is required and must be an array of atleast one element.",
                    "type": "array",
                    "minItems": 1,
                    "required": true
                  }
                }
              },
              "minItems": 1,
              "required": true
            }
          }
        }
      }

};