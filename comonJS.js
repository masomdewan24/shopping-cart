
function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const curentPhoneTotalString = phoneTotalElement.innerText;
    const curentPhoneTotal = parseInt(curentPhoneTotalString);
    return curentPhoneTotal;
}
function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
   subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const curentPhoneTotal = getTextElementById('phone-price-field');
   const curentCaseTotal = getTextElementById('cas-pric');
   const subTotal = curentCaseTotal + curentPhoneTotal;
   setTextElementById('sub-total', subTotal);

   

   const textAmountString = (subTotal * 0.1).toFixed(2);
  const textAmount = parseFloat(textAmountString);
   setTextElementById('tax-amount', textAmount);

   const finalAmount = subTotal + textAmount;
   setTextElementById('final', finalAmount);
}