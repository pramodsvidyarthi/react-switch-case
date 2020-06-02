import React, { useState } from "react";
import { Switch, Case } from "./Switch";
import "./styles.css";

const Two = () => <h1>two</h1>;

export default function App() {
  const [state] = useState(2);
  return (
    <div className="App">
      <Switch>
        {/* render prop */}
        <Case when={state === 1} render={() => <h1>one</h1>} />
        {/* component */}
        <Case when={state === 2} component={Two} />
        {/* child as a fn */}
        <Case when={state === 3}>
          {() => (
            <>
              <h1>three</h1>
            </>
          )}
        </Case>
        {/* children pattern */}
        {/* last child of Switch treated as default */}
        <Case>
          <h1>this is default</h1>
        </Case>
      </Switch>
    </div>
  );
}
