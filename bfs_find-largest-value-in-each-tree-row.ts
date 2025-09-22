/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Time complexity - O(n), n = number of nodes
// Space complexity - O(h), h = height of the tree
function largestValues(root: TreeNode | null): number[] {
	const result = [];
	if (root === null) return result;

	// add root to traverse through all level to find max at each level
	const q = [root];

	while (q.length > 0) {
		// number of nodes at current level
		const size = q.length;
		// initialize max for current level
		let max = -Infinity;

		// traverse through all nodes at current level
		for (let i = 0; i < size; i++) {
			const curr = q.shift();

			// update the max for current level
			max = Math.max(max, curr.val);
			if (curr.left !== null) q.push(curr.left);
			if (curr.right !== null) q.push(curr.right);
		}
		// push the max of the current level to result
		result.push(max);
	}
	return result;
}
