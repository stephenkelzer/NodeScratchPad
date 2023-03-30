import { AdjacencyList } from '../types'

export const depthFirstHasPath = (graph: AdjacencyList, current: string, end: string): boolean => {
  const stack = [current]
  const visited = new Set<string>()

  while (stack.length > 0) {
    const current = stack.pop()! // important, always remove from END of queue

    if (current === end) return true
    if (visited.has(current)) continue
    visited.add(current)

    for (const neighbor of graph[current]) {
      stack.push(neighbor) // important, always add to END of queue
    }
  }

  return false
}

export const recursiveDepthFirstHasPath = (
  graph: AdjacencyList,
  current: string,
  end: string,
  visited: Set<string> = new Set<string>()
): boolean => {
  if (current === end) return true

  if (visited.has(current)) return false
  visited.add(current)

  for (const neighbor of graph[current]) {
    if (recursiveDepthFirstHasPath(graph, neighbor, end, visited)) {
      return true
    }
  }

  return false
}

export const depthFirstConnectedComponentsCount = (graph: AdjacencyList): number => {
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
