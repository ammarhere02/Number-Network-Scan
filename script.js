document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("btn").addEventListener('click', async function(){

      const EXPR = document.getElementById("expression").value
      const input =  encodeURIComponent(EXPR)
     await fetch(`https://api.mathjs.org/v4/?expr=${input}`)


          .then(response => response.json())
          .then(data => {document.getElementById("result").textContent =  `${"RESULT ACC TO YO INPUT IS:" + data}`
          })
          .catch(error => {
              document.getElementById("result").textContent = error.message;
              console.log(error)
          })


      const my_api_key = "H0yoS3kAXPIQgC8v8SpoesqaCRJXvbPr"

      fetch('https://api.ipify.org?format=json')
          .then(response => response.json()
              .then(data => {

                  const user_ip = data.ip
                  console.log(user_ip)
                  fetch(`https://ipqualityscore.com/api/json/ip/${my_api_key}/${user_ip}`,{
                      Method: "GET",
                      withCredentials: true,
                      crossorigin: true,
                      mode: 'no-cors',

                  }).then(data => {
                          console.log(data)
                          if(data.proxy){
                              console.log("proXY DETECTED")
                              document.getElementById("DETECTION").textContent = `${"PROXY DETECTED"+data.proxy}`
                          }
                          else
                          {
                              document.getElementById("DETECTION").textContent = "NO-PROXY DETECTED";

                          }
                      })
                      .catch(error => {
                          document.getElementById("DETECTION").textContent = error.message;
                          console.log("ERROR IN NESTED FETCHING API" , error);
                      })
              }))
          .catch(error => {
              console.log(error)
          })

  })


})



