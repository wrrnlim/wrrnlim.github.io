import React, { useEffect, useState } from "react";

const getLastDeployDate = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/wrrnlim/wrrnlim.github.io/deployments"
    );
    const deploys = await response.json();

    if (!deploys.length) return "N/A";

    const latestDeploy = deploys[0];
    const deployDateString = latestDeploy.created_at;

    return new Date(deployDateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error fetching deploy date:", error);
    return "Unknown";
  }
};

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("Unknown");
  const year = new Date().getFullYear();

  useEffect(() => {
    getLastDeployDate().then(setLastUpdated);
  }, []);

  return (
    <footer className="my-5">
      <span className="block text-sm text-gray-500 text-center">
        © {year} Warren Lim. Last updated {lastUpdated}
      </span>
    </footer>
  );
}
