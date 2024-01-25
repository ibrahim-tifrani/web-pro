var name; // Declare name as a global variable
function sendMessage() {
    var userInput = document.getElementById('ini').value;
    displayMessage(formattedDate+'  '+name + ': ' + userInput);
    // You can add further processing or send the message to a server here
    document.getElementById('ini').value = ''; // Clear the input field
}

function displayMessage(message) {
    var chatBox = document.getElementById('gh');
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
var day = currentDate.getDate();

var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
var cl = document.getElementById('na').value;
function b(){
document.getElementById('na3').style.display='block'
document.getElementById('r').style.display='block'
}
function n() {
var s = document.getElementById('na3').value;
if (s == 'مشروع') {
document.getElementById('na4').style.display = 'block';
document.getElementById('na5').style.display = 'block';
document.getElementById('fr').style.display ='block'
}
}
var i;
var h;
var y;
var e;
var d;
var r;
var c;
var l;
var m;
var t;
var o;
function f(){
var a = document.getElementById('na4').value;
if (
a == "ibrahim tifrani" ||
a == "إبراهيم تيفراني"){
    i=document.getElementById('na5').value;
}
else if(
a == "hadil gamma"||
a =='هديل غاما'){
    h=document.getElementById('na5').value;
}
else if(
a=='younes boudouh'||
a=='يونس بودوح'){
    y=document.getElementById('na5').value;
}
else if( 
a=='bilal tamen'||
a=='بلال تامن'){
    e=document.getElementById('na5').value;
}
else if(
a =='ranim djebari'||
a=='رنيم جباري') {
    d=document.getElementById('na5').value;
}

else if(
a == "ayoub chebi" ||
a == "أيوب شبي"){
    c=document.getElementById('na5').value;
}
else if(
    a == "lamis chochan"||
    a =='شوشان لميس'){
        l=document.getElementById('na5').value;
}
else if(
a=='asma aabed'||
a=='أسماء عابد'){
    m=document.getElementById('na5').value;
}
else if(
a=='islam tabib'||
a=='أسلام طبيب'){
    t=document.getElementById('na5').value;
}
else if(
    a =='ousama frani'||
a=='أسامة فراني'){
    o=document.getElementById('na5').value;
}
}
function er() {
name = document.getElementById('na2').value;
if (cl=='4M1' ||
name == "ibrahim tifrani" ||
name == "إبراهيم تيفراني"){
    document.getElementById('de').style.display = 'block';
    document.getElementById('de').innerHTML="Hello Ibrahim \n Welcome to Arabic notes"
    mes(i)
}
else if(cl=='4M1'||
name == "hadil gamma"||
name =='هديل غاما'){
        document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Hadil \n Welcome to Arabic notes"
        mes(h)
}
else if(cl=='4M1' ||
name=='younes boudouh'||
name=='يونس بودوح'){
        document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Younes \n Welcome to Arabic notes";
        mes(y)
}
else if(cl=='4M1' ||
name=='bilal tamen'||
name=='بلال تامن'){
        document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Bilal \n Welcome to Arabic notes"
        mes(e)
}
else if(cl=='4M1' ||
name =='ranim djebari'||
name=='رنيم جباري') {

    document.getElementById('de').style.display = 'block';
    document.getElementById('de').innerHTML="Hello Ranim \n Welcome to Arabic notes"
    mes(d)
    }

else if(cl=='4M2'||
name == "ayoub chebi" ||
name == "أيوب شبي"){
    
        document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Ayoub \n Welcome to Arabic notes"
        mes(c)
        }
else if(cl=='4M2'||
    name == "lamis chochan"||
    name =='شوشان لميس'){
        document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Lamis \n Welcome to Arabic notes"
        mes(l)
}
else if(cl=='4M2'||
name=='asma aabed'||
name=='أسماء عابد'){
    document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Asmaa \n Welcome to Arabic notes"
    mes(m)
}
else if(
name=='islam tabib'||
name=='أسلام طبيب'){
    document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Islam \n Welcome to Arabic notes"
    mes(t)
}
else if(
    name =='ousama frani'||
name=='أسامة فراني'){
    document.getElementById('de').style.display = 'block';
        document.getElementById('de').innerHTML="Hello Oussama \n Welcome to Arabic notes"
    mes(o)
}
else{
alert("الاسم غير موجود في القسم\n this name is not in this class")
}
document.getElementById('na2').value = '';
document.getElementById('na').value = '';

}

function mes() {
var bo = document.getElementById('gh');
var ne = document.createElement('div');
ne.textContent = document.getElementById('na5').value;
bo.appendChild(ne); // Append the new div, not the string 'ib'
bo.scrollTop = bo.scrollHeight; // Auto-scroll to the bottom
}