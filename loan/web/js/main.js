import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()

  var params;
  if (window.location.search.split('?').length > 1) {
             params = window.location.search.split('?');
           for (var i = 1; i < params.length; i++) {
                //var key = params[i].split('=')[0];
                //var value = decodeURIComponent(params[i].split('=')[1]);
                //queryString[key] = value;
                //dataid=params[i];
                //console.log(params[(params.length)-1]);
            }
        }
        var lookupid= document.getElementById("l_id").value;
        var interactionId = document.getElementById("int_id").value;

          document.getElementById("downloadipfs").addEventListener("click", function () {

            window.co.methods.get_interactionId(params[1]).call({ from: window.accounts[0] }, function (error, result) {
                if (error) {
                    console.log(error)
                    console.log(false)
                } else {
                    console.log("interactionid")
                    alert(result[0])
                    alert(result[5])

                    //  alert(result[0])
                    //  alert(interactionId)
                    //  alert(lookupId)
                      //alert(result[0])
                    //  if("0x5d4c5bd29167bd47581a2c8144e0f2faf2d6e0420048061cd9f504136614707c"==result[0])
                    //  {
                        window.pm.methods.checkdetails(params[3],params[5],params[6],result[0]).send({ from: window.accounts[0], gas: 500000}, function (error, result) {
                            if (error) {
                                console.log(error)
                                console.log(false)
                                condole.log("invalid interaction id")
                            } else {
                                console.log("get ipfs hash")
                                console.log(result)
                                console.log(true)
                                window.pm.methods.get_Data_details(params[3]).call({ from: window.accounts[0] }, function (error, result) {
                                  if (error) {
                                      console.log(error)
                                      console.log(false)
                                    } else {

                                      console.log(result)
                                      window.open("https://ipfs.io/ipfs/"+result[3])
                                      console.log(true)
                                  }
                                })
                            }
                })

                          
                            }
                })
              })
}
