
function createSlider(sliderBox) {

    const prevBtn = sliderBox.querySelector('.prev');
    const nextBtn = sliderBox.querySelector('.next');
    const parent = sliderBox.querySelector('.clipper');

    const disabled = (state) => {
        prevBtn.disabled = state;
        nextBtn.disabled = state;
    }

    // clone content

    function cloneContent(direction) {

        const content = parent.children[0].cloneNode(true);

        if (direction === 'previous') {
            parent.style.justifyContent = 'flex-end';
            parent.prepend(content);
        }
        else if (direction === 'next') {
            parent.style.justifyContent = 'flex-start';
            parent.append(content);
        }
    }

    // slide action

    function slideAction(direction, class1, class2) {

        cloneContent(direction); // initialize
        disabled(true); // disable buttons

        const slides = [...parent.children];
    
        slides.forEach(slide => {
            slide.removeAttribute('style');
            // slide action
            setTimeout(() => {
                slide.classList.remove(class2);
                slide.classList.add(class1);
            }, 50);
        });
        setTimeout(() => { // clean up
            if (direction === 'previous') {
                parent.removeChild(parent.lastChild);
            }
            else if (direction === 'next') {
                parent.removeChild(parent.firstChild);
            }
            const newContent = parent.children[0];
            newContent.style.transition = 'none';
            newContent.classList.remove(class1, class2);

            disabled(false); // enable buttons
        }, 1000);
    }

    // perform slide

    const startInterval = () => {
        intervalId = setInterval(() => {
            slideAction('next', 'move-left', 'move-right');
        }, 4000);
    }
    let intervalId; // current
    startInterval(); // start sliding

    const restartInterval = () => {
        clearInterval(intervalId);
        startInterval();
    } // reset time

    prevBtn.addEventListener('click', () => {
        slideAction('previous', 'move-right', 'move-left');
        restartInterval();
    });
    nextBtn.addEventListener('click', () => {
        slideAction('next', 'move-left', 'move-right');
        restartInterval();
    });
}
export default createSlider;