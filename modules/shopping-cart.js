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
                  <h4>${this.name}</h4>
                  <h6>
                   ${this.description}
                  </h6>
                </a>
                <div class="prod-price">
                  <h5>${this.price}</h5>
                  <div class="productCount">
                    <button id="${
                      this.id + "0"
                    }" type="button" style="background-color: white; font-size: 2rem;">-</button>
                    <h5 id="${
                      this.id
                    }" style="padding-left: 0.8rem; padding-right: 0.8rem; font-size: 1.5rem;">${
      this.count
    }<h5>
                    <button id="${
                      this.id + "1"
                    }" type="button" style="background-color: white; font-size: 2rem; margin-top: 0.3rem;">+</button>
                  </div>
               </div>
              </div>
            </article>
            `;
  }
}

var price = 0;

class cakepage {
  constructor(cakePageUrl) {
    this.cakePageUrl = cakePageUrl;
  }
  Basket(target) {
    fetch(`${this.cakePageUrl}`).then((res) => {
      res.json().then((jsob) => {
        gebi(target).insertAdjacentHTML(
          "beforeend",
          jsob
            .map((element) => {
              const _map = new cakeItems(element);
              price += _map.price * _map.count;
              gebi("totalValue").innerHTML = price;
              return _map.render();
            })
            .reduce((prevVal, curVal) => prevVal + curVal, "")
        );

        console.log(price);
        jsob.map((element) => {
          const _map = new cakeItems(element);
          document
            .getElementById(_map.id + "1")
            .addEventListener("click", () => {
              fetch(`https://tlj-backend.vercel.app/product/plus/${_map.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Fetch PUT Request Example" }),
              })
                .then((data) => {
                  gebi(_map.id).innerHTML =
                    parseInt(gebi(_map.id).innerHTML) + 1;
                  price += _map.price;
                  gebi("totalValue").innerHTML = price;
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          document
            .getElementById(_map.id + "0")
            .addEventListener("click", () => {
              fetch(`https://tlj-backend.vercel.app/product/minus/${_map.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Fetch PUT Request Example" }),
              })
                .then((data) => {
                  let count = parseInt(gebi(_map.id).innerHTML);
                  if (count == 1) {
                    gebi(_map.id).innerHTML = count - 1;
                    console.log("Buteegdehuunii too 0 baina");
                    window.location.reload();
                    price -= _map.price;
                    gebi("totalValue").innerHTML = price;
                  }
                  gebi(_map.id).innerHTML = count - 1;
                  price -= _map.price;
                  gebi("totalValue").innerHTML = price;
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        });
      });
    });
  }
}
const gebi = (id) => document.getElementById(id);
const cake = new cakepage("https://tlj-backend.vercel.app/product/count");
cake.Basket("target-sags");
