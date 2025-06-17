import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

// // Optional: import a custom Post collection if added later
import { Posts } from './collections/Posts';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: 'users',
    components: {
      // @ts-ignore
      richText: lexicalEditor(),
    },
  },
  collections: [
    Posts, // Add later if not yet created
  ],
});
