const heading=React.createElement("h1",{id:"heading1",xyz:"abc"},"Hello from React!!");
// the empty object in line 1 helps in giving attribute for eg. id style
// this heading will give object
console.log(heading)//it will even have some props which are children+attributes i.e children:"Hello from react",id:"heading1",xyz:"abc"//so react.createElement creates an object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);