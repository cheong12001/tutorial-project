import InputBox from "@/components/InputBox";

const Input = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
            <InputBox />
            <div style={{ marginLeft: 10 }}>Please do not remove me</div>
        </div>
    );
};

export default Input;
