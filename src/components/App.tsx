import * as React from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
    const buttonName = "Some button updated"
        return (
            <>
                <Header buttonName={buttonName} />
                <main>
                    <div>
                        <h1>Hello World</h1>
                    </div>
                </main>
            </>
        );
    }

export default App;