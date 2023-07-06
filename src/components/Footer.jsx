import Link from "next/link";
export default function Footer() {
    return (
        <div className="flex justify-around bg-secondary py-8 items-center">
            <Link href="/" className="text-2xl font-bold text-textSecondary"> Jed'immo </Link>
            <div>
                <h1 className="text-white font-bold">Site Map</h1>
                <ul>
                    <li><Link href="/" className="text-white"><span>&#172;</span> Home</Link></li>
                    <li><Link href="/articles" className="text-white"><span>&#172;</span> Articles</Link></li>
                    <li><Link href="/abonnements" className="text-white"><span>&#172;</span> Abonnements</Link></li>
                    <li><Link href="/niveaux" className="text-white"><span>&#172;</span> Niveaux</Link></li>
                    <li><Link href="/faq" className="text-white"><span>&#172;</span> FAQ</Link></li>
                </ul>
            </div>

            <div>
                <p className="text-white"><span>&#169;</span>July 2023</p>
            </div>
                </div>
    )
}