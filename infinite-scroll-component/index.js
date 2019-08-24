import React from 'react';

class InfiniteScroll extends React.Component{
state={
    compoutedEle:[],
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
            console.log(document.querySelector("#firstObeserverEle"))
            this.initIntersectionObserver();
        }
        this.firstTime=false;
    }

    initIntersectionObserver(){
        const options = {
            /* root: document.querySelector(".cat-list") */
        }
    
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
        return(<div id="listScrollRoot">
            {this.state.compoutedEle.map((item,index)=>this.setIdsInEle(item,index))}
        </div>);
    }
    
    getNumFromStyle = numStr => Number(numStr.substring(0, numStr.length - 2));
    
    adjustPaddings = isScrollDown => {
        const container = document.querySelector("#listScrollRoot");
      const currentPaddingTop = this.getNumFromStyle(container.style.paddingTop);
      const currentPaddingBottom = this.getNumFromStyle(container.style.paddingBottom);
      const remPaddingsVal = 80 * ((this.props.size || 10) / 2);
        if (isScrollDown) {
          container.style.paddingTop = currentPaddingTop + remPaddingsVal + "px";
        container.style.paddingBottom = currentPaddingBottom === 0 ? "0px" : currentPaddingBottom - remPaddingsVal + "px";
      } else {
          container.style.paddingBottom = currentPaddingBottom + remPaddingsVal + "px";
        container.style.paddingTop = currentPaddingTop === 0 ? "0px" : currentPaddingTop - remPaddingsVal + "px";
        
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
        //this.setState({currentIndex:firstIndex});
        currentIndex = firstIndex;
      }
     // this.setState({topSentinelPreviousY:currentY,topSentinelPreviousRatio:currentRatio});
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
        //this.setState({currentIndex:firstIndex});
        currentIndex=firstIndex;
      }
    
      //this.setState({bottomSentinelPreviousY:currentY,bottomSentinelPreviousRatio:currentRatio});
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