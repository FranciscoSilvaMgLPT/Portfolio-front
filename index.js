let slideIndex = 0;
let audio;
const titleSlides = document.getElementsByClassName("title-slide");
const videoSlides = document.getElementsByClassName("videoSlide");
const contentSlides = document.getElementsByClassName("content-slide");
const harryHatImg = document.getElementById("harryHatImg");
const nameHarryInput = document.getElementById("nameHarryInput");
const harryForm = document.getElementById("harryForm");
const harryFormImg = document.getElementById("harryFormImg");
const buttons = document.querySelectorAll("button");
const videos = document.querySelectorAll("video");
const soundImg = document.getElementById("soundImg");
const links = document.querySelectorAll("a");
const originalFormImage = harryFormImg.src;
const harryCreationPet = document.getElementById("harryCreationPet");
const harryCreationText = document.getElementById("harryCreationText");
const shrekMirror = document.getElementById("shrekMirror");
const hatOriginal = harryHatImg.src;
const fadeOutClass = "fade-out-img";
const fadeInClass = "fade-in-img";
const cursorArray = [
  "",
  "Images&Videos/Svg/wandNobg.svg",
  "Images&Videos/shrek/shrekCursor.png",
  "Images&Videos/pokemon/closedPokeball.png",
];
const cursorSize = [0, 5, 0, 20];

document.querySelector("#next").addEventListener("click", nextSlide);
document.querySelector("#prev").addEventListener("click", prevSlide);

function showSlide(n) {
  if (n < 0) {
    slideIndex = titleSlides.length - 1;
  } else if (n >= titleSlides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < titleSlides.length; i++) {
    titleSlides[i].style.display = "none";
    contentSlides[i].style.display = "none";
    if (videoSlides[i]) {
      videoSlides[i].pause();
    }
    videoSlides[i].addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });
  }
  videoSlides[slideIndex].play();
  titleSlides[slideIndex].style.display = "block";
  contentSlides[slideIndex].style.display = "block";

  buttons.forEach((button) => {
    button.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
  });

  links.forEach((link) => {
    link.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
  });

  document.querySelector("#prev").addEventListener("mousedown", function () {
    this.style.cursor = "";
  });
  document.querySelector("#next").addEventListener("mousedown", function () {
    this.style.cursor = "";
  });
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mousedown", function () {
      this.style.cursor = "";
    });
  });

  if (slideIndex === 0) {
    document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;

    document.documentElement.addEventListener("mousedown", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.documentElement.addEventListener("mouseup", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });
  }

  if (slideIndex === 1) {
    document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;

    document.documentElement.addEventListener("mousedown", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.documentElement.addEventListener("mouseup", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });
  }

  if (slideIndex === 2) {
    document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;

    document.documentElement.addEventListener("mousedown", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.documentElement.addEventListener("mouseup", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });
  }

  if (slideIndex === 3) {
    document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;

    document.documentElement.addEventListener("mousedown", function () {
      document.documentElement.style.cursor = `url('Images&Videos/pokemon/openPokeball.png') ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.documentElement.addEventListener("mouseup", function () {
      document.documentElement.style.cursor = `url(${cursorArray[slideIndex]}) ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.querySelector("#prev").addEventListener("mousedown", function () {
      this.style.cursor = `url('Images&Videos/pokemon/openPokeball.png') ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });
    document.querySelector("#next").addEventListener("mousedown", function () {
      this.style.cursor = `url('Images&Videos/pokemon/openPokeball.png') ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
    });

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mousedown", function () {
        this.style.cursor = `url('Images&Videos/pokemon/openPokeball.png') ${cursorSize[slideIndex]} ${cursorSize[slideIndex]}, auto`;
      });
    });
  }

  videoSlides[slideIndex].play();
}

showSlide(slideIndex);

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}


document.addEventListener("DOMContentLoaded", function () {
  soundImg.addEventListener("click", function () {
    videos.forEach((video) => {
      video.muted = !video.muted;
      if (video.muted) {
        soundImg.src = "Images&Videos/mute.png";
      } else {
        soundImg.src = "Images&Videos/sound.gif";
      }
    });
  });
});

//      >>>>>>>>>>>WIZARD<<<<<<<<<<<


