import React from 'react';
import './infinity-scroll.css';

class InfiniteScroll extends React.Component{
    state={
        compoutedEle:[],
        rootEle:React.createRef(),
        elesize:0
    }

    componentDidMount(){
        this.recycleDOM(0);
        this.firstTime=true;
    }

    recycleDOM(firstIndex){
        let arr=this.props.data.slice(firstIndex,firstIndex+(this.props.size || 10));
        this.setState({compoutedEle:arr});
    }

    componentDidUpdate(){
        if(this.firstTime){
            this.initIntersectionObserver();
            this.setState({elesize:document.querySelector("#firstObeserverEle").getClientRects()[0].height});
        }
        this.firstTime=false;
    }

    initIntersectionObserver(){
        const options = {}
    
        const callback = entries => {
            entries.forEach(entry => {
                if (entry.target.id === 'firstObeserverEle') {
                this.topSentCallback(entry);
                } else if (entry.target.id === `lastObeserverEle`) {
                this.botSentCallback(entry);
                }
            });
        }
        var observer = new IntersectionObserver(callback, options);
        observer.observe(document.querySelector("#firstObeserverEle"));
        observer.observe(document.querySelector(`#lastObeserverEle`));
    }

    render(){
        return(<div ref={this.state.rootEle} id="rootEle">
            {this.state.compoutedEle.map((item,index)=>this.setIdsInEle(item,index))}
        </div>);
    }
    
    getNumFromStyle = numStr => Number(numStr.substring(0, numStr.length - 2));
    
    adjustPaddings = isScrollDown => {
      const container = this.state.rootEle;
      const currentPaddingTop = this.getNumFromStyle(container.current.style.paddingTop);
      const currentPaddingBottom = this.getNumFromStyle(container.current.style.paddingBottom);
      const remPaddingsVal =  (this.state.elesize - this.state.elesize/2.5)* ((this.props.size || 10) / 2);
        if (isScrollDown) {
          container.current.style.paddingTop = currentPaddingTop + remPaddingsVal + "px";
          container.current.style.paddingBottom = currentPaddingBottom === 0 ? "0px" : currentPaddingBottom - remPaddingsVal + "px";
      } else {
        container.current.style.paddingBottom = currentPaddingBottom + remPaddingsVal + "px";
        container.current.style.paddingTop = currentPaddingTop === 0 ? "0px" : currentPaddingTop - remPaddingsVal + "px";
      }
    }
    
    topSentCallback = entry => {
        if (currentIndex === 0) {
            const container = document.querySelector("#firstObeserverEle");
          container.style.paddingTop = "0px";
          container.style.paddingBottom = "0px";
      }
    
      const currentY = entry.boundingClientRect.top;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
    
      // conditional check for Scrolling up
      if (
        currentY > topSentinelPreviousY &&
        isIntersecting &&
        currentRatio >= topSentinelPreviousRatio &&
        currentIndex !== 0
      ) {
        const firstIndex = this.getSlidingWindow(false);
        this.adjustPaddings(false);
        this.recycleDOM(firstIndex);
        currentIndex = firstIndex;
      }
        topSentinelPreviousY = currentY;
        topSentinelPreviousRatio = currentRatio;
    }

    getSlidingWindow = isScrollDown => {
        const increment = this.props.size/2;
        let firstIndex;
      
      if (isScrollDown) {
          firstIndex = currentIndex + increment;
      } else {
        firstIndex = currentIndex - increment;
      }
      
      if (firstIndex < 0) {
          firstIndex = 0;
      }
      
      return firstIndex;
    }
    
    botSentCallback = entry => {
        if (currentIndex === this.props.data.length) {
          return;
      }
      const currentY = entry.boundingClientRect.top;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
    
      // conditional check for Scrolling down
      if (
        currentY < bottomSentinelPreviousY &&
        currentRatio > bottomSentinelPreviousRatio &&
        isIntersecting
      ) {
        const firstIndex = this.getSlidingWindow(true);
        this.adjustPaddings(true);
        this.recycleDOM(firstIndex);
        currentIndex=firstIndex;
      }
         bottomSentinelPreviousY = currentY;
         bottomSentinelPreviousRatio = currentRatio;
    }

    setIdsInEle(item,index){
        if(index===0)
        return <div id="firstObeserverEle" key={index}>{this.props.drawElement(item,index)}</div>;
        else if(index===(this.props.size-1 || 9 ))
        return <div id="lastObeserverEle" key={index}>{this.props.drawElement(item,index)}</div>;
        else return this.props.drawElement(item,index);
    }

}

let topSentinelPreviousY=0;
let topSentinelPreviousRatio=0;
let bottomSentinelPreviousY=0;
let bottomSentinelPreviousRatio=0;
let currentIndex=0;
export default InfiniteScroll;