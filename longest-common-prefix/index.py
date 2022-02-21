class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        for i in range(len(strs[0])):
            for j,string in enumerate(strs):
                if string[:(i+1)].count(strs[0][:(i+1)]) == 0:
                    return strs[0][:(i)]

        return strs[0]