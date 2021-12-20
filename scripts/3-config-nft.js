import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE607fe97F3d1ecf81F1ffD380D586fdef3421E46"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Elephant",
        description: "This NFT will give you access to ElephantDAO!",
        image: readFileSync("scripts/assets/elephant.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
