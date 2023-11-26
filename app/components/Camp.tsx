import { PEOPLE_URL } from "@/constants";
import { url } from "inspector";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-black p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <p className="bold-16 md:bold-20 text-white">
            <i>{peopleJoined}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Third Mainland Bridge"
          subtitle="Oworonshoki, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="National Theatre"
          subtitle="Surulere, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="The Good Beach"
          subtitle="Victoria Island, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="First Building In Nigeria."
          subtitle="Badagry, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-5"
          title="Lekki Conservation Center."
          subtitle="Lekki, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-6"
          title="La Campagne Tropicana."
          subtitle="Ibeju-Lekki, Lagos."
          peopleJoined="Explore Here -"
        />
        <CampSite
          backgroundImage="bg-bg-img-7"
          title="Nike Art Gallery."
          subtitle="Marina, Lagos."
          peopleJoined="Explore Here -"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-black p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            What Have You Heard About{" "}
            <strong className="text-green-50">LAGOS</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lagos State is the Economic hub of West Africa, with 20 local
            government areas. It's a city filled with numerous tourist
            attractions waiting to be explored. Join us on an exciting adventure
            in Lagos and experience a fun-filled journey like no other. Get
            ready for an interesting and unforgettable experience!
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
