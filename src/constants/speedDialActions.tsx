import React, { ReactNode } from 'react'
import { Icon } from '@material-ui/core'
import { match as Match } from 'react-router-dom'

type SpeedDialAction = {
  name: string
  icon: ReactNode | undefined,
  tooltip: string
}

const speedDialActions: Record<string, SpeedDialAction[]> = {
  characters: [
    { name: 'addItem', icon: <Icon />, tooltip: 'Add\xa0Item' },
    { name: 'addRetainer', icon: <Icon />, tooltip: 'Add\xa0Retainer' },
    { name: 'addLanguage', icon: <Icon />, tooltip: 'Add\xa0Language' },
  ],
  itemindex: [
    { name: 'newItem', icon: <Icon />, tooltip: 'New\xa0Item' },
  ]
}

function getSpeedDialActions(match: Match<{ page: string }> | null): SpeedDialAction[] {
  const page = match?.params.page
  if (page && speedDialActions[page]) {
    return speedDialActions[page]
  } else {
    return []
  }
}


export { getSpeedDialActions }