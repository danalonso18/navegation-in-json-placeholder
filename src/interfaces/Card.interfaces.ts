export interface iPostCard {
    id: number;
    title: string;
    body: string;
}

export interface iCards {
    posts: iPostCard[];
}