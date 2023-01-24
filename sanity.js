import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: 'm0iuyarz',
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-02"

})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// sanity cors add http://localhost:3333

export default client;