const nums = [13,35,65,354,1,3,46,987,14]

const goal = 1000

// Main loop to loop through all numbers one time
for(let i = 0; i < nums.length; i++){

    // Second loop, to compare every OTHER number in the array against the number in the main loop
    for(let j = 0; j < nums.length; j++){
        // check to see if number from first loop, plus current number in 2nd loop add to GOAL
        if(nums[i]+nums[j] == goal){
            console.log(nums[i], nums[j])
        }
    }
}