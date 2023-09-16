export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'user' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'likes',
        title: 'Likes',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'user' }] }],
      },
      {
        name: 'seen',
        title: 'Seen',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'user' }] }],
      },
      {
        name: 'comments',
        title: 'Comments',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'user',
                title: 'User',
                type: 'reference',
                to: [{ type: 'user' }],
              },
              {
                name: 'comment',
                title: 'Comment',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };