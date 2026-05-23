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
    servicesHero: `${CDN}/hf_20260523_080719_76ffddf7-6bdf-4faf-a176-528cf084e4c7.png`,
    primaryCare: `${CDN}/hf_20260523_080722_29252355-4dac-4eab-9d74-88a95f2ad018.png`,
    addictionMedicine: `${CDN}/hf_20260523_080725_f8178345-3efb-4840-a79e-ae9313d27474.png`,
    telehealth: `${CDN}/hf_20260523_080729_96f0d7c8-0b30-4062-99f3-b1adb138f93c.png`,
    nursingHome: `${CDN}/hf_20260523_080732_b930cea6-9da4-4521-b52f-342510b9de71.png`,
    preventiveCare: `${CDN}/hf_20260523_080735_4931daed-48fc-42e2-b2d9-1e8e013a76d0.png`,
    civilSurgeon: `${CDN}/hf_20260523_080738_09dd73e0-9743-4019-953c-c75b638a949f.png`,
    patients: `${CDN}/hf_20260523_080741_30a1d5d4-46f3-433a-8a04-cd1e35e6d861.png`,
    locationExterior: `${CDN}/hf_20260523_080745_facc7bd5-f010-4033-85ee-ff4d90bbe314.png`,
    locationInterior: `${CDN}/hf_20260523_080748_df34860c-d286-4d33-b855-aaf92ff990a0.png`,
    contact: `${CDN}/hf_20260523_080751_f83a44a9-3ad6-4c4e-9150-fe13f380802b.png`,
    resources: `${CDN}/hf_20260523_080754_53b0f3f9-e72c-429d-bea0-810983c00d7a.png`,
    aboutTeaching: `${CDN}/hf_20260523_080757_b9982db3-c778-44c5-ae4b-402a9c8ed179.png`,
  } as Record<string, string>,

  drLebarty: "/DrNosa.png", // local — real CEO photo

  logo3d: `${CDN}/hf_20260522_093629_766d5955-a010-4268-9671-ce6b793f453a.png`, // Higgsfield 3D logo render

  services: {
    "primary-care": `${CDN}/hf_20260521_175652_2eca35bb-faae-47b1-95cd-851c07f88f48.png`,
    "telehealth": `${CDN}/hf_20260521_175658_1844bcf3-e876-4437-9192-6b2d2775c077.png`,
    "nursing-home-visits": `${CDN}/hf_20260521_175702_42829b66-a554-4a0e-99a7-492a149db974.png`,
    "addiction-medicine": `${CDN}/hf_20260521_180110_1407bf2f-a849-41f1-8901-723a911afeff.png`,
    "preventive-care": `${CDN}/hf_20260521_180116_6b2d6807-5c54-418f-b36a-68d3ac9cd57b.png`,
    "civil-surgeon-uscis-exams": `${CDN}/hf_20260521_180328_b1dea8ef-467b-4895-a5b7-4aa5859f5d24.png`,
  } as Record<string, string>,

  // Existing Higgsfield motion loops (no new credits spent).
  serviceVideos: {
    "addiction-medicine": `${CDN}/hf_20260517_175110_edd8f5ff-5033-43d1-926a-218cefd8712d.mp4`,
    "primary-care": `${CDN}/hf_20260517_175106_dac5e1b1-4011-45a5-85ef-c94a680587cc.mp4`,
    "nursing-home-visits": `${CDN}/hf_20260517_175103_303a5787-a6f9-4edb-b650-6a3aa84b4294.mp4`,
    "preventive-care": `${CDN}/hf_20260517_175116_81c43985-a642-45b3-bac2-333a9ebddaf0.mp4`,
    "telehealth": `${CDN}/hf_20260522_070917_452d9f53-68e7-4135-bd79-8680489b9424.mp4`,
    "civil-surgeon-uscis-exams": `${CDN}/hf_20260522_070921_f941415b-c75f-4d1d-b5c9-2fdd48cabdb7.mp4`,
  } as Record<string, string>,
} as const;
