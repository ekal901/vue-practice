Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="loadImage">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else v-bind:class="{ outOfStock: !inStock }">Out of Stock</p>
        <p>User is Premium: {{ premium }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" 
          :key="variant.variantId" 
          class="color-box"
          v-bind:style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
        </div>
        
        <button v-on:click="addToCart" 
          v-bind:disabled="!inStock"
          v-bind:class="{ disabledButton: !inStock }">
          Add to Cart
        </button>
        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green.jpeg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.jpeg',
          variantQuantity: 0
        },
      ],
      cart: 0,
    }
  },
  computed: {
    title(){
      return this.brand + ' ' + this.product
    },
    loadImage() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  },
  methods: {
    addToCart() {
       this.cart += 1
    },
    updateProduct: function(index) {
      this.selectedVariant = index
    },
  }
});
const app = new Vue({ //Vue Instance 생성
  //properties (el, data, computed ...)
  el: '#app', //connects to the div of id is "app"
  data: {
    premium: true
  }
});
