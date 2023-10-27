import { useEffect, useState } from "react";

const Whatsapp = () => {
    const [data, setData] = useState([]);

    console.log("%c 151633 Whatsapp.js data", "background: green", data);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        const asyncAction = async () => {
            try {
                const res = await fetch("/api/whatsapp");
                if (res.ok) {
                    const { result } = await res.json();
                    setData(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        asyncAction();
    }, []);

    return (
        <div
            style={{
                width: "95vh",
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div>
                <div
                    style={{ width: 200, height: 500, background: "#dcdcdc" }}
                ></div>
            </div>
        </div>
    );
};

export default Whatsapp;
