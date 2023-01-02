class cakeItems {
  constructor(cake) {
    (this.id = cake.id),
      (this.category = cake.category),
      (this.name = cake.name),
      (this.image = cake.image),
      (this.description = cake.description),
      (this.price = cake.price),
      (this.button = cake.shopping),
      (this.count = cake.count);
  }
  parser() {
    console.log(this.id);
  }
  render() {
    return `
          <article>
            <div class="products-nuur" >
              <a href="/prod-delgerengui.html">
                <img src="${this.image}" alt="pearl_cake" />
                <h1>${this.name}</h1>
                <h1 class="productDescription">
                 ${this.description}
                </h1>
              </a>
              <div class="prod-price">
                <h1 id="productPrice">${this.price}</h1>
                <div class="button" onclick="${this.button}">
                  сагслах
                </div>
             </div>
            </div>
          </article>
          `;
  }
}

const params = new URLSearchParams(window.location.search);
export default class cakepage {
  constructor(cakepageUrl) {
    this.cakepageUrl = cakepageUrl;
  }

  //download then filter() then map() then reduce()
  Download(targetElement) {
    console.log(this.cakepageUrl);
    fetch(`${this.cakepageUrl}`)
      .then((res) => {
        res.json().then((jsob) => {
          if (!params.get("category") || params.get("ungu")) {
            var filterCake = jsob.record.filter(
              (cakeItems) => cakeItems.category == "cake"
            );
          } else if (params.get("category") == "cake") {
            var filterCake = jsob.record.filter(
              (cakeItems) => cakeItems.category == "cake"
            );
          } else if (params.get("category") == "drinks") {
            var filterCake = jsob.record.filter(
              (cakeItems) => cakeItems.category == "drinks"
            );
          } else if (params.get("category") == "desserts") {
            var filterCake = jsob.record.filter(
              (cakeItems) => cakeItems.category == "desserts"
            );
          } else if (params.get("category") == "breads") {
            var filterCake = jsob.record.filter(
              (cakeItems) => cakeItems.category == "breads"
            );
          }
          gebi(targetElement).insertAdjacentHTML(
            "beforeend",
            filterCake
              .map((element) => {
                const _map = new cakeItems(element);
                return _map.render();
              })

              .reduce((prevVal, curVal) => prevVal + curVal, "")
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const gebi = (id) => document.getElementById(id);
const cakepg = new cakepage(
  "https://api.jsonbin.io/v3/b/63a15b1f15ab31599e20bcb8"
);
cakepg.Download("target-json");
