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
          <p>Shipping: {{ shipping }}</p>
  
          <product-details :details="details"></product-details>
  
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
        </div>

        <div>
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews yet.</p>
          <ul>
            <li v-for="review in reviews">
              <p>{{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>
          </ul>
        </div>
        <product-review @review-submitted="addReview"></product-review>
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
        reviews: [],
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
      },
      shipping() {
        if(this.premium) {
          return "Free"
        }
        return '$2.99'
      }
    },
    methods: {
      addToCart() {
         this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      },
      updateProduct: function(index) {
        this.selectedVariant = index
      },
      addReview: function(productReview) { 
        this.reviews.push(productReview)
      }
    }
  })