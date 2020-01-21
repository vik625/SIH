import {  init_web3 } from "./utils.js"

window.onload =  function () {
  var x =  init_web3()
  var dataid;
  var selectedOwnerid;
  var buyerid;
  var params;
  var lookup_id;
  

  if (window.location.search.split('?').length > 1) {
             params = window.location.search.split('?');
           for (var i = 1; i < params.length; i++) {
                //var key = params[i].split('=')[0];
                //var value = decodeURIComponent(params[i].split('=')[1]);
                //queryString[key] = value;
                dataid=params[i];
                //console.log(params[(params.length)-1]);
            }
        }
//params[(params.length)-1]  params[(params.length)-4] params[(params.length)-2]
      document.getElementById("btngetint_id").addEventListener("click", function () {

        window.co.methods.get_lookupId(params[(params.length)-1] ,params[(params.length)-4],params[(params.length)-2]).call({ from: window.accounts[0] }, function (error, result) {
            if (error) {

                console.log(error)
                console.log(false)
            } else {
                console.log("required lookupids ")
                console.log(result)
                if(result == 15000)
                {
                  window.pm.methods.getdetails(params[(params.length)-4],params[(params.length)-3],params[(params.length)-2],params[(params.length)-1]).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
                      if (error) {
                          console.log(error)
                          console.log(false)
                      } else {
                          console.log("lookupid")
                          console.log(result)
                          console.log(true)
                          window.pm.methods.get_lookupdetails().call({ from: window.accounts[0]}, function (error, result) {
                              if (error) {
                                  console.log(error)
                                  console.log(false)
                              } else {
                                  console.log("check public variables details")
                                  console.log(result)


                                  window.pm.methods.get_hash(result-1).call({ from: window.accounts[0]}, function (error, result) {
                                      if (error) {
                                          console.log(error)
                                          console.log(false)
                                      } else {
                                          console.log("check hash  details")
                                          console.log(result)
                                          window.co.methods.get_lookupId(params[(params.length)-1] ,params[(params.length)-4],params[(params.length)-2]).call({ from: window.accounts[0] }, function (error, result) {
                                              if (error) {
                                                  console.log(error)
                                                  console.log(false)
                                              } else {
                                                  console.log("required lookupid")
                                                  console.log(result)
                                                  lookup_id = result
                                                  console.log(true)
                                                  window.co.methods.get_interactionId(result).call({ from: window.accounts[0] }, function (error, result) {
                                                      if (error) {
                                                          console.log(error)
                                                          console.log(false)
                                                      } else {
                                                          console.log("interactionid")
                                                        console.log(lookup_id)
                                                        console.log(result[0])
                                                          location.href = "main.html?"+lookup_id+"?"+result[0]+"?"+params[1]+"?"+params[2]+"?"+params[3]+"?"+params[4];
                                                          console.log(true)
                                        }
                                        })

                                        }
                                        })

                                        }
                                      })

                                  //location.href = "redirect.html?"+selecteddataitem+"?"+owner_id+"?"+selectedOwnerId+"?"+params[(params.length)-1];


                                  console.log(true)

                                }
                              })
                          //window.location.href = "transferOwnership.html";
                          //Logic to remove item from owned list
                      }
                  })

                }
                else {
                  window.pm.methods.lookups(result).call({ from: window.accounts[0] }, function (error, result) {
                      if (error) {
                          console.log(error)
                          console.log(false)
                      } else {
                        if(result[5]==1){

                          alert("interaction is already done")
                        }

                      }
                    })

                }



              }
            })






})
}
