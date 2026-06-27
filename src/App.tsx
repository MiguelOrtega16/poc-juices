import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { DrinkMachineRecipes } from './pages/DrinkMachineRecipes'
import { BlenderRecipes } from './pages/BlenderRecipes'
import { BatchRecipes } from './pages/BatchRecipes'
import { Ingredients } from './pages/Ingredients'
import { MachineMaintenance } from './pages/MachineMaintenance'
import { Distribution } from './pages/Distribution'
import { EquipmentPrograms } from './pages/EquipmentPrograms'
import { OurStory } from './pages/OurStory'
import { Contact } from './pages/Contact'
import { StyleLab } from './pages/StyleLab'
import { Directions } from './pages/Directions'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drink-machine-recipes" element={<DrinkMachineRecipes />} />
        <Route path="/blender-recipes" element={<BlenderRecipes />} />
        <Route path="/batch-recipes" element={<BatchRecipes />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/machine-maintenance" element={<MachineMaintenance />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/equipment-programs" element={<EquipmentPrograms />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-lab" element={<StyleLab />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
