import React from 'react';
import Attributes from './Components/CharacterSheet/Attributes';
import SavingThrows from './Components/CharacterSheet/SavingThrows';
import AttackBonusAndHitPoints from './Components/CharacterSheet/AttackBonusAndHitPoints';
import Triangle from './Components/_shared/Triangle';
import Cube from './Components/_shared/Cube';
import ArmorClass from './Components/CharacterSheet/ArmorClass';
import CommonActivities from './Components/CharacterSheet/CommonActivities';
import Encumbrance from './Components/CharacterSheet/Encumbrance';
import EquipmentList from './Components/CharacterSheet/EquipmentList';


const App: React.FC = () => {
  return (
    <div>
      <EquipmentList />
    </div>
  );
}

export default App