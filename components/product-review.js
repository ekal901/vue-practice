Vue.component("product-review", {
  props: {},
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
            <b>Please correct the following erros(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="name">
        </p>
        <p>
            <label for="review">Reviews:</label>
            <textarea id="review" v-model="review" placeholder="Please Leave a review"></textarea>
        </p>
        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
        </p>
        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        //Emits to the 'product' parents
        this.$emit("review-submitted", productReview);

        //after Submitting, reset values
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        this.errors = [];
        if (!this.name) {
          this.errors.push("Name required");
        }
        if (!this.review) {
          this.errors.push("Review required");
        }
        if (!this.rating) {
          this.errors.push("Rating required");
        }
      }
    }
  }
});
