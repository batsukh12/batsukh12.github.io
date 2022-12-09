
/** menu bar  */
$(document).ready(function() {
    $('#menu-btn').click(function() {
        $(this).toggleClass('fa fa-times');
        $('.mid-menu').toggleClass('nav-toggle');
    });
});
/** buteegdehuun nemeh func */
var click=0;
function plus(){
    click++;
    document.getElementById('count').innerHTML= click;
    return click;
};
function minus(){
    if(click==0){
        alert("aldaa!!");
        document.getElementById('count').innerHTML= 0;
    } else{
        click--;
        document.getElementById('count').innerHTML= click;
    }
}

function listChange(){
    document.getElementById('lists').style.cssText = 'border-bottom: 2px solid #fff';
}
/***   shop bot sagsalah too */
var count=0;
function shopping(){
    count++;
    document.getElementById('shop-count').innerHTML=count;
    return count;
}
/* buteegdehuun sagsand nemeh*/ 
(function() {
    const
})();


