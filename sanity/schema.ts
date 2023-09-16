import { type SchemaTypeDefinition } from 'sanity'
import user from '../schemas/user';
import messages from '../schemas/messages';
import posts from '../schemas/Posts';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    user,messages,posts
  ],
}
