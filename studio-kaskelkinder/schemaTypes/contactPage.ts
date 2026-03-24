import {defineType, defineField, defineArrayMember} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'ctaCards',
      title: 'CTA Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'headline', title: 'Headline', type: 'string'}),
            defineField({name: 'buttonLabel', title: 'Button Label', type: 'string'}),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({scheme: ['http', 'https', 'mailto']}),
            }),
          ],
        }),
      ],
    }),
  ],
})
