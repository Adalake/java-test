import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'zrender/lib/svg/svg';
import { Observable, of, Subscription, zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  titleConstructor, TextAlignEnum, LeftEnum, TopEnum, tooltipConstructor, TriggerEnum, TooltipAxisPointerType,
  legendConstructor, gridConstructor, titleText, titleTextAlign, tooltipTrigger, tooltipAxisPointerType,
  tooltipAxisPointer, dataZoomConstructor, dataZoomNew, Id, dataZoomNewType, DataZoomType, dataZoomXaxisIndex,
  DataZoomFilterMode, dataZoomFilterMode, dataZoomYaxisIndex, Top, Left, dataConstructor, Right, xAxisConstructor,
  Name, NameLocation, AxisNameLocation, axisTickConstructor, axisTickAlignWithLabel, Show, axisLabelConstructor,
  fontSize, axisData, nameGap, boundaryGap, yAxisConstructor, AxisType, axisType, yAxisPosition, YAxisPosition, axisMax,
  axisMin, seriesNew, seriesConstructor, seriesType, chartSetConstructor, inverse, splitLineConstructor, Interval,
  AlignEnum, Align, chartAnimationDurationUpdate, axisLineSymbol, axisLineConstructor, axisLineSymbolOffset, backgroundColor, Color, textStyleConstructor, lineStyleConstructor
} from './chartConfiguration';

@Component({
  selector: 'app-pet-monitor',
  templateUrl: './pet-monitor.component.html',
  styleUrls: ['./pet-monitor.component.css']
})
export class PetMonitorComponent implements OnInit, AfterViewInit {
  private $combinedObs: Observable<[number[], number[], number[]]> | undefined;

  @Input()
  $single?: Observable<number[]>;
  @Input()
  $random?: Observable<number[]>;
  @Input()
  $coincidence?: Observable<number[]>;
  // variables used to display real-time data
  singleVal: number = 0;
  randomVal: number = 0;
  coincidenceVal: number = 0;

  // xAxis Array used to storage time data
  timeArr: Array<number> = [];

  // import origin element container
  // import origin element container
  @ViewChild('chartSvg', { static: true })
  chartSvg?: ElementRef;

  constructor() { }

  ngOnInit() {
    //control xAxis axisTabel
    for (let i = 0; i < 125; i++) {
      this.timeArr.push(i);
    }

  }


  display(){
    return console.log('wwwwwwwwwwwwwwwwww');
  }
  ngAfterViewInit(): void {
    // get native DOM element container
    const lineChart = this.chartSvg ? this.chartSvg.nativeElement : null;

    // initializing the echarts instance and Charting
    const chart = echarts.init(lineChart, 'dark', { renderer: 'svg' });

    //chart fonfiguration init value start
    const textStyleConfig:Function=textStyleConstructor(Color("#ffffe5"));
    const lineStyleConfig:Function=lineStyleConstructor(Color("#ffffe5"));


    const titleConfig: Function = titleConstructor(titleText('pi-tech'), titleTextAlign(TextAlignEnum.CENTER), Left(LeftEnum.CENTER), Top(TopEnum.TOP),textStyleConfig);

    const tooltipConfigInner: Function = tooltipAxisPointer(tooltipAxisPointerType(TooltipAxisPointerType.CROSS));
    const tooltipConfig: Function = tooltipConstructor(tooltipTrigger(TriggerEnum.AXIS), tooltipConfigInner);

    const dataZoomX: Function = dataZoomNew(Id('dataZoomX'), dataZoomNewType(DataZoomType.INSIDE), dataZoomXaxisIndex([0]), dataZoomFilterMode(DataZoomFilterMode.FILTER));
    const dataZoomY: Function = dataZoomNew(Id('dataZoomY'), dataZoomNewType(DataZoomType.INSIDE), dataZoomYaxisIndex([0]), dataZoomFilterMode(DataZoomFilterMode.NONE));
    const dataZoomConfig: Function = dataZoomConstructor(dataZoomX(), dataZoomY());

    const legendConfig: Function = legendConstructor(Left('30'), Top('15%'), dataConstructor('single', 'random', 'coincidence'),textStyleConfig);

    const gridConfig: Function = gridConstructor(Right('150px'), Left('10px'));

    const xAxisTickConfigInner: Function = axisTickConstructor(axisTickAlignWithLabel(true), Interval(4));
    const xAxisLineConfigInner: Function = axisLineConstructor(axisLineSymbol(['path://M250 150 L150 350 L350 350 Z']), axisLineSymbolOffset([-285]),lineStyleConfig);
    const xAxisLabelConfigInner: Function = axisLabelConstructor(Interval(9), fontSize(10), Align(AlignEnum.CENTER));
    const xAxisConfig: Function = xAxisConstructor(Name('time(s)'), NameLocation(AxisNameLocation.CENTER), axisType(AxisType.CATEGORY),
      splitLineConstructor(Show(false)), axisData(this.timeArr),
      xAxisTickConfigInner, xAxisLabelConfigInner, xAxisLineConfigInner, nameGap(25), boundaryGap(false), inverse(true));

    const seriesOne: Function = seriesNew(Name('single'), axisType(seriesType.LINE), dataConstructor([0]), chartAnimationDurationUpdate(0));
    const seriesTwo: Function = seriesNew(Name('random'), axisType(seriesType.LINE), dataConstructor([0]), chartAnimationDurationUpdate(0));
    const seriesThree: Function = seriesNew(Name('coincidence'), axisType(seriesType.LINE), dataConstructor([0]), chartAnimationDurationUpdate(0));
    const seriesConfig: Function = seriesConstructor(seriesOne(), seriesTwo(), seriesThree());

    const yAxisLabelConfigInner: Function = axisLabelConstructor(fontSize(9), Show(true));
    const yAxisLineConfigInner: Function = axisLineConstructor(axisLineSymbol(['path://M350 350 L150 350 L250 500 Z']), axisLineSymbolOffset([115]),lineStyleConfig);

    const yAxisConfig: Function = yAxisConstructor(Name('value'), NameLocation(AxisNameLocation.CENTER),
      axisType(AxisType.VALUE), yAxisPosition(YAxisPosition.RIGHT), yAxisLabelConfigInner, yAxisLineConfigInner, axisMax(500), axisMin(100),
      nameGap(25), boundaryGap([0, 0]), inverse(false));

    const backgroundColorConfig:Function=backgroundColor("transparent");


    const chartConfig: Function = chartSetConstructor(titleConfig, tooltipConfig, dataZoomConfig, legendConfig, gridConfig, xAxisConfig, yAxisConfig, seriesConfig,backgroundColorConfig,textStyleConfig);
    chart.setOption(chartConfig(), true);
    //chart fonfiguration init value end

    if (this.$single && this.$random && this.$coincidence) {
    this.$combinedObs = zip(this.$single, this.$random, this.$coincidence);
      this.$combinedObs.pipe(catchError((x: any) => { if (x === undefined) throw Error('not found'); return of([[0], [0], [0]]) })).subscribe(val => {
        //three signal stroage data to these array,0 is to let three lines start from thr origin 
        const [singleData, randomData, coincidenceData] = val;
        //update series
        chart.setOption({
          series: [{ data: singleData },
          { data: randomData },
          { data: coincidenceData }]
        }), (e: string) => {
          if (e === 'not found') {
            throw Error('new err');
          }
        };
      });
    }

  }
}