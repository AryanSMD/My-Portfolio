const techno = document.getElementById('techno') as HTMLSpanElement;

interface Technology {
    key: string,
    value: string
}

const technologies: Technology[] = [
    {
        key: 'vue',
        value: 'Vue.js'
    }, 
    {
        key: 'nuxt',
        value: 'Nuxt.js'
    }, 
    {
        key: 'tailwindcss',
        value: 'TailwindCSS'
    }, 
    {
        key: 'typescript',
        value: 'TypeScript'
    }, 
    {
        key: 'node',
        value: 'Node.js'
    },
    {
        key: 'supabase',
        value: 'SupaBase'
    }
];
techno.innerHTML = technologies[0].value;
techno.classList.add(technologies[0].key);
let i = 0;

export default function changeTechnoText(): void {
    setInterval(() => {
        techno.classList.remove(technologies[i].key);
        i != 5 ? i++ : i = 0;
        techno.classList.add(technologies[i].key);
        techno.innerHTML = technologies[i].value;
    }, 5000)
}