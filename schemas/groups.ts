export default{
    name: 'groups',
    type: 'document',
    fields: [
      
        {
            name: 'admins',
            title: 'Admins',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'user' }] }],
        },
        {
            name: 'participants',
            title: 'Participants',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'user' }] }],
        },
      {
        name: 'messages',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'text',
                type: 'string'
              },
              {
                name: 'image',
                type: 'image'
              },
              {
                name: 'sender',
                type: 'reference',
                to: [{type: 'user'}]
              },
              {
                name: 'reaction',
                type: 'string'
              },
              {
                name: 'timestamp',
                type: 'datetime'
              },
              {
                name: 'seen',
                type: 'boolean'
              },
              {
                name:'caption',
                type:'string'
              },
              {
                name: 'seenBy',
                type: 'array',
                of: [{type: 'reference', to: [{type: 'user'}]}]
              }
            ]
          }
        ]
      }
    ]
  }