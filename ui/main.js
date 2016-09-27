console.log('Loaded!');

var ani=document.getElementById('img');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    ani.style.marginLeft = marginLeft + 'px';
}

ani.onclick = function(){
    var interval = setINterval(moveRight,100);
    
};
