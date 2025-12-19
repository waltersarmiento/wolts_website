const text = "Walter Sarmiento";
const typingElement = document.getElementById("typing-text");
let index = 0;
let isDeleting = false;

function type() {
    if (!isDeleting && index <= text.length) {
        typingElement.textContent = text.substring(0, index);
        index++;
        setTimeout(type, 150);
    } else if (!isDeleting && index > text.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 2000);
    } else if (isDeleting && index > 0) {
        typingElement.textContent = text.substring(0, index);
        index--;
        setTimeout(type, 100);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(type, 500);
    }
}

type();