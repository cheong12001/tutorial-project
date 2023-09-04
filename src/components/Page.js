import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncAction = async () => {
            // api endpoint of /api/data
            const res = await axios.get("/api/data");
            setData(res.data.result);
        };

        asyncAction();
    }, []);

    return <div>Test Layout</div>;
};

export default Page;
