import { BreadthFirstSearch } from './graphSearch/breadthFirstSearch'
import { buildGraph } from './graphSearch/buildGraph'
import { DepthFirstSearch } from './graphSearch/depthFirst'

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
const dfs_hasPathResult = DepthFirstSearch.hasPath(graph, startingNode, endingNode)
const dfs_recursiveHasPathResult = DepthFirstSearch.hasPathRecursive(graph, startingNode, endingNode)
const bfs_hasPathResult = new BreadthFirstSearch().hasPath(graph, startingNode, endingNode)
console.log({ dfs_hasPathResult, dfs_recursiveHasPathResult, bfs_hasPathResult })

const dfs_connectedComponentsCountResult = DepthFirstSearch.connectedComponentsCount(graph)
const bfs_connectedComponentsCountResult = new BreadthFirstSearch().connectedComponentsCount(graph)
console.log({ dfs_connectedComponentsCountResult, bfs_connectedComponentsCountResult })

const dfs_largestComponentSizeResult = DepthFirstSearch.largestComponentSize(graph)
const bfs_largestComponentSizeResult = new BreadthFirstSearch().largestComponentSize(graph)
console.log({ dfs_largestComponentSizeResult, bfs_largestComponentSizeResult })

const dfs_smallestComponentSizeResult = DepthFirstSearch.smallestComponentSize(graph)
console.log({ dfs_smallestComponentSizeResult })
