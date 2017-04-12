'use strict';

let thumbnailsSelector = document.getElementById('nav');

let thumbnails = thumbnailsSelector.getElementsByTagName('a');

let images = ['images/full/01.jpg', 'images/full/02.jpg', 'images/full/03.jpg', 'images/full/04.jpg', 'images/full/05.jpg', 'images/full/06.jpg', 'images/full/07.jpg']

let bigImage = document.getElementById('view');

let thumbnailsArray = Array.from(thumbnails);

thumbnailsArray.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', function(event) {
        event.preventDefault();
        thumbnailsArray.forEach((item) => {
            item.classList.remove('gallery-current')
        });
        this.classList.add('gallery-current');
        bigImage.src = images[i];
    });
});
