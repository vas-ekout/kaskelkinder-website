import {defineType, defineField, defineArrayMember} from 'sanity'

export const initiativePage = defineType({
  name: 'initiativePage',
  title: 'Initiative Page',
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
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
            }),
            defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
          ],
        }),
      ],
    }),
    defineField({name: 'satzungText', title: 'Satzung Text', type: 'string'}),
    defineField({name: 'satzungFile', title: 'Satzung PDF', type: 'file'}),
  ],
})
