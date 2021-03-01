export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps;
}
export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}
export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description: string;
}