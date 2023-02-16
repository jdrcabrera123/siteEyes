const squareOne = document.querySelector('.squareOne')
const squareTwo = document.querySelector('.squareTwo')
const squareThree = document.querySelector('.squareThree')
const l_dark_eye = document.querySelector('.l_dark_eye')
const r_dark_eye = document.querySelector('.r_dark_eye')
const r_dark_eye_iris = document.querySelector('.r_dark_eye_iris')
const l_dark_eye_iris = document.querySelector('.l_dark_eye_iris')
const r_eyeOutline = document.querySelector('.r_eyeOutline')
const l_eyeOutline = document.querySelector('.l_eyeOutline')
const r_InnerIrisOne = document.querySelector('.r_InnerIrisOne')
const l_InnerIrisTwo = document.querySelector('.l_InnerIrisTwo')



let cursorPosition = {
    x: 0,
    y: 0
}

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

function setScreenSize() {
    windowWidth = window.windowWidth;
    windowHeight = window.windowHeight; 
}

function mouseMovement(e) {
    cursorPosition = {
        x: e.clientX,
        y: e.clientY
    }
    follow()
}

function touchMovement (e){
    cursorPosition={
        x:e.targetTouche[0].offsetX, 
        y:e.targetTouches[0].offsetY
    }
    follow();
}

const followCursor = (element, xRelation, yRelation) => {
    const elOffset = element.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width / 2;

    const centerY = elOffset.y + elOffset.height / 2

    const distanceLeft = Math.round(
        ((cursorPosition.x - centerX) * 100) / window.innerWidth
    );

    const distanceTop = Math.round(
        ((cursorPosition.y - centerY) * 100) / window.innerHeight
    )

    element.style.transform = `translate(${distanceLeft / xRelation}px, ${distanceTop / yRelation}px) rotate(${distanceLeft / xRelation}deg)`
    
}

const follow = () => {
    if (squareOne) followCursor(squareOne, 12, 12)
    if (squareTwo) followCursor(squareTwo, -15, -15)
    if (squareThree) followCursor(squareThree, 16, 16)
    if (l_dark_eye) followCursor(l_dark_eye, 9, 9)
    if (r_dark_eye) followCursor(r_dark_eye, -8, -8)
    if (r_dark_eye_iris) followCursor(r_dark_eye_iris, 5, 5)
    if (l_dark_eye_iris) followCursor(l_dark_eye_iris, 4, 4)
    if (r_eyeOutline) followCursor(r_eyeOutline, 4, 4)
    if (l_eyeOutline) followCursor(l_eyeOutline, -4, -4)
    if (r_InnerIrisOne) followCursor(r_InnerIrisOne, -4, -4)
    if (l_InnerIrisTwo) followCursor(l_InnerIrisTwo, -2, -2)
    // if (l_eye) followCursor(l_eye, 1, 1)
    // if (r_eye) followCursor(r_eye, 1, 1)
    // if (nose) followCursor(nose, 1, 1)
    // if (l_eyebrow) followCursor(l_eyebrow, 1, 1)
    // if (r_eyebrow) followCursor(r_eyebrow, 1, 1)
    // if (moustache) followCursor(moustache, 1, 1)
    // if (hairOne) followCursor(hairOne, 3, 3)
    // if (hairTwo) followCursor(hairTwo, 6, 6)
    // if (hairThree) followCursor(hairThree, 8, 8)
    // if (face) followCursor(face, 4, 4)
}

window.addEventListener('resize', setScreenSize)
window.addEventListener('mousemove', mouseMovement)
window.addEventListener('touchmove', touchMovement)