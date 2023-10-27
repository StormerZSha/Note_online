//设置标题与时间
let query=decodeURI(window.location.search).split('&')
console.log(query);
let paragraphTitle=query[0].slice(6)
let paragraphTime=query[1].slice(5)
let pagetitledom=document.querySelector('.pagetitle')
let pagetimedom=document.querySelector('.pagetime')
pagetitledom.innerHTML=paragraphTitle
pagetimedom.innerHTML=paragraphTime

//生成dom
const renderNewdom=(text,type,addition)=>{
    let content=document.querySelector('.content')
    let contentitem=document.createElement('div')
    contentitem.setAttribute('class','contentitem')
    if (type=='code') {
        contentitem.setAttribute('class','contentitem code')
    }
    contentitem.innerText=text
    if (addition.includes('example')) {
        let exampleitem=document.createElement('div')
        exampleitem.setAttribute('class','exampleitem')
        exampleitem.innerHTML=text
        let noteitem=document.createElement('div')
        noteitem.setAttribute('class','noteitem')
        noteitem.innerHTML='*若样例没有展示出预期效果,请复制到本地运行'
        content.appendChild(noteitem)
        content.appendChild(exampleitem)
    }
    content.appendChild(contentitem)
    
}
//获取内容
axios.get("./data/paragraph.json").then(async res=>{
    let contentlist=res.data.list
    let currentitem=contentlist[paragraphTitle]
    console.log(contentlist,paragraphTitle);
    if (!Array.isArray(currentitem.url)) {
        axios.get('./originfile/'+currentitem.url).then(file=>{
            renderNewdom(file.data,currentitem.type,currentitem.addition)
        })
    }else{
        for(let i=0;i<currentitem.url.length;i++){
            const file=await axios.get('./originfile/'+currentitem.url[i])
            renderNewdom(file.data,currentitem.type,currentitem.addition)
        }
    }
    
})
