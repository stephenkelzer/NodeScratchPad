import {
  breadthFirstHasPath,
  buildGraph,
  depthFirstConnectedComponentsCount,
  depthFirstHasPath,
  recursiveDepthFirstHasPath,
} from './graphSearch'

const graph = buildGraph([
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['d', 'e'],
  ['e', 'f'],
])
console.log(graph)

const startingNode = 'a'
const endingNode = 'f'
const depthFirstHasPathResult = depthFirstHasPath(graph, startingNode, endingNode)
const recursiveDepthFirstHasPathResult = recursiveDepthFirstHasPath(graph, startingNode, endingNode)
const breadthFirstHasPathResult = breadthFirstHasPath(graph, startingNode, endingNode)
console.log({ depthFirstHasPathResult, recursiveDepthFirstHasPathResult, breadthFirstHasPathResult })

const depthFirstConnectedComponentsCountResult = depthFirstConnectedComponentsCount(graph)
console.log({ depthFirstConnectedComponentsCountResult })
