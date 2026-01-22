document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });

    // Simple interaction: Click to log study interest (mock)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            console.log(`User interested in: ${title}`);
            alert(`'${title}' 학습법에 관심을 가져주셨네요! 더 자세한 내용은 곧 업데이트됩니다.`);
        });
    });
});
