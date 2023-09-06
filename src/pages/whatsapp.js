import Page from "@/components/Whatsapp";

export default function Home() {
    return (
        <div>
            <Page />

            <div style={{ marginTop: 80 }}>
                Objective:
                <div style={{ width: "95vh", maxWidth: 300 }}>
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
}
