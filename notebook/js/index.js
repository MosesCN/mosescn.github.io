new Vue({
  el: '#app',
  data: function() {
    return { 
      dirFilterText: "",
      dirs: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
    }
  },
  methods: {
    handleNodeClick: function(node){
      console.log(node);
      if(node.children){
        console.log('click directory');
      }else{
        console.log('click file');
        this.loadFile();
      }
    },
    loadFile: function(){
        console.log('loading file...');
        $.ajax({
        url: "https://sapi.k780.com/?app=weather.today&weaId=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json",            
        success: function( result ) {
            console.log(result);
        }
      });
    }
  }
})