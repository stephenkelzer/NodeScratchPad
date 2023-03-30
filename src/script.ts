import {
  hasPath as bfs_hasPath,
  connectedComponentsCount as bfs_connectedComponentsCount,
  largestComponentSize as bfs_largestComponentSize,
} from './graphSearch/breadthFirst'
import { buildGraph } from './graphSearch/buildGraph'
import {
  hasPath as dfs_hasPath,
  recursiveHasPath as dfs_recursiveHasPath,
  connectedComponentsCount as dfs_connectedComponentsCount,
  largestComponentSize as dfs_largestComponentSize,
  smallestComponentSize as dfs_smallestComponentSize,
} from './graphSearch/depthFirst'

const graph = buildGraph([
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['d', 'e'],
  ['e', 'f'],
  ['x', 'y'],
  ['y', 'z'],
])
console.log(graph)

const startingNode = 'a'
const endingNode = 'f'
const dfs_hasPathResult = dfs_hasPath(graph, startingNode, endingNode)
const dfs_recursiveHasPathResult = dfs_recursiveHasPath(graph, startingNode, endingNode)
const bfs_hasPathResult = bfs_hasPath(graph, startingNode, endingNode)
console.log({ dfs_hasPathResult, dfs_recursiveHasPathResult, bfs_hasPathResult })

const dfs_connectedComponentsCountResult = dfs_connectedComponentsCount(graph)
const bfs_connectedComponentsCountResult = bfs_connectedComponentsCount(graph)
console.log({ dfs_connectedComponentsCountResult, bfs_connectedComponentsCountResult })

const dfs_largestComponentSizeResult = dfs_largestComponentSize(graph)
const bfs_largestComponentSizeResult = bfs_largestComponentSize(graph)
console.log({ dfs_largestComponentSizeResult, bfs_largestComponentSizeResult })

const dfs_smallestComponentSizeResult = dfs_smallestComponentSize(graph)
console.log({ dfs_smallestComponentSizeResult })
