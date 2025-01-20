

# Since Python 3.9, the built-in list type can be used directly for type hints
# don't need List[int]
class Solution: 
    def rob(self, nums: list[int]) -> int:
        if not nums:
            return 0
        
        n = len(nums)
        if n == 1:
            return nums[0]
        
        #Initialize an array to store money
        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])


        return dp[-1] # dp[-1] means the last element of this list