import {defineType, defineField, defineArrayMember} from 'sanity'

export const conceptPage = defineType({
  name: 'conceptPage',
  title: 'Concept Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'headline', title: 'Headline', type: 'string'}),
            defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
          ],
        }),
      ],
    }),
  ],
})
