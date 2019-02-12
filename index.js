const app = new Vue({ //Vue Instance 생성
  //properties (el, data, computed ...)
  el: '#app', //connects to the div of id is "app"
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpeg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpeg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpeg'
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
       this.cart += 1
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
    }
      
  //   totalProducts() {
  //     return this.products.reduce( (sum, product) => {
  //       return sum + product.quantity
  //     }, 0)
  //   }
  },
  // created () { //api request
  //   fetch('https://api.myjson.com/bins/74l63')
  //     .then(response => response.json() )
  //     .then(json => {
  //       this.products = json.products;
  //     })
  // }
});
