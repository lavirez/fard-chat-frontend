export interface User {
    id: string
    first_name:string
    last_name: string
    image?: string
};

export interface Message {
    content: string
    self: boolean
    timestamp?: Date
    seen: boolean
    last: boolean
};

export interface Chat { 
    id: string
    end_user: User
    messages: Message[]
};

