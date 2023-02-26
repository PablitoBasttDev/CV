



document.getElementById('nav-bar').addEventListener('click',function(){
    let element = document.getElementById('nav');
    let elementStyle = window.getComputedStyle(element);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === 'none'){
        document.getElementById('nav').style.display = 'block';
    } else{
        document.getElementById('nav').style.display = 'none';
    }
})