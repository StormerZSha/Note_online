axios.get("./data/index.json").then(res=>{
    //tab栏初始化
    let typelist=res.data.type
    let tablistdom=document.querySelector('.tablist')
    const checkTab=(index)=>{
        console.log(tablistdom.children);
        for(let i=0;i<tablistdom.children.length;i++){
            tablistdom.children[i].setAttribute('class','tabitem')
        }
        tablistdom.children[index].setAttribute('class','tabitem tabitemchecked')
    }

    typelist.forEach((item,index) => {
        let divdom=document.createElement('div')
        divdom.setAttribute('class','tabitem')       
        if (index==0) {
            divdom.setAttribute('class','tabitem tabitemchecked')
        }
        divdom.innerHTML=item
        divdom.onclick=()=>checkTab(index)
        tablistdom.appendChild(divdom)
    });
    //列表初始化
    let listlistdom=document.querySelector('.listlist')
    let datalist=res.data.list
    datalist['全部'].forEach(item=>{
        let itemdiv=document.createElement('div')
        itemdiv.setAttribute('class','listitem')
        let namediv=document.createElement('div')
        let timediv=document.createElement('div')
        namediv.setAttribute('class','itemname')
        namediv.innerHTML=item.name
        timediv.setAttribute('class','itemtime')
        timediv.innerHTML=item.time
        itemdiv.appendChild(namediv)
        itemdiv.appendChild(timediv)
        listlistdom.appendChild(itemdiv)
    })
})
