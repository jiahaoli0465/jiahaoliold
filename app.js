document.addEventListener('DOMContentLoaded', function () {
    const cursorCircle = document.querySelector('.cursor__inner--circle');
    const cursorDot = document.querySelector('.cursor__inner--dot');

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let speed = 0.08; // Control the speed of the movement

    const updateCursor = () => {
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        cursorCircle.style.left = `${currentX}px`;
        cursorCircle.style.top = `${currentY}px`;

        requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', e => {
        targetX = e.pageX - window.scrollX;
        targetY = e.pageY - window.scrollY;

        cursorDot.style.left = `${targetX}px`;
        cursorDot.style.top = `${targetY}px`;
    });

    updateCursor(); 
    


    document.querySelectorAll('a, button, input[type="submit"], [role="button"] , #resumepic').forEach(el => {
        el.addEventListener('mouseover', () => cursorCircle.classList.add('cursor__inner--expanded'));
        el.addEventListener('mouseout', () => cursorCircle.classList.remove('cursor__inner--expanded'));
    });

    const resumepic = document.querySelector('#resumepic');
    resumepic.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'assets/JiahaoLiCSResume.pdf'; // Path to your resume file
        link.download = 'Jiahao_Li_Resume.pdf'; // Suggested file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});


