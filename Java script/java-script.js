   
//    for login file header 
   document.getElementById('input-btn').addEventListener('click', function(){
        const inputNumber = document.getElementById('input-number');
        const contactNumber = inputNumber.value; 
        const inputpin = document.getElementById('input-pin');
        const pin = inputpin.value;
        if(contactNumber == "01705717651" && pin == "1234"){
            alert('login sucess');
            window.location.assign("/home.html")
        }
        else{
            alert('your password worng');
            return;
        }
    })



