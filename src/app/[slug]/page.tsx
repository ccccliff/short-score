import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <div>page</div>;
};

export default page;
