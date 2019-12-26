import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks'
import { selectItemIndex } from '../../Redux/selectors'
import { Route, useRouteMatch, useHistory } from 'react-router-dom'
import ItemDetails from '../_shared/ItemDetails'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'

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
  }
}))

type Props = {

}

function ItemIndex({ }: Props) {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState("")
  const items = useSelector(selectItemIndex)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const match = useRouteMatch<{ item: string }>("/itemindex/:item")
  const history = useHistory()
  const selected = items.find(item => item.name === match?.params.item)

  function handleItemClick(item: string) {
    history.push(`/itemindex/${item}`)
  }

  return (
    <div className={classes.itemIndex}>
      <div>
        <TextField className={classes.searchBox} label="Search" onChange={e => setSearchTerm(e.target.value)} />
        <List>
          {
            items.map((item: Item) => (
              <ListItem
                button
                key={item.id}
                id={item.name}
                onClick={() => handleItemClick(item.name)}
                selected={item.name === selected?.name}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))
          }
        </List>
      </div>
      <Route path="/itemindex/:item">
        {selected &&
          <ItemDetails item={selected} />
        }
      </Route>
    </div>
  )
}

export default ItemIndex