document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particle-container');
    // Subtle particles to match the images
    const particleTypes = ['⭐', '💖', '✨', '🎈', '✦', '.'];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, particleTypes);
    }
});

function createParticle(container, types) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerText = types[Math.floor(Math.random() * types.length)];
    
    const size = Math.random() * 1 + 0.5; 
    const left = Math.random() * 100; 
    const duration = Math.random() * 15 + 10; 
    const delay = Math.random() * 10; 

    particle.style.fontSize = `${size}rem`;
    particle.style.left = `${left}vw`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `-${delay}s`; 

    if(particle.innerText === '.' || particle.innerText === '✦') {
        particle.style.color = Math.random() > 0.5 ? '#ff8a8a' : '#ffb88c';
        particle.style.fontSize = `${size * 1.5}rem`; 
    }

    container.appendChild(particle);
}