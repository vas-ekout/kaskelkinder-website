import {defineType, defineField, defineArrayMember} from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: 'Team Page',
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
      name: 'teamCards',
      title: 'Team Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'headline', title: 'Headline', type: 'string'}),
            defineField({name: 'text', title: 'Text', type: 'text'}),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {list: ['RED', 'PURPLE', 'BLUE', 'YELLOW', 'BROWN']},
            }),
            defineField({name: 'portraitImage', title: 'Portrait Image', type: 'image'}),
          ],
        }),
      ],
    }),
  ],
})
