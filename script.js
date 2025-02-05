var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


const time= document.querySelector('.time')
const now = new Date();
const utcHours = now.getUTCHours();
const utcMinutes = now.getUTCMinutes();
const utcSeconds = now.getUTCSeconds();

time.innerText=(`${utcHours}:${utcMinutes}:${utcSeconds}`);


document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    const body = document.body;
  
    // Grid size
    const gap = parseFloat(getComputedStyle(body).getPropertyValue("--gap"));
  
    // Calculate nearest grid intersection
    const nearestX = Math.round(e.clientX / gap) * gap;
    const nearestY = Math.round(e.clientY / gap) * gap;
  
    // Calculate distance to nearest grid intersection
    const dx = e.clientX - nearestX;
    const dy = e.clientY - nearestY;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    // Adjust glow intensity based on distance
    const maxDistance = gap / 2;
    const glowIntensity = 1 - Math.min(distance / maxDistance, 1);
    const glowSize = glowIntensity * parseFloat(getComputedStyle(body).getPropertyValue("--glow-size"));
  
    // Apply glow effect to the nearest grid intersection
    body.style.setProperty("--glow-color", `rgba(255, 255, 255, ${glowIntensity * 0.5})`);
    body.style.setProperty("box-shadow", `0 0 ${glowSize}px ${glowSize / 2}px var(--glow-color)`);
  
    // Update custom cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  