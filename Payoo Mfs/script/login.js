document.getElementById("login-btn").addEventListener("click",function(event){

    //console.log("hello")
    event.parentDefault();
    const AccountNumber=document.getElementById("Account-number").value;
    //console.log(accountNumbe)

     const pin=document.getElementById("pin").value;
     if(AccountNumber.length===11){
        if(pin===1234){
           // console.log("okay thik acha")
            window.location.href="./main.html"
        }
        else{
            alert("pin thik nai")
        }
        //console.log("yess")
     }
     else{
        alert("need valid account number")
     }

})