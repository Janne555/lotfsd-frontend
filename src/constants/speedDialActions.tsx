import React, { ReactNode } from 'react'
import { Icon } from '@material-ui/core'
import { match as Match } from 'react-router-dom'

type SpeedDialAction = {
  action: string | ((root: string) => string)
  icon: ReactNode | undefined
  tooltip: string
}

const speedDialActions: Record<string, SpeedDialAction[]> = {
  characters: [
    { action: root => `/characters/${root}/addItem`, icon: <Icon />, tooltip: 'Add\xa0Item' },
    { action: root => `/characters/${root}/addRetainer`, icon: <Icon />, tooltip: 'Add\xa0Retainer' },
    { action: root => `/characters/${root}/addLanguage`, icon: <Icon />, tooltip: 'Add\xa0Language' },
  ],
  itemindex: [
    { action: '/newitem', icon: <Icon />, tooltip: 'New\xa0Item' },
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