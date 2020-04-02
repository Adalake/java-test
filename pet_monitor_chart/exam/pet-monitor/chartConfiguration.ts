//title


export enum TextAlignEnum {
    'AUTO' = 'auto',
    'LEFT' = 'left',
    'RIGHT' = 'right',
    'CENTER' = 'center'
};

export enum TextVerticalAlignEnum {
    'AUTO' = 'auto',
    'TOP' = 'top',
    'BOTTOM' = 'bottom',
    'middle' = 'middle'
}

export enum LeftEnum {
    'LEFT' = 'left',
    'RIGHT' = 'right',
    'CENTER' = 'center',
    'AUTO' = 'auto'
}

export enum TopEnum {
    'TOP' = 'top',
    'BOTTOM' = 'bottom',
    'middle' = 'middle',
    'AUTO' = 'auto'
}
//tigger

export enum TriggerEnum {
    'ITEM' = 'item',
    'AXIS' = 'axis',
    'NONE' = 'none'
}

export enum TriggerOnEnum {
    'MOUSEMOVE' = 'mousemove',
    'CLICK' = 'click',
    'MOUSEMOVE|CLICK' = 'mousemove|click',
    'NONE' = 'none'
}
// trigger
//toolTip 

export enum TooltipAxisPointerType {
    'LINE' = 'line',//default  
    'SHADOW' = 'shadow',
    'NONE' = 'none',
    'CROSS' = 'cross'
}

export enum TooltipAxisPointerAxis {
    'X' = 'x',
    'Y' = 'y',
    'RADIUS' = 'radius',
    'ANGLE' = 'auto'//default
}
// dataZoom

export enum DataZoomType {
    'SLIDER' = 'slider',
    'INSIDE' = 'inside'
}

export enum DataZoomFilterMode {
    'FILTER' = 'filter',//As long as one dimension of data outside the window is filtered out,it will affect the data range of other axes
    'WEAKFILTER' = 'weakFilter',//data outside the window can only be filtered out if all dimension outside the window ,it will range of other axes 
    'EMPTY' = 'empty',//Set data outside the window to null,it won't affect the range of axes
    'NONE' = 'none'//not to be filtered ,only to change the range of axes
}

export enum LegendType {
    'PLAIN' = 'plain',
    'SCROLL' = 'scroll'
}

export enum LegendOrient {
    'HORIZONTAL' = 'horizontal',
    'VERTICAL' = 'vertical'
}

export enum AlignEnum {
    'AUTO' = 'auto',
    'LEFT' = 'left',
    'RIGHT' = 'right',
    'CENTER'='center'
}
//xAxis  
export enum XAxisPosition {
    'TOP' = 'top',
    'BOTTOM' = 'bottom'
}

export enum AxisType {
    'VALUE' = 'value',
    'CATEGORY' = 'category',
    'TIME' = 'time',
    'LOG' = 'log'
}

export enum AxisNameLocation {
    'START' = 'start',
    'MIDDLE' = 'middle',
    'CENTER' = 'center',
    'END' = 'end'
}
// yAxis  
export enum YAxisPosition {
    'LEFT' = 'left',
    'RIGHT' = 'right'
}


export enum seriesType {
    'LINE' = 'line',
    'BAR' = 'bar',
    'PIE' = 'pie',
    'SCATTER' = 'scatter',
    'EFFECTSCATTER' = 'effectScatter',
    'RADAR' = 'radar',
    'TREE' = 'tree',
    'TREEMAP' = 'treemap',
    'SUNBURST' = 'sunburst',
    'BOXPLOT' = 'boxplot',
    'CANDLESTICK' = 'candlestick',
    'HEATMAP' = 'heatmap',
    'MAP' = 'map',
    'PARALLEL' = 'parallel',
    'LINES' = 'lines',
    'GRAPH' = 'graph',
    'SCANKEY' = 'scankey',
    'FUNNEL' = 'funnel',
    'GAUGE' = 'gauge',
    'PICTORIALBAR' = 'pictorialBar',
    'THEMERIVER' = 'themeRiver',
    'CUSTOM' = 'custom'
}

export enum AxisLineSymbolEnum{
    'NONE'='none',
    'ARROW'='arrow'

}

// let arr = [1,2,3];

// arr[10]=10;
// console.log(arr);
//get echart configuration ,add to an object and return it 

const argsEachToObj: Function = ( ...args: (() => Object)[]) => {
    const obj={};
    args.forEach((item, index) => {
        Object.assign(obj, item());
    });
    return obj;
}

//get echart dispose,add to an array and return it
const argsEachToArray: Function = ( ...args: (() => Object)[]) => {
    const arr:Array<any>=[];
    args.forEach((item, index) => {
        arr.push(item);
    });
    return arr;
}

