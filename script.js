

function calculate() {
    let item1 = parseFloat(document.getElementById('item-1').value);
    let qtyItem1 = parseInt(document.getElementById('qtyItem1').value);
    let item2 = parseFloat(document.getElementById('item-2').value);
    let qtyItem2 = parseInt(document.getElementById('qtyItem2').value);
    let shipCharges = 100;


var total = ((qtyItem1 * item1) + (qtyItem2 * item2)) + shipCharges;

document.getElementById('message').innerText=
`Price of item 1 is: ${item1} 
Quantity of item 1 is:  ${qtyItem1 }
Price of item 2 is:  ${item2 }
Quantity of item 2 is: ${qtyItem2 }
Total cost of your order is: ${total}
`;
}

function reset(){

    document.getElementById('item-1').value="";
    document.getElementById('qtyItem1').value="";
    document.getElementById('item-2').value="";
    document.getElementById('qtyItem2').value="";
    document.getElementById('message').innerText="";
    }
 