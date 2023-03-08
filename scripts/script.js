const carousel = document.querySelector('.carousel');
arrowIcons = document.querySelectorAll('.wrapper i');   //todos que tiverem classe wrapper e icon i
firstImg = document.querySelectorAll('img')[0]   //a primeira desse array de imagens

let firstImgWidth = firstImg.clientWidth + 12   //margin left 12 px dada nas imagens

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        console.log('cliquei nos icons');
        carousel.scrollLeft += icon.id == 'left' ? - firstImgWidth : firstImgWidth
    })
})


let isDragStart = false;

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX - firstImgWidth;
}

const dragStart = () => {
    isDragStart = true
}

const dragStop = () => {
    isDragStart = false
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStart);
