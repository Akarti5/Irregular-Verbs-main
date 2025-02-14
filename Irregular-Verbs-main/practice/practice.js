// Fetch the JSON file
fetch("VERBS.json")
    .then(response => response.json())
    .then(VERBS => {

        const simple = document.querySelector('#simple')
        const participle = document.querySelector('#participle')
        const submit = document.querySelector('#submit')
        const giveup = document.querySelector('#giveUp')
        const result = document.querySelector('.resultat')
        const french = document.querySelector('#french')
        const next = document.querySelector('.next');

        // maka verb au hasard ao @ Json 
        const randomIndex = Math.floor(Math.random() * VERBS.length);
        const randomVerb = VERBS[randomIndex]["base form"];

        // affichena le verbe au hasard avy @ index 
        document.getElementById("verb").textContent = randomVerb;  

        submit.addEventListener('click' , ()=>{

            let simpleValue = simple.value.trim().toLowerCase();
            let participleValue = participle.value.trim().toLowerCase();
            let frenchValue = french.value.trim().toLowerCase();
            let simpletrue = VERBS[randomIndex]["past simple"];
            let participletrue = VERBS[randomIndex]["past participle"];
            let frenchtrue = VERBS[randomIndex]["French"];

            // Lava be sady voretra le code raha mampiasa if else bedebe de aleo loopena kkkk
            const inputs = [
                { element: simple, value: simpleValue, correct: simpletrue },
                { element: participle, value: participleValue, correct: participletrue },
                { element: french, value: frenchValue, correct: frenchtrue }
            ];

            let allCorrect = true;

            inputs.forEach(input => {
                if (input.value === input.correct) {
                    input.element.style.color = 'green';
                } else {
                    input.element.style.color = 'red';
                    allCorrect = false;
                }
            });

            if (allCorrect) {
                result.textContent = '✅ Well done!';
                result.style.color = 'green';
                next.classList.add('next-active');
            } else {
                result.textContent = '❌ Incorrect!';
                result.style.color = 'red';
            }
        });

        giveup.addEventListener('click', ()=> {
            let simpletrue = VERBS[randomIndex]["past simple"];
            let participletrue = VERBS[randomIndex]["past participle"];
            let frenchtrue = VERBS[randomIndex]["French"];
            
            simple.value = simpletrue;
            participle.value = participletrue;
            french.value = frenchtrue;
            simple.style.color = 'green';
            participle.style.color = 'green';
            french.style.color = 'green';
            submit.disabled = true;
            next.classList.add('next-active');
            result.textContent = '';
        });

    })
    .catch(error => console.error("Error loading JSON:", error));