document
  .getElementById("harryForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    try {
      const response = await axios.post("http://localhost:8080/wizard", {
        name: formData.get("name"),
      });
      console.log("Usuário criado com sucesso!");
      console.log(response.data);

      harryForm.style.display = "none";
      nameHarryInput.value = "";
      harryCreationText.innerText = "";
      harryCreationPet.src = "";

      setTimeout(() => {
        harryHatImg.src = hatOriginal;
        harryFormImg.src = originalFormImage;
        harryForm.style.display = "inline-block";
      }, 10000);

      setTimeout(() => {
        harryHatImg.src = hatOriginal;
      }, 6400);

      setTimeout(() => {
        harryFormImg.classList.remove(fadeInClass);
        harryCreationPet.classList.remove(fadeInClass);
        harryCreationText.classList.remove(fadeInClass);
        harryFormImg.classList.add(fadeOutClass);
        harryCreationText.classList.add(fadeOutClass);
        harryCreationPet.classList.add(fadeOutClass);
  

        setTimeout(() => {
          harryHatImg.src =
            "Images&Videos/wizard/harryHat-ezgif.com-resize.gif";
          switch (response.data.wizardHouse) {
            case "Gryffindor":
              harryFormImg.src = "Images&Videos/wizard/gryffindor.png";
              audio = new Audio("sounds/griffindor.mp3");
              audio.play();
              break;
            case "Slytherin":
              harryFormImg.src = "Images&Videos/wizard/slytherin.png";
              audio = new Audio("sounds/slytherin.mp3");
              audio.play();
              break;
            case "Ravenclaw":
              harryFormImg.src = "Images&Videos/wizard/ravenclaw.png";
              audio = new Audio("sounds/ravenclaw.mp3");
              audio.play();
              break;
            case "Hufflepuff":
              harryFormImg.src = "Images&Videos/wizard/hufflepuff.png";
              audio = new Audio("sounds/hufflepuff.mp3");
              audio.play();
              break;
          }

          switch (response.data.wizardPet) {
            case "Hippogriff":
              harryCreationPet.src = "Images&Videos/wizard/hippogriff.png";
              break;
            case "Bowtruckle":
              harryCreationPet.src = "Images&Videos/wizard/bowtruckle.png";
              break;
            case "Pixie":
              harryCreationPet.src = "Images&Videos/wizard/pixie.png";
              break;
            case "Owl":
              harryCreationPet.src = "Images&Videos/wizard/owl.png";
              break;
            case "Cat":
              harryCreationPet.src = "Images&Videos/wizard/Mrs_Norris.png";
              break;
            case "Frog":
              harryCreationPet.src = "Images&Videos/wizard/harryFrog.png";
              break;
          }

          harryCreationText.innerText = "CONGRATULATIONS!\n\n" + response.data.name + " has become a wizard. He has been selected for the house of " + response.data.wizardHouse + " and has a " + response.data.wizardPet + " as his loyal companion!";
          setTimeout(() => {
            harryFormImg.classList.remove(fadeOutClass);
            harryCreationPet.classList.remove(fadeOutClass);
            harryCreationText.classList.remove(fadeOutClass);
            harryFormImg.classList.add(fadeInClass);
            harryCreationText.classList.add(fadeInClass);
            harryCreationPet.classList.add(fadeInClass);
          }, 100);
        }, 2000);
      }, 1000);
    } catch (error) {
      alert(`Error creating user: \n${error}`);
      console.error("Error creating user:", error);
    }
  });


  //      >>>>>>>>>>>SHREK<<<<<<<<<<<

  document
  .getElementById("shrekForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    try {
      const response = await axios.post("http://localhost:8080/shrek", {
        name: formData.get("name"),
      });
      console.log("Personagem criado com sucesso!");
      console.log(response.data);

      shrekForm.style.display = "none";
      nameShrekInput.value = "";

    } catch (error) {
      alert(`Erro ao criar personagem: \n${error}`);
      console.error("Erro ao criar personagem:", error);
    }
  });

document.getElementById("shrekForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  try {
    const response = await axios.post("http://localhost:8080/shrek", {
      name: formData.get("name"),
    });
    console.log("Personagem criado com sucesso!");
    console.log(response.data);

    shrekForm.style.display = "none";
    nameShrekInput.value = "";

    shrekMirror.src = "Images&Videos/shrek/mirrorShow1.gif";
    shrekMirror.classList.add(fadeOutClass);
  } catch (error) {
    alert(`Erro ao criar personagem: \n${error}`);
    console.error("Erro ao criar personagem:", error);
  }
});
