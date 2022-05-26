# Fullstack Challenge 🏅 2021 - Space Flight News
## Space Flight News - Back-End
> This is a challenge by [Coodesh](https://coodesh.com/)
### Description
This a REST API that stores data from [Spaceflight News API](https://api.spaceflightnewsapi.net/v3/documentation) to a MongoDB.
### Technologies
- Node.js
- Express
- Mongoose
- Cron
### Routes
- '[GET]/': main route, returns a JSON with a friendly message.
- '[GET]/articles/': returns a JSON with all articles stored in the DB.
- '[GET]/articles/{id}': returns a JSON with a single article or a message telling no article was found with that {id}.
### Installation
- Clone the repo
  ```git clone https://github.com/welbhen/spaceflightnews-backend```
- Add your .env with your MongoDB url:
  ```MONGO_URL= ... ```
### Scripts
- Run in dev environment
  ```npm run dev```
- Fetch data from [Spaceflight News API](https://api.spaceflightnewsapi.net/v3/documentation) and store in your MongoDB.
  ```npm run fetch_data```
- Delete all documents from the Space Flight Collection in your DB.
  ```npm run delete_all_documents```
- Run
  ```npm start```
