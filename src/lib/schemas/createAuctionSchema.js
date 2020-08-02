const schema = {
  properties: {
    body: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
      },
    },
  },
  required: ['body'],
};

export default schema;
