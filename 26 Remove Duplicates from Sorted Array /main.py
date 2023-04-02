def remove_duplicates(nums):
    current = 0
    for i in range(1, len(nums)):
        if nums[i] != nums[current]:
            current += 1
            nums[current] = nums[i]

    return current + 1