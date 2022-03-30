export default {
  type: "document",
  name: "actor",
  title: "Actor",
  fields: [
    {
      type: "string",
      name: "fullName",
      title: "fulle navnene"
    },
    {
      type: "slug",
      name: "name",
      title: "Name",
      options: {
        source: "title",
      },
    },
  ],
};
