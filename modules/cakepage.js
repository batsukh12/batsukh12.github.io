const gebi = (id) => document.getElementById(id);

class cakeItems {
  constructor(cake) {
    (this.id = cake.id),
      (this.category = cake.category),
      (this.name = cake.name),
      (this.image = cake.image),
      (this.description = cake.description),
      (this.price = cake.price),
      (this.button = cake.button),
      (this.count = cake.count);
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
                <div id="${this.id}" class="button" >
                  сагслах
                </div>
             </div>
            </div>
          </article>
          `;
  }
}

var too = 0;
gebi("shopCount").innerHTML = too;

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
           if (params.get("category") == "cake") {
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
          filterCake.map((element) => {
            const _map = new cakeItems(element);
            document.getElementById(_map.id).addEventListener("click", () => {
              fetch(`https://tlj-backend.vercel.app/product/plus/${_map.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Fetch PUT Request Example" }),
              })
                .then((data) => {
                  console.log(data);
                })
                .catch((error) => {
                  console.log(error);
                });
              too++;
              gebi("shopCount").innerHTML = too;
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const cakepg = new cakepage(
  "https://api.jsonbin.io/v3/b/63a15b1f15ab31599e20bcb8"
);
cakepg.Download("target-json");
