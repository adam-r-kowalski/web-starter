import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ui from '@material-ui/core';
import * as icon from '@material-ui/icons';


const Counter = () => {
    const [count, setCount] = React.useState(0);
    return <div>
        <button onClick={() => setCount(count - 1)}>
            decrement
        </button>
        Count is {count}
        <button onClick={() => setCount(count + 1)}>
            increment
        </button>
    </div>;
}


const App = () =>
    <div>
        <ui.AppBar position="static">
            <ui.Toolbar>
                <ui.IconButton color="inherit">
                    <icon.Menu />
                </ui.IconButton>
                <ui.Typography variant="h6" color="inherit">
                    Web Starter
                </ui.Typography>
            </ui.Toolbar>
        </ui.AppBar>

        <Counter />
    </div>;

ReactDOM.render(<App/>, document.getElementById("app"));