import { useEffect, useState } from "react";

const Whatsapp = () => {
    const [data, setData] = useState([]);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        const asyncAction = async () => {
            const res = await fetch("/api/whatsapp");
            if (res.ok) {
                const { result } = await res.json();
                setData(result);
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
            <div>Your Code here...</div>

            <div style={{ height: 100, width: "100%", background: "green" }} />
            <div style={{ height: 100, width: "100%", background: "green" }} />
            <div style={{ height: 100, width: "100%", background: "green" }} />
            <div style={{ height: 100, width: "100%", background: "green" }} />
        </div>
    );
};

export default Whatsapp;
