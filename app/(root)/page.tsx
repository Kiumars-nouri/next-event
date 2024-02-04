import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import HeroSwiper from "@/components/shared/HeroSwiper";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/shared/Socials";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams.page) || 1
  const searchText = (searchParams?.query as string) || ""
  const category = (searchParams?.category as string) || ""

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:g-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Seamless Event Experiences Await You!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Welcome to Locally, your ultimate destination for seamless event experiences! Discover, create, and secure tickets
              for the hottest local events with just a few clicks. Elevate your social calendar, connect with the community,
              and embrace unforgettable moments – all in one place. Start your journey with us and turn every event into a celebration!
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <HeroSwiper />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Attended by <br /> Hundreds of locals
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Event Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <div>
          <h2 className="h2-bold">
            Connect with us on social media.
          </h2>
          <h3 className="h2-medium">
            Stay Informed.
          </h3>
        </div>
        <Socials />
      </section>
    </>
  );
}



