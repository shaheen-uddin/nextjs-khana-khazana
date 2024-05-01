import { getPlaiceholder } from "plaiceholder";

export default async function getBlurData(imgSrc) {
  if (imgSrc) {
    const buffer = await fetch(imgSrc).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const data = await getPlaiceholder(buffer);
    return data;
  }
  return null;
}
