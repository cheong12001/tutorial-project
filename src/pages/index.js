import Link from "next/link";

export default function Home() {
    let count = 0;

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
                {practices.map((item) => {
                    return (
                        <div key={item.url} style={{ marginTop: 20 }}>
                            <Link href={item.url}>
                                {++count}. {item.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
