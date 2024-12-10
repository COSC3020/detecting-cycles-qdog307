function hasCycle(graph) {
    const visited = new Set(); //need to keep track of nodes visted 

    //This is a depth first function
    function dfs(node, parent) {
        visited.add(node);


        //look through the  neignors of the node 
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) { //if not visted do a dfs
                if (dfs(neighbor, node)) { // if there is a cycle return true
                    return true;
                }
            } else if (neighbor !== parent) { //if not the parent then this is a cycle 
                
                return true;
            }
        }
        return false;
    }

    //loop through each node 

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node, null)) {
                return true;
            }
        }
    }

    return false;
}

