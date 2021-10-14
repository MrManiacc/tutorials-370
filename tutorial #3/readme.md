# Tutorial #3: _[Build A Todo App With REACT | React Project For Beginners (FULL).](https://www.youtube.com/watch?v=pCA4qpQDZD8&ab_channel=DevEd)_

# Initial setup

1. ``git clone https://github.com/MrManiacc/tutorials.git - clones the repository (make sure you have git installed)``
2. ``cd tutorial\ #3/ - selects the first tutorial as the current folder``
3. ``npm install - installs all of the local dependieces/sets up your enviorment``
5. ``npm start - starts the react local webserver``

# Purpose

The reason I did this tutorial was because I wanted to learn about some front end development with the api we're going
to be using: react. I think it's import to learn react because it allows me to understand how the backend endpoints are
going to be used on the client/browser. This dual minded development allows the backend to be reactively built along
with the frontend website.

# Review/writeup

The initial idea of the video was to be able to create a to-do list that can be modified. After running the first
command: ``npx create-react-app tutorial3``, wer jump straight into react in the form of coding components. I First
created the [Form.js](src/components/Form.js) component that was responsible for handling the input, and I copied in the
css from [this repo](https://github.com/developedbyed/vanilla-todo/blob/master/style.css) to my
local [index.css](src/index.css). In the video the author supplies a repo to a project where he created a to-do website
with only raw html, css, and javascript. We are challenged with converting the raw html code into chunk like react
components.

We use the idea of wrapping the individual [Todo.js](src/components/Todo.js) with
a [TodoList.js](src/components/TodoList.js)
component. React allows the use of mixing javascript with the html component definitions. For example if we wanted to
create a header component we could do something like this:

```javascript
import React from 'react'

//Passed stated see below
export default function Header({state}) {
    return (<header>
        <h1>This is a header</h1>
        <h2>state: {state}</h2>
        <h4>
            <b>This is a sub header</b>
        </h4>
    </header>)
}
```

This header component can then be used in many situations all you would need is to import the Header then anywhere in
other react components you can use the header where ever you please for example:

```javascript 
import {React, useState} from 'react'
import {Header} from './Header' //Our previous Header.js file without the extesion

/**
 * This is some component that is using the header we created previously 
 */
export default function Container() {
    const [state, setState] = useState("");
    //This gets called upon thi onClick and updates the state
    const onUpdateState = (event) =>{
        setState("This is the updated state");         
    };
    return (
        <div className="App">
            <p className="main-paragraph">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in
               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button onClick={onUpdateState}>Click me to update state</button>
        </div>
    )
}
```

Overall I've learned a lot about react, nodejs, and just javascript in general with the tutorials. I look forward to
applying the knowledge I've gained through these tutorials to our buddy tracker app. 