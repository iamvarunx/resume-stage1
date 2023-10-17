var i = 0,j=0;
var txt1 = 'HI, I am Varun 😁 ';
var txt3 = '&'
var txt2 = 'I am an WEB DEVELOPER !!!';
var speed = 100;
var mouseenter =false;


$("body").mouseenter(typeWriter1);
function typeWriter1() {

    if (i < txt1.length) {
        var txt = $(".home-txt1").text();
        $(".home-txt1").html(txt + txt1.charAt(i));
        i++;
        setTimeout(typeWriter1, speed);
    }
    else 
    {
        if(!mouseenter)
        {

            setTimeout(function(){
                $(".home-txt3").html(txt3);
            }, speed);
            setTimeout(typeWriter2, speed);
            mouseenter = true;
        }
    }
}
function typeWriter2(){
    if (j < txt2.length) {
        var t = $(".home-txt2").text();
        $(".home-txt2").html(t + txt2.charAt(j));
        j++;
        setTimeout(typeWriter2, speed);
    }
}