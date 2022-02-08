import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, CollectionReference } from '@angular/fire/firestore';
import { Post } from "src/app/model/post.model";

@Injectable({
    providedIn: 'root'
})
export class NewPostService {
    constructor(private firestore: Firestore) { }

    addNewPost(post: Post) {
        const postsRef = collection(this.firestore, 'posts') as CollectionReference<Post>;
        return addDoc(postsRef, post);
    }
}