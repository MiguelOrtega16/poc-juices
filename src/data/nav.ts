export type NavLink = { label: string; to: string }
export type NavItem = NavLink & { children?: NavLink[] }

export const NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Recipes',
    to: '/drink-machine-recipes',
    children: [
      { label: 'Drink Machine Recipes', to: '/drink-machine-recipes' },
      { label: 'Blender Recipes', to: '/blender-recipes' },
      { label: 'Batch Recipes', to: '/batch-recipes' },
    ],
  },
  { label: 'Ingredients', to: '/ingredients' },
  { label: 'Equipment Programs', to: '/equipment-programs' },
  { label: 'Maintenance', to: '/machine-maintenance' },
  { label: 'Distribution', to: '/distribution' },
  { label: 'Our Story', to: '/our-story' },
]
