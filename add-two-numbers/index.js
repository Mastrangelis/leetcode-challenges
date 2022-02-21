/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
 }

/**
 * @param l {ListNode} l
 * @param value {Integer} value
 * @return l.next {ListNode}
 *
 */
 var recursion = function(l, value) {
    if (l.next) {
        l.next = new ListNode(l.next.val, recursion(l.next, value))
    } else {
        if (typeof value !== 'undefined') {
            l.next = new ListNode(value);
        } else {
            l.next = null;
        }
    }
    return l.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let nums1 = [l1.val], nums2 = [l2.val];

    while(l1.next) {
        nums1.unshift(l1.next.val);
        l1 = l1.next;
    }
    
    while(l2.next) {
        nums2.unshift(l2.next.val);
        l2 = l2.next;
    }
    
    const sum = (
        BigInt(nums1.join("")) + 
        BigInt(nums2.join(""))
    ).toString();
    
    let output = [];
    for ( let i = 0; i < sum.length; i++) {
        output.unshift(+sum[i]);
    }
    
    let l3 = new ListNode(); l3.val = output[0];
    for (let i = 0; i < output.length; i++) {
        recursion(l3, output[i+1]);
    }
    return l3;
};