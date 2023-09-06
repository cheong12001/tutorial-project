import { useEffect, useState } from "react";

const Page = () => {
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
        <div style={{ width: "95vh", maxWidth: 300 }}>Your Code here...</div>
    );
};

export default Page;
