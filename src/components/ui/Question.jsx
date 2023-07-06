import { Disclosure } from '@headlessui/react'
import {ChevronUpIcon} from "@heroicons/react/20/solid";
export default function Question(props) {
    return (
        <div className="mt-6 flex justify-center flex-col w-4/5">
            <Disclosure class>
                {({ open }) => (
                    <>
                    <Disclosure.Button>
                        <div className="flex py-4 border-b">
                            <span className="font-bold">{props.title}</span>
                            <ChevronUpIcon
                            className={`${open ? 'transform rotate-180' : ''}`+" ml-auto h-7 w-7 transform transition-all duration-500 ease-in-out"}
                            />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        <p className="my-4">{props.content}</p>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}