const judgeAndReturn:Function=(defaultVal:any,val:any)=>{
    const valNew=val===undefined?defaultVal:val;
    return valNew;
}

//for all can use id 
export const Id: Function = (val?: string) => {
    return () => ({ id: judgeAndReturn('',val) });
}

export const Left: Function = (val?: LeftEnum | number | string) => {
    return () => ({ left: judgeAndReturn(LeftEnum.AUTO,val) });
}
export const Top: Function = (val?: TopEnum | number | string) => {
    return () => ({ top: judgeAndReturn(TopEnum.AUTO,val) });
}
export const Right: Function = (val?: string | number) => {
    return () => ({ right: judgeAndReturn(60,val) });
}
export const Name:Function=(val?:string)=>{
    return ()=>({name:judgeAndReturn('',val)});
}
export const NameLocation:Function=(val?:AxisNameLocation)=>{
    return ()=>({nameLocation:judgeAndReturn(AxisNameLocation.END,val)});
}
export const axisType:Function=(val?:AxisType)=>{
     return ()=>({type:judgeAndReturn(AxisType.CATEGORY,val)});
}
export const axisTickConstructor=(...args:Object[])=>{
    return () => ({ axisTick: argsEachToObj( ...args) });
}
export const axisTickAlignWithLabel=(val?:boolean)=>{
    return ()=>({alignWithLabel:judgeAndReturn(false,val)});
}
export const axisTickInside=(val?:boolean)=>{
    return ()=>({inside:judgeAndReturn(false,val)});
}
export const axisTickLength=(val?:number)=>{
    return ()=>({length:judgeAndReturn(5,val)});
}
export const Show=(val?:boolean)=>{
    return ()=>({show:judgeAndReturn(true,val)});
}
export const axisLabelConstructor=(...args:Object[])=>{
    return ()=>({axisLabel:argsEachToObj(...args)});
}
export const axisLineConstructor=(...args:Object[])=>{
    return ()=>({axisLine:argsEachToObj(...args)});
}
export const fontSize=(val?:number)=>{
    return ()=>({fontSize:judgeAndReturn(12,val)});
} 
export const axisData=(arr?:Array<string|number>)=>{
    return ()=>({data:judgeAndReturn([],arr)});
}
export const axisPointerConstructor=(...args:Object[])=>{
    return ()=>argsEachToObj(...args);
}
export const axisPointerLabel=(...args:Object[])=>{
    return ()=>argsEachToObj(...args);
}
export const nameGap=(val?:number)=>{
    return ()=>({nameGap:judgeAndReturn(15,val)});
}
export const splitLineConstructor=(...args:Object[])=>{
    return ()=>{
        return ({splitLine:argsEachToObj(...args)});
    }
}
export const boundaryGap=(val?:boolean|Array<string|number>)=>{
    return ()=>({boundaryGap:judgeAndReturn(true,val)});
}
export const axisMax=(val?:number|string)=>{
    return ()=>({max:judgeAndReturn(null,val)});
}
export const axisMin=(val?:number|string|Function)=>{
    return ()=>({min:judgeAndReturn(null,val)});
}
export const smooth=(val?:number|boolean)=>{
    return ()=>({smooth:judgeAndReturn(false,val)});
}
export const dataConstructor = (...args: Object[] | string[]) => {

    return () => ({ data: argsEachToArray( ...args) });
}
export const inverse=(val?:boolean)=>{
    return ()=>({inverse:judgeAndReturn(false,val)});
}
export const splitNumber=(val?:number)=>{
    return ()=>({splitNumber:judgeAndReturn(5,val)});
}
export const minInterval=(val?:number)=>{
    return ()=>({minInterval:judgeAndReturn(0,val)});
}
export const Interval=(val?:number)=>{
    return ()=>({interval:judgeAndReturn(null,val)});
}
export const Align=(val?:AlignEnum)=>{
    return ()=>({align:judgeAndReturn(AlignEnum.AUTO,val)});
}
export const chartAnimation=(val?:boolean)=>{
    return ()=>({animation:judgeAndReturn(true,val)});
}
export const Color=(val?:string)=>{
    return ()=>({color:judgeAndReturn('#fff',val)});
}
export const chartAnimationEasingUpdate=(val?:string)=>{
    return ()=>({animationEasingUpdate:judgeAndReturn('cubicout',val)});
}
export const chartAnimationDurationUpdate=(val?:number|Function)=>{
    return ()=>({animationDurationUpdate:judgeAndReturn(300,val)});
}
export const axisLineSymbol=(val?:AxisLineSymbolEnum|Array<string>)=>{
    return ()=>({symbol:judgeAndReturn(AxisLineSymbolEnum.NONE,val)});
}
export const axisLineSymbolOffset=(val?:Array<number>|number)=>{
    return ()=>({symbolOffset:judgeAndReturn([0,0],val)});
}
export const backgroundColor=(val?:string)=>{
    return ()=>({backgroundColor:judgeAndReturn('transparent',val)});
}
export const textStyleConstructor=(...args:Object[])=>{
    return ()=>({textStyle:argsEachToObj(...args)});
}
export const lineStyleConstructor=(...args:Object[])=>{
    return ()=>({lineStyle:argsEachToObj(...args)});
}




