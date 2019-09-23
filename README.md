# React Infinity Scroll List

A versatile optimised infinite scroll React component.
It break large data sets down into chunks that can be just-in-time loaded as they are scrolled into view.

# Installation

`npm i infinity-scroll-list-react --save`


# Examples
```
import React from 'react';
import InfiniteScroll from 'infinity-scroll-list-react';

function App() {
  return (
    <div>
        <InfiniteScroll data={data} drawElement={renderChild} size={20}></InfiniteScroll>
    </div>
  );
}

// List Item
function renderChild(item,key){
  return(<div key={key} className="child-comp">{item.title}</div>);
}


```

## Props
 
Size is optional default value is 10.
