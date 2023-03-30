import { AdjacencyList } from '../types'

export const breadthFirstHasPath = (graph: AdjacencyList, start: string, end: string): boolean => {
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
