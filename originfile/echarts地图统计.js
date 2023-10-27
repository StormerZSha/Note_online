import * as echarts from 'echarts'
import 'echarts/lib/chart/map'
import {mapjson} from './mapjson.js'
//mapjson来源于https://datav.aliyun.com/portal/school/atlas/area_selector

echarts.registerMap('china',{geoJSON:mapjson})
let mapoption={
    backgroundColor:'transparent',
    tooltip:{
        show:false,
        trigger:'item',
        formatter:(params)=>{
            if (params.data) {
                return params.data.name+':'+params.data.value
            }else{
                return ''
            }
        }
    },
    legend:{show:false},
    series:[
        {
            name:'',
            type:'map',
            mapType:'china',
            roam:true,//拖拽缩放
            zoom:1.5,//初始层级
            center:[105,35],//初始中心位置
            aspectScale:1,//透视缩放
            selectedMode:'single',
            label:{
                color:'#fff',
                fontSize:14
            },
            itemStyle:{
                areaColor:'#003373',
                borderColor:'#4bf3f9',
                shadowColor:'#00337c',
                shadowOffsetX:0,
                shadowOffsetY:20,
                shadowBlur:5
            },
            emphasis:{
                label:{
                    show:true,
                    color:'#ffffff'
                },
                itemStyle:{
                    areaColor:'#eeb804',
                    borderColor:'transparent'
                }
            },
            data:[
                {name:'四川省',value:123},
                {name:'江苏省',value:456}
            ]
        }
    ]
}
let dom=xxxx//通过各种方式获取dom
let mapchart=echarts.init(dom)
mapchart.setOption(mapoption)

