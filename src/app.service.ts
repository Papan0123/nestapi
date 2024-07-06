import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    let data=[
      {
        "user": {
          "id": 12345,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "profile": {
            "age": 30,
            "gender": "male",
            "address": {
              "street": "123 Main St",
              "city": "Anytown",
              "state": "CA",
              "zip": "12345"
            }
          },
          "preferences": {
            "notifications": {
              "email": true,
              "sms": false
            },
            "language": "en"
          },
          "orders": [
            {
              "orderId": 98765,
              "date": "2023-07-06",
              "items": [
                {
                  "productId": 111,
                  "productName": "Widget A",
                  "quantity": 2,
                  "price": 19.99
                },
                {
                  "productId": 112,
                  "productName": "Widget B",
                  "quantity": 1,
                  "price": 29.99
                }
              ],
              "total": 69.97
            },
            {
              "orderId": 98766,
              "date": "2023-07-07",
              "items": [
                {
                  "productId": 113,
                  "productName": "Widget C",
                  "quantity": 3,
                  "price": 9.99
                }
              ],
              "total": 29.97
            }
          ]
        }
      }
      
    ]
    return data;
  }
}
