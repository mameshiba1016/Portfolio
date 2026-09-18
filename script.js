// ==============================
// WORKS SLIDER
// マウスドラッグ機能
// ==============================

const slider =
    document.getElementById(
        "worksSlider"
    );


let isDragging = false;

let startX = 0;

let startScrollLeft = 0;

let hasDragged = false;



// ==============================
// マウスを押した時　　

slider.addEventListener(
    "mousedown",
    (event) => {

        isDragging = true;

        hasDragged = false;


        slider.classList.add(
            "dragging"
        );


        startX =
            event.pageX;


        startScrollLeft =
            slider.scrollLeft;

    }
);



// ==============================
// マウスを動かした時
// ==============================

slider.addEventListener(
    "mousemove",
    (event) => {

        if (!isDragging) {

            return;

        }


        event.preventDefault();


        const currentX =
            event.pageX;


        const distance =
            currentX - startX;


        if (
            Math.abs(
                distance
            ) > 5
        ) {

            hasDragged = true;

        }


        slider.scrollLeft =
            startScrollLeft
            - distance;

    }
);



// ==============================
// マウスを離した時
// ==============================

window.addEventListener(
    "mouseup",
    () => {

        isDragging = false;


        slider.classList.remove(
            "dragging"
        );

    }
);



// ==============================
// スライダー外に出た時
// ==============================

slider.addEventListener(
    "mouseleave",
    () => {

        if (!isDragging) {

            return;

        }


        isDragging = false;


        slider.classList.remove(
            "dragging"
        );

    }
);



// ==============================
// ドラッグ後の
// 誤クリック防止
// ==============================

const workLinks =
    slider.querySelectorAll(
        "a"
    );


workLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                if (
                    hasDragged
                ) {

                    event.preventDefault();

                }

            }
        );

    }
);