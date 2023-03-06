"use strict";
function dfs(node) {
    // pre-order: process node.val
    if (node.left) {
        dfs(node.left);
    }
    if (node.right) {
        dfs(node.right);
    }
    // post order: process node val
    return;
}
function breadthFS(node) {
    if (!node)
        return node;
    let queue = [node];
    while (queue.length) {
        // process current node 
        const currentNode = queue.shift();
        if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return;
}
