const purchasePrice = document.querySelector('#single-stock');
const quantityStock = document.querySelector('#quantity');
const currentPrice = document.querySelector('#single-current');
const button = document.querySelector("#btn");
const output = document.querySelector('#output');


button.addEventListener('click', function(e){
	e.preventDefault();
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}
	document.body.style.background = '#fff';
	document.querySelector('.container').style.backgroundColor = '#fff';
	const costPrice = Number(purchasePrice.value);
	const numberOfStocks = Number(quantityStock.value);
	const currentCost = Number(currentPrice.value);

	if (costPrice > 0 && numberOfStocks > 0 && currentCost > 0){
		const oldTotal = (costPrice * numberOfStocks).toFixed(2);
		console.log(oldTotal);
		const currentTotal = (currentCost * numberOfStocks).toFixed(2);
		let gain = (currentTotal - oldTotal).toFixed(2);
		console.log(gain);

		if (gain >= 0) {
			const gainPercent = ((gain * 100) / oldTotal).toFixed(2);
			output.textContent = `Your Profit is ${gainPercent}% or ₹${gain} `;
			document.body.style.background = 'url(profit.gif) no-repeat center center/cover';
			document.querySelector('.container').style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
		}else if(gain < -50){
			console.log(`gain greater than 50% i.e ${gain}`);
			gain = Math.abs(gain);
			const lossPercent = ((gain * 100) / oldTotal).toFixed(2);
			output.textContent = `Your Loss is ${lossPercent}% or ₹${gain}`;
			document.body.style.background = 'url(loss.gif) no-repeat center center/cover';
			document.querySelector('.container').style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
		}else {
			gain = Math.abs(gain);
			const lossPercent = ((gain * 100) / oldTotal).toFixed(2);
			output.textContent = `Your Loss is ${lossPercent}% or ₹${gain}`;
		}
	} else {
		output.textContent = "Enter only numbers which are greater than 0";
	}
})
