import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")
      document.getElementById("btnpress").addEventListener("click", function () {
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        //var address = document.getElementById("address").value;
        var usertype = document.getElementById("usertype").value;
          window.accounts = ["0x26fce4c0038731d800917a4c4bed9f85cfa83a70"]
          document.getElementById("kl").style.display  = 'none';

if (username.length >=1 && password.length >=1){
document.getElementById("kl").style.display  = 'none';
document.getElementById("currentUserId1").textContent="";


          window.pm.methods.createUser(username,password,"0x26fce4c0038731d800917a4c4bed9f85cfa83a70",usertype).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
        if (error) {
            console.log(error)
            console.log("false")
        } else {
            console.log(result)
            console.log("true")
            window.pm.methods.get_details().call({ from: window.accounts[0]}, function (error, result) {
          if (error) {
              console.log(error)
              console.log("false")
          } else {
              console.log(result[1]-1)
              console.log("true")
              document.getElementById("currentUserId2").innerHTML=result[1]-1;

              //Logic to remove item from owned list
          }
        })
            //Logic to remove item from owned list
        }
      })
    }
    else {
      document.getElementById("kl").style.display  = 'block';

    //window.open("Invalid Username and Password",'popUpWindow','height=200,width=200');
      document.getElementById("currentUserId1").textContent="Invalid Username and Password";

    }
      })

    }
