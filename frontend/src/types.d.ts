export interface MessageApi {
    message: string;
    id: string;
    author: string;
}

export interface Api{
    message: string;
    author: string;
    image: File | null;
}