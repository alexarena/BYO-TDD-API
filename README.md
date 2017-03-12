## About

This is a sample API designed to showcase the concepts of test-driven development. 

All code was written during a 45 minute talk at [SWHacks 2017](http://swhacks.org).

The talk was focused on users who had a moderate understanding of object oriented programming, but no experience with web APIs, web frameworks, test driven development, or even HTTP requests.

## Usage

1. `npm install mocha -g // intalls mocha globally`
2. `npm install // installs all dependencies`
3. `node index.js //starts the server` 


## Testing

All tests are stored in the `/tests` directory. The tests in `todo-test.js` are complete, but there is only a single (basically useless) test in `routes-test.js`. I encourage you to try writing tests for the routes as a way to become more familiar with testing.

The tests can be run using `npm test`, which is an alias created in our `package.json` file for `mocha tests`. In a "real" API, your test command would likely be much longer, which is where `npm test` would introduce some nice time savings.

## API
This is an API to create an extremely simple todo list. It has the following methods:

### Get All Todos

* **URL**

	`/`
    
* **Method**

	`GET`

* **Data Params (x-www-form-urlencoded)**

	None
    
* **Example Request**

```sh
curl -X GET -H "Cache-Control: no-cache" "http://localhost:3000/"```

### Create a Todo

* **URL**

	`/create`
    
* **Method**

	`POST`

* **Data Params (x-www-form-urlencoded)**

	`text` : a string containing the text of your todo.
    
* **Example Request**

```sh
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'text=Get Milk' "http://localhost:3000/create"

```

### Update a Todo

* **URL**

	`/update`
    
* **Method**

	`PUT`

* **Data Params (x-www-form-urlencoded)**

	`id` : The ID of the todo you want to update.
    
	`text` : a string containing the updated text of the todo.
    
* **Example Request**

```sh
curl -X PUT -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'id=0&text=Get 2% Milk' "http://localhost:3000/update"

```

### Delete a Todo

* **URL**

	`/delete`
    
* **Method**

	`DELETE`

* **Data Params (x-www-form-urlencoded)**

	`id` : The ID of the todo you want to delete.
    
* **Example Request**

```sh
curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'id=0' "http://localhost:3000/delete"

```

## Build Your Own API

This was designed to show you what a super basic API looks like. Hopefully it inspired you to want to make your own. Here are some resources to get you started:

- [Postman](https://www.getpostman.com) - Send HTTP requests easily and auto-generate API docs.
- [HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html) - A list of standard HTTP Status Codes you can send from your API.
- [What is REST?](http://stackoverflow.com/questions/4663927/what-is-rest-slightly-confused) - A StackOverflow thread with links to a bunch of information to get you aquainted with REST.

