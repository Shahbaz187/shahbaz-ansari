const barIcon = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");

barIcon.addEventListener("click", () => {
    navLinks.style.transition = "0.3s linear";
    if (barIcon.classList.contains('open')) {
        barIcon.src = "assets/icons/close.svg";
        barIcon.classList.replace('open', 'close');
        navLinks.classList.add('show-nav')
        gsap.from('.close', {
            scale: 0,
            duration: 0.3,
        })
        gsap.from('.show-nav li', {
            opacity: 0,
            y: 30,
            stagger: 0.3,
            duration: 0.5,
            delay: 0.5,
        })

    } else {
        barIcon.src = "assets/icons/bars.svg";
        barIcon.classList.replace('close', 'open');
        navLinks.classList.remove('show-nav')
        gsap.from('.open', {
            scale: 0,
            duration: 0.3,
        })
    }
})


const mobileNavLinks = document.querySelectorAll(".navbar li")
mobileNavLinks.forEach((li) => {
    li.addEventListener("click", () => {
        navLinks.style.transition = "none";
        navLinks.classList.remove('show-nav')
        barIcon.src = "assets/icons/bars.svg";
        barIcon.classList.replace('close', 'open');
    })
})

// Testimonial Section

const platBtn1 = document.getElementById('play-btn1');
const platBtn2 = document.getElementById('play-btn2');
const showVideo = document.getElementById('show-video');
const video = document.getElementById('video-element');
const closeBtn = document.getElementById('close-icon')

platBtn1.addEventListener("click", () => {
    video.src = 'assets/videos/testimonail 1.mp4';
    showVideo.style.display = 'flex';
    video.style.width = '100%';
})

platBtn2.addEventListener("click", () => {
    video.src = 'assets/videos/testimonail 2.mp4';
    showVideo.style.display = 'flex';
    video.style.width = '50%';
    video.play()
})

closeBtn.addEventListener('click', () => {
    showVideo.style.display = 'none';
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the start
})


// Add an event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
        // Send the form data to Formspree
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showAlertbox()
            form.reset();
        } else {
            alert('Oops! There was a problem with your submission.');
        }
    } catch (error) {
        alert('Error: Unable to send your message at this time.');
    }
});


const showAlertbox = () => {
    const contactMessage = document.getElementById('contact-message');
    contactMessage.style.right = "10px";
    setInterval(() => {
        contactMessage.style.right = "-800px";
    }, 2000);
}