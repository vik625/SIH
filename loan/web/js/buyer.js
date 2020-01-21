import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()

  document.getElementById("btns").addEventListener("click", function () {
    var occup = document.getElementById("occupation").value;
    var inc = document.getElementById("income").value;
    var sav = document.getElementById("savings").value;
    
window.pm.methods.shg(occup,inc,sav).send({ from: window.accounts[0] , gas: 5000000 }, function (error, result) {
    if (error) {
        console.log(error)
        console.log(false)
    } else {
        console.log(result)
        console.log(true)

window.location.href = "home.html";

          //Logic to remove item from owned list

    }
})
})





}
//


//
/*
document.getElementById("btnpress").addEventListener("click", function () {

window.pm.methods.createUser("asd","sdsd","0x2f382479604DeD91B4A796505B79e23F74bE10b3").send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
  if (error) {
      console.log(error)
  } else {
      console.log(result)
      //Logic to remove item from owned list

  }
})
})
*/
//
/*document.getElementById("build-part").addEventListener("click", function () {

window.pm.methods.newData(12,"sdsd",12,"dsfdf","fefefe").send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
  if (error) {
      console.log(error)
  } else {
      console.log(result)
      //Logic to remove item from owned list

  }
})
})*/
/*
//
document.getElementById("track").addEventListener("click", function () {

window.pm.methods.tracks(0).send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
  if (error) {
      console.log(error)
  } else {
      console.log(result)
      //Logic to remove item from owned list

  }
})
})
//
*/
/*
document.getElementById("transfer").addEventListener("click", function () {

window.pm.methods.transferOwnership_product(0,1,0).send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
  if (error) {
      console.log(error)
  } else {
      console.log(result)
      //Logic to remove item from owned list

  }
})
})
*/
/*
document.getElementById("btnloginpress").addEventListener("click", function () {

window.pm.methods.userLogin(1,"sdsd","dsfdf").send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
  if (error) {
      console.log(error)
  } else {
      console.log(result)
      //Logic to remove item from owned list

  }
})
})
*/

//clearDetails, partListManager, carPartListManager, addItemToList, format_date, getActivePart,
/*
    document.getElementById("part-change-ownership-btn").addEventListener("click", function () {
        console.log("Change Ownership")
        //Get part data from active item on owned list

        var hash_element = getActivePart("part-list")
        if (hash_element != undefined) {
            var to_address = document.getElementById("part-change-ownership-input").value
            if (to_address != "") {
                window.co.methods.changeOwnership(0, hash_element.textContent, to_address).send({ from: window.accounts[0], gas: 100000 }, function (error, result) {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log("Changed ownership")
                        //Logic to remove item from owned list
                        hash_element.parentElement.removeChild(hash_element)
                        clearDetails(document.getElementById("part-list-details"))
                    }
                })
            }

        }
    })
    */
