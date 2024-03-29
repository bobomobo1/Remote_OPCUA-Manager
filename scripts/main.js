const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("name").innerHTML = myObj.PLC_Name;
  document.getElementById("ip").innerHTML = myObj.IPV4_ADDRS;
  document.getElementById("port").innerHTML = myObj.port;
  document.getElementById("in_enable_1").nextElementSibling.checked = myObj.IN1[1].Enable;
  document.getElementById("in_enable_2").nextElementSibling.checked = myObj.IN2[1].Enable;
  document.getElementById("out_enable_1").nextElementSibling.checked = myObj.OUT1[1].Enable;
  document.getElementById("out_enable_2").nextElementSibling.checked = myObj.OUT2[1].Enable;
  document.getElementById("1").innerHTML = myObj.IN1[2].TagName;
  document.getElementById("2").innerHTML = myObj.IN2[2].TagName;
  document.getElementById("3").innerHTML = myObj.OUT1[2].TagName;
  document.getElementById("4").innerHTML = myObj.OUT2[2].TagName;
};
xmlhttp.open("GET", "data/data.json");
xmlhttp.send();

myFunction();

function myFunction() {
  const ports = ["in_enable_1", "in_enable_2", "out_enable_1", "out_enable_2"];

  ports.forEach((p) => {
    var checkBox = document.getElementById(p).checked;
    document.getElementById(p).nextElementSibling.innerHTML = checkBox;
  });
}

function writeToFile() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    const parser = JSON.stringify(myObj,null, 2);
    myObj.PLC_Name = document.getElementById("name").innerHTML;
    myObj.IPV4_ADDRS = document.getElementById("ip").innerHTML;
    myObj.port = document.getElementById("port").innerHTML;
    myObj.IN1[1].Enable = document.getElementById("in_enable_1").checked;
    myObj.IN2[1].Enable = document.getElementById("in_enable_2").checked;
    myObj.OUT1[1].Enable = document.getElementById("out_enable_1").checked;
    myObj.OUT2[1].Enable = document.getElementById("out_enable_2").checked;
    myObj.IN1[2].TagName = document.getElementById("1").innerHTML;
    myObj.IN2[2].TagName = document.getElementById("2").innerHTML;
    myObj.OUT1[2].TagName = document.getElementById("3").innerHTML;
    myObj.OUT2[2].TagName = document.getElementById("4").innerHTML;
    myObj.is_config = "No"

    const blob = new Blob([[parser]], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };
    xmlhttp.open("POST", "data/data.json");
    xmlhttp.send();
    console.log(parser);
}
