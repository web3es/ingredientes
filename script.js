const file = document.getElementById("file");
const ingredients = document.getElementById("ingredients");
const lang = "spa";

const eNumbers = [];
eNumbers["120"] = "no es apto";
eNumbers["441"] = "no es apto";
eNumbers["542"] = "no es apto";
eNumbers["901"] = "no es apto";
eNumbers["904"] = "no es apto";
eNumbers["913"] = "no es apto";
eNumbers["966"] = "no es apto";
eNumbers["1105"] = "no es apto";
eNumbers["101"] = "es dudoso";
eNumbers["101"] = "es dudoso";
eNumbers["104"] = "es dudoso";
eNumbers["252"] = "es dudoso";
eNumbers["270"] = "es dudoso";
eNumbers["304"] = "es dudoso";
eNumbers["322"] = "es dudoso";
eNumbers["325"] = "es dudoso";
eNumbers["326"] = "es dudoso";
eNumbers["327"] = "es dudoso";
eNumbers["422"] = "es dudoso";
eNumbers["430"] = "es dudoso";
eNumbers["431"] = "es dudoso";
eNumbers["432"] = "es dudoso";
eNumbers["433"] = "es dudoso";
eNumbers["434"] = "es dudoso";
eNumbers["435"] = "es dudoso";
eNumbers["436"] = "es dudoso";
eNumbers["442"] = "es dudoso";
eNumbers["445"] = "es dudoso";
eNumbers["470a"] = "es dudoso";
eNumbers["470b"] = "es dudoso";
eNumbers["471"] = "es dudoso";
eNumbers["472a"] = "es dudoso";
eNumbers["472b"] = "es dudoso";
eNumbers["472c"] = "es dudoso";
eNumbers["472d"] = "es dudoso";
eNumbers["472e"] = "es dudoso";
eNumbers["472f"] = "es dudoso";
eNumbers["473"] = "es dudoso";
eNumbers["474"] = "es dudoso";
eNumbers["475"] = "es dudoso";
eNumbers["476"] = "es dudoso";
eNumbers["477"] = "es dudoso";
eNumbers["479b"] = "es dudoso";
eNumbers["481"] = "es dudoso";
eNumbers["482"] = "es dudoso";
eNumbers["483"] = "es dudoso";
eNumbers["491"] = "es dudoso";
eNumbers["492"] = "es dudoso";
eNumbers["493"] = "es dudoso";
eNumbers["494"] = "es dudoso";
eNumbers["495"] = "es dudoso";
eNumbers["570"] = "es dudoso";
eNumbers["585"] = "es dudoso";
eNumbers["631"] = "es dudoso";
eNumbers["635"] = "es dudoso";
eNumbers["640"] = "es dudoso";
eNumbers["920"] = "es dudoso";

file.addEventListener("change", function (e) {
  if (!file.value.length) return;
  let reader = new FileReader();
  reader.onload = logFile;
  let image = reader.readAsDataURL(file.files[0]);
});

function logFile(event) {
  let str = event.target.result;
  let img = document.createElement("img");
  img.width = 300;
  img.src = str;
  document.getElementById("image").append(img);
  processImage(str);
}

function processImage(image) {
  const worker = new Tesseract.TesseractWorker();
  worker
    .recognize(image, lang)
    .progress(function (packet) {
      if (packet.status == "recognizing text") {
        ingredients.innerText = `Cargando... (${Math.round(
          packet.progress * 100
        )}%)`;
      }
    })
    .then(function (data) {
      ingredients.innerText = "";

      let text = data.text;
      let arrIngredients = [];

      text = text.replace("Ingredientes", "");
      text = text.replace(":", "");
      text = text.replace(".", "");

      text.split(",").map(function (i) {
        let cleanIngredient = i.trim();
        cleanIngredient = cleanIngredient.replace("\n", "");
        cleanIngredient = cleanIngredient.replace("-", "");

        cleanIngredient = cleanIngredient.split("(E")[1]; // OR INS
        if (cleanIngredient) {
          cleanIngredient = cleanIngredient.split(")")[0];

          if (eNumbers[cleanIngredient] !== undefined) {
            cleanIngredient = `${cleanIngredient} <span class="danger">${eNumbers[cleanIngredient]}</span>`;
          } else {
            cleanIngredient = `${cleanIngredient} <span class="success">es apto</span>`;
          }

          arrIngredients.push(cleanIngredient);
        }
      });

      arrIngredients.map(function (i) {
        ingredients.innerHTML += `<li>${i}</li>`;
      });
    });
}