// title start
export const titleText: Function = (val?: string) => {
    return () => ({ text: judgeAndReturn('',val) });
}
export const titleTextAlign: Function = (val?: TextAlignEnum) => {
    return () => ({ textAlign: judgeAndReturn(TextAlignEnum.AUTO,val) })
}


export const titleConstructor = (...args: (Function)[]) => {
    return () => {
        return ({title:argsEachToObj( ...args)});
    }
}
// title end 
// tooltip start
export const tooltipTrigger: Function = (val?: TriggerEnum) => {
    return () => ({ trigger: judgeAndReturn(TriggerEnum.ITEM,val) });

}
export const tooltipAxisPointer: Function = (...args: ((T: any) => Object)[]) => {
    return () => ({ axisPointer: argsEachToObj( ...args) });

}
export const tooltipAxisPointerType: Function = (val?: TooltipAxisPointerType) => {
    return () => ({ type: judgeAndReturn(TooltipAxisPointerType.LINE,val) });

}

// export const tooltip

export const tooltipConstructor = (...args: (Function)[]) => {
    return ()=>{
        return  ({tooltip:argsEachToObj( ...args)});
    }
}
// tooltip end
// dataZoom start 
export const dataZoomNewType = (val?: DataZoomType) => {
    return () => ({ type: judgeAndReturn(DataZoomType.INSIDE,val) });

}

export const dataZoomXaxisIndex = (val?: number | Array<number | Object>) => {
    return () => ({ xAxisIndex: judgeAndReturn(null,val) });
}

export const dataZoomYaxisIndex = (val?: number | Array<number | Object>) => {
    return () => ({ yAxisIndex: judgeAndReturn(null,val) });
}

export const dataZoomFilterMode = (val?: DataZoomFilterMode) => {
    return () => ({ filterMode: judgeAndReturn(DataZoomFilterMode.FILTER,val) });
}

export const dataZoomNew = (...args: Object[]) => {
    return () => argsEachToObj( ...args);
}

export const dataZoomConstructor = (...args: Object[]) => {
    return ()=>{

        return ({dataZoom:argsEachToArray(...args)});

    }
}
//dataZoom end
// legend start
export const legendOrient = (val?: LegendOrient) => {
    return () => ({ orient: judgeAndReturn(LegendOrient.HORIZONTAL,val) });
}


export const legendDataNew = (...args: Object[]) => {
    return () => argsEachToObj( ...args);
}

export const legendDataName = (val?: string) => {
    return () => ({ name: judgeAndReturn(null,val) });
}

export const legendConstructor = (...args: Object[]) => {
    return ()=>{
        return ({legend:argsEachToObj( ...args)});

    }
};
// legend end
// grid start
export const gridConstructor = (...args: Object[]) => {
    return () =>{
        return ({grid:argsEachToObj( ...args)});
    }
}
// grid end
// xAxis start
export const xAxisPosition=(val?:XAxisPosition)=>{
    return ()=>({position:judgeAndReturn(XAxisPosition.BOTTOM,val)});
}

export const xAxisConstructor=(...args:Object[])=>{
    // console.log(args);
    return ()=>{
        return ({xAxis:argsEachToObj(...args)});
    }
}

// xAxis end
// yAxis start
export const yAxisPosition=(val?:YAxisPosition)=>{
    return ()=>({position:judgeAndReturn(YAxisPosition.LEFT,val)});
}

export const yAxisConstructor=(...args:Object[])=>{
    return ()=>{
        return ({yAxis:argsEachToObj(...args)});
    }
}

// yAxis end
// series start
export const seriesNew=(...args:Object[])=>{
    return ()=>(argsEachToObj(...args));
}
export const seriesMarkPoint=(...args:Object[])=>{
    return ()=>{
        return ({markPoint:argsEachToObj(...args)});
    };
}
export const seriesMarkPointLabel=(...args:Object[])=>{
    return ()=>{
        return ({label:argsEachToObj(...args)});
    };
}

export const seriesConstructor=(...args:Object[])=>{
    return ()=>{
        return ({series:argsEachToArray(...args)});
    };
}
// series end
// chartSetConstructor start
export const chartSetConstructor=(...args:Object[])=>{
    return ()=>argsEachToObj(...args);
}
// chartSetConstructor end
