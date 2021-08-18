function calAge() {
    var yob = prompt("Please Enter Your Year of Birth");
    var years = 2021 - yob;
    var days = years * 365;
    var msg = "You are " + days + " days old.";
    var textNode = document.createTextNode(msg);
    var h1 = document.createElement("h1");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textNode);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function catGenerator() {
    var image = document.createElement("img");
    var div = document.getElementById("catGeneratordiv");
    image.src = "https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif";
    div.appendChild(image);
}