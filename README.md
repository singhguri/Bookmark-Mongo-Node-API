# Bookmark-Mongo-Node-API
The project has 3 modules: Bookmarks, Tags and Display

## Bookmarks Module
1. Create a bookmark
2. Delete a bookmark

## Tags Module
1. Create a tag
2. Delete a tag

## Display Module
1. Retrieve all bookmarks
2. Retrieve all tags

## Project Contents:
This repository contains Index.js, Triveous Mongo db (which has JSON files for importing database in mongoDB), and api directory.

## How to run the project:
1. Start Mongo db server.
2. You can import respective JSON files from Mongo db into their respective collections in a database named "triveousDB" using your method of import (I preferred MongoDb Compass to import my JSON files).
3. I tested the project using Postman tool.

## API Endpoints
### Bookmarks:
Create and Retrieve: http://localhost:8080/bookmarks/ <br />
Delete: http://localhost:8080/bookmarks/<bookmark_id>

### Tags:
Create and Retrieve: http://localhost:8080/tags/ <br />
Delete: http://localhost:8080/tags/<tag_id>
