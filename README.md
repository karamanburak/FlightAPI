# FLIGHT API

- [FlightAPI Live Link](https://flightapi-9jkz.onrender.com/)

### ERD:

![ERD](./flightApiERD.png)

### Folder/File Structure:

```
📦src
 ┣ 📂configs
 ┃ ┣ 📜dbConnection.js
 ┃ ┗ 📜swagger.json
 ┣ 📂controllers
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜flight.js
 ┃ ┣ 📜passenger.js
 ┃ ┣ 📜reservation.js
 ┃ ┣ 📜token.js
 ┃ ┗ 📜user.js
 ┣ 📂errors
 ┃ ┗ 📜customError.js
 ┣ 📂helpers
 ┃ ┣ 📜dateToLocaleString.js
 ┃ ┣ 📜passwordEncrypt.js
 ┃ ┣ 📜sendMail.js
 ┃ ┗ 📜sendToken.js
 ┣ 📂middlewares
 ┃ ┣ 📜authentication.js
 ┃ ┣ 📜errorHandler.js
 ┃ ┣ 📜idValidation.js
 ┃ ┣ 📜logging.js
 ┃ ┣ 📜permissions.js
 ┃ ┣ 📜queryHandler.js
 ┃ ┗ 📜upload.js
 ┣ 📂models
 ┃ ┣ 📜flight.js
 ┃ ┣ 📜passenger.js
 ┃ ┣ 📜reservation.js
 ┃ ┣ 📜token.js
 ┃ ┗ 📜user.js
 ┗ 📂routes
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜documents.js
 ┃ ┣ 📜flight.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜passenger.js
 ┃ ┣ 📜reservation.js
 ┃ ┣ 📜token.js
 ┃ ┗ 📜user.js
 ┃ 📂uploads
 ┃ 📂logs
 ┣ 📜.env-sample
 ┣ 📜.gitignore
 ┣ 📜flightApiERD.png
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜swaggerAutogen.js
```

## Documentations

- [View Postman Documentation](https://documenter.getpostman.com/view/32987022/2sA3kVmMNX)
- [View Swagger Documentation](https://flightapi-9jkz.onrender.com/documents/swagger/)
- [View Redoc Documentation](https://flightapi-9jkz.onrender.com/documents/redoc)
- [View Json Documentation](https://flightapi-9jkz.onrender.com/documents/json)
