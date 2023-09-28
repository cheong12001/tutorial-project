import Page from "@/components/Whatsapp";

const Home = () => {
    return (
        <div>
            <Page />

            <div style={{ marginTop: 80 }}>
                Objective:
                <div style={{ width: "95vw", maxWidth: 300 }}>
                    <img
                        alt={"preview"}
                        style={{
                            width: "100%",
                            objectFit: "contain",
                            marginTop: 10,
                        }}
                        src={"/preview/whatsapp.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
