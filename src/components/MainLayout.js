import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

const MainLayout = ({ children }) => {

    const count = useRef(0);
    const [__, forceUpdate] = useState(Math.random());

    const updateFunction = async () => {
        count.current += 1;
        await fetch("/api/data");
    };

    const debounceFunction = debounce(updateFunction, 1000);

    useEffect(() => {
        debounceFunction();
        debounceFunction();
        debounceFunction();

        setTimeout(() => {
            forceUpdate(Math.random());
        }, 2000);
    }, []);

    useEffect(()=>{
        debounceFunction();
        debounceFunction();

    }, [])

    console.log(
        "%c 105014 MainLayout.js count.current",
        "background: green",
        count.current
    );

    return <div>{children}</div>;
};

export default MainLayout;
