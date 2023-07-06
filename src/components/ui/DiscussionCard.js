import {ArrowRightIcon} from "@heroicons/react/20/solid";

export default function DiscussionCard(props){
    return (
        <section className="w-full h-24 border-b items-center flex justify-between">
            <h1 className="mx-4 mt-0.5 font-bold text-xl">{props.title}</h1>
            <ArrowRightIcon className="mx-4 font-bold h-5 w-5"/>
        </section>
    )
}