document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');
        const pupilRect = pupil.getBoundingClientRect();
        
        // Calculate the center of the eye
        const eyeCenterX = pupilRect.left + pupilRect.width / 2;
        const eyeCenterY = pupilRect.top + pupilRect.height / 2;

        // Get the angle between the cursor and the center of the eye
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

        // Calculate the new pupil position
        const pupilOffsetX = Math.cos(angle) * 10; // 10px movement range
        const pupilOffsetY = Math.sin(angle) * 10; // 10px movement range

        pupil.style.transform = `translate(${pupilOffsetX}px, ${pupilOffsetY}px)`;
    });
});

let dark = false
function changeBackground() {
    if(dark){
        document.body.style.animation = 'changeBackground1 10s infinite alternate'; 
        dark = false
    }
    else{
        document.body.style.animation = 'changeBackground2 10s infinite alternate'; 
        dark = true
    }
}