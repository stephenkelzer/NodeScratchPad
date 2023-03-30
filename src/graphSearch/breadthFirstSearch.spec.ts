import { BreadthFirstSearch } from './breadthFirstSearch'
import { buildGraph } from './buildGraph'

describe('BreadthFirstSearch', () => {
  const breadthFirstSearch = new BreadthFirstSearch()

  describe('hasPath', () => {
    it('finds a path when one exists', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'd'],
      ])
      expect(breadthFirstSearch.hasPath(graph, 'a', 'd')).toBe(true)
    })

    it("doesn't find a path when one doesn't exists", () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['c', 'd'],
      ])
      expect(breadthFirstSearch.hasPath(graph, 'a', 'd')).toBe(false)
    })

    it('finds a path in a circular graph successfully', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'a'],
      ])
      expect(breadthFirstSearch.hasPath(graph, 'a', 'c')).toBe(true)
    })

    it('fails cleanly when destination does not exist', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'a'],
      ])
      expect(breadthFirstSearch.hasPath(graph, 'a', 'z')).toBe(false)
    })
  })

  describe('componentsCount', () => {
    it('handles empty graph ', () => {
      const graph = buildGraph([])
      expect(breadthFirstSearch.componentsCount(graph)).toBe(0)
    })

    it('counts successfully', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
      ])
      expect(breadthFirstSearch.componentsCount(graph)).toBe(3)
    })

    it('counts successfully in circular graph', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
        ['z', 'x'],
      ])
      expect(breadthFirstSearch.componentsCount(graph)).toBe(3)
    })
  })

  describe('largestComponentSize', () => {
    it('handles empty graph', () => {
      const graph = buildGraph([])
      expect(breadthFirstSearch.largestComponentSize(graph)).toBe(0)
    })

    it('finds largest component', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['w', 'x'],
        ['x', 'y'],
        ['y', 'z'],
      ])
      expect(breadthFirstSearch.largestComponentSize(graph)).toBe(4)
    })

    it('counts successfully in circular graph', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
        ['z', 'x'],
      ])
      expect(breadthFirstSearch.largestComponentSize(graph)).toBe(3)
    })
  })
})
