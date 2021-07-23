/*
	----- Here is the original code with the errors
	var http = require('htt');
	var myname = functon(){
		console.log('Here is my IP address')
	}
	
	function callHttpbi(){
		let promise = new Promise((resolve, reject) => {
			http.get('http://httpbin.org/ip', function(response){
				var str = " "
				response.setEncoding('utf8')
				response.on('data', function(data){
					str += data
				})
				
				response.on('end', function(){
					var result = JSON.parse(str)
					myips = result.origin
					resolve()
				})
			})
		})
		
		let result = await promise;
		result
	}
	
	function executeAsyncTask(){
		const valueA = await callHttpbin()
		const valueB = myname()
		console.log(valueB + " " + valueA)
	}
	
	----- Errors
	1. http variable has http spelt wrong in the require
	2. callHttpbi is spelt wrong, it should be callHttpbin
	3. The callHttpbin function needs do be async
	4. executeAsyncTask function needs to be async
	5. The executeAsyncTask function needs to be called at the end of the application
	6. Function is spelt wrong in the myname variable
	7. UTF8 in the response.setEncoding function needs to be UTF-8
	8. myips should have var in front of it to declare it as a variable
	9. The result at the end of the callHttpbin function needs to be returned
	10. The resolve in the last response.on in the promise needs to take in the myips variable
	11. The myname variable needs to return the string instead of logging it to the console
*/

var http = require('http')
var myname = function(){
	return 'Here is my IP address: '
}

async function callHttpbin(){
	let promise = new Promise((resolve, reject) => {
		http.get('http://httpbin.org/ip', function(response){
			var str = " "
			response.setEncoding('utf-8')
			response.on('data', function(data){
				str += data
			})
			
			response.on('end', function(){
				var result = JSON.parse(str)
				var myips = result.origin
				resolve(myips)
			})
		})
	})
	
	let result = await promise
	return result
}

async function executeAsyncTask(){
	const valueA = await callHttpbin()
	const valueB = myname()
	console.log(valueB + valueA)
}

executeAsyncTask()