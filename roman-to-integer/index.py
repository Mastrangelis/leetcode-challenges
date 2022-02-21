class Solution:
    def romanToInt(self, s: str) -> int:
        dic = {'I':1, 'V':5, 'X':10, 'L':50, 'C': 100, 'D':500, 'M':1000}
        flag = 0
        _sum = 0
        for i in range(len(s)-1):
            if dic[s[i]] < dic[s[i+1]]:
                _sum += (dic[s[i+1]] - dic[s[i]])
                flag = 1
            else:
                if flag == 0:
                    _sum += dic[s[i]]
                else:   
                    pass
                    flag = 0  
        if flag == 0:
            _sum += dic[s[-1]]  
        return _sum