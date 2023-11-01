var fetchData = async () => {
document.querySelector("img").style.display = "inline";
var email = document.querySelector("#email");
var url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_RkHNbmPnANLEYr70JoKwVpJ0OfKWRcf4DbvnwH2g&email=${email.value}`;
  var res = await fetch(url);
  var response = await res.json();

  var table_content = document.querySelectorAll("td");

  table_content[0].innerHTML = response.user;
  table_content[1].innerHTML = response.email;
  table_content[2].innerHTML = response.score;
  table_content[3].innerHTML = response.state;
  table_content[4].innerHTML = response.disposable;
  
  document.querySelector("img").style.display = "none";
  let result_section = document.querySelector(".result");
  result_section.style.display = "inline";
  email.value = '';
};
