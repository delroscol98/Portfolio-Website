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

const showHiddenContact = () => {
    let points = document.getElementById('contactPoints');
    let contactButton = document.getElementById('contactButton');
    let hiddenContact = document.getElementById('hiddenContact');

    if(contactPoints.style.display === 'none') {
        hiddenContact.style.display = 'none';
        contactPoints.style.display = 'inline';
        contactButton.innerHTML = 'Contact Me';
    } else {
        hiddenContact.style.display = 'flex';
        contactPoints.style.display = 'none';
        contactButton.innerHTML = 'Show Less'
    }
}