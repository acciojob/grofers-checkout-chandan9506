const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	let table = document.querySelector("table");
	let prices = document.querySelectorAll(".price");	

    let sum = 0;
    for(let i=0;i<prices.length;i++){
        sum = sum +Number(prices[i].innerText);
    }
    
	let newRow = document.createElement("tr");
    newRow.innerHTML=`
        <td>Total Price = ${sum}</td>
        `;
    table.append(newRow);


	
  
};

getSumBtn.addEventListener("click", getSum);

