# Project-14-hrnet-package

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` when in \project-14-hrnet-modale

## How to install package

### `npm install project-14-hrnet-modale` in your project

## How to use package

### import `import { Modale } from "project-14-hrnet-modale/dist/Modale.js";`

Import react component in desired file then

### how to use it 

You can display modale by setting a usestate to false and then call the modal with it like so : \
```js
import { Modale } from "project-14-hrnet-modale/dist/Modale.js";
import { useEffect, useState } from "react";

export default function App() {

    const [displayModale, setDisplayModale] = useState(false);
    useEffect(() => {
       setDisplayModale(true)
    },[])

  return (
    <div>
        {displayModale && <Modale setDisplayModale={setDisplayModale}/>}
    </div>
  );
}
```
### options

There is some options you can had to customise your utilisation, you have to add it in Modale props like so :\

```js
const options = {   
    escapeClose: true,   //add ability to close modal with escape
    clickClose: true,   //add ability to click at grey background to close modal
    closeText: 'Employee Created',   //custom content text to display in modal
    showClose: true, //add ability to close modal with an X cross on top right corner
    modalClass: "modale", //select modal name to custom css
    blockerClass: "modale-opacity", //select modal background name to custom css
  }

<Modale setDisplayModale={setDisplayModale} options={options}/>
```