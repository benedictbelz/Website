export type TypeProject = {
    title: string;
    type: TypeProjectSelection;
    image: string;
    vimeo?: string;
}

export type TypeProjectSelection = 'All' | 'Digital' | 'Film' | 'Art';