
function updatePhoneNumber(update){
    const previsuPhoneNumber = document.getElementById('phone-number-field');
    const previsuPhoneNumberStrint = previsuPhoneNumber.value;
    const phoneNumber = parseInt(previsuPhoneNumberStrint);
    let newPhoneNumber;
    if(update){
        newPhoneNumber =  phoneNumber + 1;
    }
    else{
       newPhoneNumber =  phoneNumber - 1;
    }
    previsuPhoneNumber.value = newPhoneNumber;
    return newPhoneNumber;
}
 
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
   const phoneTotalElement = document.getElementById('phone-price-field');
   phoneTotalElement.innerText = phoneTotalPrice; 
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber =  updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})
