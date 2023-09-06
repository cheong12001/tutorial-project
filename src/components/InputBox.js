import { useEffect, useState } from "react";

const InputBox = () => {
    const [namesData, setData] = useState([]);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        const asyncAction = async () => {
            const res = await fetch("/api/data");

            if (res.ok) {
                setData(await res.json().result);
            }
        };

        asyncAction();
    }, []);

    return (
        <div>
            <input
                placeholder="please type here"
                style={{ width: 300, height: 35, paddingLeft: 10 }}
            />
        </div>
    );
};

export default InputBox;
