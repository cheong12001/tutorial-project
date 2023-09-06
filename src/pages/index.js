import Link from "next/link";

export default function Home() {
    const practices = [
        {
            title: "Auto-complete input box exercise",
            url: "/input",
        },
        {
            title: "Whatsapp UI exercise",
            url: "/whatsapp",
        },
    ];

    return (
        <div style={{ padding: 20 }}>
            Welcome to the tutorial project
            <div>
                {practices.map((item, index) => {
                    return (
                        <div key={item.url} style={{ marginTop: 20 }}>
                            <Link href={item.url}>
                                {++index}. {item.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
