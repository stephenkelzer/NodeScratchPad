import { buildGraph } from './buildGraph'
import { DepthFirstSearch } from './depthFirstSearch'

describe('DepththFirstSearch', () => {
  const depthFirstSearch = new DepthFirstSearch()

  describe('hasPath', () => {
    it('finds a path when one exists', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'd'],
      ])
      expect(depthFirstSearch.hasPath(graph, 'a', 'd')).toBe(true)
    })

    it("doesn't find a path when one doesn't exists", () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['c', 'd'],
      ])
      expect(depthFirstSearch.hasPath(graph, 'a', 'd')).toBe(false)
    })

    it('finds a path in a circular graph successfully', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'a'],
      ])
      expect(depthFirstSearch.hasPath(graph, 'a', 'c')).toBe(true)
    })
  })

  describe('hasPathRecursive', () => {
    it('finds a path when one exists', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'd'],
      ])
      expect(depthFirstSearch.hasPathRecursive(graph, 'a', 'd')).toBe(true)
    })

    it("doesn't find a path when one doesn't exists", () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['c', 'd'],
      ])
      expect(depthFirstSearch.hasPathRecursive(graph, 'a', 'd')).toBe(false)
    })

    it('finds a path in a circular graph successfully', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'a'],
      ])
      expect(depthFirstSearch.hasPathRecursive(graph, 'a', 'c')).toBe(true)
    })
  })

  describe('componentsCount', () => {
    it('handles empty graph ', () => {
      const graph = buildGraph([])
      expect(depthFirstSearch.componentsCount(graph)).toBe(0)
    })

    it('counts successfully', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
      ])
      expect(depthFirstSearch.componentsCount(graph)).toBe(3)
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
      expect(depthFirstSearch.componentsCount(graph)).toBe(3)
    })
  })

  describe('largestComponentSize', () => {
    it('handles empty graph', () => {
      const graph = buildGraph([])
      expect(depthFirstSearch.largestComponentSize(graph)).toBe(0)
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
      expect(depthFirstSearch.largestComponentSize(graph)).toBe(4)
    })

    it('works successfully with circular graph', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
        ['z', 'x'],
      ])
      expect(depthFirstSearch.largestComponentSize(graph)).toBe(3)
    })
  })

  describe('smallestComponentSize', () => {
    it('handles empty graph', () => {
      const graph = buildGraph([])
      expect(depthFirstSearch.smallestComponentSize(graph)).toBe(Infinity)
    })

    it('finds smallest component', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['w', 'x'],
        ['x', 'y'],
        ['y', 'z'],
      ])
      expect(depthFirstSearch.smallestComponentSize(graph)).toBe(2)
    })

    it('works successfully with circular graph', () => {
      const graph = buildGraph([
        ['a', 'b'],
        ['b', 'c'],
        ['r', 's'],
        ['x', 'y'],
        ['y', 'z'],
        ['z', 'x'],
      ])
      expect(depthFirstSearch.smallestComponentSize(graph)).toBe(2)
    })
  })
})
