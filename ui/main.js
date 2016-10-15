console.log('Loaded!');

var ani=document.getElementById('img');
var marginLeft = 0;
var marinRight = 0;
function moveRight()
{
    if(marginLeft <= 570)
{
    marginLeft = marginLeft + 10;
    ani.style.marginLeft = marginLeft + 'px';
}
else 
{
    if(marginRight >= 0)
    {
         marginRight = marginRight + 10;
    ani.style.marginRight = marginRight + 'px';
    }
    
}
    
}


ani.onclick = function(){
    var interval = setInterval(moveRight,100);
 var counter=0;
 
 app.get('/',function(req, res) {
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
 });
};
