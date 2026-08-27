/**
 * Higgsfield-generated visual assets.
 *
 * Assets are referenced directly from the Higgsfield CDN. As new generations
 * are produced, update the URLs here — every component reads from this map,
 * so the whole site re-skins from one file.
 *
 * Empty string = not generated yet; components fall back to a brand gradient.
 * `dr-lebarty` stays local — the real CEO photo goes in /public/assets/.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_38tyTiLTum8k7mDtv7Fn9Kt7ZjI";

export const assets = {
  // Hero — care team walking and talking down a bright corridor, recreated
  // from the client's reference and animated into a motion loop (seedance_2_0).
  heroStill: `${CDN}/hf_20260523_034444_a3cd9484-7539-425b-b2b4-db676f1bf75c.png`,
  heroLoop: `${CDN}/hf_20260523_034908_d3e27166-c3a2-4584-a006-6af217749653.mp4`,

  foundationStill: `${CDN}/hf_20260521_175705_c5189715-3458-4476-ac9c-1d08508f46fd.png`,
  foundationLoop: "/foundation-banner.mp4", // client-supplied banner video

  // Foundation programs — community health work across Africa.
  foundationPrograms: {
    "village-clinics": `${CDN}/hf_20260523_034913_88f2eda3-e2ab-4e64-baf4-00f010d121a1.png`,
    "mobile-outreach": `${CDN}/hf_20260523_034918_4d1a4732-0dbd-4d42-9aba-ee20c8ab64ae.png`,
    "maternal-child-health": `${CDN}/hf_20260523_034925_93288d14-1e3f-447d-bdb8-8eaeb0552a50.png`,
    "medical-education": `${CDN}/hf_20260523_034930_56c8bbf9-ceee-4179-8543-8dac9fb32b37.png`,
  } as Record<string, string>,

  // Interior-page photography.
  pages: {
    servicesHero: `${CDN}/hf_20260827_085630_cadb51d2-4237-467e-bdd2-b68dba2e851c.png`,
    preventiveCare: `${CDN}/hf_20260523_080735_4931daed-48fc-42e2-b2d9-1e8e013a76d0.png`,
    patients: `${CDN}/hf_20260827_085630_2eb39c3f-f4ba-4834-9025-a1e10fece1a4.png`,
    locationInterior: `${CDN}/hf_20260523_080748_df34860c-d286-4d33-b855-aaf92ff990a0.png`,
    laboratory: `${CDN}/hf_20260827_085630_7ad799b9-0228-4cde-9ea7-6739edf23cc3.png`,
    contact: `${CDN}/hf_20260827_085630_70e9f65d-9f45-4f78-bab2-6792e2070e74.png`,
    resources: `${CDN}/hf_20260523_080754_53b0f3f9-e72c-429d-bea0-810983c00d7a.png`,
  } as Record<string, string>,

  drLebarty: "/DrNosa.png", // local — real CEO photo

  logo3d: `${CDN}/hf_20260522_093629_766d5955-a010-4268-9671-ce6b793f453a.png`, // Higgsfield 3D logo render

  // Signage services (LMW-24) — Nigerian casts, generated Aug 2026.
  services: {
    "general-medicine": `${CDN}/hf_20260827_101339_0f6393b1-74ca-4b59-9214-26579df269e8.png`,
    "internal-medicine": `${CDN}/hf_20260827_101339_29cf9c5c-8f98-45f7-9c79-02ecf839f366.png`,
    "pediatrics": `${CDN}/hf_20260827_101339_3d0181f5-198e-4d38-915b-d437384fa5b3.png`,
    "emergency-services": `${CDN}/hf_20260827_101339_41bea06e-c4b5-4ee2-8b54-df2667da4f80.png`,
    "laboratory": `${CDN}/hf_20260827_085630_e16c977c-d247-4e9c-bbcd-de488f6bc522.png`,
    "eye-clinic": `${CDN}/hf_20260827_101339_4a526c3b-4b4f-450c-a4b0-9a826a006d77.png`,
    "pharmacy": `${CDN}/hf_20260827_101339_44f07f34-4bdb-4509-80ff-bd5765d14a3c.png`,
    "diagnostic-imaging": `${CDN}/hf_20260827_101339_52a45d6c-fd4d-4763-9618-bf51ee6d287f.png`,
    "ambulance": `${CDN}/hf_20260827_101339_1a8668ee-ea70-404c-80fe-099143ae375e.png`,
  } as Record<string, string>,

  // Higgsfield motion loops for the service tiles (Seedance, Aug 2026).
  serviceVideos: {
    "general-medicine": `${CDN}/hf_20260827_102530_69f8393e-ef57-46d4-bc14-282c95407351.mp4`,
    "internal-medicine": `${CDN}/hf_20260827_102529_4b5bb774-9dfc-4e6b-beb8-4d880902ae64.mp4`,
    "pediatrics": `${CDN}/hf_20260827_102529_e462a75a-6540-4cf5-87b9-92c1fe218155.mp4`,
    "emergency-services": `${CDN}/hf_20260827_102529_9218bd46-0aa5-4374-b0b7-4321b5a07c29.mp4`,
    "laboratory": `${CDN}/hf_20260827_092921_110e60a7-bd89-4d92-a77c-8ed6c846f0e6.mp4`,
    "eye-clinic": `${CDN}/hf_20260827_102529_d98cabc2-1c5c-47e0-9193-bdc66711738e.mp4`,
    "pharmacy": `${CDN}/hf_20260827_102659_556223ad-7035-4519-b95d-4d97af549560.mp4`,
    "diagnostic-imaging": `${CDN}/hf_20260827_102529_a953717b-1337-4225-8bbb-95109560ad86.mp4`,
    "ambulance": `${CDN}/hf_20260827_102700_169e8ce7-039c-4cc0-bbd9-18988dcb4fbb.mp4`,
  } as Record<string, string>,
} as const;
