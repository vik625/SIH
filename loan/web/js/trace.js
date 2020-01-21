import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")
      document.getElementById("track").addEventListener("click", function () {
        var track_id = document.getElementById("t_id").value;

      window.pm.methods.getData_trackindex("0").call({ from: window.accounts[0] }, function (error, result){
        if (error) {
            console.log(error)
            console.log("false")
        } else {
            console.log(result)
            console.log("true")
            //Logic to remove item from owned list

        }
      })
      })

    }
