import actor from "./actor";

export default {
  type: "document",
  name: "movie",
  title: "Movie",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Film",
      description: "film beskrivelse",
    },
    {
      type: "reference",
      name: "actor",
      title: "Skuespiller",
      to: [{ type: "actor" }],
    },
  ],
};
