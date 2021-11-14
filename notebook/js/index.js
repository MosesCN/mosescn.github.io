var article = 
`
# Yum
## 1. 简介

## 2. 安装

## 3. 配置

 yum 配置文件路径： \`/etc/yum.repos.d/\`

\`\`\`shel
[root@localhost yum.repos.d]# ls -l /etc/yum.repos.d/
总用量 44
-rw-r--r--. 1 root root 1572 12月  1 2016 CentOS-Base.repo
-rw-r--r--. 1 root root 1664 11月 23 2018 CentOS-Base.repo.bak
-rw-r--r--. 1 root root 1309 11月 23 2018 CentOS-CR.repo
-rw-r--r--. 1 root root  649 11月 23 2018 CentOS-Debuginfo.repo
-rw-r--r--. 1 root root  314 11月 23 2018 CentOS-fasttrack.repo
-rw-r--r--. 1 root root  630 11月 23 2018 CentOS-Media.repo
-rw-r--r--. 1 root root 1331 11月 23 2018 CentOS-Sources.repo
-rw-r--r--. 1 root root 5701 11月 23 2018 CentOS-Vault.repo
-rw-r--r--. 1 root root 2424 10月 25 2018 docker-ce.repo
-rw-r--r--. 1 root root   99 8月  22 10:40 nginx.repo
\`\`\`
## 4. 使用

### 4.1 安装

\`\`\`shell
yum install package-name
\`\`\`

### 4.2 卸载

\`\`\`shell
yum remove package-name
\`\`\`

### 4.3 查看已安装

\`\`\`shell
yum list installed
\`\`\`

### 4.4 查看 yum repository 列表

\`\`\`shel
yum repolist
yum repolist all
\`\`\`

更多使用:  

\`\`\`shell
man yum
\`\`\`
`
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
      mainText:"",
    }
  },
  mounted: function () {
    var htmlText = this.md2html(article);
    this.setMainText(htmlText);
  },
  methods: {
    md2html: function(mdText){
      var converter = new showdown.Converter();
      var htmlText      = converter.makeHtml(mdText);
      return htmlText;
    },
    setMainText: function(text){
      var element = document.getElementById("mainText");
      element.innerHTML = text;
      this.mainText = text;
      // $("#mainText").append(mainText);
    },
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