export interface ApiWithId{
    message: string;
    author: string;
    id: string;
    image: string | null;
}

export type Api = Omit<ApiWithId, 'id'>;