import { IEvent } from "@/lib/database/models/event.model"
import { formatDateTime } from "@/lib/utils"
import { auth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { DeleteConfirmation } from "./DeleteConfirmation"

type CardProps = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean,
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
    const { sessionClaims } = auth()
    const userId = sessionClaims?.userId as string

    const isEventCreater = userId === event.organiser._id.toString()

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link href={`/events/${event._id}`}
                style={{ backgroundImage: `url(${event.imageUrl})` }}
                className="flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500"
            />

            {isEventCreater && !hidePrice && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                    <Link href={`/events/${event._id}/update`}>
                        <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                    </Link>

                    <DeleteConfirmation eventId={event._id} />
                </div>
            )}

            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
                {!hidePrice && <div className="flex gap-2">
                    <span className="p-semibold-14 w-min rounded-full bg-green-200 px-4 py-1 text-green-60">
                        {event.isFree ? "FREE" : `€${event.price}`}
                    </span>
                    <p className="p-semibold-14 rounded-full bg-grey-500/20 px-4 py-1 text-grey-500">
                        {event.category.name}
                    </p>
                </div>}

                <p className="p-medium-16 md:p-medium text-grey-500">
                    {formatDateTime(event.startDateTime).dateTime}
                </p>

                <Link href={`/events/${event._id}`}>
                    <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
                        {event.title}
                    </p>
                </Link>

                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-primary-500">
                        {event.organiser.firstName} {event.organiser.lastName}
                    </p>

                    {hasOrderLink && (
                        <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                            <p className="text-primary-500 ">
                                Order Details
                            </p>
                            <Image src="/assets/icons/arrow.svg" height={10} width={10} alt="search" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card