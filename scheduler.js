//main div
var maindiv = document.createElement('div');
maindiv.setAttribute('class','main');
document.body.appendChild(maindiv);

//mpd
var mpd_div = document.createElement('div');
var setmpd = document.createElement('label');
setmpd.textContent = "Matches per Day : ";
setmpd.setAttribute('class','text');
var mpd = document.createElement('input');
mpd.setAttribute('type','number');
mpd.setAttribute('class','textbox');


maindiv.appendChild(mpd_div);
mpd_div.appendChild(setmpd);
mpd_div.appendChild(mpd);


//mpt
var mpt_div = document.createElement('div');
var setmpt = document.createElement('label');
setmpt.textContent = "Matches per Team : ";
setmpt.setAttribute('class','text');
var mpt = document.createElement('input');
mpt.setAttribute('type','number');
mpt.setAttribute('class','textbox');

maindiv.appendChild(mpt_div);
mpt_div.appendChild(setmpt);
mpt_div.appendChild(mpt);


//startdate
var start_div = document.createElement('div');
var setStartDate = document.createElement('label');
setStartDate.setAttribute('class','text');
setStartDate.textContent = "Start Date : ";

var ssd = document.createElement('input');
ssd.setAttribute('class','textbox');
ssd.setAttribute('type','date');
ssd.setAttribute('class','textbox');

maindiv.appendChild(start_div);
start_div.appendChild(setStartDate);
start_div.appendChild(ssd);

//enddate
var end_div = document.createElement('div');
var setEndDate = document.createElement('label');
setEndDate.textContent = "End Date : ";
setEndDate.setAttribute('class','text');
var sed = document.createElement('input');
sed.setAttribute('type','date');
sed.setAttribute('class','textbox');

maindiv.appendChild(end_div);
end_div.appendChild(setEndDate);
end_div.appendChild(sed);

//new schedule button 
var Button_span = document.createElement('span');
var  Button = document.createElement('input');
Button.setAttribute('class','button');
Button.setAttribute('type','submit');
Button.setAttribute('value','Generate new schedule');

maindiv.appendChild(Button_span);
Button_span.appendChild(Button);


var freeze_span = document.createElement('span');
var  Button2 = document.createElement('input');
Button2.setAttribute('class','freeze');
Button2.setAttribute('type','submit');
Button2.setAttribute('value','Freeze');

maindiv.appendChild(freeze_span);
freeze_span.appendChild(Button2);