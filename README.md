# FLIGHT API

### ERD:

![ERD](./flightApiERD.png)

### Folder/File Structure:

```
📦src
 ┣ 📂configs
 ┃ ┗ 📜dbConnection.js
 ┣ 📂controllers
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜flight.js
 ┃ ┣ 📜passenger.js
 ┃ ┣ 📜reservation.js
 ┃ ┗ 📜user.js
 ┣ 📂errors
 ┃ ┗ 📜customError.js
 ┣ 📂helpers
 ┃ ┣ 📜passwordEncrypt.js
 ┃ ┗ 📜sendMail.js
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
 ┃ ┗ 📜user.js
 ┗ 📂routes
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜documents.js
 ┃ ┣ 📜flight.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜passenger.js
 ┃ ┣ 📜reservation.js
 ┃ ┗ 📜user.js
 ┃ 📂logs
 ┣ 📜.env
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
- [View Swagger Documentation]()
- [View Redoc Documentation]()
- [View Json Documentation]()
