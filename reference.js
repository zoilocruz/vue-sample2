new Vue({
  el: '#reference',
  data: {
    fullname:''
  },
  methods:{
    refRefs: function() {
      this.fullname = this.$refs.input.value +" "+ this.$refs.name.value;
      console.log(this.$refs);
    }
  },
  computed:{}
});
