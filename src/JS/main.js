const a = document.querySelectorAll('[ data-modal]'),
      b = document.querySelector('.modal'),
      c = document.querySelector('[data-close]')
      a.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            b.classList.add('show');
            b.classList.remove('hide');
            document.body.style.overflow = 'hidden'
        })
      })



const products = document.querySelector('.product__cards')

const getProducts = ()=>{
    fetch('http://localhost:3000/cards')
    .then((res) => res.json())
    .then((res)=> res.map((item)=>{
        products.innerHTML += `
                  <div class="product__card">
                    <img src=${item.image} alt="Airpods">
                    <p class="product__card-title">${item.title}</p>
                    <p class="product__card-price">$${item.price}</p>
                    <p class="product__card-price">${item.memory}</p>
                    <button class="product__btn">Buy</button>
                </div>  
        `
    }))
    .catch((eror)=> console.log(eror))
}
getProducts()