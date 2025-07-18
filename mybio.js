
document.documentElement.style.scrollBehavior = 'smooth';

const greeting = document.createElement("div");
greeting.className = "greeting";
greeting.innerHTML = `
  <p>👋 Welcome to my portfolio!</p>
`;
document.body.prepend(greeting);

const listItems = document.querySelectorAll('.hobby-list li');
listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateX(10px)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateX(0)';
  });
});

const heading = document.getElementById("main-heading");
heading.addEventListener("click", function() {
  this.style.transform = 'scale(1.05)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 200);
});

const profilePic = document.querySelector('.profile-img');
window.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  profilePic.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

const disclaimer = document.querySelector('.disclaimer');
if (disclaimer) {
  disclaimer.addEventListener('click', () => {
    disclaimer.style.backgroundColor = '#fff';
    setTimeout(() => {
      disclaimer.style.backgroundColor = '#fff8dc';
    }, 200);
  });
}
