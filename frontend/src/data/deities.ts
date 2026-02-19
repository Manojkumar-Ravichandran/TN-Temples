export interface Deity {
    id: string;
    name: string;
    count: number;
    sect: string;
    image: string;
    category: string;
    icon?: string;
}

export const popularDeities: Deity[] = [
    {
        id: 'murugan',
        name: 'Lord Murugan',
        count: 1240,
        sect: 'Kaumaram',
        image: 'https://images.unsplash.com/photo-1690189033481-2292025cc969?q=80&w=600&auto=format&fit=crop', // Replace with generated image later if needed
        category: 'Deity'
    },
    {
        id: 'ganesha',
        name: 'Lord Ganesha',
        count: 980,
        sect: 'Ganapatyam',
        image: 'https://images.unsplash.com/photo-1567591974574-e852636b0479?q=80&w=600&auto=format&fit=crop',
        category: 'Deity'
    },
    {
        id: 'amman',
        name: 'Goddess Amman',
        count: 1500,
        sect: 'Shaktism',
        image: 'https://images.unsplash.com/photo-1610459341764-469b27560249?q=80&w=600&auto=format&fit=crop',
        category: 'Deity'
    },
    {
        id: 'shiva',
        name: 'Lord Shiva',
        count: 2100,
        sect: 'Shaivism',
        image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop',
        category: 'Deity'
    }
];

export const allDeities: Deity[] = [
    { id: 'vishnu', name: 'Lord Vishnu', count: 845, sect: 'Vaishnavism', image: '', category: 'A-Z', icon: '🏰' },
    { id: 'lakshmi', name: 'Goddess Lakshmi', count: 320, sect: 'Shaktism', image: '', category: 'A-Z', icon: '💧' },
    { id: 'hanuman', name: 'Lord Hanuman', count: 215, sect: 'Vaishnavism', image: '', category: 'A-Z', icon: '✨' },
    { id: 'brahma', name: 'Lord Brahma', count: 12, sect: 'Smarta', image: '', category: 'A-Z', icon: '📜' },
    { id: 'saraswati', name: 'Goddess Saraswati', count: 54, sect: 'Shaktism', image: '', category: 'A-Z', icon: '🌷' },
    { id: 'ayyappan', name: 'Lord Ayyappan', count: 180, sect: 'Shaivism', image: '', category: 'A-Z', icon: '🛡️' },
    { id: 'narasimha', name: 'Lord Narasimha', count: 145, sect: 'Vaishnavism', image: '', category: 'A-Z', icon: '🦁' },
    { id: 'surya', name: 'Lord Surya', count: 89, sect: 'Saura', image: '', category: 'A-Z', icon: '☀️' },
    { id: 'karuppasamy', name: 'Lord Karuppasamy', count: 450, sect: 'Shaivism', image: '', category: 'A-Z', icon: '🗡️' },
    { id: 'indra', name: 'Lord Indra', count: 5, sect: 'Smarta', image: '', category: 'A-Z', icon: '☁️' },
];
