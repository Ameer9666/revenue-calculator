import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Sunvoy Affiliate Revenue Calculator" },
    {
      name: "description",
      content:
        "The Sunvoy Affiliate Revenue Calculator is a dynamic, interactive tool designed to help potential affiliates forecast their earnings over a 12-month period.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Sunvoy Affiliate Revenue Calculator</h1>
    </div>
  );
}
