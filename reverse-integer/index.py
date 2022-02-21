class Solution:
    def reverse(self, x: int) -> int: 
        rev = int(str(abs(x))[::-1]) # reversed, abs value so we dont reverse a neg sign
        if abs(rev) >= 2**31 - 1: # output int value is too big or too small
            return 0
        if x < 0: # negative
            return rev * -1
        else:
            return rev