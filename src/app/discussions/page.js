"use client";
import NavBar from "@/components/Navbar";
import DiscussionsList from "@/components/DiscussionList";
import { useState, useEffect } from "react";

export default function Discussions() {
    const [discussions, setDiscussions] = useState([]);
    const [ids, setIds] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            window.location.href = "/login";
        }

        fetch("/api/chat/discussion/discussions", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDiscussions(data);
            });
    }, []);

    useEffect(() => {
        // extract ids from discussions
        setIds(discussions.map((discussion) => discussion.id));
    }, [discussions]);

    return (
        <main className="bg-white h-screen">
            <NavBar />
            <div className="flex h-[calc(100%-76px)]">
                <DiscussionsList
                    discussions={ids}
                />
                <div className="w-2/3 bg-gray-100 flex flex-col overflow-y-scroll max-h-full">
                </div>
            </div>
        </main>
    );
}
