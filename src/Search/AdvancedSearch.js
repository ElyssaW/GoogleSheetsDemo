import SearchBar from './SearchComponents/SearchBar'
import Checkbox from './SearchComponents/Checkbox'
import Button from '../Components/Button'

function AdvancedSearch(props) {

  return (
    <div>
        < SearchBar updateSearch={props.updateSearch} />
        < Button handleClick={props.updateSearch} text='Search' />

        {/* Spell Resistence, Saving Throw, Duration, Targets, Range, Casting Time, School, Domain, Source */}

        < Checkbox label='Verbal' value='verbal' for='components' />
        < Checkbox label='Somantic' value='somantic' for='components' />
        < Checkbox label='Material' value='material' for='components' />
        < Checkbox label='Focus' value='focus' for='components' />
        < Checkbox label='Divine Focus' value='divinefocus' for='components' />
        < Checkbox label='Material Costs' value='materialcosts' for='components' />

        < Checkbox label='Water' value='water' for='effect' />
        < Checkbox label='Sonic' value='sonic' for='effect' />
        < Checkbox label='Shadow' value='shadow' for='effect' />
        < Checkbox label='Poison' value='poison' for='effect' />
        < Checkbox label='Pain' value='pain' for='effect' />
        < Checkbox label='Mind Affecting' value='mindaffecting' for='effect' />
        < Checkbox label='Light' value='light' for='effect' />
        < Checkbox label='Lawful' value='lawful' for='effect' />
        < Checkbox label='Language Dependent' value='languagedependent' for='effect' />
        < Checkbox label='Good' value='good' for='effect' />
        < Checkbox label='Force' value='force' for='effect' />
        < Checkbox label='Fire' value='fire' for='effect' />
        < Checkbox label='Fear' value='fear' for='effect' />
        < Checkbox label='Evil' value='evil' for='effect' />
        < Checkbox label='Emotion' value='emotion' for='effect' />
        < Checkbox label='Electricity' value='electricity' for='effect' />
        < Checkbox label='Earth' value='earth' for='effect' />
        < Checkbox label='Disease' value='disease' for='effect' />
        < Checkbox label='Death' value='death' for='effect' />
        < Checkbox label='Darkness' value='darkness' for='effect' />
        < Checkbox label='Curse' value='curse' for='effect' />
        < Checkbox label='Cold' value='cold' for='effect' />
        < Checkbox label='Chaotic' value='chaotic' for='effect' />
        < Checkbox label='Air' value='air' for='effect' />
        < Checkbox label='Acid' value='acid' for='effect' />

        < Checkbox label='Wizard' value='wiz' for='class' />
        < Checkbox label='Sorcerer' value='sor' for='class' />
        < Checkbox label='Cleric' value='cleric' for='class' />
        < Checkbox label='Druid' value='druid' for='class' />
        < Checkbox label='Ranger' value='ranger' for='class' />
        < Checkbox label='Bard' value='bard' for='class' />
        < Checkbox label='Paladin' value='paladin' for='class' />
        < Checkbox label='Alchemist' value='alchemist' for='class' />
        < Checkbox label='Summoner' value='summonr' for='class' />
        < Checkbox label='Unchained Summoner' value='summonerunchained' for='class' />
        < Checkbox label='Inquisitor' value='inquisitor' for='class' />
        < Checkbox label='Oracle' value='oracle' for='class' />
        < Checkbox label='Antipaladin' value='antipaladin' for='class' />
        < Checkbox label='Magus' value='magus' for='class' />
        < Checkbox label='Bloodrager' value='bloodrager' for='class' />
        < Checkbox label='Shaman' value='shaman' for='class' />
        < Checkbox label='Psychic' value='psychic' for='class' />
        < Checkbox label='Medium' value='medium' for='class' />
        < Checkbox label='Mesmerist' value='mesmerist' for='class' />
        < Checkbox label='Occultist' value='occultist' for='class' />
        < Checkbox label='Spiritualist' value='spiritualist' for='class' />
        < Checkbox label='Skald' value='skald' for='class' />
        < Checkbox label='Investigator' value='investigator' for='class' />
        < Checkbox label='Hunter' value='hunter' for='class' />
        < Checkbox label='Witch' value='witch' for='class' />
    </div>
  );
}

export default AdvancedSearch;
