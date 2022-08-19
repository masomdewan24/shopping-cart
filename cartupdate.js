
function updateCaseNumber(isIncrise){
  const caseNumber = document.getElementById('case-number');
  const caseNumberString = caseNumber.value;
  const newCaseNumber = parseInt(caseNumberString);
  
  let curentCaseNumber;

  if(isIncrise){
    curentCaseNumber = newCaseNumber + 1;
  }
  else{
    curentCaseNumber = newCaseNumber - 1;
  }

  caseNumber.value = curentCaseNumber;
  return curentCaseNumber;
};

function updateTotalCasePrice(curentCaseNumber){
  const caseTotalPrice = curentCaseNumber * 56;
  const casePrice = document.getElementById('cas-pric');
  casePrice.innerText = caseTotalPrice;
}

document.getElementById('ntn-case-psuse').addEventListener('click', function(){
    const curentCaseNumber =updateCaseNumber(true);
    updateTotalCasePrice(curentCaseNumber);

  
    calculateSubTotal();

});
document.getElementById('btn-case-minus').addEventListener('click', function(){
  updateCaseNumber(false);
  const curentCaseNumber = updateCaseNumber(false);
  updateTotalCasePrice(curentCaseNumber);
  
  calculateSubTotal();

});