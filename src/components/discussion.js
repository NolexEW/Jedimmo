"use client";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import Message from '@/components/ui/Message';
import jwt from "jsonwebtoken";

export default function Discussion(props) {
    const [showDialog, setShowDialog] = useState(false);
    const jwt = require('jsonwebtoken');

    const messagehandler = (e) => {
        e.preventDefault();
        console.log(props.discussionId);
        const msg = document.getElementById('msginput').value;
        if (msg !== '') {
            const data = {
                discussionId: parseInt(props.discussionId),
                authorId: jwt.decode(localStorage.getItem('token')).user.id,
                content: msg,
                date: new Date(),
            }

            fetch('/api/chat/discussion/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
                .then((data) => {
                })
            document.getElementById('msginput').value = '';
            window.location.reload();

        }
    };

    const closeModal = () => {
        setShowDialog(false);
    };

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            messagehandler(e);
        }
    };



    return (
        <section className="w-2/3 bg-gray-100 flex flex-col overflow-y-scroll max-h-full">
            <div className="flex flex-col mb-[15%] grow">
                {Object.keys(props.messages).map((key) => (
                    <Message
                        key={key} // Ajoutez une prop "key" avec une valeur unique ici
                        author={props.messages[key].authorId}
                        content={props.messages[key].content}
                        date={`le ${Date(props.messages[key].date).split(' ').slice(1, 4).join(' ')} `}
                        sendbyme={require('jsonwebtoken').decode(localStorage.getItem('token')).id === props.messages[key].authorId}
                    />
                ))}
            </div>
            <div className="w-[calc(66.6666%-5px)] bg-gradient-to-t from-gray-100 via-gray-100 to-transparent absolute top-[89vh]">
                <form className="flex self-center items-center p-3 bg-white m-6 rounded-full my-3">
          <textarea
              id="msginput"
              className="w-full outline-none pl-2.5 resize-none align-middle flex items-center"
              rows="1"
              placeholder="Message"
              onKeyDown={handleKeyDown}
          />
                    <button
                        className="bg-primary rounded-full p-2 hover:bg-secondary transition-all duration-700"
                        onClick={messagehandler}
                    >
                        <PaperAirplaneIcon className="h-5 w-5 text-white" />
                    </button>
                </form>
            </div>

            <Dialog open={showDialog} onClose={closeModal} as="div" className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Dialog.Panel
                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                    >
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Message envoyé
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Votre message a bien été envoyé, vous pouvez le retrouver dans la discussion. Votre correspondant vous répondra dès que possible.
                            </p>
                        </div>
                        <div className="mt-4">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                            >
                                C'est compris, merci !
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </section>
    );
}
