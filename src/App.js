import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
function reducer(currentState, action) {
    if (currentState === undefined) {
        return {
            number: 1,
            abc: 0,
        };
    }

    const newState = { ...currentState };
    if (action.type === "plus") {
        newState.abc += 1;
    }
    return newState;
}
const store = createStore(reducer);
function App() {
    return (
        <div className="container">
            <h1> Root</h1>
            <div className="flex">
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1></Right1>
                </Provider>
            </div>
        </div>
    );
}
function Left1(props) {
    console.log("L1");
    return (
        <div>
            <h1>Left1 : {props.number}</h1>
            <Left2 number={props.number}></Left2>
        </div>
    );
}
function Left2(props) {
    const number = useSelector((state) => state.abc);
    console.log("L2");
    return (
        <div>
            <h1>Left2 : {number}</h1>
            <Left3 number={number}></Left3>
        </div>
    );
}
function Left3(props) {
    console.log("L3");
    return (
        <div>
            <h1>test number : {props.number}</h1>
        </div>
    );
}
function Right1(props) {
    console.log("R1");
    return (
        <div>
            <h1>Right1</h1>
            <Right2
                increaseNum={() => {
                    props.increaseNum();
                }}
            ></Right2>
        </div>
    );
}
function Right2(props) {
    console.log("R2");
    return (
        <div>
            <h1>Right2</h1>
            <Right3
                increaseNum={() => {
                    props.increaseNum();
                }}
            ></Right3>
        </div>
    );
}
function Right3(props) {
    const dispatch = useDispatch();
    console.log("R3");
    return (
        <div>
            <h1>Right3</h1>
            <button
                onClick={() => {
                    dispatch({ type: "plus" });
                }}
            >
                +
            </button>
        </div>
    );
}
export default App;
