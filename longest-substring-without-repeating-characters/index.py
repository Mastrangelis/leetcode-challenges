class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        l, r = 0, 0
        best = 0
        chars = {}
        
        while r < len(s):
            char = s[r]
            if char not in chars or l > chars[char]:
                chars[char] = r
                best = max(best, r - l + 1)
                r += 1
            
            else:
                l = chars[char] + 1
        
        return best