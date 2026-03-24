import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'benefitCards',
      title: 'Benefit Cards',
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
          ],
        }),
      ],
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
