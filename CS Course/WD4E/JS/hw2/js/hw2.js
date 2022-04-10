/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    // if (yesNick.checked){
    if (same.checked){
        // document.write(document.getElementById('shippingName').value);
        document.getElementById('billingName').value=document.getElementById('shippingName').value
        document.getElementById('billingZip').value=document.getElementById('shippingZip').value
    }
    else{ 
        document.getElementById('billingName').value=null
        document.getElementById('billingZip').value=null
    }
}