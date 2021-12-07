import { Injectable } from "@angular/core";
import { collection, collectionData, CollectionReference, Firestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Post } from "src/app/post/model/post.model";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    item$: Observable<Post[]>;

    constructor(private firestore: Firestore) {
        const collect = collection(firestore, 'posts') as CollectionReference<Post>;
        this.item$ = collectionData(collect);
    }
}