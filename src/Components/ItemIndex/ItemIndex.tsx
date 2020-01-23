import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useScreenResizeEvent } from '../../hooks'
import { selectItemIndex } from '../../Redux/selectors'
import { Route, useRouteMatch, useHistory } from 'react-router-dom'
import ItemDetails from '../_shared/ItemDetails'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'

const useStyles = createUseStyles((theme: Theme) => ({
  itemIndex: {
    display: 'grid',
    gridTemplateColumns: '33% auto',
    padding: theme.padding
  },
  list: {
    listStyleType: 'none'
  },
  listItem: {
    minHeight: '2rem',
    outline: '1px solid grey'
  },
  searchBox: {
    width: '100%'
  },
  details: {
    margin: '1rem 0 0 2rem'
  },
  '@media (max-width: 1100px)': {
    itemIndex: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))

type Props = {

}

function ItemIndex(/* { }: Props */) {
  const isMobile = useScreenResizeEvent(width => width < 1100)
  const classes = useStyles()
  const items = useSelector(selectItemIndex)
  const match = useRouteMatch<{ item: string }>("/itemindex/:item")
  const history = useHistory()
  const selected = items.find(item => item.name === match?.params.item)


  function handleItemClick(item?: string) {
    history.push(`/itemindex/${item}`)
  }

  function onAdd() {
    history.push('/newitem')
  }

  return (
    <div className={classes.itemIndex}>
      {isMobile
        ? <ComboBoxMode items={items} onSelect={handleItemClick} />
        : <ListMode onAdd={onAdd} items={items} onSelect={handleItemClick} selected={selected} />
      }
      <Route path="/itemindex/:item">
        {selected &&
          <div className={classes.details}>
            <h2>{selected.name}</h2>
            <ItemDetails item={selected} />
          </div>
        }
      </Route>
    </div>
  )
}

const useListModeStyles = createUseStyles((theme: Theme) => ({
  searchBox: {
    width: '100%'
  }
}))

type ListModeProps = {
  onSelect: (name?: string) => void
  items: Item[]
  selected?: Item
  onAdd: () => void
}

function ListMode({ items, onSelect, selected, onAdd }: ListModeProps) {
  const classes = useListModeStyles()
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <Button onClick={onAdd}>Create New Item</Button>
      <TextField className={classes.searchBox} label="Search" onChange={e => setSearchTerm(e.target.value)} />
      <List>
        {
          items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item: Item) => (
            <ListItem
              button
              key={item.id}
              id={item.name}
              onClick={() => onSelect(item.name)}
              selected={item.name === selected?.name}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

type ComboBoxModeProps = {
  onSelect: (name?: string) => void
  items: Item[]
}

function ComboBoxMode({ items, onSelect }: ComboBoxModeProps) {
  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option: Item) => option.name}
      onChange={(e, item) => onSelect(item?.name)}
      renderInput={params => (
        <TextField {...params} label="Item Index" fullWidth placeholder="Filter by typing" />
      )}
    />
  )
}

export default ItemIndex