// now to create nested structure
{/* <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
    </div>
</div> */
}


// const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am an H1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// so React.createElement(Object)=>HTML(Browser Understands)


//now what if we want a sibling for h1 we will have react.createelement as array
/* <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H1 tag</h2>
    </div>
</div> */



// const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am an H1 tag"),React.createElement("h2",{},"I am an H2 TAG")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



//now what if we want a sibling for h1 we will have react.createelement as array
/* <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H1 tag</h2>
    </div>
     <div id="child2">
        <h1>I am H1 tag</h1>
        <h2>I am H1 tag</h2>
    </div>
</div> */


const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am an H1 tag"),React.createElement("h2",{},"I am an H2 TAG")]),React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am an H1 tag"),React.createElement("h2",{},"I am an H2 TAG")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//this looks very difficult so we have jsx which we use for react



//NOTE:Order of the file matters alot
