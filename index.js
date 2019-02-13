
const app = new Vue({ //Vue Instance 생성
  //properties (el, data, computed ...)
  el: '#app', //connects to the div of id is "app"
  data: {
    premium: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});