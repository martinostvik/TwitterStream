# Twitter Streamer

Twitter Streamer is a web based application that streams tweets in real time.

### Getting started

```bash
docker-compose up
```
This will start up both the Express server and the React client.
Head over to http://localhost:3000 to start seing live tweets!

### Changing the search term
You can make a POST request to http://localhost:3001/admin/updateSearchTerm to change what tweets get's streamed.
```bash
curl --location --request POST 'http://localhost:3001/admin/updateSearchTerm' \
--header 'Content-Type: application/json' \
--data-raw '{
    "searchTerm": "js"
}'
```

There is a stub for authentication on this endpoint, for now it is open for anyone.
