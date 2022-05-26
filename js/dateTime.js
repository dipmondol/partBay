function updateClock(){
    var now = new Date();
    var dateName = now.getDay(),
    month = now.getMonth(),
    dateNum = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";



    if(hour == 0){
        hour = 12;
    }
    if(hour > 12 ){
        hour = hour - 12;
        pe = "PM";
    }
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var ids =["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
    var values =[ week[dateName], months[month], dateNum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), pe];

    for(var i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}
function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}