import {defineType, defineField, defineArrayMember} from 'sanity'

export const footerImpressum = defineType({
  name: 'footerImpressum',
  title: 'Footer Impressum',
  type: 'document',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
    defineField({
      name: 'impressumHeadline',
      title: 'Impressum Headline',
      type: 'string',
    }),
    defineField({
      name: 'impressumSection',
      title: 'Impressum Section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'sectionHeadline', title: 'Section Headline', type: 'string'}),
            defineField({name: 'sectionParagraph', title: 'Section Paragraph', type: 'text'}),
          ],
        }),
      ],
    }),
  ],
})
