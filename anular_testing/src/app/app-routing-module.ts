import { Routes } from '@angular/router';
import { AllPosts } from './Basic/all-posts/all-posts';
import { PostDetails } from './Basic/post-details/post-details';
import { EditPost } from './Basic/edit-post/edit-post';
import { UserList } from './Basic/user-list/user-list';
import { FormUser } from './Basic/form-user/form-user';
export const routes: Routes = [
  { path: '', component: AllPosts },
  // { path: 'postDetails/:id', component: PostDetails },
  // { path: 'editPost/:id', component: EditPost },
  { path: 'userList', component: UserList },
  { path: 'formUser', component: FormUser },
];
