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

const searchForm = document.getElementById("search-form");
const searchIns = document.getElementById("ins");
const searchResult = document.getElementById("search-result");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  checkIns();
});

searchIns.addEventListener("keyup", checkIns);

function checkIns() {
  let ins = searchIns.value;
  let display = eNumbers[ins];

  if (ins.length > 2) {
    if (display !== undefined) {
      searchResult.innerText = eNumbers[ins];
    } else {
      searchResult.innerText = "es apto";
    }
  }
}
