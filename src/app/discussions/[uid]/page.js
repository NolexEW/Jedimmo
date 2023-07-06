"use client"
import React, { useState, useEffect } from "react";
import NavBar from "@/components/Navbar";
import Discussion from "@/components/discussion";
import DiscussionsList from "@/components/DiscussionList";

export default function Discussions(props) {
    const [discussions, setDiscussions] = useState([]);
    const [ids, setIds] = useState([]);
    const [messages, setMessages] = useState({});
    const [participants, setParticipants] = useState({});

    function trierParDate(objets) {
        objets.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        });

        return objets;
    }

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
        fetch(
            "http://localhost:3000/api/chat/discussion/getbyid/" + props.params.uid,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setMessages(trierParDate(data.messages));
            });
    }, [props.params.uid]);

    useEffect(() => {
        // extract ids from discussions
        setIds(discussions.map((discussion) => discussion.id));
    }, [discussions]);

    useEffect(() => {
        // Function to fetch updated messages
        function fetchUpdatedMessages() {
            fetch(
                "http://localhost:3000/api/chat/discussion/getbyid/" + props.params.uid,
                {
                    method: "GET",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setMessages(trierParDate(data.messages));
                });
        }

        // Fetch updated messages every 15 seconds
        const intervalId = setInterval(fetchUpdatedMessages, 15000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [props.params.uid]);

    return (
        <main className="bg-white h-screen">
            <NavBar />
            <div className="flex h-[calc(100%-76px)]">
                <DiscussionsList discussions={ids} />
                <Discussion discussionId={props.params.uid} messages={messages} />
            </div>
        </main>
    );
}
