function getTime(){
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    var amPm = getAmPm(h);
    
    h = cleanTime(h);
    m = cleanTime(m);
    s = cleanTime(s);

    h = h%12; //coverting time to 12hr format

    if (h == 0){
        h = 12; //avoiding 0 as an hour
    }
    
    document.getElementById('time').innerHTML = "<h1>" + h + ":" + m + ":" + s + " " + amPm + "</h1>";

    var t = setTimeout(getTime, 500);
    
}

function cleanTime (time){
    if (time < 10)
    {
        time = "0" + time;
    }
    return time;
}

function getAmPm(hours){
    if (hours < 12)
    {
        return "AM";
    }
    return "PM";
}