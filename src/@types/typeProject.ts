export type TypeProject = {
    title: string;
    type: TypeProjectSelection;
    image: string;
    github?: string;
    vimeo?: string;
    youtube?: string;
    www?: string;
    icon: 'Black' | 'White';
    border: boolean;
}

export type TypeProjectSelection = 'All' | 'Digital' | 'Film' | 'Art';