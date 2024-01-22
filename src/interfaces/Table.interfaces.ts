export interface iPostTable {
    userId: number;
    id: number;
    title: string;
}

export interface iTablaProps {
    posts: iPostTable[];
}