import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/MainLayout";
import Page from "@/components/Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <Page />;
}
