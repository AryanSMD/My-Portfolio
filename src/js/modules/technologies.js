const technoDiv = document.getElementById('technoDiv');
const techno = document.getElementById('techno');
const technologies = [
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
technoDiv.style.animation = 'techno 5s linear infinite';
let i = 0;
export default function changeTechnoText() {
    setInterval(() => {
        techno.classList.remove(technologies[i].key);
        i != 5 ? i++ : i = 0;
        techno.classList.add(technologies[i].key);
        techno.innerHTML = technologies[i].value;
    }, 5000);
}
