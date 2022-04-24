
/*  data
------------------------------------------------------------------------------------------------------------------------*/
const data = '/data/data.json';

// JSON読み込み
axios
  .get(data)
  .then(function(res){
    showData(res.data);
  })
  .catch(function(err){
    console.log(err);
  })

function showData(data){
  var app = new Vue(
  {
    el: '#app',
    data: {
      data: data,
      active: false,
      counter : 0,
      CurrentPath:'',
    },

    mounted:function(){


      return;
    },
    methods: {

    },
    watch: {

      active: function(){
        // 条件書く
        document.body.style.overflow = this.active ? 'hidden' : ''
      },


    },

    created: function(){

    },
    computed: {
      checkRouter: function() {
        this.CurrentPath = location.pathname
      },

      counted: function(){
        if(this.counter < 0) {
          this.counter = 0;
        }
      }
    },
  })
}