const product = {
    name : "banan",
    price : 12,
    decription : 'Fruit',
    eat: function() {
      console.log(`You eat the ${this.name}!`);
    }
  };
  
  product.eat();


  //Factory function
  function createProduct(name, price, desc){
    return {
      name,
      price,
      desc,
      eat: function() {
        console.log(`You eat the ${this.name}!`);
      }
     }
  }

const prod2 = createProduct('mjölk', 10, 'this is mjölk');
console.log(prod2.name, prod2.price);

// Constructor function
function Product(name, price, desc) {
    this.productName = name
    this.price = price
    this.description = desc
  }

//Utan new sätter vi värdet på this till Window i Product ovan
//Det blir alltså globala variabler
//Här skapar nyckelordet new ett tomt objekt
//sätter this till det nya objektet (vi behöver inte använda oss av return)
//Vi sätter sen våra värden till det nya objektet
  const product1 = new Product('mjölk', 10, 'this is mjölk'); 

 // console.log(window.price);
console.log(product1.price);

//Alla object har ett constructor property
//Den metod som användes för att skapa objektet
console.log(product1.constructor);
console.log(prod2.constructor);
console.log(Product.constructor);

num = 'str';
num = new String('str');

//privata fält och metoder i Constructor metods och Factory metods
//Factory function
function ProductPrivate(name, price, desc){

    // //private
     let discount = 1;
     let calculatePrice = () => price - discount;
  
    // //property (funkar givetvis inte på IE :) )
    Object.defineProperty(this, 'discount', {
      get: function() {
        return discount;
      },
      set: (value) => discount = value < 0 ? 0 : value
    })
  
    //public
    this.name = name
    this.price = price
    this.description = desc
      this.buy = function() {
        //local scope
        let scope = 23;
        console.log(`You buy the ${this.name} for ${calculatePrice()} sek! testvalue ${scope}`);
        discount ++;
      }
     
  }

  const productPrivate = new ProductPrivate('mjölk', 10, 'this is mjölk');

  productPrivate.buy();
  productPrivate.buy();
  productPrivate.buy();
  productPrivate.buy();
  console.log(productPrivate.discount);

  console.log(productPrivate);
