function toggle() {
    document.getElementsByClassName('button')[0];
    let textButton = document.getElementById('extra').style.display;
 
    if (textButton !== 'none') {
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    } else {
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }
    textButton = document.getElementById('extra').style.display;
}
