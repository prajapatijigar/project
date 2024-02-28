import React, { useState } from "react";
import Styles from "./TodoList.module.css";

const TodoList = () => {
    const [state, setState] = useState("");
    const [data, setData] = useState([]);

    const onClickHandle = () => {
        if (state.trim() !== "") { // Check if the input is not empty or just whitespace
            setData([...data, state]);
            setState('');
        }
    }

    return (
        <>
            <div className="row bg-secondary justify-content-center">
                <div className="col-6">
                    <div className={Styles.card}>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className={Styles.input}
                        />
                        <button className={Styles.add} onClick={onClickHandle}>Add</button>
                        {data.length > 0 && (
                            <div className={Styles.dynamicdivision}>
                                <ul>
                                    {data.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoList;
