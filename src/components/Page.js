import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
    const [data, setData] = useState([]);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        const asyncAction = async () => {
            const res = await fetch("/api/whatsapp");
            if (res.ok) {
                const data = await res.json();
                setData(data.result);
            }
        };

        asyncAction();
    }, []);

    return <div>Test Layout</div>;
};

export default Page;
