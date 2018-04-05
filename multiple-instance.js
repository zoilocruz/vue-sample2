var one = new Vue({
  el: '#multiple-instance-one',
  data:{
    title: 'Vue App One'
  },
  methods:{
  },
  computed:{
    greet: function () {
      return 'This is instance one'
    }
  }
});

var two = new Vue({
  el: '#multiple-instance-two',
  data:{
    title: 'Vue app two'
  },
  methods:{
    changeTitle: function () {
      one.title = "Changed Title"
    }
  },
  computed:{
    greet: function(){
      return 'This is instance two';
    }
  }
});
