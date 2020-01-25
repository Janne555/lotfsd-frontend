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
import { useQuery } from '@apollo/react-hooks'
import { ItemsQuery, ItemsQuery_items } from '../../../__generated__/apolloTypes/ItemsQuery'
import { ITEMS_QUERY, ITEM_QUERY } from '../../constants'
import { ItemQuery, ItemQueryVariables } from '../../../__generated__/apolloTypes/ItemQuery'

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
    margin: '1rem 0 0 2rem',
    top: '1rem',
    position: 'sticky',
    height: 'fit-content'
  },
  '@media (max-width: 1100px)': {
    itemIndex: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))

function ItemIndex() {
  const isMobile = useScreenResizeEvent(width => width < 1100)
  const classes = useStyles()
  const { data, loading, error } = useQuery<ItemsQuery>(ITEMS_QUERY)
  const match = useRouteMatch<{ item: string }>("/itemindex/:item")
  const history = useHistory()
  const selected = data?.items?.find(item => item.name === match?.params.item)

  function handleItemClick(item?: string) {
    history.push(`/itemindex/${item}`)
  }

  function onAdd() {
    history.push('/newitem')
  }

  if (!data || !data.items) {
    return null
  }

  return (
    <div className={classes.itemIndex}>
      {isMobile
        ? <ComboBoxMode items={data.items} onSelect={handleItemClick} />
        : <ListMode onAdd={onAdd} items={data.items} onSelect={handleItemClick} selected={selected?.name} />
      }
      <Route path="/itemindex/:item">
        {selected &&
          <DetailedView itemId={selected.id} />
        }
      </Route>
    </div>
  )
}

type DetailedViewProps = {
  itemId: string
}

function DetailedView({ itemId }: DetailedViewProps) {
  const classes = useStyles()
  const { data, loading, error } = useQuery<ItemQuery, ItemQueryVariables>(ITEM_QUERY, { variables: { id: itemId } })

  if (!data || !data.item) {
    return null
  }

  return (
    <div className={classes.details}>
      <h2>{data.item.name}</h2>
      <ItemDetails item={data.item} />
    </div>
  )
}

type ListModeProps = {
  onSelect: (name?: string) => void
  items: ItemsQuery_items[]
  selected?: string
  onAdd: () => void
}

function ListMode({ items, onSelect, selected, onAdd }: ListModeProps) {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <Button onClick={onAdd}>Create New Item</Button>
      <TextField className={classes.searchBox} label="Search" onChange={e => setSearchTerm(e.target.value)} />
      <List>
        {
          items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item: ItemsQuery_items) => (
            <ListItem
              button
              key={item.id}
              id={item.name}
              onClick={() => onSelect(item.name)}
              selected={item.name === selected}
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
  items: ItemsQuery_items[]
}

function ComboBoxMode({ items, onSelect }: ComboBoxModeProps) {
  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option: ItemsQuery_items) => option.name}
      onChange={(e, item) => onSelect(item?.name)}
      renderInput={params => (
        <TextField {...params} label="Item Index" fullWidth placeholder="Filter by typing" />
      )}
    />
  )
}

export default ItemIndex