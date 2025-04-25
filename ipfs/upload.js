import { create } from "ipfs-http-client";

const ipfs = create();
// {
//   url: "http://127.0.0.1:5001", // IPFS API endpoint
// });

async function run() {
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Peace",
          value: "10",
        },
        {
          trait_type: "Love",
          value: "100",
        },
        {
          trait_type: "Web3",
          value: "1000",
        },
      ],
      image:
        "https://ipfs.io/ipfs/QmXsS1x4DUaG7ELMMJHvWtzcwLu2kLvE1m2a72xpfFn9PN",
      description: "So much PLW3!",
    }),
  };

  try {
    const result = await ipfs.add(metadata);
    console.log(result);
  } catch (err) {
    console.error("Error adding metadata:", err);
  }

  process.exit(0);
}

run();
