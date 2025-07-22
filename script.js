const messages = [
        "frase1",
        "frase2",
        "frase3",
        "frase4",
        "frase5",
        "frase6",
        "frase7",
        "frase8",
        "frase9",
        "frase10",
        "frase11",
        "frase12",
        "frase13",
    ];


    function createTextBubble(){
        const bubble = document.createElement("div");
        bubble.className = "text-bubble";
        bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

        const left = Math.random() * 80 + 10;
        const top = Math.random() * 80 + 10;

        bubble.style.position = "absolute";
        bubble.style.left=left + "vw";
        bubble.style.top = top + "vh";

        const container = document.getElementById("bubbles-text");
        container.appendChild(bubble);

        setTimeout(() => {
            const react = bubble.getBoundingClientRect();

            if(react.right > window.innerWidth) {
                const newLeft = window.innerWidth - react.width - 10;
                bubble.style.left = `${newLeft}px`;
            }

            if (react.bottom > window.innerHeight){
                const newTop = window.innerHeight - react.height - 10;
                bubble.style.top = `${newTop}px`;
            }

            if (react.left < 0){
                bubble.style.left = "10px";
            }

            if (react.top < 0) {
                bubble.style.top = "10px";
            }
        }, 10);

        setTimeout(() => {
            bubble.remove();
        }, 8000);
    }

    setInterval(createTextBubble, 500);