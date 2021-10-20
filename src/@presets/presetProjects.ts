import { TypeProject } from '../@types/typeProject';

export function getProjects(): TypeProject[] {
    return [
        {  
            title: 'ZDF Aspekte',
            type: 'Film',
            image: 'assets/projects/zdfaspekte/preview.jpg',
        },
        {  
            title: 'Lockdown',
            type: 'Film',
            image: 'assets/projects/lockdown/preview.jpg',
            vimeo: 'https://vimeo.com/418880046',
        },
        {  
            title: 'Metropolis',
            type: 'Film',
            image: 'assets/projects/metropolis/preview.jpg',
            vimeo: 'https://vimeo.com/384393962',
        },
        {
            title: 'Être',
            type: 'Film',
            image: 'assets/projects/etre/preview.jpg',
            vimeo: 'https://vimeo.com/343962029',
        }
    ]
}
