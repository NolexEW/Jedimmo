export default function ProfileCard({ children, ...props}) {
    return (
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 flex"
        {...props}>
            {children}
        </div>
    )
}