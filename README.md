# Test Server
You can run the test server by running ```node index.js```. There's also a Repl.it linked to this repo [here]()

## Issue 

So it seems like we are having issues accessing the context of the middleware functions that are implemented in the controller [testController.js file](https://github.com/ashleypean/test-server/blob/main/controllers/testController.js)

Right now we want to use the internal express code (currently hosted in the [express-observer directory](https://github.com/ashleypean/test-server/tree/main/express-observer) to be able to keep track of changes to the request and response objects, between each middleware function. 

The way we're testing this is by setting up a dummy server and sending a request to  ```localhost:3003```. We're tracking the execution of functions through the ```layer.handle_request``` method [(link)](https://github.com/ashleypean/test-server/blob/main/express-observer/lib/router/layer.js#L88), and logging to the console everytime we hit a new layer. We're able to see the express init and query functions execute, but when we get to the router, we can't access any of the middleware/controller methods. 

So long story short, our questions is: ***Where in the express code do routers/controllers/middleware functions get executed?***

