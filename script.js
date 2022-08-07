const file = document.getElementById('file');
const ingredients = document.getElementById('ingredients');
const lang = 'spa';

console.log(EDAMAM_APPID);
console.log(EDAMAM_APPKEY);

file.addEventListener('change', function(e){
  const worker = new Tesseract.TesseractWorker();
  worker.recognize(file.files[0].name, lang)
  .progress(function(packet){
      if(packet.status=='recognizing text') {
        ingredients.innerText = `Cargando... (${Math.round(packet.progress*100)}%)`;
      }
  })
  .then(function(data){
      ingredients.innerText = '';

      let text = data.text;
      let arrIngredients = [];

      text = text.replace('Ingredientes', '');
      text = text.replace(':', '');
      text = text.replace('.', '');

      text.split(',').map(function(i) {
        let cleanIngredient = i.trim();
        cleanIngredient = cleanIngredient.replace('\n','');
        cleanIngredient = cleanIngredient.replace('-','');
        arrIngredients.push(cleanIngredient);
      });

      arrIngredients.map(function(i){
        ingredients.innerHTML += `<li>${i}</li>`;
      });
  })
});