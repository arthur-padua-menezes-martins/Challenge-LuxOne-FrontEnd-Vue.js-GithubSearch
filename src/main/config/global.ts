import Vue from '../../main/config/app'
import PageSearch from '../../presentation/pages/Search/Search.vue'
import PagePerfil from '../../presentation/pages/Perfil/Perfil.vue'
import ComponentInitialTransition from '../../presentation/components/Transition/Initial/InitialTransition.vue'
import ComponentChangeTransition from '../../presentation/components/Transition/Change/ChangeTransition.vue'
import ComponentSearchBar from '../../presentation/components/SearchBar/SearchBar.vue'

interface IDefinitionsType {
  [field: string]: any
}
const definitions: IDefinitionsType = {
  PageSearch,
  PagePerfil,
  ComponentInitialTransition,
  ComponentChangeTransition,
  ComponentSearchBar
}

Object.keys(definitions).forEach(i => Vue.component(`${i}`, definitions[i]))

export default Vue