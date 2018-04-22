/*

Question C -- countWays(n): A child is climbing up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. 

Implement a method to count how many possible ways the child can jump up the stairs. (Order matters.) 

This can be solved iteratively or recursively, either is fine.


*/
function countSteps(n = 0, map = {}) {
	if (n < 0) {
		return 0;
	} else if (n === 0) {
		return 1;
	} else if (map[n] === undefined) {
	  map[n] = [1,2,3].reduce((a,c) =>  a+countSteps(n-c, map), 0) 
	}
	return map[n];
}
	
countSteps(20)
