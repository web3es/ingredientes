const file = document.getElementById("file");
const lang = "spa";


file.addEventListener('change', function(e){
  const worker = new Tesseract.TesseractWorker();
  worker.recognize(file.files[0].name, lang)
  .progress(function(packet){
      console.info(packet)
      //progressUpdate(packet)
  })
  .then(function(data){
      console.log(data)
      //progressUpdate({ status: 'done', data: data })
  })
});