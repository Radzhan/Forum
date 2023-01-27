export interface MessageApi {
    message: string;
    id: string;
    author: string;
    image: string | null;
}

export interface Api{
    message: string;
    author: string;
    image: File | null;
}