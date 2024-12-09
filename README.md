# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Analysis 

The `hasCycle` function uses Depth-First Search (DFS) to detect cycles in an undirected graph. The graph is represented as an adjacency list, where the number of nodes is \( n \) and the number of edges is \( e \). In the worst case, the algorithm visits each node once, which takes \( O(n) \), and explores each edge in the graph, which takes \( O(e) \). Since the graph is undirected, each edge is explored twice (once from each of its endpoints), but this does not change the overall complexity. Combining these, the total runtime complexity of the algorithm is:

$$
\Theta(n + e)
$$

This reflects the linear time required to traverse all nodes and edges, making the function efficient for detecting cycles in undirected graphs.

## Sources 

For this I looked at slides 27-32 of lecture 02 adn refrencing the psudeocode. I also looked at the geesk for geeks https://www.geeksforgeeks.org/detect-cycle-in-a-graph/. For the test code I went with the logic of using my own graphs to test the code as it seems more effecient. I asked chatGPT for some basic graph examples and those were presented. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

