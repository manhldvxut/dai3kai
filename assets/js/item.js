/* itemList
------------------------------------------------------------------------------------------------------------------------*/
const pageApp = new Vue({
    el: "#app",
    data: {
      itemList: []
    },
    created: async function() {
        let res = await axios
                            .get('/assets/data/item.json')
                            .then( res => {
                              this.itemList.push(...res.data); // アイテム読み込み
                            })
                            .catch(function(err){
                              console.log(err);
                            })
    },
    methods: {
        // 通常改行
        br: function(text) {
          return String(text).replace(/\r?\n/g,'<br>');
        },
    }
  });

