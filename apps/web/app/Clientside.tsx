'use client'

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Clientside() {
    const [greeting, setGreeting] = useState("");
    useEffect(() => {
        trpc.hello.query({ name: `Client Side` }).then((response) => {
            setGreeting(response);
        })
    });
    return <div>I am Clientside - {greeting}</div>
}