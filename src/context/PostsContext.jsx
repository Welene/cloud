// needed context to not use prop because I just decided it was easier that way
import { createContext } from 'react';

export const PostsContext = createContext(null);

//wrap all the shit in this context thing and send them away from Home to NewPostPage directly, no problem!
