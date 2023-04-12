const toggleText = () => {
    let points = document.getElementById('mainPoints');
    let mainButton = document.getElementById('mainButton');
    let hiddenText = document.getElementById('hiddenText');

    if(points.style.display === 'none') {
        hiddenText.style.display = 'none';
        points.style.display = 'inline';
        mainButton.innerHTML = 'About Me';
    } else {
        hiddenText.style.display = 'inline';
        points.style.display = 'none';
        mainButton.innerHTML = 'Show Less'
    }
}