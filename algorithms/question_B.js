/* 
Question B -- Web Crawler: I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. 
I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, "visited", where I'm storing URLs I've already visited. 

Now the crawler only visits a URL if it hasn't already been visited. Let’s see if we can make this crawler use less memory. 
See if you can come up with a data structure better than a hash that just stores the entire URL. 

How can we trim down the amount of space taken up by "visited"? Explain in words and implement your solution.
*/

/*
-------------------
>>>>>> ANSWER <<<<<<<<

We can use Trie data structure to store the visited URLs by the web crawler. This way, unlike the hash table, we don't need to save the entire URLs separately like the 
parent/ & parent/child & parent/child/grandchildren. 

Instead, we can check if the crawler has already visited the location by checking child's node inside the parent's node, i.e., child - about's (/about) node inside the parent - google (google.com/) node!

-------------------
*/



//Trie Data Structure

class Node {
	constructor() {
		this.keys = new Map();
		this.end = false;
	}
	// Setter
	setEnd() {
		this.end = true;
	}

	// Getter
	isEnd() {
		return this.end;
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}

	// Adding URls
	add(input, parentNode = this.root) {
		let currentNode = input.split('/').filter(x => x.length)[0];
		let nextNode = input.split('/').filter(x => x.length).splice(1).join('/');

		if (input.length === 0) {
			parentNode.setEnd();
			return;
		} else if (!parentNode.keys.has(currentNode)) {
			parentNode.keys.set(currentNode, new Node());
			return this.add(nextNode, parentNode.keys.get(currentNode));
		} else {
			return this.add(nextNode, parentNode.keys.get(currentNode));
		}
	}

	// Checking Visited URLs
	isVisited(value, parentNode = this.root) {
		let currentNode = value.split('/').filter(x => x.length);
		while (currentNode.length > 1) {
			if (!parentNode.keys.has(currentNode[0])) {
				return false;
			} else {
				parentNode = parentNode.keys.get(currentNode[0]);
				currentNode = currentNode.slice(1);
			}
		}

		return parentNode.keys.has(currentNode[0]) &&
			parentNode.keys.get(currentNode[0]).isEnd()
			? true
			: false;
	}

  // Helper Function
	print() {
		let URLs = [];
		let search = function(parentNode, url = '') {
			if (parentNode.keys.size !== 0) {
				for (let path of parentNode.keys.keys()) {
					search(
						parentNode.keys.get(path),
						(url += url.length > 1 ? `/${path}` : path)
					);
				}
			} else {
				return url.length > 0 ? URLs.push(url) : undefined;
			}
		};
		search(this.root);
		return URLs.length ? `Added URLs ${URLs}` : 'Not Added';
	}
}

URLs = new Trie();
URLs.add('google.com/contact/address/newyork/');

console.log(URLs.isVisited('google.com/contact/address/newyork/'));
console.log(URLs.print());
