function startAfterTenSecond() {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			Math.random() > .5 ? resolve('You lost 10 seconds again!') : reject('Try again!')
		},10000);
	})
}

let result = () => {
    return new Promise(function(resolve,reject) {
        resolve(startAfterTenSecond());
    })
}
 
(async () => {
	try {
		let start = await result();
		console.log(start);
	} catch(error) {
		console.error(error);
	}
})();




