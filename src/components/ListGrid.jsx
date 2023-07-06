/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const items = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=1",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=2",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=3",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=4",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=5",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc: "https://source.unsplash.com/320x240/?house&sig=6",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    // More items...
];

export default function ListGrid({ title = null }) {
    return (
        <div className="bg-white">
            {title && <h1 className="text-3xl font-bold py-4 my-2">{title}</h1>}
            <div className="mx-auto max-w-2xl px-4 $ sm:px-6 lg:max-w-7xl">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                    {items.map((item) => (
                        <div key={item.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={item.href}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {item.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {item.color}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
