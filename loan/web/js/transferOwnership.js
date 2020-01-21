import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")

      document.getElementById("transfer").addEventListener("click", function () {
        var a_id1 = document.getElementById("a_id1").value;
        var a_id2 = document.getElementById("a_id2").value;
        var d_id = document.getElementById("d_id").value;

    window.pm.methods.transferOwnership_data(a_id1,a_id2,d_id).send({ from: window.accounts[0], gas: 500000 }, function (error, result) {
        if (error) {
            console.log(error)
            console.log(false)
        } else {
            console.log(result)
            console.log(true)
                    //Logic to remove item from owned list
        }
    })
  })
  var traceid = document.getElementById("traceid").value;

  document.getElementById("trace_details").addEventListener("click", function () {
    window.pm.methods.get_data_owners(document.getElementById("traceid").value).call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          //Logic to remove item from owned list

      }
    })

    window.pm.methods.getdata_tracking_ids(document.getElementById("traceid").value).call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          //Logic to remove item from owned list

      }
    })

    window.pm.methods.getdata_trackindes(document.getElementById("traceid").value).call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          document.getElementById("currentUserId").innerHTML="From:- UserId-           "     +result[0];
            document.getElementById("currentUserId1").innerHTML="UserName:-      "        +result[1];
            document.getElementById("currentUserId2").innerHTML="To:- UserId-             "     +result[2];
            document.getElementById("currentUserId3").innerHTML="UserName:-       "        +result[3];


          //Logic to remove item from owned list

      }
    })
})

/*

    window.pm.methods.get_data_owners("0").call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          //Logic to remove item from owned list

      }
    })

    window.pm.methods.getdata_tracking_ids("0").call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          //Logic to remove item from owned list

      }
    })

    window.pm.methods.getdata_trackindex("0").call({ from: window.accounts[0] }, function (error, result){
      if (error) {
          console.log(error)
          console.log("false")
      } else {
          console.log(result)
          console.log("true")
          //Logic to remove item from owned list

      }
    })

*/


    }
