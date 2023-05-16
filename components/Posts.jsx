import Image from "next/image";

const Posts = () => {
  return (
    <section className="px-2">
      <a className="block w-full lg:flex mb-10" href="#">
        <Image
          className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
          src="/images/img-3.jpg"
          alt="img"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-gray-700 font-bold text-2xl dark:text-white">
              Phasellus pharetra enim at nisl pharetra, nec fringilla arcu
              blandit.
            </h3>
            <p className="text-gray-700 dark:text-slate-400">
              Lorem Ipsum has been the standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div className="flex mt-3">
            <Image
              className="h-10 w-10 rounded-full mr-2 object-cover"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="author"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-gray-400 text-sm">Emily Smith</p>
              <time className="text-gray-400 text-xs">22 March</time>
            </div>
          </div>
        </div>
      </a>

      <a className="block w-full lg:flex mb-10" href="#">
        <Image
          className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
          src="/images/img-4.jpg"
          alt="img"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-gray-700 font-bold text-2xl dark:text-white">
              Cras ut elit id ligula placerat molestie at non erat.
            </h3>
            <p className="text-gray-700 dark:text-slate-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
          <div className="flex mt-3">
            <Image
              className="h-10 w-10 rounded-full mr-2 object-cover"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="author"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-gray-400 text-sm">
                James Johnson
              </p>
              <time className="text-gray-400 text-xs">27 March</time>
            </div>
          </div>
        </div>
      </a>

      <a className="block w-full lg:flex mb-10" href="#">
        <Image
          className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
          src="/images/img-5.jpg"
          alt="img"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-gray-700 font-bold text-2xl dark:text-white">
              Ut egestas diam ut massa elementum euismod.
            </h3>
            <p className="text-gray-700 dark:text-slate-400">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old.
            </p>
          </div>
          <div className="flex mt-3">
            <Image
              className="h-10 w-10 rounded-full mr-2 object-cover"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="author"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-gray-400 text-sm">
                Olivia Davis
              </p>
              <time className="text-gray-400 text-xs">30 March</time>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Posts;
