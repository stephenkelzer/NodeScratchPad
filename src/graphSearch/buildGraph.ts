import { AdjacencyList, EdgeList } from '../types'

export const buildGraph = (edges: EdgeList): AdjacencyList => {
  const graph: AdjacencyList = {}

  for (const [a, b] of edges) {
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}
