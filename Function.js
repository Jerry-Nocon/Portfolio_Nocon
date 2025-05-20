function myExpe(Expediv) {
    const Exped = document.querySelectorAll('.Expecontent');
    Exped.forEach(Exped => Exped.style.display = "none");

    switch(Expediv){
        case 'Immersion':
            document.getElementById('Immer').style.display = "block";
            document.getElementById('Immersion').style.backgroundColor = "rgb(31, 170, 61)";
            document.getElementById('Allanic').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Pocari').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('J&T').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Alliance').style.backgroundColor = "rgb(4, 107, 27)";
        break;
        case 'Allanic':
            document.getElementById('Alla').style.display = "block";
            document.getElementById('Allanic').style.backgroundColor = "rgb(31, 170, 61)";
            document.getElementById('Immersion').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Pocari').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('J&T').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Alliance').style.backgroundColor = "rgb(4, 107, 27)";
        break;
        case 'Pocari':
            document.getElementById('Poca').style.display = "block";
            document.getElementById('Pocari').style.backgroundColor = "rgb(31, 170, 61)";
            document.getElementById('Allanic').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Immersion').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('J&T').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Alliance').style.backgroundColor = "rgb(4, 107, 27)";
        break;
        case 'J&T':
            document.getElementById('JT').style.display = "block";
            document.getElementById('J&T').style.backgroundColor = "rgb(31, 170, 61)";
            document.getElementById('Allanic').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Pocari').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Immersion').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Alliance').style.backgroundColor = "rgb(4, 107, 27)";
        break;
        case 'Alliance':
            document.getElementById('Allia').style.display = "block";
            document.getElementById('Alliance').style.backgroundColor = "rgb(31, 170, 61)";
            document.getElementById('Allanic').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Pocari').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('J&T').style.backgroundColor = "rgb(4, 107, 27)";
            document.getElementById('Immersion').style.backgroundColor = "rgb(4, 107, 27)";
        break;
        default:
            console.log('Invalid ID');
    }
}
function showdiv(divid) {
    const div = document.querySelectorAll('.box');
    div.forEach(div => div.style.display = "none");

    switch(divid){
        case 'div1':
            document.getElementById('Phone').style.display = "block";
            document.getElementById('phone').style.color = "white";
            document.getElementById('phone').style.textDecoration = "underline";

            document.getElementById('facebook').style.color = "rgb(5, 236, 55)";
            document.getElementById('facebook').style.textDecoration = "none";

            document.getElementById('instagram').style.color = "rgb(5, 236, 55)";
            document.getElementById('instagram').style.textDecoration = "none";

            document.getElementById('gmail').style.color = "rgb(5, 236, 55)";
            document.getElementById('gmail').style.textDecoration = "none";
            
            
            break;
        case 'div2':
            document.getElementById('Facebook').style.display = "block";

            document.getElementById('phone').style.color = "rgb(5, 236, 55)";
            document.getElementById('phone').style.textDecoration = "none";

            document.getElementById('facebook').style.color = "white";
            document.getElementById('facebook').style.textDecoration = "underline";

            document.getElementById('instagram').style.color = "rgb(5, 236, 55)";
            document.getElementById('instagram').style.textDecoration = "none";

            document.getElementById('gmail').style.color = "rgb(5, 236, 55)";
            document.getElementById('gmail').style.textDecoration = "none";
            
            break;
        case 'div3':
            document.getElementById('Insta').style.display = "block";

            document.getElementById('phone').style.color = "rgb(5, 236, 55)";
            document.getElementById('phone').style.textDecoration = "none";

            document.getElementById('facebook').style.color = "rgb(5, 236, 55)";
            document.getElementById('facebook').style.textDecoration = "none";

            document.getElementById('instagram').style.color = "white";
            document.getElementById('instagram').style.textDecoration = "underline";

            document.getElementById('gmail').style.color = "rgb(5, 236, 55)";
            document.getElementById('gmail').style.textDecoration = "none";
            
            break;
        case 'div4':
            document.getElementById('Email').style.display = "block";

            document.getElementById('phone').style.color = "rgb(5, 236, 55)";
            document.getElementById('phone').style.textDecoration = "none";

            document.getElementById('facebook').style.color = "rgb(5, 236, 55)";
            document.getElementById('facebook').style.textDecoration = "none";

            document.getElementById('instagram').style.color = "rgb(5, 236, 55)";
            document.getElementById('instagram').style.textDecoration = "none";

            document.getElementById('gmail').style.color = "white";
            document.getElementById('gmail').style.textDecoration = "underline";
            
            break;
        default:
            console.log('Invalid ID'); 
    }
}
document.getElementById('contact').onclick = function() {
    document.getElementById('contactdiv').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('experience').onclick = function() {
    document.getElementById('expernav').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('project').onclick = function() {
    document.getElementById('divbody').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('aboutme').onclick = function() {
    document.getElementById('resumediv').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('home').onclick = function() {
    document.getElementById('profilediv').scrollIntoView({ behavior: 'smooth' });
};