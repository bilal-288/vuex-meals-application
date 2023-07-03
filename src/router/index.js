import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        component: DefaultLayout,
        children: [{
                name: 'Home',
                component: Home,
                path: '/'
            },
            {
                name: 'byName',
                component: MealsByName,
                path: "/by-name/:name?"
            },
            {
                name: 'byletter',
                component: MealsByLetter,
                path: "/by-letter/:letter?"
            },
            {
                name: 'byIngredient',
                component: MealsByIngredient,
                path: "/by-ingredient/:ingredient?"
            }

        ]
    },
    {
        path: '/guest',
        component: GuestLayout,

    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;