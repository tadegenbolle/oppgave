export default {
  type: "document",
  name: "actor",
  title: "Actor",
  fields: [
    {
      type: "string",
      name: "fullName",
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
