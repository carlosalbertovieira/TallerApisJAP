document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    const textToTranslate = document.getElementById('textToTranslate');
    const translationResult = document.getElementById('translationResult');

    translateButton.addEventListener('click', async () => {
        try {
            const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Accept-Encoding': 'application/gzip',
                    'X-RapidAPI-Key': 'd2014b326dmsh1f47a5aaa95d95dp130585jsn6d3fe73085c2',
                    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    q: textToTranslate.value,
                    target: 'es',
                    source: 'en'
                })
            };

            const response = await fetch(url, options);
            const result = await response.json(); // Cambia response.text() a response.json()
            translationResult.textContent = result.data.translations[0].translatedText;
        } catch (error) {
            console.error(error);
        }
    });
});
