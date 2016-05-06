// for loop with conditional
var people = ['billy', 'teddy', 'freddy', 'jimmy']

for (var i=0; i<people.length; i++) {
	if (i%2 === 0 ) {
		console.log(people[i])
	}
}


// for loop no condition
var people = ['billy', 'teddy', 'freddy', 'jimmy']

for (var i=1; i<people.length; i+=2) {
	console.log(people[i])
}


var aInA = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ]

for (var i = 0; i < aInA.length; i++) {
	if (i === 1 ) {
		console.log(aInA[i])
	}
}


var aInA = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ]

for (var i = 0; i < aInA.length; i++) {
	console.log(aInA[1][i])
}