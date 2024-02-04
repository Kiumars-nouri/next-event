import { SocialItems } from "@/constants"

const Socials = () => {
    return (
        <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10'>
            {SocialItems.map((item) => {
                return (
                    <a key={item.name}
                        href={`${item.url}`}
                        style={{ backgroundImage: `url(${item.img})` }}
                        className="flex-center bg-grey-50 bg-cover bg-center text-grey-500 max-w-[360px] min-h-48 relative rounded-2xl"
                        target="_blank"
                    >
                        <span className="absolute bottom-2 left-2 p-medium-16 md:p-medium-20 text-black">
                            @ Locally {item.name}
                        </span>
                    </a>
                )
            })}
        </div>
    )
}

export default Socials