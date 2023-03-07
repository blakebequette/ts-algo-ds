type BinaryNode = {
    val: number,
    left: BinaryNode | null ,
    right: BinaryNode | null,
}


function dfs(node: BinaryNode){
    // pre-order: process node.val
    if (node.left) {dfs(node.left)}
    if (node.right) {dfs(node.right)}
    // post order: process node val
    return
}

function breadthFS(node: BinaryNode){
    if (!node) return node
    let queue = [node]
    while (queue.length){
        // process current node 
        const currentNode = queue.shift()
        if (currentNode?.left) {
            queue.push(currentNode.left)
        } 
        if (currentNode?.right){
            queue.push(currentNode.right)
        }
    }
    return 
}