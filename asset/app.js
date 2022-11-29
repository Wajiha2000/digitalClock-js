function clock(){
    var date = new Date();
    var hours = date.getHours(); 
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliSeconds = date.getMilliseconds();
    var meridiem = "AM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }
    
    var time = hours + ":" + minutes + ":" + seconds + " " + milliSeconds + " " + meridiem;
    document.getElementById("Clock").innerText = time;
    
    setTimeout(showTime, 1000);
    
}

clock();