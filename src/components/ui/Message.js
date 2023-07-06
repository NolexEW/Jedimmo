"use client";
import { useState } from "react";

export default function Message(props) {
    const { sendbyme,author,content, date } = props;

    const [Msgauthor, setMsgauthor] = useState('')

    fetch('/api/users', {
        method: 'GET'
    }
    ).then((res) => res.json())
        .then((data) => {
            data.forEach((user) => {
                if (user.id === author) {
                    setMsgauthor(user.firstName + ' ' + user.lastName)
                }
            })
        }
        )


    return (
        <div
            className={`w-2/3 flex flex-col h-min m-5 p-2.5 rounded-md ${
                author === require('jsonwebtoken').decode(localStorage.getItem('token')).user.id
                    ? 'bg-blue-500 self-end text-white'
                    : 'bg-gray-300'
            }`}
        >
            <span className="font-bold">{Msgauthor}</span>
            <p>{content}
            </p>
            <span className={`flex justify-end mr-3 text-sm ${sendbyme ? "text-gray-300":"text-gray-600"}`}>
        {date}
      </span>
        </div>
    );
}
