const scrollToSection2 = document.getElementById('scrollToSection2');
const section2 = document.getElementById('section2');
const scrollToSection3 = document.getElementById('scrollToSection3');
const section3 = document.getElementById('section3');
const scrollToSection4 = document.getElementById('scrollToSection4');
const section4 = document.getElementById('section4');
const ghLink = document.getElementById('ghLink');

let projectBtn = document.getElementById('projectBtn');
let githubBtn = document.getElementById('githubBtn');

let projectBtns = document.querySelectorAll('.projectBtn');
let githubBtns = document.querySelectorAll('.githubBtn');

projectBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let projectUrl = event.target.getAttribute('data-url');
        window.open(projectUrl, "_blank");
    });
});

githubBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let githubUrl = event.target.getAttribute('data-gh-url');
        window.open(githubUrl, "_blank");
    });
});

scrollToSection4.addEventListener('click', () => {
    section4.scrollIntoView({
        behavior:'smooth',
        block:'start'
    });
});

const sendMessageButton = document.getElementById('sendMessage');
    
    sendMessageButton.addEventListener('click', () => {
        const name = document.getElementById('yourName').value;
        const email = document.getElementById('yourEmail').value;
        const message = document.getElementById('yourMessage').value;

        // Create a data object to send to the backend
        const data = {
            name: name,
            email: email,
            message: message
        };

        // Send the data to the backend endpoint using fetch API
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('contactMe').style.display = 'none';
                document.getElementById('contactMeMessage').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('yourName').value = '';
                document.getElementById('yourEmail').value = '';
                document.getElementById('yourMessage').value = '';
            } else {
                alert('Failed to send message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message. Please try again later.');
        });
    });
