const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("name").innerHTML = myObj.PLC_Name;
  document.getElementById("ip").innerHTML = myObj.IPV4_ADDRS;
  document.getElementById("port").innerHTML = myObj.port;
  document.getElementById("in_enable_1").innerHTML = myObj.IN1[1].Enable;
  document.getElementById("in_enable_2").innerHTML = myObj.IN2[1].Enable;
  document.getElementById("out_enable_1").innerHTML = myObj.OUT1[1].Enable;
  document.getElementById("out_enable_2").innerHTML = myObj.OUT2[1].Enable;
  document.getElementById("1").innerHTML = myObj.IN1[2].TagName;
  document.getElementById("2").innerHTML = myObj.IN2[2].TagName;
  document.getElementById("3").innerHTML = myObj.OUT1[2].TagName;
  document.getElementById("4").innerHTML = myObj.OUT2[2].TagName;
  
};
xmlhttp.open("GET", "data/data.json");
xmlhttp.send();