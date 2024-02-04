import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-primary-50 bg-dotted-pattern bg-cover">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/">
                    <Image src="/assets/images/logo.png" alt="logo" width={128} height={38} />
                </Link>

                <p>
                    Local events
                </p>
            </div>
        </footer>
    )
}

export default Footer