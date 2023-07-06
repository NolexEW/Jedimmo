export default function ButtonLink({ children, href = "/", ...props }) {
    return (
        <Link
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
}
