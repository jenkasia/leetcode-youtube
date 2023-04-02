function removeDuplicates(nums) {
  let current = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[current] !== nums[i]) {
      current++;
      nums[current] = nums[i];
    }
  }

  return current + 1;
}
