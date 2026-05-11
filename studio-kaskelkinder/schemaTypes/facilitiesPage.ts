import {defineType, defineField} from 'sanity'

export const facilitiesPage = defineType({
  name: 'facilitiesPage',
  title: 'Facilities Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'descriptionText',
      title: 'Description Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
