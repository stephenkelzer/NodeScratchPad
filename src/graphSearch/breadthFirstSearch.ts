import { AdjacencyList } from '../types'

/* BREADTH FIRST SEARCH

    Breadth first search is a graph traversal algorithm that explores the neighbor nodes first, before moving to the next level neighbors.

    Can easily be implemented with a queue.
    Always add to END of queue, always remove from FRONT of queue.
*/
export class BreadthFirstSearch {
  hasPath = (graph: AdjacencyList, start: string, end: string): boolean => {
    const queue = [start]
    const visited = new Set<string>(queue)

    while (queue.length > 0) {
      const current = queue.shift()! // important, always remove from FRONT of queue

      if (current === end) return true

      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor) // important, always add to END of queue
        }
      }
    }

    return false
  }

  componentsCount = (graph: AdjacencyList): number => {
    const visited = new Set<string>()
    let count = 0

    for (const node in graph) {
      if (visited.has(node)) continue
      visited.add(node)

      const queue = [node]
      while (queue.length > 0) {
        const current = queue.shift()! // important, always remove from FRONT of queue

        for (const neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor)
            queue.push(neighbor) // important, always add to END of queue
          }
        }
      }

      count += 1
    }

    return count
  }

  largestComponentSize = (graph: AdjacencyList): number => {
    const visited = new Set<string>()
    let largest = 0

    for (const node in graph) {
      if (visited.has(node)) continue
      visited.add(node)

      let size = 1

      const queue = [node]
      while (queue.length > 0) {
        const current = queue.shift()! // important, always remove from FRONT of queue

        for (const neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor)
            size += 1
            queue.push(neighbor) // important, always add to END of queue
          }
        }
      }

      if (size > largest) largest = size
    }

    return largest
  }
}
