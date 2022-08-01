let container = document.getElementById("container");
let about = document.getElementById("about-span");
let resume = document.getElementById("resume-span");
let contact = document.getElementById("contact-span");
let about1 = document.getElementById("about1");
let resume1 = document.getElementById("resume1");
let contact1 = document.getElementById("contact1");
let uppHome = document.getElementById("upp-home");
let uppAbout = document.getElementById("upp-about");
let uppResume = document.getElementById("upp-resume");
let uppContact = document.getElementById("upp-contact");
let uppnavbar = document.getElementById("uppnavbar");
let aboutCount = document.querySelectorAll(".count");
let htmlProgress = document.getElementById("htmlProgress");
let cssProgress = document.getElementById("cssProgress");

let nameContact = document.getElementById("name");
let emailContact = document.getElementById("email");
let scriptProgress = document.getElementById("scriptProgress");
let textareaContact = document.getElementById("textarea-contact3");
let formContact = document.getElementById("form-contact3");

function hAbout() {
  about.addEventListener("click", () => {
    // Gsap
    gsap.from("#imgDiv-about2", {
      duration: 3,
      delay: 0,
      x: "-100%",
      ease: "slow(0.7, 0.7, false)",
    });

    gsap.from("#content-about2", {
      opacity: 0,
      duration: 3,
      delay: 0,
      ease: "slow(0.7, 0.7, false)",
      x: 500,
    });

    container.style.display = "inherit";
    about1.style.display = "inherit";
    resume1.style.display = "none";
    contact1.style.display = "none";
    uppnavbar.style.display = "inherit";

    //Counter

    aboutCount.forEach((pCounter) => {
      // console.log(counter);
      pCounter.innerHTML = 0;

      const updateCounter = () => {
        const targetCounter = +pCounter.getAttribute("data-target");
        // console.log(targetCounter);

        const startingCount = Number(pCounter.innerHTML);
        const incr = targetCounter / 19;

        if (startingCount < targetCounter) {
          pCounter.innerHTML = `${Math.round(startingCount + incr)}`;
          setTimeout(updateCounter, 70);
        } else {
          pCounter.innerHTML = targetCounter;
        }
      };

      updateCounter();
    });

    // Progress

    let progress = () => {
      let htmlElm = htmlProgress;
      let htmlwidth = 1;
      //   HTML
      let htmlid = setInterval(updateProgress, 25);
      function updateProgress() {
        if (htmlwidth >= 100) {
          clearInterval(htmlid);
        } else {
          htmlwidth++;
          htmlElm.style.width = htmlwidth + "%";
        }
      }

      // CSS
      let cssElm = cssProgress;
      csswidth = 1;
      let cssid = setInterval(updateProgress2, 25);
      function updateProgress2() {
        if (csswidth >= 95) {
          clearInterval(cssid);
        } else {
          csswidth++;
          cssElm.style.width = csswidth + "%";
        }
      }
    };
    progress();

    let progress2 = () => {
      // Java Script
      let javaElm = scriptProgress;
      javawidth = 1;
      let javaid = setInterval(updateProgress2, 25);
      function updateProgress2() {
        if (javawidth >= 85) {
          clearInterval(javaid);
        } else {
          javawidth++;
          javaElm.style.width = javawidth + "%";
        }
      }
    };
    progress2();
  });
}
hAbout();

function hResume() {
  // Gsap
  gsap.from("#resume1", {
    duration: 5.5,
    ease: "slow(0.7, 0.7, false)",
    y: -500,
    scale: 0,
    opacity: 0,
  });
  resume.addEventListener("click", () => {
    container.style.display = "inherit";
    about1.style.display = "none";
    contact1.style.display = "none";
    resume1.style.display = "inherit";
    uppnavbar.style.display = "inherit";
  });
}
hResume();

function hContact() {
  // gsap
  gsap.from("#contact1", {
    duration: 5.5,
    ease: "slow(0.7, 0.7, false)",
    y: -500,
    scale: 0,
    opacity: 0,
  });

  contact.addEventListener("click", () => {
    container.style.display = "inherit";
    about1.style.display = "none";
    resume1.style.display = "none";
    contact1.style.display = "inherit";
    uppnavbar.style.display = "inherit";
  });
}
hContact();

function nHome() {
  uppHome.addEventListener("click", () => {
    container.style.display = "none";
    uppnavbar.style.display = "none";
  });
}
nHome();

function nAbout() {
  uppAbout.addEventListener("click", () => {
    container.style.display = "inherit";
    contact1.style.display = "none";
    resume1.style.display = "none";
    about1.style.display = "inherit";
    uppnavbar.style.display = "inherit";
  });
}
nAbout();

function nResume() {
  
  uppResume.addEventListener("click", () => {
    container.style.display = "inherit";
    about1.style.display = "none";
    contact1.style.display = "none";
    resume1.style.display = "inherit";
    uppnavbar.style.display = "inherit";
  });
}
nResume();

function nContact() {
  uppContact.addEventListener("click", () => {
    container.style.display = "inherit";
    about1.style.display = "none";
    resume1.style.display = "none";
    contact1.style.display = "inherit";
    uppnavbar.style.display = "inherit";
  });
}
nContact();

formContact.addEventListener("submit", () => {
  let nameVal = nameContact.value;
  let emailVal = emailContact.value;
  let textVal = textareaContact.value;

  if (nameVal == "" || emailVal == "" || textVal == "") {
    alert("Please enter the details");
  }
});

// Gsap

gsap.from("#home", {
  delay: 0,
  duration: 2,
  scale: 2,
  opacity: 0,
});




  