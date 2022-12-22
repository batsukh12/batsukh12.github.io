class cakeItems{
    constructor(cake){
        this.img = cake.img,
        this.title = cake.title,
        this.describ = cake.describ,
        this.price = cake.price,
        this.button = cake.button
    }
    render(){
        return `
          <article>
            <div class="products-nuur" >
              <a href="/prod-delgerengui.html">
                <img src="${this.img}" alt="pearl_cake" />
                <h4>${this.title}</h4>
                <h6>
                 ${this.describ}
                </h6>
              </a>
              <div class="prod-price">
                <h5>${this.price}</h5>
                <button type="button" class="button" onclick="${this.button}">
                  сагслах
                </button>
             </div>
            </div>
          </article>
          `
    }
}
export default class cakepage{
    constructor(cakepageUrl) {
        this.cakelist = [];
        this.cakepageUrl = cakepageUrl;
        this.haschanged = false;
    }
    // Upload() { 
    //     if (this.hasChanged) { 
    //         fetch(this.cakepageUrl,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //                 'versioning' : false
    //             },
    //             body: JSON.stringify(this.cakelist)
    //         })
    //             .then(response => { console.log(response.status); })
    //             .catch(err => { console.log(err) });

    //         this.hasChanged = false;
    //     }
    // }

    //download then filter() then map() then reduce() 
     Download(targetElement) {
         fetch(`${this.cakepageUrl}/latest`)
         .then(res=>{
             res.json().then(jsob=>{
                 const filterCake  = jsob.record.filter(filter => filter.button="shopping");
                 gebi(targetElement).insertAdjacentHTML("beforeend", filterCake.map(map => {
                     const _map = new cakeItems(map);
                     return _map.render();
                 })
                 .reduce((prevVal, curVal) => prevVal + curVal, "")
                 );
             })
         })
         .catch(err => { console.log(err) });
     } 
     //Download(targetElement) {
     //    fetch(`${this.cakepageUrl}`)
     //    .then(res =>res.json())
     //    .then(json =>{ 
     //        json.map(newCakes =>{
     //            const _newCakes = new cakeItems(newCakes);
     //            this.cakelist.push(_newCakes);
     //            return _newCakes.render();
     //        })
     //     })
     //    .catch(err => { console.log(err) });
     //} 
}
const gebi = id => document.getElementById(id);
const cakepg = new cakepage("https://api.jsonbin.io/v3/b/6399d05bdfc68e59d567f9ae");
cakepg.Download("target-json");
setInterval(() => cakepg.Download("target-json"), 60000);