let timerInterval;
const scrollElements = document.querySelectorAll(".foc-anim");
const scrollElements2 = document.querySelectorAll(".trac-anim");
const script1 = document.getElementById('script1')
const script2 = document.getElementById('script2')
const script3 = document.getElementById('script3')

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
};
const displayScrollElement = (element, anim) => {
  element.classList.add(anim);
};
const hideScrollElement = (element, anim) => {
  element.classList.remove(anim);
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 0.9)) {
      displayScrollElement(el, 'focus-in');
    } else if (elementOutofView(el)) {
      hideScrollElement(el, 'focus-in')
    }
  })
  scrollElements2.forEach((el) => {
    if (elementInView(el, 0.9)) {
      displayScrollElement(el, 'tracking-in');
    } else if (elementOutofView(el)) {
      hideScrollElement(el, 'tracking-in')
    }
  })
}
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

function OpenProj(x) {
  if (x.id == "1") {
    x.style.display = "none";
    script1.style.display = "block";
    script1.classList.add("focus-in")
  } else if (x.id == "2") {
    x.style.display = "none";
    script2.style.display = "block";
    script2.classList.add("focus-in")
  } else if (x.id == "3") {
    x.style.display = "none";
    script3.style.display = "block";
    script3.classList.add("focus-in")
  } else if (x.id == "learnmore") {
    Swal.fire({
      title: "Land HUB",
      html: "Redirecting to discord",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = "https://discord.com/invite/dGupmGFSm9"
      }
    });
  } else if (x.id == "continue") {
    x.classList.remove("system-continue-non-active");
    x.classList.remove("text-muted");
    x.classList.add("system-continue-active");
  }
}

hljs.highlightAll();
