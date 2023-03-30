import { AdjacencyList } from '../types'

/* DEPTH FIRST SEARCH

    Depth first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

    Can easily be implemented with a stack or a recursive function.
    Always add to END of stack, always remove from END of stack.
*/
export class DepthFirstSearch {
  hasPath(graph: AdjacencyList, current: string, end: string): boolean {
    const stack = [current]
    const visited = new Set<string>()

    while (stack.length > 0) {
      const current = stack.pop()! // important, always remove from END of stack

      if (current === end) return true
      if (visited.has(current)) continue
      visited.add(current)

      for (const neighbor of graph[current]) {
        stack.push(neighbor) // important, always add to END of stack
      }
    }

    return false
  }

  hasPathRecursive(graph: AdjacencyList, current: string, end: string, visited = new Set<string>()): boolean {
    if (current === end) return true

    if (visited.has(current)) return false
    visited.add(current)

    for (const neighbor of graph[current]) {
      if (this.hasPathRecursive(graph, neighbor, end, visited)) {
        return true
      }
    }

    return false
  }

  componentsCount(graph: AdjacencyList): number {
    const visited = new Set<string>()

    const explore = (node: string): boolean => {
      if (visited.has(node)) return false
      visited.add(node)

      for (const neighbor of graph[node]) {
        explore(neighbor)
      }

      return true
    }

    let count = 0
    for (const node in graph) {
      if (explore(node)) {
        count += 1
      }
    }

    return count
  }

  largestComponentSize(graph: AdjacencyList): number {
    const visited = new Set<string>()

    const discoverSize = (node: string): number => {
      if (visited.has(node)) return 0
      visited.add(node)

      let size = 1

      for (const neighbor of graph[node]) {
        size += discoverSize(neighbor)
      }

      return size
    }

    let largest = 0
    for (const node in graph) {
      const size = discoverSize(node)
      if (size > largest) largest = size
    }

    return largest
  }

  smallestComponentSize(graph: AdjacencyList): number {
    const visited = new Set<string>()

    const discoverSize = (node: string): number => {
      if (visited.has(node)) return 0
      visited.add(node)

      let size = 1

      for (const neighbor of graph[node]) {
        size += discoverSize(neighbor)
      }

      return size
    }

    let smallest = Infinity
    for (const node in graph) {
      const size = discoverSize(node)
      if (size > 0 && size < smallest) smallest = size
    }

    return smallest
  }
}
