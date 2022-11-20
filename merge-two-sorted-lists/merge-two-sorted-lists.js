//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let values = [];
  const iterateList = (list) => {
    for (value in list) {
      if (value === 'object') {
        iterateList(value);
      } else {
        if (value === 'val') {
          values.push(value);
        }
      }
    }
  };
};
