document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const textarea = this.querySelector('textarea');
    const comment = textarea.value;
    
    if (comment.trim() !== '') {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = comment;
        
        document.getElementById('commentsList').prepend(commentElement);
        
        textarea.value = '';
    }
});

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});