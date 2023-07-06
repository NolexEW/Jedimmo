import jwt from "jsonwebtoken";
import Link from "next/link";
import {useEffect, useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Menu} from "@headlessui/react";

export default function Navbar(props) {
    const [Connecteduser, setConnecteduser] = useState(null);

    useEffect(() => {
        const checkLoggedIn = () => {
            const token = localStorage.getItem('token');
            if (token !== null) {
                const decodedjwt = jwt.decode(token);
                const user = {
                    email: decodedjwt.user.email,
                    firstName: decodedjwt.user.firstName,
                    lastName: decodedjwt.user.lastName,
                    balance: decodedjwt.user.balance,
                }
                setConnecteduser(user);
            }
        }
        checkLoggedIn();
    }, []);

    return (
        <nav className="p-2 bg-secondary flex justify-between items-center">
            <div className="p-2 mx-24">
                <span className="text-2xl font-bold text-textSecondary">
                  <Link href="/">Jed'immo </Link>
                </span>
            </div>

            {props.searchBar ? (
                <div className="flex items-center justify-center bg-white rounded-full p-3 py-2 my-3">
                    <input className="w-full outline-none" type="text" placeholder="Search"/>
                    <button className="">
                        <MagnifyingGlassIcon className="h-5 w-5"/>
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center bg-white rounded-full p-3 py-2 my-3">
                    <Link href="/" className="flex items-center justify-center">
                        <MagnifyingGlassIcon className="h-5 w-5"/>
                    </Link>
                </div>
            )}

            <div className="mx-24 flex items-center">
                {!Connecteduser ? (
                    <div className="flex gap-x-5">
                        <Link className="my-3 bg-primary rounded p-2 px-3 font-bold text-textSecondary"
                              href="/login">Login</Link>
                        <Link className="my-3 bg-primary rounded p-2 px-3 font-bold text-textSecondary"
                              href="/register">Register</Link>
                    </div>
                ) : (
                    <div>
                        <Menu as="div" className="relative inline-block text-left ml-24">
                            <div>
                                <Menu.Button className="bg-primary p-2 rounded-full text-2xl">
                                    👦🏻
                                </Menu.Button>
                            </div>
                            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                                <div className="px-1 py-1 flex flex-col ">
                                    <Menu.Item>
                                        {({active}) => (
                                            <Link className="border-b" href="/profile">Profile</Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <Link className="border-b" href="/logout">Logout</Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <Link href="/discussions">Discussions</Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                )}
            </div>
        </nav>
    );
}
