let observer = {};

observer.stackLayers = [];
observer.errorHandler = {};
module.exports = observer;

function FunctionNode(layer) {
  this.name = layer.name
  this.type = 'function'
  this.fn = layer.handle.toString()
}

function RouteNode(layer) {
  this.path = layer?.route?.path || layer.path
  this.type = 'route'
  this.children = []
  this.stackLength = layer?.route?.stack?.length || layer.handle.stack.length
  // this.method = Object.keys(layer.route.methods)[0]
}

const createTree = (app) => {
  const tree = {
    name: 'App',
    children: []
  }
  traverseStack(tree, app._router.stack)

  return tree;
}
/* 
  Iterate through all layers of the stack 
  If the layer is a route, check for middleware function and recurse through the tree
  If the layer is a function, push it to the application stack
  If layer is a router, continue recursing through the tree
*/
const traverseStack = (tree, stack) => {

  for (const layer of stack) {
    if (layer.route) {
      const newRoute = new RouteNode(layer)
      tree.children.push(newRoute)
      // Traverse through stack 
      traverseStack(newRoute, layer.route.stack)
    } else if (layer.name === 'router') {
      // Parse the regex expression to create the path name 
      // Attach the path name to the layer
      const regexString = layer.regexp.toString()
      const path = '/' + regexString.slice(4, -13)
      layer.path = path

      // Create a new route node 
      const newRoute = new RouteNode(layer)

      tree.children.push(newRoute)

      for (const stack of layer.handle.stack) {
        traverseStack(newRoute, stack.route.stack)
      }
    } else {
      const newFunction = new FunctionNode(layer)
      tree.children.push(newFunction)
    }
  }
}

module.exports = {
  createTree,
  observer,
}