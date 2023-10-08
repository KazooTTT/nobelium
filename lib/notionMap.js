export const convertNotionMapToPost = (notionMap) => {
  return {
    ...notionMap,
    ...{
      title: notionMap.Name,
      slug: notionMap.Slug ?? notionMap.Name,
      start_date: notionMap.Published?.start_date,
      summary: notionMap.Description ?? "",
      tags: notionMap.Tags,
      status: [notionMap.Public === "Yes" ? "Published" : "Draft"],
      type: ["Post"],
    },
  };
};
