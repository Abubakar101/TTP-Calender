/*

Question C -- countWays(n): A child is climbing up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. 

Implement a method to count how many possible ways the child can jump up the stairs. (Order matters.) 

This can be solved iteratively or recursively, either is fine.


*/
function countSteps(target) {
	let steps = [1, 2, 3],
		sums = [0],
		count = 0;

	while (sums.length) {
		let curr_sum = sums.pop();
		if (curr_sum < target) steps.forEach(n => sums.push(curr_sum + n));
		if (curr_sum === target) count++;
	}
	return count;
}

countSteps(5);
