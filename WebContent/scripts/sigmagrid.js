var data = [
{title:"タイトル1",content:"コンテンツ1",location:"場所1",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル2",content:"コンテンツ2",location:"場所2",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル3",content:"コンテンツ3",location:"場所3",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル4",content:"コンテンツ4",location:"場所4",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル5",content:"コンテンツ5",location:"場所5",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル6",content:"コンテンツ6",location:"場所6",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル7",content:"コンテンツ7",location:"場所7",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル8",content:"コンテンツ8",location:"場所8",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル9",content:"コンテンツ9",location:"場所9",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"},
{title:"タイトル10",content:"コンテンツ10",location:"場所10",start:"2010-10-10 10:10:10",end:"2010-10-10 20:20:20"}
];

var dsOption= {
fields :[
{name : "title"},
{name : "content"},
{name : "location"},
{name : "start"},
{name : "end"}],
recordType : 'object',
data :data
};

var colsOption = [
{id: 'title' , header: "タイトル" , width :100},
{id: 'content' , header: "詳細" , width :100},
{id: 'location' , header: "場所" , width :100},
{id: 'start' , header: "開始" , width :200},
{id: 'end' , header: "終了" , width :200}
];

var gridOption = {
id : "grid",
container : 'grid1_container',
dataset : dsOption,
columns : colsOption,
width: "700", 
height: "300" 
};

var mygrid1=new Sigma.Grid(gridOption);
Sigma.Util.onLoad( Sigma.Grid.render(mygrid1) );