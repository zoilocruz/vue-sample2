Vue.component('greeting', {
  template: '<p>Hey there, I am {{ name }} <button v-on:click="changeName">Change Name</button></p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods:{
    changeName: function() {
      this.name = 'Zoilo'
    }
  }
});
new Vue({
  el: '#component-one',
  data: {
    title: 'Vue app one'
  },
  methods: {},
  computed: {}
});

new Vue({
  el: '#component-two',
  data: {
    title: 'Vue app two'
  },
  methods: {},
  computed: {}
});
