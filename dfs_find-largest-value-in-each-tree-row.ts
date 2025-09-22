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
// Space complexity - O(n)
function largestValues(root: TreeNode | null): number[] {
	const result = [];
	helper(root, 0, result);
	return result;
}

function helper(root: TreeNode, level: number, result: number[]) {
	if (root === null) return;

	if (result[level] === undefined) {
		// is there is no max at the level, assign the curr root.val as max.
		result[level] = root.val;
	} else {
		// replace the max at the level
		result[level] = Math.max(result[level], root.val);
	}

	helper(root.left, level + 1, result);
	helper(root.right, level + 1, result);
}
