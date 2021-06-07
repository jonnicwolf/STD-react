const array = [2,1,3,5,8,6,7,5,2,1,0,8,2,8,9]
const twoSum = function(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++){
        let arr = comp[nums[i]]
        console.log(arr)
        console.log(i)
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
console.log(twoSum(array, 4))