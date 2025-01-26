const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

// Initial animation for page1
tl.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration: 0
})
.to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1
})
.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.7
});

// Smooth transition for page2
tl.from("#page2", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
})
.from("#page2-left img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=0.5")
.from("#page2-right img", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=0.5");

// Button interactivity for modals
const openModalButton = document.createElement('button');
openModalButton.textContent = "Open Modal";
openModalButton.style = "position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background: #FF7EB3; color: #fff; border: none; border-radius: 5px; cursor: pointer;";
document.body.appendChild(openModalButton);

const modal = document.createElement('div');
modal.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; padding: 20px; background: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 10px; display: none; text-align: center;";
modal.innerHTML = `<h2>Welcome to the Modal!</h2><p>This is a dynamic modal created with JavaScript.</p><button id='closeModal' style='margin-top: 20px; padding: 10px 20px; background: #FF99CC; border: none; border-radius: 5px; color: #fff; cursor: pointer;'>Close</button>`;
document.body.appendChild(modal);

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    gsap.fromTo(modal, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
});

document.getElementById('closeModal').addEventListener('click', () => {
    gsap.to(modal, { scale: 0.5, opacity: 0, duration: 0.5, onComplete: () => {
        modal.style.display = 'none';
    }});
});

// Scroll-triggered animations
gsap.utils.toArray("#elems div").forEach((elem) => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});

// Interactive floating button
const floatingButton = document.createElement('div');
floatingButton.textContent = "⬆";
floatingButton.style = "position: fixed; bottom: 30px; left: 30px; width: 50px; height: 50px; border-radius: 50%; background: #FF7EB3; color: #fff; font-size: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);";
document.body.appendChild(floatingButton);

floatingButton.addEventListener('click', () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1 });
});
