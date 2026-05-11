import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
export const client = createClient({
  projectId: "rpx77580",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export const fetchHomePageData = async () => {
  return await client.fetch(`*[_type == "homePage"][0]`);
};

export const fetchConceptPageData = async () => {
  return await client.fetch(`*[_type == "conceptPage"][0]`);
};

export const fetchTeamPageData = async () => {
  return await client.fetch(`*[_type == "teamPage"][0]`);
};

export const fetchInitiativePageData = async () => {
  return await client.fetch(`*[_type == "initiativePage"][0]{
    ...,
    satzungFile { asset-> }
  }`);
};

export const fetchContactPageData = async () => {
  return await client.fetch(`*[_type == "contactPage"][0]`);
};

export const fetchFooterImpressumData = async () => {
  return await client.fetch(`*[_type == "footerImpressum"][0]`);
};

export const fetchFacilitiesPageData = async () => {
  return await client.fetch(`*[_type == "facilitiesPage"][0]`);
};

const builder = createImageUrlBuilder(client);

export const urlFor = (source: Parameters<typeof builder.image>[0]) =>
  builder.image(source).url();
