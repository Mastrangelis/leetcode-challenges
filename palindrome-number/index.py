class Solution(object):
    def isPalindrome(self, x):
        _isPalimdrome = False
        _x = x
        reverse = 0
        while _x > 0:
            remain = _x%10
            reverse = reverse*10 + remain
            _x = _x/10
        if x == reverse:
            _isPalimdrome = True
        return _isPalimdrome