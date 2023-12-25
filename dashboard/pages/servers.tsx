import Head from "next/head";
import Content from "../components/content";
import Server from "../components/server";

export default function Servers(_props: any) {
    return <Content>
        <Head>
            <title>Servers | Noel</title>
        </Head>
        <h1>Select a server</h1>
        <div style={ {
            display: 'flex',
        } }>
            <Server
                icon=""
                name="Coding with amogus" id=";-;"/>
            <Server
                icon=""
                name="Coding with amogus" id=";-;"/>
            <Server
                icon=""
                name="Coding with amogus" id=";-;"/>
        </div>
    </Content>
}