// https://leetcode.com/problems/same-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree1 = new TreeNode(1, new TreeNode(2, 4, null), new TreeNode(3, 4, 5));
const tree2 = new TreeNode(1, new TreeNode(2, 4, 5), new TreeNode(3, 4, 5));
const tree3 = new TreeNode(1, new TreeNode(2, 4, 5), new TreeNode(3, 4, 5));
const tree4 = new TreeNode(1, new TreeNode(2, 4, 5), new TreeNode(3, 4, 51));

//const tree1 = new TreeNode(1, null, 3);
//const tree2 = new TreeNode(1, 2, 3);

var isSameTree = function (p, q) {
  if (p.val !== q.val) {
    return false;
  }

  if (typeof p.left != 'object' && typeof q.left != 'object') {
    if (p.left != q.left) {
      return false;
    }
  } else if (typeof p.left == 'object' && typeof q.left == 'object') {
    return isSameTree(p.left, q.left);
  } else {
    return false;
  }

  if (typeof p.right != 'object' && typeof q.right != 'object') {
    if (p.right !== q.right) {
      return false;
    }
  } else if (typeof p.right == 'object' && typeof q.right == 'object') {
    return isSameTree(p.right, q.right);
  } else {
    return false;
  }

  return true;
};

console.log(isSameTree(tree1, tree2));

//console.log(isSameTree(tree3, tree4));

var isSameTree2 = function (p, q) {
  const checkIfValid = (val) => {
    if (val === null || val === 'empty' || val === undefined) {
      return 'empty';
    }
    return val.val;
  };
  const p_v = checkIfValid(p);
  const q_v = checkIfValid(q);

  if (p_v === 'empty' && q_v === 'empty') {
    return true;
  }

  if (p_v === 'empty' || q_v === 'empty') {
    return false;
  }
  if (p_v !== q_v) {
    return false;
  }

  const p_l = checkIfValid(p.left);
  const p_r = checkIfValid(p.right);
  const q_l = checkIfValid(q.left);
  const q_r = checkIfValid(q.right);

  if (p_l !== q_l) {
    return false;
  }

  if (p_r !== q_r) {
    return false;
  }

  return isSameTree(p.left, q.left) === isSameTree(p.right, q.right);
};
