function animateCounters() {
    const counters = document.querySelectorAll('.counter-item span');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.ceil(target / 100);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

function handleScroll() {
    const counterSection = document.getElementById('counterSection');
    const sectionPosition = counterSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (sectionPosition < screenHeight - 50 && !counterSection.classList.contains('active')) {
        counterSection.classList.add('active');
        animateCounters();
    }
}

window.addEventListener('scroll', handleScroll);