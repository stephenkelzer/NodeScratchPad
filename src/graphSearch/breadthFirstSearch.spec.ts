import { AdjacencyList, EdgeList } from '../types'
import { BreadthFirstSearch } from './breadthFirstSearch'
import { buildGraph } from './buildGraph'

const nonCircularSingleComponentEdges: EdgeList = [
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['e', 'f'],
]

const nonCircularTwoComponentEdges: EdgeList = [
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['e', 'f'],
  ['x', 'y'],
  ['y', 'z'],
]

const circularSingleComponentEdges: EdgeList = [
  ['a', 'b'],
  ['b', 'c'],
  ['a', 'c'],
]

const circularTwoComponentEdges: EdgeList = [
  ['a', 'b'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'd'],
  ['e', 'f'],
  ['x', 'y'],
  ['y', 'z'],
  ['x', 'z'],
]

const nonCircularSingleComponentGraph = buildGraph(nonCircularSingleComponentEdges)
const nonCircularTwoComponentGraph = buildGraph(nonCircularTwoComponentEdges)
const circularSingleComponentGraph = buildGraph(circularSingleComponentEdges)
const circularTwoComponentGraph = buildGraph(circularTwoComponentEdges)

describe('breadthFirst', () => {
  const breadthFirstSearch = new BreadthFirstSearch()

  describe('hasPath', () => {
    test.each([
      ...nonCircularSingleComponentEdges.map<[AdjacencyList, string, string]>((edge) => [
        nonCircularSingleComponentGraph,
        edge[0],
        edge[1],
      ]),
      ...circularSingleComponentEdges.map<[AdjacencyList, string, string]>((edge) => [
        circularSingleComponentGraph,
        edge[0],
        edge[1],
      ]),
      ...nonCircularTwoComponentEdges.map<[AdjacencyList, string, string]>((edge) => [
        nonCircularTwoComponentGraph,
        edge[0],
        edge[1],
      ]),
      ...circularTwoComponentEdges.map<[AdjacencyList, string, string]>((edge) => [
        circularTwoComponentGraph,
        edge[0],
        edge[1],
      ]),
    ])('expect a valid path', (graph, startNode, endNode) => {
      expect(breadthFirstSearch.hasPath(graph, startNode, endNode)).toBe(true)
    })

    test.each([
      [nonCircularTwoComponentGraph, 'a', 'x'],
      [nonCircularTwoComponentGraph, 'b', 'x'],
      [nonCircularTwoComponentGraph, 'c', 'x'],
      [nonCircularTwoComponentGraph, 'd', 'x'],
      [nonCircularTwoComponentGraph, 'e', 'x'],
      [nonCircularTwoComponentGraph, 'f', 'x'],
      [nonCircularTwoComponentGraph, 'a', 'y'],
      [nonCircularTwoComponentGraph, 'b', 'y'],
      [nonCircularTwoComponentGraph, 'c', 'y'],
      [nonCircularTwoComponentGraph, 'd', 'y'],
      [nonCircularTwoComponentGraph, 'e', 'y'],
      [nonCircularTwoComponentGraph, 'f', 'y'],
      [nonCircularTwoComponentGraph, 'a', 'z'],
      [nonCircularTwoComponentGraph, 'b', 'z'],
      [nonCircularTwoComponentGraph, 'c', 'z'],
      [nonCircularTwoComponentGraph, 'd', 'z'],
      [nonCircularTwoComponentGraph, 'e', 'z'],
      [nonCircularTwoComponentGraph, 'f', 'z'],
      [circularTwoComponentGraph, 'a', 'x'],
      [circularTwoComponentGraph, 'b', 'x'],
      [circularTwoComponentGraph, 'c', 'x'],
      [circularTwoComponentGraph, 'd', 'x'],
      [circularTwoComponentGraph, 'e', 'x'],
      [circularTwoComponentGraph, 'f', 'x'],
      [circularTwoComponentGraph, 'a', 'y'],
      [circularTwoComponentGraph, 'b', 'y'],
      [circularTwoComponentGraph, 'c', 'y'],
      [circularTwoComponentGraph, 'd', 'y'],
      [circularTwoComponentGraph, 'e', 'y'],
      [circularTwoComponentGraph, 'f', 'y'],
      [circularTwoComponentGraph, 'a', 'z'],
      [circularTwoComponentGraph, 'b', 'z'],
      [circularTwoComponentGraph, 'c', 'z'],
      [circularTwoComponentGraph, 'd', 'z'],
      [circularTwoComponentGraph, 'e', 'z'],
      [circularTwoComponentGraph, 'f', 'z'],
    ])('expect no path found', (graph, startNode, endNode) => {
      expect(breadthFirstSearch.hasPath(graph, startNode, endNode)).toBe(false)
    })
  })

  describe('connectedComponentsCount', () => {
    it('expect 1 connected component', () => {
      expect(breadthFirstSearch.connectedComponentsCount(nonCircularSingleComponentGraph)).toBe(1)
    })

    it('expect 2 connected components', () => {
      expect(breadthFirstSearch.connectedComponentsCount(nonCircularTwoComponentGraph)).toBe(2)
    })

    it('expect 1 connected component', () => {
      expect(breadthFirstSearch.connectedComponentsCount(circularSingleComponentGraph)).toBe(1)
    })

    it('expect 2 connected components', () => {
      expect(breadthFirstSearch.connectedComponentsCount(circularTwoComponentGraph)).toBe(2)
    })
  })
})
