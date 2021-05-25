/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, 
 * except the number 0 itself.
 *
 * Examples:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    // New a ListNode here, with head.next as header, 
    // Pos as a pointer points to current position
    const List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0) {
        // Indicates (ID) that next digit is not null, so new a Node and move to it
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        // Create ListNode after sum
        head.next = new ListNode(sum);
        head = head.next;

        // Re-assign sum value to carry
        sum = carry;
        // Reset carry to default value
        carry = 0;

    }

    return List.next;
}
