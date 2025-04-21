
function createSlider(sliderBox) {

    const prevBtn = sliderBox.querySelector('.prev');
    const nextBtn = sliderBox.querySelector('.next');
    const parent = sliderBox.querySelector('.clipper');

    const disabled = (state) => {
        prevBtn.disabled = state;
        nextBtn.disabled = state;
    }

    // clone content

    function cloneContent() {

        const clones = document.createDocumentFragment();

        for (let i = 0; i < 2; i++) {
            const clone = parent.children[0].cloneNode(true);
            clones.appendChild(clone);
        }
        parent.prepend(clones.firstChild);
        parent.append(clones.lastChild);
    }

    // slide action

    function slideAction(class1, class2, cleanUp) {

        cloneContent(); // initialize
        disabled(true); // disable buttons

        const slides = [...parent.children];
    
        slides.forEach(slide => {
            slide.removeAttribute('style');
            setTimeout(function() {
                slide.classList.remove(class2);
                slide.classList.add(class1);
            }, 50);
        });
        setTimeout(function() {
            while (parent.children.length > 1) {
                parent.removeChild(cleanUp());
            }
            const newContent = parent.children[0];
            newContent.style.transition = 'none';
            newContent.classList.remove('move-left','move-right');

            disabled(false); // enable buttons
        }, 1000);
    }

    // perform slide

    const startInterval = () => {
        intervalId = setInterval(() => {
            slideAction('move-left', 'move-right', () => parent.firstChild);
        }, 4000);
    }
    let intervalId; // current
    startInterval(); // start sliding

    const restartInterval = () => {
        clearInterval(intervalId);
        startInterval();
    } // reset time

    prevBtn.addEventListener('click', () => {
        slideAction('move-right', 'move-left', () => parent.lastChild);
        restartInterval();
    });
    nextBtn.addEventListener('click', () => {
        slideAction('move-left', 'move-right', () => parent.firstChild);
        restartInterval();
    });
}
export default createSlider;