function getTime(){
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    var amPm = getAmPm(h);
    
    h = cleanTime(h);
    m = cleanTime(m);
    s = cleanTime(s);
    
    document.getElementById('time').innerHTML = "<h1>" + h%12 + ":" + m + ":" + s + " " + amPm + "</h1>";

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