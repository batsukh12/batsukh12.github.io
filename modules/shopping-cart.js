class cakeItems {
  constructor(cake) {
    (this.id = cake.id),
      (this.category = cake.category),
      (this.name = cake.name),
      (this.image = cake.image),
      (this.description = cake.description),
      (this.price = cake.price),
      (this.button = function () {
        console.log("first");
      }),
      (this.count = cake.count);
  }
  render() {
    function plus() {
      this.count += 1;
    }
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
                  <div class="button" onclick="${this.button}">
                    сагслах
                  </div>
               </div>
              </div>
            </article>
            `;
  }
}

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
              console.log(element);
              return _map.render();
            })
            .reduce((prevVal, curVal) => prevVal + curVal, "")
        );
      });
    });
  }
}
const gebi = (id) => document.getElementById(id);
const cake = new cakepage("https://tlj-backend.vercel.app/product/count");
cake.Basket("target-sags");
