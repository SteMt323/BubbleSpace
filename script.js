const messages = [
        "Eres increíble 💕",
        "Me encantas, así tal cual eres 💫",
        "Tu sonrisa ilumina mi día ☀️😊",
        "No dejo de pensar en ti 🧠💘",
        "Qué suerte la mía por conocerte 🍀❤️",
        "Tienes algo que me atrapa 🔥🫶",
        "Tu voz me calma el alma 🎧💖",
        "Siempre se me escapa una sonrisa cuando hablo contigo 😊💕",
        "No sé qué tienes, pero me encantas 😍✨",
        "Cada vez que te leo, me siento mejor 📱❤️",
        "Te pienso más de lo que debería 🤭💭",
        "Tu forma de ser me tiene loco/a 😵‍💫💓",
        "Contigo, todo parece más bonito 🌈🫂",
        "Me fascina tu manera de ver la vida 👀🌟",
        "Qué ganas de abrazarte fuerte 🫂❤️‍🔥",
        "Si supieras lo que siento cuando hablo contigo... 🫣💘",
        "Tu energía es adictiva ⚡😍",
        "Me haces sentir especial sin intentarlo 🥺💗",
        "Cada palabra tuya me gusta más 📝💞",
        "Eres como mi lugar favorito 🌍💖",
        "Estoy empezando a quererte bonito 🩷🌹",
        "Me haces bien, así de simple 🌸🙂",
        "Podría escucharte todo el día 🎶🫀"
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