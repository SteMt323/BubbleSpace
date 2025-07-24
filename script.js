const messages = [
        "Your gaze enchants me.",
        "I crumble completely for your softness",
        "My heart is yours",
        "Your warmth comforts me <3",
        "Your intelligence amazes me",
        "I had the time of my life with you",
        "No more keeping score. Now I just keep you warm.",
        "Dance with me, and i will sing to you a symphony",
        "Im loving what I see in front of me",
        "Can I go where you go?",
        "Cause I love the gap between your teeth",
        "Darling, youre the one I want",
        "If only you could see you through my eyes",
        "I think we could do it if we tried if only say, youre mine",
        "Do you wanna do the things that I wanna do with you?",
        "You know that I adore you",
        "Are you gonna marry, kiss or kill me?"
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