import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
/*
Exemple de structure de données pour les commentaires:

comments: [
    {
        id: 1,
        restaurantId: 101,
        userId: 201,
        userName: "Jean Dupont",
        userAvatar: "https://example.com/avatar1.jpg",
        rating: 4,
        comment: "Excellent restaurant, service rapide et plats délicieux!",
        date: "2024-01-15T14:30:00Z",
        likes: 12,
        likedBy: ["userId1", "userId2", "userId3"] // Array of user IDs who liked this comment
    },
    {
        id: 2,
        restaurantId: 101,
        userId: 202,
        userName: "Pierre Lambert",
        userAvatar: "https://example.com/avatar3.jpg",
        rating: 5,
        comment: "Pizza margherita exceptionnelle, je recommande vivement!",
        date: "2024-01-14T19:20:00Z",
        likes: 8,
        likedBy: ["userId4", "userId5"]
    }
]
*/

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : []
    },
    reducers: {
        addComment: (state, { payload }) => {
            const newComment = {
            id: uuidv4(),
            created_at: new Date().toISOString(),
            likedBy: [],
            ...payload
            };
          state.comments.push(newComment);
          localStorage.setItem('comments', JSON.stringify(state.comments));
        },
        removeComment: (state, {payload}) => {
          state.comments = state.comments.filter(comment => comment.id !== payload.id);
          localStorage.setItem('comments', JSON.stringify(state.comments));
        },
        toggleLike: (state, {payload}) => {

          const comment = state.comments.find(comment => comment.id === payload.commentId);
          if(comment){
            if(!comment.likedBy) {
              comment.likedBy = [];
            }
            const userIndex = comment.likedBy.indexOf(payload.userId);
            if(userIndex === -1) {
              comment.likedBy.push(payload.userId);
              comment.likes = comment.likedBy.length;
            } else {
              comment.likedBy.splice(userIndex, 1);
              comment.likes = comment.likedBy.length;
            }
          }
          localStorage.setItem('comments', JSON.stringify(state.comments));
        },
          resetComments: (state) => {
            state.comments = [];
            localStorage.setItem('comments', JSON.stringify(state.comments));
        }
    }
});
 export const { addComment, removeComment, toggleLike, resetComments } = commentSlice.actions;

 export default commentSlice.reducer;