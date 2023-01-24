import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Football',
  title: 'Football',
  type: 'document',
  fields: [
      {
        name: "name",
        type: "string",
        title: "Sports name",
        validation: (Rule) => Rule.required()
      },
      {
        name: "image",
        type: "image",
        title: "Image of the Turf"
      },
      {
        name: "rating",
        type: "number",
        title: "Enter the Rating (1-5 Stars)",
        validation: (Rule) => Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5")
      },
      {
        name: "location",
        type: "string",
        title: "Location in short"
      },
      {
        name: "city_location",
        type: "string",
        title: "City"
      },
      {
        name: "location_brief",
        type: "string",
        title: "Location in brief"
      },
      {
        name: "short_detail",
        type: "string",
        title: "Short detail about turf",
      },
      {
        name: "kilometers",
        type: "number",
        title: "Kilometer",
      },
      {
        name: "amenities",
        type: "string",
        title: " Amenities",
      },
      {
        name: "venue_rules",
        type: "string",
        title: "Venue Rules",
      },
      {
        name: "Facilities",
        type: "number",
        title: "Add number of Turfs",
      },
      {
        name: "lat",
        type: "number",
        title: "Latitude of the Turf",
      },
      {
        name: "Long",
        type: "number",
        title: "Longitude of the Turf",
      },
  ],


})
